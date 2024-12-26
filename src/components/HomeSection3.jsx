import Button from "./Button";
import CardType1 from "./CardType1";
import React, { useRef } from "react";
import proj_1 from "../images/projects/card_1.png";
import proj_2 from "../images/projects/card_2.png";
import proj_3 from "../images/projects/card_3.png";
import proj_4 from "../images/projects/card_4.png";
import proj_5 from "../images/projects/card_5.png";
import proj_6 from "../images/projects/card_6.png";
import proj_7 from "../images/projects/card_7.png";
import proj_8 from "../images/projects/card_8.png";
import proj_9 from "../images/projects/card_9.png";
import proj_10 from "../images/projects/card_10.png";
import proj_11 from "../images/projects/card_11.png";

function HomeSection3() {
  const scrollContainerRef = useRef(null);
  const scrollContainerRef2 = useRef(null);

  // Method to scroll left
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200, // Adjust this value to control how far to scroll left
      behavior: "smooth", // Smooth scroll animation
    });
  };

  // Method to scroll right
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200, // Adjust this value to control how far to scroll right
      behavior: "smooth", // Smooth scroll animation
    });
  };

  // Method to scroll left
  const scrollLeft2 = () => {
    scrollContainerRef2.current.scrollBy({
      left: -200, // Adjust this value to control how far to scroll left
      behavior: "smooth", // Smooth scroll animation
    });
  };

  // Method to scroll right
  const scrollRight2 = () => {
    scrollContainerRef2.current.scrollBy({
      left: 200, // Adjust this value to control how far to scroll right
      behavior: "smooth", // Smooth scroll animation
    });
  };
  return (
    <div className="flex items-center justify-center px-3 py-12">
      <div className="flex flex-col w-full gap-3">
        <span className="flex items-center gap-5 text-xs tracking-widest text-gray-600 uppercase g-font-2">
          Projects
          <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
        </span>
        <span className="flex items-center justify-between">
          <h1 className="text-5xl leading-snug uppercase max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
            Completed Projects
          </h1>
          <span className="max-md:hidden">
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
        </span>
        <div
          id="scroll-container"
          className="overflow-x-scroll select-none no-scrollbar cursor-grab"
          ref={scrollContainerRef}
        >
          <span className="flex gap-5 py-3 w-fit">
            <CardType1
              cardHeader={"Housing Project"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Haragama"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={proj_1}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Housing Project"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Haragama"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={proj_2}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Housing Project"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Kandy City"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={proj_3}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Housing Project"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Abathenna"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={proj_4}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Wells Park Site"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Kandy"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={proj_5}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Housing Project"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Ranawana"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={proj_6}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Housing Project"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Hantana (Site 2)"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={proj_7}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Housing Project"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Katugastota (Site 2)"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={proj_8}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
          </span>
        </div>
        <span className="flex items-center justify-between">
          <h1 className="text-5xl leading-snug uppercase max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
            Ongoing Projects
          </h1>
          <span className="max-md:hidden">
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
              onClick={scrollLeft2}
              theme={"transparent"}
              width={"[100px]"}
              extraClasses={"w-[90px]"}
            />
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
              onClick={scrollRight2}
              theme={"transparent"}
              width={"[100px]"}
              extraClasses={"w-[90px]"}
            />
          </span>
        </span>
        <div
          id="scroll-container"
          className="overflow-x-scroll select-none no-scrollbar cursor-grab"
          ref={scrollContainerRef2}
        >
          <span className="flex gap-5 py-3 w-fit">
            <CardType1
              cardHeader={"Housing Project"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Haragama"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={proj_1}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Commercial Building"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Pallekale"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={proj_9}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Hotel Construction Project"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Rajapihilla Mawatha"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={proj_10}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Industrial Zone Building Project"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Balagolla"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={proj_11}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomeSection3;
