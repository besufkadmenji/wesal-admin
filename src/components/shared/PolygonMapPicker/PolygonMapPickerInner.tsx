"use client";

import L from "leaflet";
import "leaflet-draw";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import {
  setLeafletDrawArabic,
  restoreLeafletDrawEnglish,
} from "@/components/shared/PolygonMapPicker/localize";
import { useLang } from "@/hooks/useLang";

export interface GeoJSONPolygon {
  type: "Polygon";
  coordinates: [number, number][][];
}

interface DrawControlProps {
  value: GeoJSONPolygon | null;
  onChange: (polygon: GeoJSONPolygon | null) => void;
}

function latLngsToGeoJSON(latLngs: L.LatLng[]): GeoJSONPolygon {
  const coords = latLngs.map((ll) => [ll.lng, ll.lat] as [number, number]);
  if (coords.length > 0) coords.push(coords[0]); // close ring
  return { type: "Polygon", coordinates: [coords] };
}

function geoJSONToLatLngs(polygon: GeoJSONPolygon): L.LatLng[] {
  const ring = polygon.coordinates[0] ?? [];
  const points = ring.length > 1 ? ring.slice(0, -1) : ring; // remove closing point
  return points.map(([lng, lat]) => L.latLng(lat, lng));
}

function DrawControl({ value, onChange }: DrawControlProps) {
  const map = useMap();
  const drawnLayerRef = useRef<L.Polygon | null>(null);
  const featureGroupRef = useRef<L.FeatureGroup>(new L.FeatureGroup());

  useEffect(() => {
    const featureGroup = featureGroupRef.current;
    map.addLayer(featureGroup);

    // Load existing polygon if provided
    if (value) {
      const latLngs = geoJSONToLatLngs(value);
      if (latLngs.length >= 3) {
        const polygon = L.polygon(latLngs, {
          color: "#3b82f6",
          fillColor: "#93c5fd",
          fillOpacity: 0.3,
          weight: 2,
        });
        featureGroup.addLayer(polygon);
        drawnLayerRef.current = polygon;

        const bounds = polygon.getBounds();
        if (bounds.isValid()) map.fitBounds(bounds, { padding: [40, 40] });
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const drawControl = new (L.Control as any).Draw({
      edit: { featureGroup, remove: true },
      draw: {
        polygon: {
          allowIntersection: false,
          showArea: true,
          shapeOptions: {
            color: "#3b82f6",
            fillColor: "#93c5fd",
            fillOpacity: 0.3,
            weight: 2,
          },
        },
        polyline: false,
        rectangle: false,
        circle: false,
        circlemarker: false,
        marker: false,
      },
    });

    map.addControl(drawControl);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onCreated = (e: any) => {
      if (drawnLayerRef.current)
        featureGroup.removeLayer(drawnLayerRef.current);

      const layer = e.layer as L.Polygon;
      featureGroup.addLayer(layer);
      drawnLayerRef.current = layer;

      const latLngs = layer.getLatLngs()[0] as L.LatLng[];
      onChange(latLngsToGeoJSON(latLngs));
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onEdited = (e: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const layers: any = e.layers;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      layers.eachLayer((layer: any) => {
        if (layer instanceof L.Polygon) {
          const latLngs = layer.getLatLngs()[0] as L.LatLng[];
          onChange(latLngsToGeoJSON(latLngs));
        }
      });
    };

    const onDeleted = () => {
      drawnLayerRef.current = null;
      onChange(null);
    };

    map.on(L.Draw.Event.CREATED, onCreated);
    map.on(L.Draw.Event.EDITED, onEdited);
    map.on(L.Draw.Event.DELETED, onDeleted);

    return () => {
      map.removeControl(drawControl);
      map.removeLayer(featureGroup);
      map.off(L.Draw.Event.CREATED, onCreated);
      map.off(L.Draw.Event.EDITED, onEdited);
      map.off(L.Draw.Event.DELETED, onDeleted);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  return null;
}

const DEFAULT_CENTER: [number, number] = [24.7136, 46.6753];
const DEFAULT_ZOOM = 9;

interface PolygonMapPickerInnerProps {
  value: GeoJSONPolygon | null;
  onChange: (polygon: GeoJSONPolygon | null) => void;
}

export default function PolygonMapPickerInner({
  value,
  onChange,
}: PolygonMapPickerInnerProps) {
  const lng = useLang();
  useEffect(() => {
    if (lng === "ar") {
      setLeafletDrawArabic();
    } else {
      restoreLeafletDrawEnglish();
    }
    return () => {};
  }, [lng]);

  return (
    <>
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        style={{ height: "420px", width: "100%", borderRadius: "8px" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DrawControl value={value} onChange={onChange} />
      </MapContainer>
    </>
  );
}
