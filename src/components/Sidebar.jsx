import { Link } from "wouter";
import Button from "./Button";
import bg from "./../images/landing/banner/banner_1.jpg";

export default function Sidebar() {
  const handleClosing = () => {
    document.getElementById("sidebar").style.display = "none";
  };

  return (
    <>
      <div
        className="z-10 bg-white hidden max-sm:text-sm h-[100dvh] bg-center bg-cover text-white"
        id="sidebar"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <span className="flex justify-end">
          <Button displayText="X" onClick={handleClosing} />
        </span>
        <ul className="w-[300px] flex flex-col gap-3 flex-grow p-3">
          <li>
            <Link href="/">
              <p className="flex justify-center p-1 text-xl">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="flex justify-center p-1 text-xl">About Us</p>
            </Link>
          </li>
          <li>
            <Link href="/projects/1">
              <p className="flex justify-center p-1 text-xl">Projects</p>
            </Link>
          </li>
          <li>
            <Link href="/services" className="flex justify-center p-1 text-xl">
              Services
            </Link>
          </li>
          <li>
            <Link href="/designs" className="flex justify-center p-1 text-xl">
              Designs
            </Link>
          </li>
          <li className="hidden">
            <a
              href="https://www.google.com"
              className="flex justify-center p-1 text-xl"
            >
              Eng
            </a>
          </li>
          <li className="hidden">
            <a
              href="https://www.google.com"
              className="flex justify-center p-1 text-xl"
            >
              Instant Video Call
            </a>
          </li>
          <li>
            <Button
              displayText="Get In Touch"
              url="/contact"
              theme="light"
              width="full"
            />
          </li>
        </ul>
      </div>
      <div className="drawer w-fit" style={{ zIndex: "9999" }}>
        <input
          id="my-drawer"
          type="checkbox"
          className="bg-white drawer-toggle"
        />
        <div className="drawer-content"></div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            className="min-h-full bg-left bg-cover menu bg-base-200 text-base-content w-80"
            style={{ backgroundImage: `url(${bg})` }}
          >
            {/* Sidebar content here */}
            <span className="flex justify-end">
              <label
                htmlFor="my-drawer"
                className="flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </label>
            </span>
            <ul className="w-[300px] flex flex-col gap-3 flex-grow text-white font-black">
              <li>
                <Link href="/" className="flex justify-center p-1 text-xl">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex justify-center p-1 text-xl">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/1"
                  className="flex justify-center p-1 text-xl"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex justify-center p-1 text-xl"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/designs"
                  className="flex justify-center p-1 text-xl"
                >
                  Designs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex justify-center p-1 text-xl"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}
