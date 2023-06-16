import Image from "next/image";
import Ham from "../assets/ham.svg";
import logo from "../assets/Logotype.png";

const Navigation: React.FC = () => {
  return (
    <div className="flex relative justify-center border-b-[1px]">
      <Image src={logo} alt="logo" className="my-2 mt-4" />
      <Ham className="absolute top-3 left-4 cursor-pointer" />
    </div>
  );
};

export default Navigation;
