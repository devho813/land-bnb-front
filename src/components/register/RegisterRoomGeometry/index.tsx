import throttle from "lodash/throttle";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../../../store";
import { registerRoomActions } from "../../../store/registerRoom";
import RegisterRoomFooter from "../RegisterRoomFooter";
import { container, registerRoomGeometryMapWrapper } from "./styles";

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

function RegisterRoomGeometry() {
  const mapRef = useRef<HTMLDivElement>(null);
  const latitude = useSelector((state) => state.registerRoom.latitude);
  const longitude = useSelector((state) => state.registerRoom.longitude);
  const dispatch = useDispatch();

  useEffect(() => {
    loadMap();
  }, []);

  const loadMapScript = () => {
    return new Promise<void>((resolve) => {
      const script = document.createElement("script");
      script.src = `https://map.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}&callback=initMap`;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        resolve();
      };
    });
  };

  const loadMap = async () => {
    await loadMapScript();
  };

  window.initMap = () => {
    if (mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: {
          lat: latitude || 37.5666784,
          lng: longitude || 126.9778436,
        },
        zoom: 14,
      });

      const marker = new window.google.maps.Marker(
        {
          position: {
            lat: latitude || 37.5666784,
            lng: longitude || 126.9778436,
          },
        },
        map
      );

      map.addListener(
        "center_changed",
        throttle(() => {
          const centerLat = map.getCenter().lat();
          const centerLng = map.getCenter().lng();
          marker.setPosition({ lat: centerLat, lng: centerLng });
          dispatch(registerRoomActions.setLatitude(centerLat));
          dispatch(registerRoomActions.setLongitude(centerLng));
        }, 150)
      );
    }
  };

  return (
    <div css={container}>
      <h2>핀이 놓인 위치가 정확한가요?</h2>
      <h3>4단계</h3>
      <p>필요한 경우 핀이 정확한 위치에 자리하도록 조정할 수 있어요.</p>
      <div css={registerRoomGeometryMapWrapper}>
        <div ref={mapRef} id="map" />
      </div>
      <RegisterRoomFooter prevHref="/room/register/location" nextHref="/room/register/amenities" />
    </div>
  );
}

export default RegisterRoomGeometry;
