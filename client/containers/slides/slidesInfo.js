import sgImg from "../../assets/img/solargard-website.jpg";
import vsImg from "../../assets/img/vertisol-website.jpg";
import apImg from "../../assets/img/apelsina-website.jpg";
import floating from "../../assets/img/floating.png";
import layout from "../../assets/img/layout.png";
import bluePrint from "../../assets/img/blueprint.png";
import solarGardMD from "./markdown/solargard.md";
import vertisolMD from "./markdown/vertisol.md";
import apelsinaMD from "./markdown/apelsina.md";
import mernboilerplateMD from "./markdown/mernboilerplate.md";
import bythesocialMD from "./markdown/bythesocial.md";
import techshopMD from "./markdown/techshop.md";
import overviewMD from "./markdown/overview.md";

// Brief overview of CSS Grid
// Your personal journey with CSS Grid, why you use it, and what problems it's solved for you.

export const projectInfoArray = [
  {
    id: "006",
    name: "CSS Grid Overview",
    url: "#",
    description: `
    A brief overview of CSS Grid, 
    my personal journey with CSS Grid, 
    why I use it. We will also take a look to floats, 
    Bootstrap and, flexbox`,
    img: floating,
    md: overviewMD,
    color: "#1A576D",
  },
  {
    id: "001",
    name: "CSS Grid Tool-belt",
    url: "https://solar-gard.com/",
    description:
      `Lets take a look to the way I think when starting on creating a layout and what are the CSS Grid properties that I use the most.`,
    img: bluePrint,
    md: solarGardMD,
    color: "#1A576D",
  },
  {
    id: "002",
    name: "Real-World Examples",
    url: "https://vertisolcuracao.com/",
    description:`Now how would a page look like if we use CSS Grid? 
    and how we can place elements in a page? we will take a look to some real world examples, 
    And how thi tool is very useful in combination`,
    img: "https://bythealphabet.s3.amazonaws.com/project/vertisol-website.jpg",
    md: vertisolMD,
    color: "#C51E2E",
  },
  {
    id: "004",
    name: "Debugging",
    url: "https://mernboilerplate.bythealphabet.com/",
    description: "Fire Fox and Chrome Devtools has a lot of tools to help you debug CSS Grid layouts.",
    img: layout,
    md: mernboilerplateMD,
    color: "#1A576D",
  },
  {
    id: "005",
    name: "Grid cheatsheet",
    url: "https://bythesocial.bythealphabet.com/",
    description: "",
    img: bluePrint,
    md: bythesocialMD,
    color: "#1A576D",
  },
];

// "Solar Gard is a company that sells awnings. The main goal for the website was to showcase slides that they have done in the past. We keep the website updated with new photos that come out every week. This way prospects that go on the website, can have information about products and get an idea idea of what Solar Gard is capable of and gain confidence that Solar Gard is the company that can help them solve their problems.",
