import dynamic from "next/dynamic";

const RegisterRoomGeometry = dynamic(
  import("../../../components/register/RegisterRoomGeometry"),
  { ssr: false }
);

function Geometry() {
  return <RegisterRoomGeometry />;
}

export default Geometry;
