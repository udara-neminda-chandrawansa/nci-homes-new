import { Link } from "wouter";
import Button from "./Button";

export default function Sidebar() {
  const handleClosing = () => {
    document.getElementById("sidebar").style.display = "none";
  };

  return (
    <div className="z-10 bg-white hidden max-sm:text-sm h-[100dvh]" id="sidebar">
      <Button displayText="X" onClick={handleClosing} />
      <ul className="w-[300px] flex flex-col gap-3 flex-grow p-3 border-t-[1px] border-t-gray-300">
        <li>
          <Link href="/about">
            <p className="flex p-1">About Us</p>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <p className="p-1 border-t-[1px] border-t-gray-300 flex">
              Projects
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="p-1 border-t-[1px] border-t-gray-300 flex"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/designs"
            className="p-1 border-t-[1px] border-t-gray-300 flex"
          >
            Designs
          </Link>
        </li>
        <li className="hidden">
          <a
            href="https://www.google.com"
            className="p-1 border-t-[1px] border-t-gray-300 flex"
          >
            Eng
          </a>
        </li>
        <li className="hidden">
          <a
            href="https://www.google.com"
            className="p-1 border-t-[1px] border-t-gray-300 flex"
          >
            Instant Video Call
          </a>
        </li>
        <li>
          <Button
            displayText="Get In Touch"
            url="/contact"
            theme="dark"
            width="full"
          />
        </li>
      </ul>
    </div>
  );
}
