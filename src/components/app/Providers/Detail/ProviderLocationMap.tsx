import DefaultMarkerIcon from "@/assets/icons/user.marker.svg";
import GoogleMapReact from "google-map-react";

const Marker = ({}: { lat: number; lng: number }) => (
  <DefaultMarkerIcon className="size-16 origin-center -translate-y-[80%] ltr:-translate-x-1/2 rtl:translate-x-1/2" />
);

const DEFAULT_CENTER = { lat: 21.636981, lng: 39.181078 };
const DEFAULT_ZOOM = 11;

/**
 * A provider's registered location on a read-only map: the provider page
 * and the join request page (ClickUp 869c9e0m0) show the same one.
 */
export const ProviderLocationMap = ({
  latitude,
  longitude,
}: {
  latitude?: number | null;
  longitude?: number | null;
}) => (
  <GoogleMapReact
    bootstrapURLKeys={{
      key: process.env.NEXT_PUBLIC_MAPS_API_KEY || "",
    }}
    center={{
      lat: latitude ?? DEFAULT_CENTER.lat,
      lng: longitude ?? DEFAULT_CENTER.lng,
    }}
    zoom={DEFAULT_ZOOM}
    options={{
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: false,
      disableDefaultUI: true,
      draggable: false,
    }}
    yesIWantToUseGoogleMapApiInternals
  >
    {latitude && longitude && <Marker lat={latitude} lng={longitude} />}
  </GoogleMapReact>
);
