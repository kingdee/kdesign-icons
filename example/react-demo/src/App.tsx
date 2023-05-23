import { Add, Abs,ArrowDownSolid,ArrowLeftSolid } from "@kdesign-icons/react";
import "./App.css";
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";

function App() {
  return (
    <>
      <Add color="#d9d9d9" />
      <Abs />
      <ArrowDownSolid />
      <ArrowLeftSolid></ArrowLeftSolid>
      <HomeOutlined />
      <SettingFilled />
      <SmileOutlined />
      <SyncOutlined spin />
      <SmileOutlined rotate={180} />
      <LoadingOutlined />
    </>
  );
}

export default App;
