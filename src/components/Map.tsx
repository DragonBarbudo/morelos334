import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_TOKEN } from '../config/mapbox';

interface MapProps {
  location: [number, number];
}

const Map: React.FC<MapProps> = ({ location }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markerRef = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11', // Still clean, but we'll wrap it in a nice container
      center: location,
      zoom: 15,
      antialias: true
    });

    map.current.addControl(new mapboxgl.NavigationControl({
      showCompass: false
    }), 'top-right');

    if (!markerRef.current) {
      // Create a custom HTML element for the marker
      const el = document.createElement('div');
      el.className = 'flex flex-col items-center group cursor-pointer';

      // Pin SVG + Label
      el.innerHTML = `
        <div class="relative flex flex-col items-center">
          <div class="bg-primary text-white text-[10px] font-black px-2 py-1 rounded-md mb-1 shadow-md whitespace-nowrap transform -translate-y-1 transition-transform group-hover:-translate-y-2">
            Morelos 334
          </div>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-primary drop-shadow-lg">
            <path d="M12 21.7C12 21.7 20 15.4 20 9C20 4.6 16.4 1 12 1C7.6 1 4 4.6 4 9C4 15.4 12 21.7 12 21.7Z" fill="currentColor"/>
            <circle cx="12" cy="9" r="3" fill="white"/>
          </svg>
        </div>
      `;

      markerRef.current = new mapboxgl.Marker(el)
        .setLngLat(location)
        .addTo(map.current);
    }

    return () => {
      map.current?.remove();
    };
  }, [location]);

  return (
    <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-soft border border-white/20">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};


export default Map;