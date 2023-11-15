import React, { useEffect, useRef } from "react";
import * as maplibre from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Graybeard } from "@versatiles/style";

import * as styles from "./map.module.css";
import logo from "../../images/logo_skizze_weiss.svg";

const logoElement = document.createElement("img");
logoElement.src = logo;
logoElement.className = styles.logo;

const graybeard = new Graybeard();
graybeard.baseUrl = "https://tiles.versatiles.org/";
graybeard.tilesUrls = [
  new URL("/api/tiles/{z}/{x}/{y}", window.location.origin).toString(),
];
const style = /** @type {import("maplibre-gl").StyleSpecification} */ (
  graybeard.build()
);

/** @type {React.FC<{
  position: [number, number],
  zoom: number,
  scrollWheelZoom?: boolean,
  mapClassName?: string,
  popupText?: string,
}>} */
export const Map = ({
  position: [lat, lng],
  zoom,
  mapClassName,
  scrollWheelZoom,
  popupText,
}) => {
  /** @type {React.MutableRefObject<HTMLDivElement | null>} */
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibre.Map({
      container: mapContainer.current,
      style,
      center: [lng, lat],
      zoom,
      scrollZoom: scrollWheelZoom,
    });
    map.addControl(new maplibre.NavigationControl(), "top-right");

    const marker = new maplibre.Marker({ element: logoElement }).setLngLat([
      lng,
      lat,
    ]);
    if (popupText) {
      marker.setPopup(
        new maplibre.Popup({ className: styles.popup }).setText(popupText)
      );
    }
    marker.addTo(map);

    return () => {
      map.remove();
    };
  }, [lng, lat, zoom, scrollWheelZoom]);

  if (typeof window === undefined) {
    return <></>;
  }

  return <div ref={mapContainer} className={mapClassName} />;
};
