import { useEffect, useCallback } from "react";
import React, { useState } from "react";
import Button from "./Button";
import Nav from "./Nav";

export default function Banner() {
  //
  // Carousel Logic
  //
  // Function to update all carousel items with new values
  const updateAllItems = useCallback((newValues) => {
    setItems(newValues); // Set the new array in state
  }, []); // Empty array because updateAllItems does not depend on any external value

  const handleCarousel = useCallback(
    (car_num) => {
      const carButtons = document.querySelectorAll(".car-btn"); // select all car-btn elements
      carButtons.forEach((button) => {
        button.style.background = "white"; // Change the background color for each button
      });
      document.getElementById(`car-btn-${car_num}`).style.background = "black"; // change color of the selected button
      // change carousel values in 'items' array
      switch (car_num) {
        case 1:
          // code
          updateAllItems([
            "Build Your Dream With Us",
            "Crafting Homes with Precision",
            "bg-banner-1",
          ]);
          break;
        case 2:
          // code
          updateAllItems([
            "Build Your Dream With Us",
            "Solid Foundations for Your Projects",
            "bg-banner-2",
          ]);
          break;
        case 3:
          // code
          updateAllItems([
            "Build Your Dream With Us",
            "Luxury Spaces for Hospitality",
            "bg-banner-3",
          ]);
          break;
        case 4:
          // code
          updateAllItems([
            "Build Your Dream With Us",
            "Elegant Villas, Tailored for You",
            "bg-banner-4",
          ]);
          break;
        case 5:
          // code
          updateAllItems([
            "Build Your Dream With Us",
            "Cozy Retreats by Design",
            "bg-banner-5",
          ]);
          break;
        case 6:
          // code
          updateAllItems([
            "Build Your Dream With Us",
            "Efficient Storage, Built Right",
            "bg-banner-6",
          ]);
          break;
        default:
          // code
          alert("Error at Carousel: Wrong carousel number input!");
          break;
      }
    },
    [updateAllItems]
  ); // Add updateAllItems to the dependencies

  const [items, setItems] = useState([
    "HOUSING CONSTRUCTIONS",
    "Crafting Homes With Precision",
    "bg-banner-1",
  ]); // carousel array

  // Automate the carousel switching logic
  useEffect(() => {
    let currentCarNum = 1; // Start with the first carousel item
    const totalCarItems = 6; // Total number of carousel items

    const carouselInterval = setInterval(() => {
      handleCarousel(currentCarNum); // Call the existing handleCarousel function
      currentCarNum++; // Move to the next carousel item
      if (currentCarNum > totalCarItems) {
        currentCarNum = 1; // Loop back to the first item
      }
    }, 5000); // Switch every 5 seconds (5000 milliseconds)

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(carouselInterval);
  }, [handleCarousel]); // Include handleCarousel as a dependency

  return (
    <div
      className={`w-full flex flex-col justify-between p-1 h-[100dvh] bg-cover ${items[2]} text-white`}
    >
      <Nav theme={"dark"} bgColor={"white"} textColor={"black"}></Nav>
      {/*shadow*/}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e33] to-transparent"></div>
      {/*carousel + banner*/}
      <div className="z-10 flex flex-col justify-between w-2/3 p-3 mt-12">
        <p className="uppercase px-3 py-1 border-[1px] border-solid border-white w-fit my-8 text-sm opacity-0">
          Our Services
        </p>
        <span>
          <h1 className="text-5xl uppercase max-md:text-3xl max-sm:text-2xl">
            BUILD YOUR DREAM WITH US
          </h1>
          <p className="text-xl capitalize g-font-1 max-md:text-xl max-sm:text-xs">
            Whatever good things we build end up building us <br />
            <br />
            At NCI Homes, we transform your dreams into reality. From concept to
            completion, our expert team delivers high-quality construction
            solutions tailored to your vision. Build your future with
            confidence—build with NCI Homes.
          </p>
        </span>
        <span className="mt-5">
          <Button displayText="Learn More" url="/about" />
        </span>
      </div>
      <div>
        {/*search panel*/}
        <div className="w-full h-[100px] flex justify-center max-lg:hidden">
          <div className="w-[97%] bg-white rounded z-10 text-black flex items-center">
            {/*1st*/}
            <div className="w-1/4 h-[80%] z-20 flex justify-around items-center">
              <ul>
                <li className="text-xs tracking-widest text-center uppercase">
                  FLOOR AREA <br />COUNTING
                </li>
              </ul>
            </div>
            {/*2nd*/}
            <div className="border-l-gray-300 border-l-[1px] w-1/4 h-[80%] z-20 flex justify-around items-center">
              <ul>
                <li className="text-xs tracking-widest text-center uppercase">
                  PROVIDES SPECIAL <br /> LOAN FACILITIES
                </li>
              </ul>
            </div>
            {/*3rd*/}
            <div className="border-l-gray-300 border-l-[1px] w-1/4 h-[80%] z-20 flex justify-around items-center">
              <ul>
                <li className="text-xs tracking-widest text-center uppercase">
                  PLANNING <br />APPROVALS
                </li>
              </ul>
            </div>
            {/*4th*/}
            <div className="border-l-gray-300 border-l-[1px] w-1/4 h-[80%] z-20 flex justify-around items-center">
              <ul>
                <li className="text-xs tracking-widest text-center uppercase">
                  LANDSCAPING WITH NEW <br /> AND OLD DESIGNS
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*carousel buttons*/}
        <div className="h-[50px] flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div
              className="z-10 w-4 h-4 bg-black rounded car-btn"
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
              className="z-10 w-4 h-4 bg-white rounded car-btn"
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
              className="z-10 w-4 h-4 bg-white rounded car-btn"
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
              className="z-10 w-4 h-4 bg-white rounded car-btn"
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
              className="z-10 w-4 h-4 bg-white rounded car-btn"
              id="car-btn-5"
            >
              <Button
                theme="transparent"
                onClick={() => handleCarousel(5)}
                width="full"
                noPadding={true}
              />
            </div>
            <div
              className="z-10 w-4 h-4 bg-white rounded car-btn"
              id="car-btn-6"
            >
              <Button
                theme="transparent"
                onClick={() => handleCarousel(6)}
                width="full"
                noPadding={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
