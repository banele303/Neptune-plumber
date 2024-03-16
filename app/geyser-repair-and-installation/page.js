import { Navbar } from "../components/ui/Navbar";
import Footer from "../our-plumbing-services/ui/footer";
import PhoneSnippet from "../about-us/PhoneSnippet";
import CustomerSetisfication from "../our-plumbing-services/we-strive-satifaction";
import Geyser from "./geyse";
import WelcomeGeyser from "./welcome-geyser";



export default function Home() {
  return (
    <>
    <PhoneSnippet/>
    <Navbar/>
    <Geyser/>
    <WelcomeGeyser/>
    <div className="mb-[3rem]"></div>
    <CustomerSetisfication/>
     <Footer/>
    
    </>
  );
}
