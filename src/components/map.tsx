
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  height?: string;
  className?: string;
}

const Map = ({ height = "400px", className = "" }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = React.useState<string>("");

  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Here we would normally use an environment variable or secure storage
    // For demo purposes, we're using a public token that needs to be provided by the user
    // In a real app, use environment variables or secure backend services
    
    if (!mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-73.9857, 40.7484], // Default to New York
      zoom: 15
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'bottom-right'
    );

    // Add marker
    const marker = new mapboxgl.Marker({ color: "#6E42CA" })
      .setLngLat([-73.9857, 40.7484])
      .addTo(map.current);
    
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const token = formData.get('mapboxToken') as string;
    if (token) {
      setMapboxToken(token);
    }
  };

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      {!mapboxToken ? (
        <div className="w-full h-full flex items-center justify-center bg-muted/30 rounded-lg">
          <form onSubmit={handleTokenSubmit} className="p-6 bg-card rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-medium mb-3">Enter Mapbox Token</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Please enter your Mapbox public token to display the map.
              You can get one from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>
            </p>
            <div className="flex gap-3">
              <input 
                type="text" 
                name="mapboxToken" 
                placeholder="pk.eyJ1..." 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <button 
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
      )}
    </div>
  );
};

export default Map;
