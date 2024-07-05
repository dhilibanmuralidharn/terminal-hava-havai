import "./Home.css";
import Navbar from "../header/Navbar";
import SideBar from "../sidebar/SideBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div> 
        <SideBar />
      </div>
    </>
  );
}
