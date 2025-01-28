import CardType4 from "./CardType4";
import { Link } from "wouter";
import React, { useRef } from "react";
import Carousel from "./Carousel";
import ProjectImageLoader from "./ProjectImageLoader";

// all projects
import kurunegala from "./../images/projects/ongoing/kurunegala.jpg";
import balagolla_industrial_zone from "./../images/projects/ongoing/balagolla-industrial-zone.jpg";
import gunawardana from "./../images/projects/ongoing/gunawardana.jpg";

function HomeSection3() {
  const scrollContainerRef = useRef(null);
  const scrollContainerRef2 = useRef(null);

  // completed projects array (for cards)
  const completedProjects = [
    ["Kandy", "wellsParkImages", "Wells Park Site"],
    ["Housing Project", "ranawanaHousingImages", "Ranawana"],
    ["Eco-Friendly Hotel", "ranawanaEcoImages", "Ranawana"],
    ["Housing Project", "heerasgalaHousingImages", "Heerassagala"],
    ["Three Story House", "nittabuwa3StoryHousingImages", "Nittabuwa"],
    ["Housing Project", "iriyagamaHousingImages", "Iriyagama"],
    ["Three Story House", "dodamwala3StoryHousingImages", "Dodamwala"],
    ["Housing Project", "hantana2HousingImages", "Hantana (Site 2)"],
    ["Two Story House", "mahaiyawa2StoryHousingImages", "Mahaiyawa"],
    ["Housing Project", "ranawanaHousingImages", "Ranawana"],
    ["Housing Project", "kengallaHousingImages", "Kengalla"],
    ["Two Story House", "lewella2StoryHousingImages", "Lewella"],
    ["Housing Project", "katugastota2HousingImages", "Katugastota (Site 2)"],
    ["Kandy City Housing Project", "kandyHouseImages", "Kandy"],
    ["Housing Project", "hantana1HousingImages", "Hantana (Site 1)"],
    ["Housing Project", "kundasaleHousingImages", "Kundasale"],
  ];

  // ongoing projects array (for cards)
  const ongoingProjects = [
    ["A Hotel", "katugastotaHotelImages", "Katugastota"],
    ["A School Project", "kandy_school", "Kandy"],
    ["Eco Housing Project #2", "ranawana_eco_2", "Ranawana"],
    ["Housing Project", "katugastota", "Katugastota"],
    ["Construction Project", "nugawela", "Nugawela"],
    ["Construction Project", "kurunegalaImages", "Kurunegala"],
    ["International School Project", "international_school", "-"],
    [
      "Industrial Zone Building Project",
      "balagollaImages",
      "Balagolla",
    ],
    ["Housing Project", "mahaiyawa", "Mahaiyawa"],
    ["Hotel Construction Project", "rajapihilla_hotel", "Rajapihilla Mawatha"],
    ["Housing Project #3", "ranawana_3", "Ranawana"],
    ["Housing Project", "polgollaImages", "Polgolla"],
    ["Commercial Building Project", "padiyapelella", "Padiyapelella"],
    ["Commercial Building Project", "pallekele", "Pallekele"],
    ["Housing Project", "mapanawathura", "Mapanawathura"],
    ["Mr. Gunawardana's Project", "gunawardanaImages", "-"],
  ];

  return (
    <div className="flex items-center justify-center pb-3 text-white bg-gray-800">
      <div className="flex flex-col w-full gap-3">
        <span className="items-center hidden gap-5 text-xs tracking-widest text-gray-200 uppercase g-font-2">
          Projects
          <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
        </span>
        <span className="flex items-center justify-between">
          <h1 className="w-full py-3 text-5xl leading-snug text-center text-gray-800 uppercase bg-white max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
            Completed Projects
          </h1>
        </span>
        <div className="grid grid-cols-1 gap-3 p-3 futura sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {completedProjects.map((project, index) => (
            <CardType4
              key={index}
              cardHeader={project[0]}
              cardHeaderClasses={"lg:text-lg"}
              cardText1={project[2]}
              cardText1Classes={"uppercase text-xs g-font-2 tracking-widest"}
              cardProject={project[1]}
              btnText={"nobtn"}
              extraClasses={""}
            />
          ))}
        </div>
        <span className="flex justify-center w-full py-3 border-y">
          <Link href="/projects/2" className={"underline underline-offset-4"}>
            View All
          </Link>
        </span>
        <span className="flex items-center justify-between">
          <h1 className="w-full py-3 text-5xl leading-snug text-center text-gray-800 uppercase bg-white max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
            Ongoing Projects
          </h1>
        </span>
        <div className="grid grid-cols-1 gap-3 p-3 py-6 futura sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          
          {ongoingProjects.map((project, index) => (
            <CardType4
              key={index}
              cardHeader={project[0]}
              cardHeaderClasses={"lg:text-lg"}
              cardText1={project[2]}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardProject={project[1]}
              btnText={"nobtn"}
            />
          ))}
            
        </div>
        
        <span className="flex justify-center w-full py-3 border-y">
          <Link href="/projects/3" className={"underline underline-offset-4"}>
            View All
          </Link>
        </span>
      </div>
    </div>
  );
}

export default HomeSection3;
