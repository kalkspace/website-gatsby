import React from "react";
import { icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import logoSkizze from "../../images/logo_skizze_weiss.svg";

var logoIcon = icon({
  iconUrl: logoSkizze,
  iconSize: [38, 38],
  popupAnchor: [0, -19],
});

/** @type {React.FC<{
  position: [number, number],
  zoom: number,
  scrollWheelZoom?: boolean,
  mapClassName?: string,
  popupText?: string,
}>} */
export const Map = ({
  position,
  zoom,
  mapClassName,
  scrollWheelZoom,
  popupText,
}) => {
  if (typeof window === undefined) {
    return <></>;
  }

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={scrollWheelZoom}
      className={mapClassName}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={logoIcon}>
        {popupText && <Popup>{popupText}</Popup>}
      </Marker>
    </MapContainer>
  );
};
