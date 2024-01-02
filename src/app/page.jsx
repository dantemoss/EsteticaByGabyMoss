import TextWelcome from "@/components/WelcomeBanner/TextWelcome.jsx";
import Navbar  from "../components/Navbar/Navbar.jsx";
import Service from "@/components/OurServices/Services.jsx";
import ProductsSponsors from "@/components/ProductsSponsors/ProductsSponsors.jsx";
import FormMaps from "@/components/Maps/FormMaps.jsx";
import Footer from "@/components/Footer/Footer.jsx";




export default function Page() {
  return (
    <div className="w-screen h-screen">
      <Navbar/>
      <TextWelcome/>
      <Service/>
      <ProductsSponsors/>
      <FormMaps/>
      <Footer/>
    </div>
  );
}
