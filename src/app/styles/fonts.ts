import { Montserrat, Great_Vibes } from "next/font/google";

// define your variable fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
});
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin-ext"] });

// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder

export { montserrat, greatVibes };
