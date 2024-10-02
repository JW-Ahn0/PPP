import styled from "@emotion/styled";
import SideBar from "./components/layout/SideBar/SideBar";
import News from "./pages/News";

const App = () => {
  return (
    <AppWarpper>
      <SideBar></SideBar>
      <News></News>
    </AppWarpper>
  );
};
export default App;
const AppWarpper = styled.div`
  display: flex;
  height: 100%;
`;
