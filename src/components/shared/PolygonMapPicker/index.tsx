import dynamic from "next/dynamic";
import type { GeoJSONPolygon } from "./PolygonMapPickerInner";

export type { GeoJSONPolygon };

interface PolygonMapPickerProps {
  value: GeoJSONPolygon | null;
  onChange: (polygon: GeoJSONPolygon | null) => void;
}

const PolygonMapPickerInner = dynamic(
  () => import("./PolygonMapPickerInner"),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          height: "420px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f3f4f6",
          borderRadius: "8px",
          color: "#6b7280",
        }}
      >
        Loading map...
      </div>
    ),
  },
);

export function PolygonMapPicker({ value, onChange }: PolygonMapPickerProps) {
  return <PolygonMapPickerInner value={value} onChange={onChange} />;
}
