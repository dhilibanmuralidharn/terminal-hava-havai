import { Disclosure } from "@headlessui/react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      <div className="nav-container">
        <h1 className="nav-heading">hava havai</h1>
        <img src="./assets/Avatar.png" alt="profile" />
      </div>
    </Disclosure>
  );
}
