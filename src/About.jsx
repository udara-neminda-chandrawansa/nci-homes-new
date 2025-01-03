import CardType3 from "./components/CardType3";
import CardType2 from "./components/CardType2";
import CardType1 from "./components/CardType1";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";
import banner from "./images/about/banner.jpg";
import banner_2 from "./images/about/banner_2.jpg";
import lotus_t from "./images/about/lotus_t.jpg";
import lotus_t_2 from "./images/about/lotus_t_2.jpg";
import devi_p from "./images/about/devi_p.jpg";
import sigiriya from "./images/about/sigiriya.jpg";
import galle from "./images/about/galle.jpg";
import yala from "./images/about/yala.jpg";
import React, { useRef } from "react";

export default function About() {
  const scrollContainerRef = useRef(null);

  // Function to determine active button based on current scroll position
  const updateButtonColors = () => {
    const currentPosition = scrollContainerRef.current.scrollLeft;
    const activeButton = Math.round(currentPosition / window.innerWidth) + 1;

    const carButtons = document.querySelectorAll(".car-btn"); // Select all buttons
    carButtons.forEach((button, index) => {
      // Update button color based on the active button
      button.style.background =
        index + 1 === activeButton ? "black" : "#e5e7eb";
    });
  };

  // Method to scroll left and update button colors
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -window.innerWidth, // Adjust this value to control how far to scroll left
      behavior: "smooth", // Smooth scroll animation
    });
    setTimeout(updateButtonColors, 500); // Delay to ensure scroll completion before updating colors
  };

  // Method to scroll right and update button colors
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: window.innerWidth, // Adjust this value to control how far to scroll right
      behavior: "smooth", // Smooth scroll animation
    });
    setTimeout(updateButtonColors, 500); // Delay to ensure scroll completion before updating colors
  };

  // method to toggle between carousel
  const handleCarousel = (carNo) => {
    // Calculate the new position based on the carousel number
    const newPosition = window.innerWidth * (carNo - 1);

    // Scroll immediately to the new position without relying on carPosition
    scrollContainerRef.current.scroll({
      left: newPosition,
      behavior: "smooth", // Smooth scroll animation
    });

    // Update button styles
    const carButtons = document.querySelectorAll(".car-btn");
    carButtons.forEach((button) => {
      button.style.background = "#e5e7eb";
    });
    document.getElementById(`car-btn-${carNo}`).style.background = "black";
  };

  return (
    <>
      {/*banner + nav*/}
      <div className="flex w-full text-black h-fit">
        <Sidebar></Sidebar>
        <div className="flex flex-col w-full h-fit">
          {/*nav*/}
          <span className="p-1">
            <Nav theme={"dark"}></Nav>
          </span>
          {/*banner (img + overview text)*/}
          <div className="relative w-full h-[600px] max-[992px]:h-fit">
            <img
              src={banner}
              className="object-cover w-full h-full"
              alt="about"
            ></img>
            {/*floating white square with text*/}
            <div className="absolute bottom-[-15%] w-full h-fit max-[992px]:relative max-[992px]:z-10 max-[992px]:bottom-0">
              <div className="bg-white w-2/3 max-[992px]:w-full p-4 py-12 h-fit flex flex-col justify-center">
                <span className="flex items-center gap-5 p-1 text-xs tracking-widest text-gray-600 uppercase g-font-2">
                  Overview
                  <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
                </span>
                <h1 className="text-5xl uppercase max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
                  About NCI Homes pvt ltd
                </h1>
                <p className="py-4 text-lg g-font-1 max-sm:text-sm">
                  Established in 2001, NCI Homes (Pvt) Ltd has became one of the
                  leading construction company in Sri Lanka. Our main office and
                  branches are located in Kandy, the central province of Sri
                  Lanka. As a construction company, we undertake all type of
                  building and home constructions, planning, designing,
                  landscaping and all kinds of civil engineering services.
                  Although we are located in Kandy, we are ready to provide our
                  superior service to any part of the country. All house
                  planning, design and construction will be under supervision of
                  chartered civil engineers.
                </p>
                <p className="hidden text-sm g-font-1">
                  * Sed vel ultrices dui, a ullamcorper tortor. Morbi gravida
                  diam et malesuada vulputate...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*owners message*/}
      <div className="relative p-4 mt-[10%] max-[992px]:flex flex-col justify-center items-center max-[992px]:mt-0">
        <img
          className="w-full h-[600px] object-cover"
          src={banner_2}
          alt="founder"
        ></img>
        {/*floating white square with text*/}
        <div className="absolute bottom-0 h-fit max-[992px]:static">
          <div className="bg-white w-2/5 max-[992px]:w-full p-8 py-12 h-fit flex flex-col justify-center gap-3">
            <h1 className="text-2xl font-medium uppercase">
              We offer you the most competitive rates of the current market.
              Brand new houses are available from 3.5 million onwards.
            </h1>
            <span className="flex items-center gap-5 p-1 text-xs tracking-widest text-gray-600 uppercase g-font-2">
              The NCI Promise
              <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
            </span>
            <Button
              displayText="Contact Us"
              theme="dark"
              width={"fit"}
              url={"/contact"}
            ></Button>
          </div>
        </div>
      </div>
      {/*who we are*/}
      <div className="h-fit py-6 flex flex-col justify-center gap-4 max-[992px]:h-fit max-[992px]:justify-start">
        <h1 className="text-5xl text-center uppercase max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
          More about us
        </h1>
        {/*card container*/}
        <div className="w-full h-fit flex items-center p-4 gap-3 max-[992px]:flex-col">
          <div className="bg-gray-50 flex flex-col justify-center gap-6 p-8 h-[400px] max-md:h-fit w-1/3 max-[992px]:w-full">
            <h1 className="text-2xl uppercase max-xl:text-xl max-lg:text-lg">
              NCI Homes PROPERTIES free services
            </h1>
            <p className="text-xl g-font-1 max-xl:text-lg">
              If your construction project is handed over to us, we would do the
              following services for you free of charge. Building Plan, Bill of
              Quantities, Plan Approval, Arranging a Loan Facility
            </p>
            <Button
              displayText={"Learn More"}
              extraClasses4Button={"bg-gray-500 w-full"}
              extraClasses={"text-white text-xs w-full border-gray-500"}
              url={"/services"}
              theme={"dark"}
            ></Button>
          </div>
          <div className="bg-gray-50 flex flex-col justify-center gap-6 p-8 h-[400px] max-md:h-fit w-1/3 max-[992px]:w-full">
            <h1 className="text-2xl uppercase max-xl:text-xl max-lg:text-lg">
              design portfolio of NCI Homes
            </h1>
            <p className="text-xl g-font-1 max-xl:text-lg">
              Explore our wide range of projects, including single-story homes,
              two-story and three-story residences, and commercial buildings.
              Each structure is thoughtfully designed to blend functionality,
              innovation, and quality.
            </p>
            <Button
              displayText={"Learn More"}
              extraClasses4Button={"bg-gray-500 w-full"}
              extraClasses={"text-white text-xs w-full border-gray-500"}
              url={"/design"}
              theme={"dark"}
            ></Button>
          </div>
          <div className="bg-gray-50 flex flex-col justify-center gap-6 p-8 h-[400px] max-md:h-fit w-1/3 max-[992px]:w-full">
            <h1 className="text-2xl uppercase max-xl:text-xl max-lg:text-lg">
              our Experience
            </h1>
            <p className="text-xl g-font-1 max-xl:text-lg">
              We have over 22 years of experience in building and home
              constructions, planning, designing, landscaping and all kinds of
              civil engineering services. We treat our customers with the best
              we have. Therefore we provide them a quality customer service
              which would satisfy their expectations.
            </p>
            <Button
              displayText={"Learn More"}
              extraClasses4Button={"bg-gray-500 w-full"}
              extraClasses={"text-white text-xs w-full border-gray-500"}
              theme={"dark"}
              url={"/projects"}
            ></Button>
          </div>
        </div>
      </div>
      {/*int. destinations*/}
      <div className="flex max-[992px]:flex-col lg:h-fit">
        {/*Title*/}
        <div className="flex flex-col items-start gap-5 w-1/3 px-3 py-12 max-[992px]:w-full lg:h-fit">
          <span className="flex items-center gap-5 text-xs tracking-widest text-gray-600 uppercase g-font-2">
            Our guarantee
            <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
          </span>
          <h1 className="text-5xl leading-snug uppercase max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
            Choose NCI Homes
          </h1>
          <div className="text-lg text-gray-600 g-font-1">
            <ul className='ml-6 list-disc list-outside marker:text-green'>
              <li>
                We offer you the most competitive rates of the current market.
                Brand new houses are available from 3.5 million onwards.
              </li>
              <li>
                More than 16 years of experience in the field of construction.
              </li>
              <li>
                Free insurance facilities from recognized insurance company.
              </li>
              <li>
                20 years of guaranteed certificate on the structure of the
                house.
              </li>
              <li>
                Lands and houses are available from Rs. 3.5 million onwards.
              </li>
              <li>
                Pay in installments, and we will begin constructions after an
                advanced payment.
              </li>
            </ul>
          </div>
          <span className="w-full max-[992px]:hidden">
            <Button
              displayText="View Our Projects"
              url={"/projects"}
              theme="dark"
              width={"[80%]"}
              extraClasses={"w-[100%]"}
            />
          </span>
        </div>
        <div className="flex w-2/3 max-[992px]:w-full max-md:flex-col lg:h-fit">
          {/*Card Stock 1*/}
          <div className="flex flex-col justify-start w-1/2 px-3 max-md:w-full">
            <CardType2
              cardUrl={"https://www.google.com"}
              cardText1={""}
              cardImage={lotus_t}
              cardImageMd={
                "https://cdn.properties.emaar.com/wp-content/uploads/2020/06/Turkey-Large-NEW-706x385.jpg"
              }
              blackLinePClasses={"hidden"}
            />
            <CardType2
              cardUrl={"https://www.google.com"}
              cardText1={""}
              cardImage={devi_p}
              cardImageMd={devi_p}
              blackLinePClasses={"hidden"}
            />
          </div>
          {/*Card Stock 2*/}
          <div className="flex flex-col justify-start w-1/2 px-3 max-md:w-full">
            <CardType2
              cardUrl={"https://www.google.com"}
              cardText1={""}
              cardImage={sigiriya}
              cardImageMd={sigiriya}
              blackLinePClasses={"hidden"}
            />
            <CardType2
              cardUrl={"https://www.google.com"}
              cardText1={""}
              cardImage={galle}
              cardImageMd={galle}
              blackLinePClasses={"hidden"}
            />
            <CardType2
              cardUrl={"https://www.google.com"}
              cardText1={""}
              cardImage={yala}
              cardImageMd={yala}
              blackLinePClasses={"hidden"}
            />
          </div>
        </div>
        <span className="w-full hidden p-3 md:w-1/2 max-[992px]:flex">
          <Button
            displayText="View All Projects"
            url={"/projects"}
            theme="dark"
            width={"full"}
            extraClasses={"w-[100%]"}
          />
        </span>
      </div>
      {/*other NCI Homes businesses (hidden)*/}
      <div className="items-center justify-center hidden px-3 py-12 h-fit max-lg:h-fit">
        <div className="flex flex-col w-full gap-3">
          <span className="flex items-center gap-5 text-xs tracking-widest text-gray-600 uppercase g-font-2">
            More
            <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
          </span>
          <span className="flex items-center justify-between">
            <h1 className="text-5xl leading-snug uppercase max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
              OTHER NCI Homes BUSINESSES
            </h1>
          </span>
          <div className="select-none">
            <span className="flex justify-between w-full gap-3 py-3 max-md:flex-col">
              <CardType1
                cardHeader={"NCI Homes HOSPITALITY"}
                cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
                cardImage={
                  "https://cdn.properties.emaar.com/wp-content/uploads/2020/06/emaar-hospitality-320x415.jpg"
                }
                cardImageClasses={"h-[400px]"}
                btnText={"nobtn"}
                extraClasses={"w-[300px] h-fit py-1 gap-3 max-md:w-full"}
              />
              <CardType1
                cardHeader={"NCI Homes MALLS"}
                cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
                cardImage={
                  "https://cdn.properties.emaar.com/wp-content/uploads/2020/06/emaar-malls-320x415.jpg"
                }
                cardImageClasses={"h-[400px]"}
                btnText={"nobtn"}
                extraClasses={"w-[300px] h-fit py-1 gap-3 max-md:w-full"}
              />
              <CardType1
                cardHeader={"Lotus Tower"}
                cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
                cardImage={lotus_t_2}
                cardImageClasses={"h-[400px]"}
                btnText={"nobtn"}
                extraClasses={"w-[300px] h-fit py-1 gap-3 max-md:w-full"}
              />
              <CardType1
                cardHeader={"NCI Homes ENTERTAINMENT"}
                cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
                cardImage={
                  "https://cdn.properties.emaar.com/wp-content/uploads/2020/06/emaar-entertainment-320x415.jpg"
                }
                cardImageClasses={"h-[400px]"}
                btnText={"nobtn"}
                extraClasses={"w-[300px] h-fit py-1 gap-3 max-md:w-full"}
              />{" "}
            </span>
          </div>
        </div>
      </div>
      {/*3 cards - card container (hidden)*/}
      <div className="bg-gray-50 h-fit py-6 hidden justify-between items-center gap-8 px-4 max-[992px]:h-fit max-[992px]:flex-col">
        <CardType3
          titleText={"INVESTOR RELATIONS"}
          contentText={
            "NCI Homes is a Public Joint Stock Company listed on the Colombo Financial Market. View NCI Homes’s stock market trends and related data."
          }
          imgSrc={
            "https://cdn.properties.emaar.com/wp-content/uploads/2020/06/investor-relations-440x280.png"
          }
          extraClasses={"h-[500px] justify-between"}
        />
        <CardType3
          titleText={"CORPORATE SUSTAINABILITY"}
          contentText={
            "We consider sustainability to be a fundamental aspect of our lives. It is an investment in the future for both society and ourselves."
          }
          imgSrc={
            "https://cdn.properties.emaar.com/wp-content/uploads/2023/05/sustainability-banner-mobile-440x280.jpg"
          }
          extraClasses={"h-[500px] justify-between"}
        />
        <CardType3
          titleText={"NCI Homes FOUNDATION"}
          contentText={
            "The NCI Homes Foundation, a part of NCI Homes Properties, focuses on driving and coordinating the group's corporate social responsibility efforts."
          }
          imgSrc={
            "https://cdn.properties.emaar.com/wp-content/uploads/2020/06/emaar-foundation-440x280.png"
          }
          extraClasses={"h-[500px] justify-between"}
        />
      </div>
      {/*featured awards (hidden, opacity 0)*/}
      <div className="flex-col justify-center hidden w-full py-6 bg-white opacity-0 h-fit">
        {/*heading*/}
        <h1 className="text-5xl leading-snug text-center uppercase max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
          Featured awards
        </h1>
        {/*cards*/}
        <div
          id="scroll-container"
          className="overflow-x-scroll select-none no-scrollbar cursor-grab"
          ref={scrollContainerRef}
        >
          <span className="flex gap-5 py-3 w-fit">
            <CardType1
              cardHeader={"Certified Autism Center™"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Designation from IBCCES"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2024"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2024/04/Reel-Junior-1-e1711948774887-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"LEED Platinum Certification"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Operations and Maintenance: Existing Buildings"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2024"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2024/03/output-onlinetools-320x415.png"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Developer of the Year"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Arabian Business Achievement Awards"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2024"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2024/02/Arabian-Business-Achievement-Award-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"KidZania- Best Edutainment Center"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"MENALAC"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2023"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/kidzania-dubai-320x415.webp"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Reel Cinemas - Best Cinema Experience"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"MENALAC"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2023"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/8e0xkrHk-Reel_Junior_2-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={
                "Skyviews Observatory - Most Unique Visitor Attraction"
              }
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"MENALAC"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2023"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/edge-walk-1920-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={
                "Address Grand Creek Harbour - Highly Commended “FM Mobilisation of the Year“"
              }
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Facilities Management Awards, Middle East"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2023"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/WhatsApp-Image-2023-08-18-at-16.29.01-1-1-320x415.jpeg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Colombo Hills Park -  Sustainability Prize"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={
                "Landscape Middle East Awards in Parks &amp; Recreation"
              }
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2023"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/MicrosoftTeams-image-9-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"ECM - Overall Winner Award"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Gulf Real Estate Awards"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2022"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/ECM-Emerges-Overall-Gulf-Real-Estate-Winner-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"ECM - Community Management Company of the Year"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Smart Built Environment Awards (SBE)"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2022"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/Screenshot-2024-01-04-115751-320x415.png"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"ECM - Happiest Residential Community Of The Year"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"IRECMS Colombo Awards"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2022"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/MicrosoftTeams-image-17-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"ECM - Community Engagement Initiative of the Year"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Smart Built Environment Awards (SBE)"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2022"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/EMC-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={
                "The Storm Coaster -  World’s Fastest Vertical-Launch Rollercoaster"
              }
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Guinness World Records™"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2022"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/The-Storm-rollercoaster-launches-into-the-Guinness-World-Records-02_2022-10-26-101859_ltrd-320x415.webp"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={
                "Address Beach Resort - World’s tallest infinity pool"
              }
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Guinness World Records™"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2021"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2021/04/320x415_A-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Colombo Mall - Best Customer Experience"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"World Retail Awards"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2019"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2020/06/The-Dubai-Mall-2-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Address Downtown - World Leading Luxury City Hotel"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"World Travel Awards™"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2019"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2024/01/Address-Downtown-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={
                "Colombo Aquarium & Underwater Zoo - Largest OLED screen"
              }
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Guinness World Records™"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"2017"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.properties.emaar.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-21-at-2.38.58-PM-320x415.png"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
          </span>
        </div>
        {/*Left, carousel buttons, Right*/}
        <span className="flex items-center justify-center max-md:hidden">
          <Button
            displayText={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
            }
            onClick={scrollLeft}
            theme={"transparent"}
            width={"[100px]"}
            extraClasses={"w-[90px]"}
          />
          {/*carousel buttons*/}
          <div className="h-[50px] flex items-center justify-center mb-2 max-xl:hidden">
            <div className="flex items-center gap-3">
              <div
                className="z-10 w-3 h-3 bg-black rounded car-btn"
                id="car-btn-1"
              >
                <Button
                  theme="transparent"
                  onClick={() => handleCarousel(1)}
                  width="full"
                  noPadding={true}
                />
              </div>
              <div
                className="z-10 w-3 h-3 bg-gray-200 rounded car-btn"
                id="car-btn-2"
              >
                <Button
                  theme="transparent"
                  onClick={() => handleCarousel(2)}
                  width="full"
                  noPadding={true}
                />
              </div>
              <div
                className="z-10 w-3 h-3 bg-gray-200 rounded car-btn"
                id="car-btn-3"
              >
                <Button
                  theme="transparent"
                  onClick={() => handleCarousel(3)}
                  width="full"
                  noPadding={true}
                />
              </div>
              <div
                className="z-10 w-3 h-3 bg-gray-200 rounded car-btn"
                id="car-btn-4"
              >
                <Button
                  theme="transparent"
                  onClick={() => handleCarousel(4)}
                  width="full"
                  noPadding={true}
                />
              </div>
              <div
                className="z-10 w-3 h-3 bg-gray-200 rounded car-btn"
                id="car-btn-5"
              >
                <Button
                  theme="transparent"
                  onClick={() => handleCarousel(5)}
                  width="full"
                  noPadding={true}
                />
              </div>
            </div>
          </div>
          <Button
            displayText={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            }
            onClick={scrollRight}
            theme={"transparent"}
            width={"[100px]"}
            extraClasses={"w-[90px]"}
          />
        </span>
        {/*view all awards btn*/}
        <span className="flex justify-center">
          <Button
            displayText={"View All Awards"}
            theme={"dark"}
            width={"[300px]"}
            extraClasses={"bg-gray-400 border-gray-400 text-xs"}
            extraClasses4Button={"bg-gray-400"}
          ></Button>
        </span>
      </div>
      <Footer></Footer>
    </>
  );
}
