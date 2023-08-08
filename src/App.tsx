import AOS from "aos";
import "aos/dist/aos.css";
import { Slides } from "./components/Slider";

export default function App() {
  AOS.init();

  return (
    <>
      <Slides></Slides>
    </>
  );
}
