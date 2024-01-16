import TextWelcome from "@/components/WelcomeBanner/TextWelcome.jsx";
import Navbar  from "../components/Navbar/Navbar.jsx";
import Service from "@/components/OurServices/Services.jsx";
import FormMaps from "@/components/Maps/FormMaps.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Card from "@/components/Card/Card.jsx";






export default function Page() {
  return (
    <div className="w-screen h-screen">
      <Navbar/>
      <TextWelcome/>
      <Service/>
      <Card/>
      <FormMaps/>
      <Footer/>
    </div>
  );
}
