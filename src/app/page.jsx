import TextWelcome from "@/components/WelcomeBanner/TextWelcome.jsx";
import Navbar  from "../components/Navbar/Navbar.jsx";
import Service from "@/components/OurServices/Services.jsx";
import Sponsors from "@/components/Sponsors/Sponsors.jsx";


export default function Page() {
  return (
    <div className="w-screen h-screen">
      <Navbar/>
      <TextWelcome/>
      <Service/>
      <Sponsors/>
      </div>
  );
}
