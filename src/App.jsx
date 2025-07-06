import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import HeroComponent from "./components/HeroComponent";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroComponent />
      <div className="h-dvh bg-black"></div>
    </main>
  );
};

export default App;
