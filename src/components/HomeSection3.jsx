import CardType4 from "./CardType4";
import { Link } from "wouter";
import React, { useRef } from "react";

// all projects
import wells_park_kandy from "./../images/projects/completed/wells_park_kandy.jpg";
import ranawana_housing from "./../images/projects/completed/ranawana_housing.jpg";
import hantana_2_housing from "./../images/projects/completed/hantana_2_housing.jpg";
import katugastota_2_housing from "./../images/projects/completed/katugastota_2_housing.jpg";
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
import international_school from "./../images/projects/ongoing/international-school.jpg";
import balagolla_industrial_zone from "./../images/projects/ongoing/balagolla-industrial-zone.jpg";
import mahaiyawa from "./../images/projects/ongoing/mahaiyawa.jpg";
import rajapihilla_hotel from "./../images/projects/ongoing/rajapihilla-hotel.jpg";
import ranawana_3 from "./../images/projects/ongoing/ranawana-3.jpg";
import padiyapelella from "./../images/projects/ongoing/padiyapelella.jpg";
import pallekele from "./../images/projects/ongoing/pallekele.jpg";
import mapanawathura from "./../images/projects/ongoing/mapanawathura.jpg";
import gunawardana from "./../images/projects/ongoing/gunawardana.jpg";

function HomeSection3() {
  const scrollContainerRef = useRef(null);
  const scrollContainerRef2 = useRef(null);

  // completed projects array (for cards)
  const completedProjects = [
    ["Kandy", wells_park_kandy, "Wells Park Site"],
    ["Housing Project", ranawana_housing, "Ranawana"],
    ["Eco-Friendly House", ranawana_eco_housing, "Ranawana"],
    ["Housing Project", heerasgala_housing, "Heerassagala"],
    ["Three Story House", nittabuwa_three_story, "Nittabuwa"],
    ["Housing Project", iriyagama_housing, "Iriyagama"],
    ["Three Story House", dodamwala_three_story, "Dodamwala"],
    ["Housing Project", hantana_2_housing, "Hantana (Site 2)"],
    ["Two Story House", mahaiyawa_2_story, "Mahaiyawa"],
    ["Housing Project", kengalla_housing, "Kengalla"],
    ["Two Story House", lewella_2_story, "Lewella"],
    ["Housing Project", katugastota_2_housing, "Katugastota (Site 2)"],
    ["Two Story House", aniwatta_2_story, "Aniwatta"],
    ["Housing Project", hantana_1_housing, "Hantana (Site 1)"],
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
    ["International School Project", international_school, "-"],
    [
      "Industrial Zone Building Project",
      balagolla_industrial_zone,
      "Balagolla",
    ],
    ["Housing Project", mahaiyawa, "Mahaiyawa"],
    ["Hotel Construction Project", rajapihilla_hotel, "Rajapihilla Mawatha"],
    ["Housing Project #3", ranawana_3, "Ranawana"],
    ["Commercial Building Project", padiyapelella, "Padiyapelella"],
    ["Commercial Building Project", pallekele, "Pallekele"],
    ["Housing Project", mapanawathura, "Mapanawathura"],
    ["Mr. Gunawardana's Project", gunawardana, "-"],
  ];

  return (
    <div className="flex items-center justify-center px-3 py-3 text-white bg-gray-800">
      <div className="flex flex-col w-full gap-3">
        <span className="flex items-center gap-5 text-xs tracking-widest text-gray-200 uppercase g-font-2">
          Projects
          <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
        </span>
        <span className="flex items-center justify-between">
          <h1 className="text-5xl leading-snug uppercase max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
            Completed Projects
          </h1>
        </span>
        <div className="grid grid-cols-5 gap-6 max-md:grid-cols-3 max-sm:grid-cols-1">
          {completedProjects.map((project, index) => (
            <CardType4
              key={index}
              cardHeader={project[0]}
              cardHeaderClasses={"text-lg"}
              cardText1={project[2]}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={project[1]}
              cardImageClasses={""}
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
        <span className="flex items-center justify-between py-3">
          <h1 className="text-5xl leading-snug uppercase max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
            Ongoing Projects
          </h1>
        </span>
        <div className="grid grid-cols-5 gap-6 max-md:grid-cols-3 max-sm:grid-cols-1">
          {ongoingProjects.map((project, index) => (
            <CardType4
              key={index}
              cardHeader={project[0]}
              cardHeaderClasses={"text-lg"}
              cardText1={project[2]}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={project[1]}
              cardImageClasses={""}
              btnText={"nobtn"}
              extraClasses={""}
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
