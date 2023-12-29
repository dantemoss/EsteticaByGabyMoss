import TextWelcome from "@/components/WelcomeBanner/TextWelcome.jsx";
import Navbar  from "../components/Navbar/Navbar.jsx";


export default function Page() {
  return (
    <div className="w-screen h-screen">
      <Navbar/>
      <TextWelcome/> 
      </div>
  );
}
