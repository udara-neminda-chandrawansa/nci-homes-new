import { useState, useEffect } from "react";
import { Link } from "wouter";

import logo from "../images/logo.png";
import Button from "./Button";

function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setIsSmallScreen(true);
        setOpenSection(null); // Collapse all on small screen
      } else {
        setIsSmallScreen(false);
        setOpenSection("all"); // Open all sections on larger screens
        // hide plus marks on accordion-uls on desktop
        const accordion_pluses = document.querySelectorAll(".accordion-svg");

        accordion_pluses.forEach((element) => {
          element.style.display = "none";
        });
      }
    };

    // Run the resize function on component mount and listen for window resizing
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSection = (section) => {
    // Only allow toggling on small screens
    if (isSmallScreen) {
      if (openSection === section) {
        setOpenSection(null); // If clicked section is open, close it
      } else {
        setOpenSection(section); // Open the clicked section
      }
    }
  };

  return (
    <div className="flex flex-col gap-10 px-4 pt-12 mt-6 h-fit bg-gray-50 max-md:gap-6 max-sm:gap-3">
      {/*logo & shit*/}
      <div className="flex max-[992px]:flex-col">
        {/*logo + social*/}
        <div className="flex w-3/5 max-[992px]:w-full">
          <div className="flex w-1/2 max-[992px]:w-full">
            {/*logo*/}
            <div className="w-1/2 flex items-center max-[992px]:w-fit">
              <h1 className="tracking-tighter text-gray-700 cursor-pointer h-fit">
                <img src={logo} alt="logo" className="h-8"></img>
              </h1>
              <span className="border-l-gray-400 border-l ml-11 h-[40px]"></span>
            </div>
            {/*social media icons*/}
            <div className="w-1/2 flex gap-3 items-center max-[992px]:pl-4 max-md:w-fit">
              Follow Us On
              <Link
                href="https://www.facebook.com/ncihomespvtltd/"
                className="h-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </Link>
              <Link href="https://www.google.com/" className="hidden h-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </Link>
              <Link href="https://www.google.com/" className="hidden h-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-youtube"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/explore/tags/ncihomes/"
                className="h-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ncihomes/?originalSubdomain=lk"
                className="h-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        {/*email txt & subscribe button (hidden)*/}
        <div className="w-2/5 hidden max-[992px]:w-full max-[992px]:pt-4">
          <input
            type="email"
            name="email"
            className="w-2/3 p-3 text-lg outline-none"
            placeholder="Enter email"
            autoComplete="email"
          ></input>
          <Button
            displayText={"Subscribe"}
            theme={"dark"}
            width={"1/3"}
            extraClasses4Button={"bg-gray-400"}
            extraClasses={" w-[100%] h-[100%] text-xs hover:text-black"}
          ></Button>
        </div>
      </div>
      {/*row 2*/}
      <div className="flex h-fit max-[992px]:flex-col gap-4">
        <div className="h-full w-1/2  max-[992px]:px-4 pt-4 max-[992px]:w-full max-[992px]:pb-4">
          <p className="flex justify-between items-center w-full uppercase g-font-3 text-xs tracking-widest py-3 max-[992px]:text-sm cursor-pointer">
            About us
          </p>
          <div
            className={`flex max-[992px]:flex-col transition-all duration-300 overflow-hidden`}
          >
            <p className="pt-1 text-xs tracking-widest uppercase g-font-1 line-height-lg">
              We have over 22 years of experience in building and home
              constructions, planning, designing, landscaping and all kinds of
              civil engineering services.
            </p>
          </div>
        </div>
        <div className="h-full w-1/4  max-[992px]:px-4 pt-4 max-[992px]:w-full max-[992px]:pb-4">
          <p className="flex justify-between items-center w-full uppercase g-font-3 text-xs tracking-widest py-3 max-[992px]:text-sm cursor-pointer">
            Contact Details
          </p>
          <div
            className={`flex max-[992px]:flex-col transition-all duration-300 overflow-hidden`}
          >
            <ul className="flex flex-col w-full gap-4 pt-3 text-xs tracking-widest g-font-1">
              <li>Address:</li>
              <li>NCI BUILDING</li>
              <li>No. 381 A,Katugastota Road,Kandy</li>
              <li className="mt-3">Phone No:</li>
              <li className="transition-all delay-75 hover:text-blue-300">
                <a href="tel:812213613">+94 81 221 3613</a>
              </li>
              <li className="transition-all delay-75 hover:text-blue-300">
                <a href="tel:777860950">+94 77 786 0950</a>
              </li>
              <li className="mt-3">Email:</li>
              <li className="transition-all delay-75 hover:text-blue-300">
                <a href="mailto:ncihomes@sltnet.lk">ncihomes@sltnet.lk</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full w-1/4  max-[992px]:px-4 pt-4 max-[992px]:w-full max-[992px]:pb-4 max-[992px]:border-b-[1px]">
          <p
            className="flex justify-between items-center w-full uppercase g-font-3 text-xs tracking-widest py-3 max-[992px]:text-sm cursor-pointer"
            onClick={() => toggleSection("extraLinks")}
          >
            extra links
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              stroke="#000"
              strokeWidth={3.133}
              viewBox="0 0 45.4 45.4"
              className="w-[15px] h-[15px] accordion-svg"
            >
              <path d="M41.267 18.557H26.832V4.134A4.127 4.127 0 0 0 22.707 0a4.126 4.126 0 0 0-4.124 4.135v14.432H4.141a4.137 4.137 0 0 0-4.138 4.135 4.143 4.143 0 0 0 1.207 2.934 4.122 4.122 0 0 0 2.92 1.222h14.453V41.27c0 1.142.453 2.176 1.201 2.922a4.11 4.11 0 0 0 2.919 1.211 4.13 4.13 0 0 0 4.129-4.133V26.857h14.435c2.283 0 4.134-1.867 4.133-4.15-.001-2.282-1.852-4.15-4.133-4.15z" />
            </svg>
          </p>
          <div
            className={`flex max-[992px]:flex-col transition-all duration-300 overflow-hidden ${
              isSmallScreen
                ? openSection === "extraLinks"
                  ? "max-h-screen"
                  : "max-h-0"
                : "max-h-screen"
            }`}
          >
            <ul className="grid grid-cols-1 gap-4 w-full uppercase g-font-1 tracking-widest text-xs pt-3 max-[992px]:w-full">
              <li className="py-1 transition-all delay-75 hover:text-blue-300 w-fit">
                <Link href="/">Home</Link>
              </li>
              <li className="py-1 transition-all delay-75 hover:text-blue-300 w-fit">
                <Link href="/about">About</Link>
              </li>

              <li className="py-1 transition-all delay-75 hover:text-blue-300 w-fit">
                <Link href="/services">Services</Link>
              </li>
              <li className="py-1 transition-all delay-75 hover:text-blue-300 w-fit">
                <Link href="/designs">Designs</Link>
              </li>

              <li className="py-1 transition-all delay-75 hover:text-blue-300 w-fit">
                <Link href="/projects">Completed Projects</Link>
              </li>
              <li className="py-1 transition-all delay-75 hover:text-blue-300 w-fit">
                <Link href="/projects">Ongoing Projects</Link>
              </li>
              <li className="py-1 transition-all delay-75 hover:text-blue-300 w-fit">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*row 4*/}
      <div className="flex bg-white h-fit">
        <ul className="flex px-4 py-5 max-[992px]:px-0 justify-center gap-6 w-full uppercase g-font-1 tracking-widest text-xs max-md:flex-col max-md:px-4 max-md:pb-8 max-[992px]:w-full">
          <li className="py-1 transition-all delay-75 hover:text-blue-300 w-fit">
            2024 © all rights reserved
          </li>
          <li className="py-1 border-l-gray-300 border-l-[1px] pl-4 max-md:pl-0 max-md:border-none hover:text-blue-300 delay-75 transition-all w-fit">
            NCI Homes (Pvt) Ltd
          </li>
          <li className="py-1 border-l-gray-300 border-l-[1px] pl-4 max-md:pl-0 max-md:border-none hover:text-blue-300 delay-75 transition-all w-fit">
            designed & developed by Silicon Radon Networks (Pvt) Ltd
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
