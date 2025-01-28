import { useState } from "react";
import { useEffect } from "react";

import Button from "./components/Button";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import ProjectImageLoader from "./components/ProjectImageLoader";

// images for proj cards
import haragama_housing from "./images/projects/completed/haragama_housing.jpg";
import nuwara_eliya_housing from "./images/projects/completed/nuwara_eliya_housing.jpg";
import housing_kandy from "./images/projects/completed/housing_kandy.jpg";
import abathenna_housing from "./images/projects/completed/abathenna_housing.jpg";
import wells_park_kandy from "./images/projects/completed/wells_park_kandy.jpg";
import ranawana_housing from "./images/projects/completed/ranawana_housing.jpg";
import hantana_2_housing from "./images/projects/completed/hantana_2_housing.jpg";
import katugastota_2_housing from "./images/projects/completed/katugastota_2_housing.jpg";
import wattaranthenna_housing from "./images/projects/completed/wattaranthenna_housing.jpg";
import nugawela_housing from "./images/projects/completed/nugawela_housing.jpg";
import kengalla_housing from "./images/projects/completed/kengalla_housing.jpg";
import hantana_1_housing from "./images/projects/completed/hantana_1_housing.jpg";
import ranawana_eco_housing from "./images/projects/completed/ranawana_eco_housing.jpg";
import heerasgala_housing from "./images/projects/completed/heerasgala_housing.jpg";
import nittabuwa_three_story from "./images/projects/completed/nittabuwa_three_story.jpg";
import iriyagama_housing from "./images/projects/completed/iriyagama_housing.jpg";
import dodamwala_three_story from "./images/projects/completed/dodamwala_three_story.jpg";
import mahaiyawa_2_story from "./images/projects/completed/mahaiyawa_2_story.jpg";
import lewella_2_story from "./images/projects/completed/lewella_2_story.jpg";
import aniwatta_2_story from "./images/projects/completed/aniwatta_2_story.jpg";
import kundasale_housing from "./images/projects/completed/kundasale_housing.jpg";
import katugastota_hotel from "./images/projects/ongoing/katugastota_hotel.jpg";
import kandy_school from "./images/projects/ongoing/kandy-school.jpg";
import ranawana_eco_2 from "./images/projects/ongoing/ranawana-eco-2.jpg";
import katugastota from "./images/projects/ongoing/katugastota.jpg";
import nugawela from "./images/projects/ongoing/nugawela.jpg";
import kurunegala from "./images/projects/ongoing/kurunegala.jpg";
import pinnawala from "./images/projects/ongoing/pinnawala.jpg";
import haragama from "./images/projects/ongoing/haragama.jpg";
import hantana_3 from "./images/projects/ongoing/hantana-3.jpg";
import digana from "./images/projects/ongoing/digana.jpg";
import balagolla from "./images/projects/ongoing/balagolla.jpg";
import polgolla from "./images/projects/ongoing/polgolla.jpg";
import aniwatte from "./images/projects/ongoing/aniwatte.jpg";
import gohagoda from "./images/projects/ongoing/gohagoda.jpg";
import international_school from "./images/projects/ongoing/international-school.jpg";
import balagolla_industrial_zone from "./images/projects/ongoing/balagolla-industrial-zone.jpg";
import mahaiyawa from "./images/projects/ongoing/mahaiyawa.jpg";
import thennekumbura from "./images/projects/ongoing/thennekumbura.jpg";
import udaperadeniya from "./images/projects/ongoing/udaperadeniya.jpg";
import rajapihilla_hotel from "./images/projects/ongoing/rajapihilla-hotel.jpg";
import ranawana_3 from "./images/projects/ongoing/ranawana-3.jpg";
import padiyapelella from "./images/projects/ongoing/padiyapelella.jpg";
import pallekele from "./images/projects/ongoing/pallekele.jpg";
import mapanawathura from "./images/projects/ongoing/mapanawathura.jpg";
import gunawardana from "./images/projects/ongoing/gunawardana.jpg";

export default function Projects({ projType }) {
  // filter proj type
  const handleLaunchFilter = (Filter) => {
    const launchSpans = document.querySelectorAll(".launch-span");
    const coming_soons = document.querySelectorAll(".coming-soon");
    const avaiable_nows = document.querySelectorAll(".now-available");

    // Reset the background color of all elements with the className "launch-span"
    launchSpans.forEach((element) => {
      element.style.background = "white";
      element.style.color = "#1e3a8a";
    });

    // Select the target element and change its background if it exists
    const targetElement = document.getElementById(`launchSpan-${Filter}`);
    if (targetElement) {
      targetElement.style.background = "#1e3a8a"; // Ensure valid color with #
      targetElement.style.color = "white";
    } else {
      console.warn(`Element with ID launchSpan-${Filter} not found.`);
    }

    switch (Filter) {
      case 1:
        // Additional code for Filter 1 if needed
        coming_soons.forEach((element) => {
          element.style.display = "flex";
        });
        avaiable_nows.forEach((element) => {
          element.style.display = "flex";
        });
        break;
      case 2:
        // Additional code for Filter 2 if needed
        coming_soons.forEach((element) => {
          element.style.display = "flex";
        });
        avaiable_nows.forEach((element) => {
          element.style.display = "none";
        });
        break;
      case 3:
        // Additional code for Filter 3 if needed
        coming_soons.forEach((element) => {
          element.style.display = "none";
        });
        avaiable_nows.forEach((element) => {
          element.style.display = "flex";
        });
        break;
      default:
        break;
    }
  };
  // selected proj (for image gallery modal)
  const [selectedProject, setSelectedProject] = useState(0);

  // completed projects array (for cards)
  const completedProjects = [
    ["Haragama Housing Project", haragama_housing, "Project Description"],
    [
      "Nuwara Eliya Housing Project",
      nuwara_eliya_housing,
      "Project Description",
    ],
    ["Kandy City Housing Project", housing_kandy, "Project Description"],
    ["Abathenna Housing Project", abathenna_housing, "Project Description"],
    ["Wells Park Site - Kandy", wells_park_kandy, "Project Description"],
    ["Ranawana Housing Project", ranawana_housing, "Project Description"],
    [
      "Hantana (Site 2) Housing Project",
      hantana_2_housing,
      "Project Description",
    ],
    [
      "Katugastota Housing Project (Site 2)",
      katugastota_2_housing,
      "Project Description",
    ],
    [
      "Wattaranthenna Housing Project",
      wattaranthenna_housing,
      "Project Description",
    ],
    ["Nugawela Housing Project", nugawela_housing, "Project Description"],
    ["Kengalla Housing Project", kengalla_housing, "Project Description"],
    [
      "Hantana (Site 1) Housing Project",
      hantana_1_housing,
      "Project Description",
    ],
    [
      "Ranawana Eco-Friendly Hotel",
      ranawana_eco_housing,
      "Project Description",
    ],
    ["Heerassagala Housing Project", heerasgala_housing, "Project Description"],
    [
      "Nittabuwa Three Story House",
      nittabuwa_three_story,
      "Project Description",
    ],
    ["Iriyagama Housing Project", iriyagama_housing, "Project Description"],
    [
      "Dodamwala Three Story House",
      dodamwala_three_story,
      "Project Description",
    ],
    ["Mahaiyawa Two Story House", mahaiyawa_2_story, "Project Description"],
    ["Lewella Two Story House", lewella_2_story, "Project Description"],
    ["Aniwatta Two Story House", aniwatta_2_story, "Project Description"],
    ["Kundasale Housing Project", kundasale_housing, "Project Description"],
  ];

  // ongoing projects array (for cards)
  const ongoingProjects = [
    ["A Hotel at Katugastota", katugastota_hotel, "Project Description"],
    ["Kandy School Project", kandy_school, "Project Description"],
    ["Ranawana Eco Housing Project #2", ranawana_eco_2, "Project Description"],
    ["Katugastota Housing Project", katugastota, "Project Description"],
    ["Nugawela Construction Project", nugawela, "Project Description"],
    ["Kurunegala Construction Project", kurunegala, "Project Description"],
    ["Pinnawala Housing Project", pinnawala, "Project Description"],
    ["Haragama Housing Project", haragama, "Project Description"],
    ["Hantana Housing Project 3", hantana_3, "Project Description"],
    ["Digana Housing Project", digana, "Project Description"],
    ["Balagolla Housing Project", balagolla, "Project Description"],
    ["Polgolla Housing Project", polgolla, "Project Description"],
    ["Aniwatte Housing Project", aniwatte, "Project Description"],
    ["Gohagoda Housing Project", gohagoda, "Project Description"],
    [
      "International School Project",
      international_school,
      "Project Description",
    ],
    [
      "Balagolla Industrial Zone Building Project",
      balagolla_industrial_zone,
      "Project Description",
    ],
    ["Mahaiyawa Housing Project", mahaiyawa, "Project Description"],
    ["Thennekumbura Housing Project", thennekumbura, "Project Description"],
    ["Udaperadeniya Housing Project", udaperadeniya, "Project Description"],
    [
      "Rajapihilla Mawatha Hotel Construction Project",
      rajapihilla_hotel,
      "Project Description",
    ],
    ["Ranawana Housing Project #3", ranawana_3, "Project Description"],
    [
      "Padiyapelella Commercial Building Project",
      padiyapelella,
      "Project Description",
    ],
    ["Pallekele Commercial Building Project", pallekele, "Project Description"],
    ["Mapanawathura Housing Project", mapanawathura, "Project Description"],
    ["Mr. Gunawardana's Project", gunawardana, "Project Description"],
  ];

  // completed proj gallery array (for modal)
  const haraHouseImages = ProjectImageLoader({ neededProjectName: "haraHouseImages" });
  const nuwEliyaHouseImages = ProjectImageLoader({ neededProjectName: "nuwEliyaHouseImages" });
  const kandyHouseImages = ProjectImageLoader({ neededProjectName: "kandyHouseImages" });
  const abathennaHouseImages = ProjectImageLoader({ neededProjectName: "abathennaHouseImages" });
  const wellsParkImages = ProjectImageLoader({ neededProjectName: "wellsParkImages" });
  const ranawanaHousingImages = ProjectImageLoader({ neededProjectName: "ranawanaHousingImages" });
  const hantana2HousingImages = ProjectImageLoader({ neededProjectName: "hantana2HousingImages" });
  const katugastota2HousingImages = ProjectImageLoader({ neededProjectName: "katugastota2HousingImages" });
  const wattaranthennaHousingImages = ProjectImageLoader({ neededProjectName: "wattaranthennaHousingImages" });
  const nugawelaHousingImages = ProjectImageLoader({ neededProjectName: "nugawelaHousingImages" });
  const kengallaHousingImages = ProjectImageLoader({ neededProjectName: "kengallaHousingImages" });
  const hantana1HousingImages = ProjectImageLoader({ neededProjectName: "hantana1HousingImages" });
  const ranawanaEcoImages = ProjectImageLoader({ neededProjectName: "ranawanaEcoImages" });
  const heerasgalaHousingImages = ProjectImageLoader({ neededProjectName: "heerasgalaHousingImages" });
  const nittabuwa3StoryHousingImages = ProjectImageLoader({ neededProjectName: "nittabuwa3StoryHousingImages" });
  const iriyagamaHousingImages = ProjectImageLoader({ neededProjectName: "iriyagamaHousingImages" });
  const dodamwala3StoryHousingImages = ProjectImageLoader({ neededProjectName: "dodamwala3StoryHousingImages" });
  const mahaiyawa2StoryHousingImages = ProjectImageLoader({ neededProjectName: "mahaiyawa2StoryHousingImages" });
  const lewella2StoryHousingImages = ProjectImageLoader({ neededProjectName: "lewella2StoryHousingImages" });
  const aniwatta2StoryHousingImages = ProjectImageLoader({ neededProjectName: "aniwatta2StoryHousingImages" });
  const kundasaleHousingImages = ProjectImageLoader({ neededProjectName: "kundasaleHousingImages" });

  // ongoing proj gallery array (for modal) *
  const katugastotaHotelImages = ProjectImageLoader({ neededProjectName: "katugastotaHotelImages" });
  const polgollaImages = ProjectImageLoader({ neededProjectName: "polgollaImages" });
  const aniwatteImages = ProjectImageLoader({ neededProjectName: "aniwatteImages" });
  const gohagodaImages = ProjectImageLoader({ neededProjectName: "gohagodaImages" });
  const kurunegalaImages = ProjectImageLoader({ neededProjectName: "kurunegalaImages" });
  const balagollaImages = ProjectImageLoader({ neededProjectName: "balagollaImages" });
  const gunawardanaImages = ProjectImageLoader({ neededProjectName: "gunawardanaImages" });

  // useEffet for pressing filter buttons on load
  useEffect(() => {
    // Select the button based on projType
    const buttonId = `launchSpan-${projType}`;
    const button = document.getElementById(buttonId);

    if (button) {
      button.click(); // Simulate a button press
    }
  }, [projType]);

  return (
    <>
      <div className="flex w-full">
        <Sidebar></Sidebar>
        <div className="flex flex-col w-[100dvw] h-full">
          {/*nav*/}
          <div className="p-1 border-b-[1px] border-b-gray-300">
            <Nav theme={"dark"}></Nav>
          </div>
          {/*title + text + filter btns*/}
          <div className="flex flex-col gap-10 p-4 py-16">
            <h1 className="text-5xl uppercase">Projects</h1>
            <p className="text-lg g-font-1">
              At NCI Homes, we take pride in turning dreams into reality.
              Explore our portfolio of recently completed and Ongoing projects
              that showcase our dedication to quality, innovation, and
              excellence in construction. From modern homes to commercial
              spaces, each project reflects our commitment to delivering
              exceptional craftsmanship and tailored solutions to meet our
              clients' unique needs.
            </p>
            {/*all, completed, ongoing buttons*/}
            <div className="inline-flex gap-6 max-sm:flex-col">
              <span
                id="launchSpan-1"
                onClick={() => handleLaunchFilter(1)} // Wrap in an arrow function to call only on click
                className="launch-span cursor-pointer flex justify-center text-white bg-blue-900 border-[1px] border-gray-400 uppercase g-font-2 font-semibold text-xs tracking-widest p-3 px-8 rounded-full min-w-[100px]"
              >
                All
              </span>
              <span
                id="launchSpan-2"
                onClick={() => handleLaunchFilter(2)} // Wrap in an arrow function
                className="launch-span cursor-pointer flex justify-center text-blue-900 bg-white border-[1px] border-gray-400 uppercase g-font-2 font-semibold text-xs tracking-widest p-3 px-8 rounded-full min-w-[100px]"
              >
                Completed Projects (21)
              </span>
              <span
                id="launchSpan-3"
                onClick={() => handleLaunchFilter(3)} // Wrap in an arrow function
                className="launch-span cursor-pointer flex justify-center text-blue-900 bg-white border-[1px] border-gray-400 uppercase g-font-2 font-semibold text-xs tracking-widest p-3 px-8 rounded-full min-w-[100px]"
              >
                Ongoing Projects (25)
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*card container*/}
      <div className="grid w-full grid-cols-4 gap-1 px-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:h-full">
        {/*completed map*/}
        {completedProjects.map((project, index) => (
          <div
            className="relative overflow-hidden bg-gray-300 group coming-soon vintage-green"
            key={index}
          >
            <img
              src={project[1]}
              alt={project[1]}
              className="object-cover w-full h-full"
            />

            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold 
      opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out 
      group-hover:inset-[10px]"
            >
              <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-xl font-semibold text-center uppercase">
                  {project[0]}
                </h1>
                <p className="hidden w-full g-font-1">{project[2]}</p>
                <Button
                  displayText={"View More Details"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  onClick={() => {
                    setSelectedProject(index);
                    document.getElementById("my_modal_3").showModal();
                  }}
                  width={"fit"}
                ></Button>
              </div>
            </div>
          </div>
        ))}
        {/*ongoing map*/}
        {ongoingProjects.map((project, index) => (
          <div
            className="relative overflow-hidden bg-gray-300 group now-available vintage-green"
            key={index + 21}
          >
            <img
              src={project[1]}
              alt={project[1]}
              className="object-cover w-full h-full"
            />

            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold 
    opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out 
    group-hover:inset-[10px]"
            >
              <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-xl font-semibold text-center uppercase">
                  {project[0]}
                </h1>
                <p className="hidden w-full g-font-1">{project[2]}</p>
                <Button
                  displayText={"View More Details"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  onClick={() => {
                    setSelectedProject(index + 21);
                    document.getElementById("my_modal_3").showModal();
                  }}
                  width={"fit"}
                ></Button>
              </div>
            </div>
          </div>
        ))}
        {/*image modal*/}
        <dialog id="my_modal_3" className="modal">
          <div className="w-11/12 max-w-5xl modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                ✕
              </button>
            </form>
            <div className="grid grid-cols-3 gap-6 pt-6 max-md:grid-cols-2 max-sm:grid-cols-1 vintage-green">
              {selectedProject === 0
                ? haraHouseImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Haragama Housing Image ${index}`}
                      className="h-[300px] w-full object-cover"
                    />
                  ))
                : selectedProject === 1
                  ? nuwEliyaHouseImages.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`Nuwara Eliya Housing Image ${index}`}
                        className="h-[300px] w-full object-cover"
                      />
                    ))
                  : selectedProject === 2
                    ? kandyHouseImages.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`Kandy Housing Image ${index}`}
                          className="h-[300px] w-full object-cover"
                        />
                      ))
                    : selectedProject === 3
                      ? abathennaHouseImages.map((src, index) => (
                          <img
                            key={index}
                            src={src}
                            alt={`Abathenna Housing Image ${index}`}
                            className="h-[300px] w-full object-cover"
                          />
                        ))
                      : selectedProject === 4
                        ? wellsParkImages.map((src, index) => (
                            <img
                              key={index}
                              src={src}
                              alt={`Wells Park Image ${index}`}
                              className="h-[300px] w-full object-cover"
                            />
                          ))
                        : selectedProject === 5
                          ? ranawanaHousingImages.map((src, index) => (
                              <img
                                key={index}
                                src={src}
                                alt={`Ranawana Housing Image ${index}`}
                                className="h-[300px] w-full object-cover"
                              />
                            ))
                          : selectedProject === 6
                            ? hantana2HousingImages.map((src, index) => (
                                <img
                                  key={index}
                                  src={src}
                                  alt={`Hantana Site 2 Housing Image ${index}`}
                                  className="h-[300px] w-full object-cover"
                                />
                              ))
                            : selectedProject === 7
                              ? katugastota2HousingImages.map((src, index) => (
                                  <img
                                    key={index}
                                    src={src}
                                    alt={`Katugastota Site 2 Housing Image ${index}`}
                                    className="h-[300px] w-full object-cover"
                                  />
                                ))
                              : selectedProject === 8
                                ? wattaranthennaHousingImages.map(
                                    (src, index) => (
                                      <img
                                        key={index}
                                        src={src}
                                        alt={`Wattaranthenna Housing Image ${index}`}
                                        className="h-[300px] w-full object-cover"
                                      />
                                    )
                                  )
                                : selectedProject === 9
                                  ? nugawelaHousingImages.map((src, index) => (
                                      <img
                                        key={index}
                                        src={src}
                                        alt={`Nugawela Housing Image ${index}`}
                                        className="h-[300px] w-full object-cover"
                                      />
                                    ))
                                  : selectedProject === 10
                                    ? kengallaHousingImages.map(
                                        (src, index) => (
                                          <img
                                            key={index}
                                            src={src}
                                            alt={`Kengalla Housing Image ${index}`}
                                            className="h-[300px] w-full object-cover"
                                          />
                                        )
                                      )
                                    : selectedProject === 11
                                      ? hantana1HousingImages.map(
                                          (src, index) => (
                                            <img
                                              key={index}
                                              src={src}
                                              alt={`Hantana 1 Housing Image ${index}`}
                                              className="h-[300px] w-full object-cover"
                                            />
                                          )
                                        )
                                      : selectedProject === 12
                                        ? ranawanaEcoImages.map(
                                            (src, index) => (
                                              <img
                                                key={index}
                                                src={src}
                                                alt={`Ranawana Eco Friendly Housing Image ${index}`}
                                                className="h-[300px] w-full object-cover"
                                              />
                                            )
                                          )
                                        : selectedProject === 13
                                          ? heerasgalaHousingImages.map(
                                              (src, index) => (
                                                <img
                                                  key={index}
                                                  src={src}
                                                  alt={`Heerasgala Housing Image ${index}`}
                                                  className="h-[300px] w-full object-cover"
                                                />
                                              )
                                            )
                                          : selectedProject === 14
                                            ? nittabuwa3StoryHousingImages.map(
                                                (src, index) => (
                                                  <img
                                                    key={index}
                                                    src={src}
                                                    alt={`Nittabuwa 3 Story House Image ${index}`}
                                                    className="h-[300px] w-full object-cover"
                                                  />
                                                )
                                              )
                                            : selectedProject === 15
                                              ? iriyagamaHousingImages.map(
                                                  (src, index) => (
                                                    <img
                                                      key={index}
                                                      src={src}
                                                      alt={`Iriyagama House Image ${index}`}
                                                      className="h-[300px] w-full object-cover"
                                                    />
                                                  )
                                                )
                                              : selectedProject === 16
                                                ? dodamwala3StoryHousingImages.map(
                                                    (src, index) => (
                                                      <img
                                                        key={index}
                                                        src={src}
                                                        alt={`Dodamwala House Image ${index}`}
                                                        className="h-[300px] w-full object-cover"
                                                      />
                                                    )
                                                  )
                                                : selectedProject === 17
                                                  ? mahaiyawa2StoryHousingImages.map(
                                                      (src, index) => (
                                                        <img
                                                          key={index}
                                                          src={src}
                                                          alt={`Mahaiyawa House Image ${index}`}
                                                          className="h-[300px] w-full object-cover"
                                                        />
                                                      )
                                                    )
                                                  : selectedProject === 18
                                                    ? lewella2StoryHousingImages.map(
                                                        (src, index) => (
                                                          <img
                                                            key={index}
                                                            src={src}
                                                            alt={`Lewelle House Image ${index}`}
                                                            className="h-[300px] w-full object-cover"
                                                          />
                                                        )
                                                      )
                                                    : selectedProject === 19
                                                      ? aniwatta2StoryHousingImages.map(
                                                          (src, index) => (
                                                            <img
                                                              key={index}
                                                              src={src}
                                                              alt={`Aniwatta House Image ${index}`}
                                                              className="h-[300px] w-full object-cover"
                                                            />
                                                          )
                                                        )
                                                      : selectedProject === 20
                                                        ? kundasaleHousingImages.map(
                                                            (src, index) => (
                                                              <img
                                                                key={index}
                                                                src={src}
                                                                alt={`Kundasale House Image ${index}`}
                                                                className="h-[300px] w-full object-cover"
                                                              />
                                                            )
                                                          )
                                                        : selectedProject === 21
                                                          ? katugastotaHotelImages.map(
                                                              (src, index) => (
                                                                <img
                                                                  key={index}
                                                                  src={src}
                                                                  alt={`Katugastota Hotel Image ${index}`}
                                                                  className="h-[300px] w-full object-cover"
                                                                />
                                                              )
                                                            )
                                                          : selectedProject ===
                                                              26
                                                            ? kurunegalaImages.map(
                                                                (
                                                                  src,
                                                                  index
                                                                ) => (
                                                                  <img
                                                                    key={index}
                                                                    src={src}
                                                                    alt={`Kurunegala Image ${index}`}
                                                                    className="h-[300px] w-full object-cover"
                                                                  />
                                                                )
                                                              )
                                                            : selectedProject ===
                                                                31
                                                              ? balagollaImages.map(
                                                                  (
                                                                    src,
                                                                    index
                                                                  ) => (
                                                                    <img
                                                                      key={
                                                                        index
                                                                      }
                                                                      src={src}
                                                                      alt={`Balagolla Image ${index}`}
                                                                      className="h-[300px] w-full object-cover"
                                                                    />
                                                                  )
                                                                )
                                                              : selectedProject ===
                                                                  32
                                                                ? polgollaImages.map(
                                                                    (
                                                                      src,
                                                                      index
                                                                    ) => (
                                                                      <img
                                                                        key={
                                                                          index
                                                                        }
                                                                        src={
                                                                          src
                                                                        }
                                                                        alt={`Polgolla Image ${index}`}
                                                                        className="h-[300px] w-full object-cover"
                                                                      />
                                                                    )
                                                                  )
                                                                : selectedProject ===
                                                                    33
                                                                  ? aniwatteImages.map(
                                                                      (
                                                                        src,
                                                                        index
                                                                      ) => (
                                                                        <img
                                                                          key={
                                                                            index
                                                                          }
                                                                          src={
                                                                            src
                                                                          }
                                                                          alt={`Aniwatte Image ${index}`}
                                                                          className="h-[300px] w-full object-cover"
                                                                        />
                                                                      )
                                                                    )
                                                                  : selectedProject ===
                                                                      34
                                                                    ? gohagodaImages.map(
                                                                        (
                                                                          src,
                                                                          index
                                                                        ) => (
                                                                          <img
                                                                            key={
                                                                              index
                                                                            }
                                                                            src={
                                                                              src
                                                                            }
                                                                            alt={`Gohagoda Image ${index}`}
                                                                            className="h-[300px] w-full object-cover"
                                                                          />
                                                                        )
                                                                      )
                                                                    : selectedProject ===
                                                                        45
                                                                      ? gunawardanaImages.map(
                                                                          (
                                                                            src,
                                                                            index
                                                                          ) => (
                                                                            <img
                                                                              key={
                                                                                index
                                                                              }
                                                                              src={
                                                                                src
                                                                              }
                                                                              alt={`Gunawardana Image ${index}`}
                                                                              className="h-[300px] w-full object-cover"
                                                                            />
                                                                          )
                                                                        )
                                                                      : ""}
            </div>
            <div className="grid grid-cols-1 vintage-green">
              {selectedProject === 22 ? (
                <img
                  src={kandy_school}
                  alt={`Kandy School Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 23 ? (
                <img
                  src={ranawana_eco_2}
                  alt={`Ranawana Eco 2 Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 24 ? (
                <img
                  src={katugastota}
                  alt={`Katugastota Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 25 ? (
                <img
                  src={nugawela}
                  alt={`Nugawela Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 27 ? (
                <img
                  src={pinnawala}
                  alt={`Pinnawala Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 28 ? (
                <img
                  src={haragama}
                  alt={`Haragama Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 29 ? (
                <img
                  src={hantana_3}
                  alt={`Hantana 3 Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 30 ? (
                <img
                  src={digana}
                  alt={`Digana Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 35 ? (
                <img
                  src={international_school}
                  alt={`International School Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 36 ? (
                <img
                  src={balagolla_industrial_zone}
                  alt={`Industrial Zone Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 37 ? (
                <img
                  src={mahaiyawa}
                  alt={`Mahaiyawa Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 38 ? (
                <img
                  src={thennekumbura}
                  alt={`Thennekumbura Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 39 ? (
                <img
                  src={udaperadeniya}
                  alt={`Udaperadeniya Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 40 ? (
                <img
                  src={rajapihilla_hotel}
                  alt={`Rajapihilla Hotel Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 41 ? (
                <img
                  src={ranawana_3}
                  alt={`Ranawana 3 Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 42 ? (
                <img
                  src={padiyapelella}
                  alt={`Padiyapelella Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 43 ? (
                <img
                  src={pallekele}
                  alt={`Pallekele Image`}
                  className="object-cover w-full"
                />
              ) : selectedProject === 44 ? (
                <img
                  src={mapanawathura}
                  alt={`Mapanawathura Image`}
                  className="object-cover w-full"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </dialog>
      </div>
      <Footer></Footer>
    </>
  );
} //
