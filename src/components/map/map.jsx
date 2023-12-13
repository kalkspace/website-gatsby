import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Graybeard } from "@versatiles/style";

import * as styles from "./map.module.css";
import logo from "../../images/logo_skizze_weiss.svg";

const graybeard = new Graybeard();

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
    if (typeof window === "undefined") return;
    if (!mapContainer.current) return;

    graybeard.spriteUrl = new URL(
      "/assets/sprites/sprites",
      window.location.origin
    ).toString();
    graybeard.glyphsUrl = new URL(
      "/assets/fonts/{fontstack}/{range}.pbf",
      window.location.origin
    ).toString();
    graybeard.tilesUrls = [
      new URL("/tiles/{z}/{x}/{y}", window.location.origin).toString(),
    ];
    const style = /** @type {import("maplibre-gl").StyleSpecification} */ (
      graybeard.build()
    );
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style,
      center: [lng, lat],
      zoom,
      scrollZoom: scrollWheelZoom,
    });
    map.addControl(new maplibregl.NavigationControl(), "top-right");

    const logoElement = document.createElement("img");
    logoElement.src = logo;
    logoElement.className = styles.logo;
    const marker = new maplibregl.Marker({ element: logoElement }).setLngLat([
      lng,
      lat,
    ]);
    if (popupText) {
      marker.setPopup(
        new maplibregl.Popup({ className: styles.popup }).setText(popupText)
      );
    }
    marker.addTo(map);

    return () => {
      map.remove();
      logoElement.remove();
    };
  }, [lng, lat, zoom, scrollWheelZoom]);

  if (typeof window === undefined) {
    return <></>;
  }

  return <div ref={mapContainer} className={mapClassName} />;
};
