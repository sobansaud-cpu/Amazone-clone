import { useEffect, useRef } from 'react';

interface MapComponentProps {
  onLocationSelect?: (location: { lat: number; lng: number; address: string }) => void;
  center?: { lat: number; lng: number };
  zoom?: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ 
  onLocationSelect, 
  center = { lat: 20, lng: 0 }, 
  zoom = 2 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.google) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
      });

      mapInstanceRef.current = map;

      // Add click listener for location selection
      if (onLocationSelect) {
        map.addListener('click', (event: google.maps.MapMouseEvent) => {
          if (event.latLng) {
            const lat = event.latLng.lat();
            const lng = event.latLng.lng();
            
            // Use Geocoder to get address
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ location: { lat, lng } }, (results, status) => {
              if (status === 'OK' && results && results[0]) {
                onLocationSelect({
                  lat,
                  lng,
                  address: results[0].formatted_address
                });
              }
            });
          }
        });
      }
    };

    // Load Google Maps script if not already loaded
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      // Make initMap globally available
      (window as any).initMap = initMap;
      
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      // Cleanup
      if (mapInstanceRef.current) {
        window.google?.maps.event.clearInstanceListeners(mapInstanceRef.current);
      }
    };
  }, [center, zoom, onLocationSelect]);

  return <div ref={mapRef} className="w-full h-full" />;
};

export default MapComponent;