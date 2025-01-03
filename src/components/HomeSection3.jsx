import Button from "./Button";
import CardType1 from "./CardType1";
import React, { useRef } from "react";

// all projects
import haragama_housing from "./../images/projects/completed/haragama_housing.jpg";
import nuwara_eliya_housing from "./../images/projects/completed/nuwara_eliya_housing.jpg";
import housing_kandy from "./../images/projects/completed/housing_kandy.jpg";
import abathenna_housing from "./../images/projects/completed/abathenna_housing.jpg";
import wells_park_kandy from "./../images/projects/completed/wells_park_kandy.jpg";
import ranawana_housing from "./../images/projects/completed/ranawana_housing.jpg";
import hantana_2_housing from "./../images/projects/completed/hantana_2_housing.jpg";
import katugastota_2_housing from "./../images/projects/completed/katugastota_2_housing.jpg";
import wattaranthenna_housing from "./../images/projects/completed/wattaranthenna_housing.jpg";
import nugawela_housing from "./../images/projects/completed/nugawela_housing.jpg";
import kengalla_housing from "./../images/projects/completed/kengalla_housing.jpg";
import hantana_1_housing from "./../images/projects/completed/hantana_1_housing.jpg";
import ranawana_eco_housing from "./../images/projects/completed/ranawana_eco_housing.jpg";
import heerasgala_housing from "./../images/projects/completed/heerasgala_housing.jpg";
import nittabuwa_three_story from "./../images/projects/completed/nittabuwa_three_story.jpg";
import iriyagama_housing from "./../images/projects/completed/iriyagama_housing.jpg";
import dodamwala_three_story from "./../images/projects/completed/dodamwala_three_story.jpg";
import mahaiyawa_2_story from "./../images/projects/completed/mahaiyawa_2_story.jpg";
import lewella_2_story from "./../images/projects/completed/lewella_2_story.jpg";
import aniwatta_2_story from "./../images/projects/completed/aniwatta_2_story.jpg";
import kundasale_housing from "./../images/projects/completed/kundasale_housing.jpg";
import katugastota_hotel from "./../images/projects/ongoing/katugastota_hotel.jpg";
import kandy_school from "./../images/projects/ongoing/kandy-school.jpg";
import ranawana_eco_2 from "./../images/projects/ongoing/ranawana-eco-2.jpg";
import katugastota from "./../images/projects/ongoing/katugastota.jpg";
import nugawela from "./../images/projects/ongoing/nugawela.jpg";
import kurunegala from "./../images/projects/ongoing/kurunegala.jpg";
import pinnawala from "./../images/projects/ongoing/pinnawala.jpg";
import haragama from "./../images/projects/ongoing/haragama.jpg";
import hantana_3 from "./../images/projects/ongoing/hantana-3.jpg";
import digana from "./../images/projects/ongoing/digana.jpg";
import balagolla from "./../images/projects/ongoing/balagolla.jpg";
import polgolla from "./../images/projects/ongoing/polgolla.jpg";
import aniwatte from "./../images/projects/ongoing/aniwatte.jpg";
import gohagoda from "./../images/projects/ongoing/gohagoda.jpg";
import international_school from "./../images/projects/ongoing/international-school.jpg";
import balagolla_industrial_zone from "./../images/projects/ongoing/balagolla-industrial-zone.jpg";
import mahaiyawa from "./../images/projects/ongoing/mahaiyawa.jpg";
import thennekumbura from "./../images/projects/ongoing/thennekumbura.jpg";
import udaperadeniya from "./../images/projects/ongoing/udaperadeniya.jpg";
import rajapihilla_hotel from "./../images/projects/ongoing/rajapihilla-hotel.jpg";
import ranawana_3 from "./../images/projects/ongoing/ranawana-3.jpg";
import padiyapelella from "./../images/projects/ongoing/padiyapelella.jpg";
import pallekele from "./../images/projects/ongoing/pallekele.jpg";
import mapanawathura from "./../images/projects/ongoing/mapanawathura.jpg";

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

  // completed projects array (for cards)
  const completedProjects = [
    ["Housing Project", haragama_housing, "Haragama"],
    ["Housing Project", nuwara_eliya_housing, "Nuwara Eliya"],
    ["Housing Project", housing_kandy, "Kandy City"],
    ["Housing Project", abathenna_housing, "Abathenna"],
    ["Kandy", wells_park_kandy, "Wells Park Site"],
    ["Housing Project", ranawana_housing, "Ranawana"],
    ["Housing Project", hantana_2_housing, "Hantana (Site 2)"],
    ["Housing Project", katugastota_2_housing, "Katugastota (Site 2)"],
    ["Housing Project", wattaranthenna_housing, "Wattaranthenna"],
    ["Housing Project", nugawela_housing, "Nugawela"],
    ["Housing Project", kengalla_housing, "Kengalla"],
    ["Housing Project", hantana_1_housing, "Hantana (Site 1)"],
    ["Eco-Friendly House", ranawana_eco_housing, "Ranawana"],
    ["Housing Project", heerasgala_housing, "Heerassagala"],
    ["Three Story House", nittabuwa_three_story, "Nittabuwa"],
    ["Housing Project", iriyagama_housing, "Iriyagama"],
    ["Three Story House", dodamwala_three_story, "Dodamwala"],
    ["Two Story House", mahaiyawa_2_story, "Mahaiyawa"],
    ["Two Story House", lewella_2_story, "Lewella"],
    ["Two Story House", aniwatta_2_story, "Aniwatta"],
    ["Housing Project", kundasale_housing, "Kundasale"],
  ];

  // ongoing projects array (for cards)
  const ongoingProjects = [
    ["A Hotel", katugastota_hotel, "Katugastota"],
    ["A School Project", kandy_school, "Kandy"],
    ["Eco Housing Project #2", ranawana_eco_2, "Ranawana"],
    ["Housing Project", katugastota, "Katugastota"],
    ["Construction Project", nugawela, "Nugawela"],
    ["Construction Project", kurunegala, "Kurunegala"],
    ["Housing Project", pinnawala, "Pinnawala"],
    ["Housing Project", haragama, "Haragama"],
    ["Housing Project 3", hantana_3, "Hantana"],
    ["Housing Project", digana, "Digana"],
    ["Housing Project", balagolla, "Balagolla"],
    ["Housing Project", polgolla, "Polgolla"],
    ["Housing Project", aniwatte, "Aniwatte"],
    ["Housing Project", gohagoda, "Gohagoda"],
    ["International School Project", international_school, "-"],
    [
      "Industrial Zone Building Project",
      balagolla_industrial_zone,
      "Balagolla",
    ],
    ["Housing Project", mahaiyawa, "Mahaiyawa"],
    ["Housing Project", thennekumbura, "Thennekumbura"],
    ["Housing Project", udaperadeniya, "Udaperadeniya"],
    ["Hotel Construction Project", rajapihilla_hotel, "Rajapihilla Mawatha"],
    ["Housing Project #3", ranawana_3, "Ranawana"],
    ["Commercial Building Project", padiyapelella, "Padiyapelella"],
    ["Commercial Building Project", pallekele, "Pallekele"],
    ["Housing Project", mapanawathura, "Mapanawathura"],
  ];

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
            {completedProjects.map((project, index) => (
              <CardType1
                key={index}
                cardHeader={project[0]}
                cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
                cardText1={project[2]}
                cardText1Classes={
                  "uppercase text-xs g-font-2 tracking-widest p-1"
                }
                cardImage={project[1]}
                cardImageClasses={"h-[400px]"}
                btnText={"nobtn"}
                extraClasses={"w-[300px] h-fit py-1 gap-3"}
              />
            ))}
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
            {ongoingProjects.map((project, index) => (
              <CardType1
                key={index}
                cardHeader={project[0]}
                cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
                cardText1={project[2]}
                cardText1Classes={
                  "uppercase text-xs g-font-2 tracking-widest p-1"
                }
                cardImage={project[1]}
                cardImageClasses={"h-[400px]"}
                btnText={"nobtn"}
                extraClasses={"w-[300px] h-fit py-1 gap-3"}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomeSection3;
