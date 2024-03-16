import { Navbar } from "../components/ui/Navbar";
import Footer from "../our-plumbing-services/ui/footer";
import CustomerSetisfication from "../our-plumbing-services/we-strive-satifaction";
import Drainsunblock from "./drains-unblock";
import WelcomeBlockedDrains from "./welcome-blockeddrains";
import PhoneSnippet from "../about-us/PhoneSnippet";



export default function Home() {
  return (
    <>
    <PhoneSnippet/>
    <Navbar/>
   <WelcomeBlockedDrains/>
   <Drainsunblock/>
    <div className="mb-[3rem]"></div>
    <CustomerSetisfication/>
     <Footer/>
    
    </>
  );
}
