import "./styles.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let animation = gsap.to("#wrapper h1", {
  stagger: 1.5,
  ease: "none",
  opacity: 1
});

ScrollTrigger.create({
  trigger: "#wrapper h1",
  scroller: "body",
  scrub: 1,
  animation: animation,
  toggleActions: "play pause resume reverse reset",
  start: "top 30%",
  end: "bottom top"
  //markers: true
});
