//import { Link } from "react-router-dom";
import Navbar from "../components/landingPageComponents/Navbar";
import Hero from "../components/landingPageComponents/Hero";
import HeroTwo from "../components/landingPageComponents/HeroTwo.tsx";
import Services from "../components/landingPageComponents/Services.tsx";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
        <Hero/>
        <HeroTwo/>
      <Services/>
    </div>
  );
};

export default LandingPage;

{
  /* <Link to="/sign-in">
        <button className="border rounded-2xl p-3 mt-5">
          Go to Sign In page
        </button>
      </Link> */
}
