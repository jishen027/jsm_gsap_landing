import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { abt1, abt2, abt3, abt4, abt5 } from "../assets/images";
const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scroolTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scroolTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every details matters <span className="text-while">-</span>{" "}
              from mudd;e to garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              veniam repellat numquam, totam, dignissimos consectetur possimus
              fugit voluptas, culpa iure a tempora debitis quisquam voluptate?
              Cum error modi dicta vel.
            </p>
          </div>
          <div>
            <p className="md:text-3xl text-xl font-bold">
              <span>4.5</span>/5
            </p>
            <p className="text-sm text-white-100">More than +12000 customers</p>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="nosiy">
            <img src={abt1} alt="grid-img-1" />
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="nosiy">
            <img src={abt2} alt="grid-img-2" />
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="nosiy">
            <img src={abt5} alt="grid-img-5" />
          </div>
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="nosiy">
            <img src={abt3} alt="grid-img-3" />
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="nosiy">
            <img src={abt4} alt="grid-img-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
