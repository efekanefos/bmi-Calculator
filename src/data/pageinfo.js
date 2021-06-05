import WhatIsBMI from "../components/WhatIsBMI";
import Home from "../components/Home";

const pageinfo = [
  {
    title: "Home",
    isExact: true,
    component: Home,
    link: "/",
    isActive: true,
  },
  {
    title: "WhatIsBMI",
    isExact: false,
    component: WhatIsBMI,
    link: "/whatisBMI",
    isActive: true,
  },
];

export default pageinfo;
