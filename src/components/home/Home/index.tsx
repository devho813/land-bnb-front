import SearchRoomBar from "../SearchRoomBar";
import { container, homeSearchBarLabel } from "./styles";

function Home() {
  return (
    <div css={container}>
      <p css={homeSearchBarLabel}>숙소</p>
      <SearchRoomBar />
      <h2>가까운 여행지, 랜드비엔비와 탐험해보세요.</h2>
    </div>
  );
}
export default Home;
