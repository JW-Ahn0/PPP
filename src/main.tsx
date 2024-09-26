import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import Footer from "./components/layout/Footer/Footer";
import { copyRightText } from "./constants/FooterConstant";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Footer copyRightText={copyRightText}></Footer>
  </StrictMode>
);
