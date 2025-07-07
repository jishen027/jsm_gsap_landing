import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import HeroComponent from "./components/HeroComponent";
import gsap from "gsap";
import Cocktails from "./components/Cocktails";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroComponent />
      <Cocktails />
      <About />
    </main>
  );
};

export default App;
