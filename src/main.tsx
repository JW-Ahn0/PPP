import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import SideBar from "./components/layout/SideBar/SideBar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SideBar></SideBar>
  </StrictMode>
);
