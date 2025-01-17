import { useState } from "react";
import { useEffect } from "react";

import Button from "./components/Button";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

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

// image galleries of completed projects
const hara_hou_grid = import.meta.glob(
  "./images/projects/completed/haragama_housing/*.{png,jpg,jpeg,svg}"
);
const nuw_eliya_hou_grid = import.meta.glob(
  "./images/projects/completed/nuwara_eliya_housing/*.{png,jpg,jpeg,svg}"
);
const kandy_hou_grid = import.meta.glob(
  "./images/projects/completed/housing_kandy/*.{png,jpg,jpeg,svg}"
);
const abathenna_hou_grid = import.meta.glob(
  "./images/projects/completed/abathenna_housing/*.{png,jpg,jpeg,svg}"
);
const wells_park_grid = import.meta.glob(
  "./images/projects/completed/wells_park_kandy/*.{png,jpg,jpeg,svg}"
);
const ranawana_hou_grid = import.meta.glob(
  "./images/projects/completed/ranawana_housing/*.{png,jpg,jpeg,svg}"
);
const hantana_2_hou_grid = import.meta.glob(
  "./images/projects/completed/hantana_2_housing/*.{png,jpg,jpeg,svg}"
);
const katugastota_2_hou_grid = import.meta.glob(
  "./images/projects/completed/katugastota_2_housing/*.{png,jpg,jpeg,svg}"
);
const wattaranthenna_hou_grid = import.meta.glob(
  "./images/projects/completed/wattaranthenna_housing/*.{png,jpg,jpeg,svg}"
);
const nugawela_hou_grid = import.meta.glob(
  "./images/projects/completed/nugawela_housing/*.{png,jpg,jpeg,svg}"
);
const kengalla_hou_grid = import.meta.glob(
  "./images/projects/completed/kengalla_housing/*.{png,jpg,jpeg,svg}"
);
const hantana_1_hou_grid = import.meta.glob(
  "./images/projects/completed/hantana_1_housing/*.{png,jpg,jpeg,svg}"
);
const ranawana_eco_grid = import.meta.glob(
  "./images/projects/completed/ranawana_eco_housing/*.{png,jpg,jpeg,svg}"
);
const heerasgala_hou_grid = import.meta.glob(
  "./images/projects/completed/heerasgala_housing/*.{png,jpg,jpeg,svg}"
);
const nittabuwa_3story_hou_grid = import.meta.glob(
  "./images/projects/completed/nittabuwa_three_story/*.{png,jpg,jpeg,svg}"
);
const iriyagama_hou_grid = import.meta.glob(
  "./images/projects/completed/iriyagama_housing/*.{png,jpg,jpeg,svg}"
);
const dodamwala_3story_hou_grid = import.meta.glob(
  "./images/projects/completed/dodamwala_three_story/*.{png,jpg,jpeg,svg}"
);
const mahaiyawa_2story_hou_grid = import.meta.glob(
  "./images/projects/completed/mahaiyawa_2_story/*.{png,jpg,jpeg,svg}"
);
const lewella_2story_hou_grid = import.meta.glob(
  "./images/projects/completed/lewella_2_story/*.{png,jpg,jpeg,svg}"
);
const aniwatta_2story_hou_grid = import.meta.glob(
  "./images/projects/completed/aniwatta_2_story/*.{png,jpg,jpeg,svg}"
);
const kundasale_hou_grid = import.meta.glob(
  "./images/projects/completed/kundasale_housing/*.{png,jpg,jpeg,svg}"
);

// image galleries of ongoing projects *
const katugastota_hotel_grid = import.meta.glob(
  "./images/projects/ongoing/katugastota_hotel/*.{png,jpg,jpeg,svg}"
);
const polgolla_grid = import.meta.glob(
  "./images/projects/ongoing/polgolla/*.{png,jpg,jpeg,svg}"
); //
const aniwatte_grid = import.meta.glob(
  "./images/projects/ongoing/aniwatte/*.{png,jpg,jpeg,svg}"
); //
const gohagoda_grid = import.meta.glob(
  "./images/projects/ongoing/gohagoda/*.{png,jpg,jpeg,svg}"
); //
const kurunegala_grid = import.meta.glob(
  "./images/projects/ongoing/kurunegala/*.{png,jpg,jpeg,svg}"
); //
const balagolla_grid = import.meta.glob(
  "./images/projects/ongoing/balagolla/*.{png,jpg,jpeg,svg}"
); //
const gunawardana_grid = import.meta.glob(
  "./images/projects/ongoing/gunawardana/*.{png,jpg,jpeg,svg}"
); //

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
      "Ranawana Eco-Friendly House",
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
  const [haraHouseImages, setHaraHouseImages] = useState([]);
  const [nuwEliyaHouseImages, setNuwEliyaHouseImages] = useState([]);
  const [kandyHouseImages, setKandyHouseImages] = useState([]);
  const [abathennaHouseImages, setAbathennaHouseImages] = useState([]);
  const [wellsParkImages, setWellsParkImages] = useState([]);
  const [ranawanaHousingImages, setRanawanaHouseImages] = useState([]);
  const [hantana2HousingImages, setHantana2HouseImages] = useState([]);
  const [katugastota2HousingImages, setKatugastota2HouseImages] = useState([]);
  const [wattaranthennaHousingImages, setWattaranthennaHouseImages] = useState(
    []
  );
  const [nugawelaHousingImages, setNugawelaHouseImages] = useState([]);
  const [kengallaHousingImages, setKengallaHouseImages] = useState([]);
  const [hantana1HousingImages, setHantana1HouseImages] = useState([]);
  const [ranawanaEcoImages, setRanawanaEcoImages] = useState([]);
  const [heerasgalaHousingImages, setHeerasgalaHouseImages] = useState([]);
  const [nittabuwa3StoryHousingImages, setNittabuwa3StoryHouseImages] =
    useState([]);
  const [iriyagamaHousingImages, setIriyagamaHouseImages] = useState([]);
  const [dodamwala3StoryHousingImages, setDodamwala3StoryHouseImages] =
    useState([]);
  const [mahaiyawa2StoryHousingImages, setMahaiyawa2StoryHouseImages] =
    useState([]);
  const [lewella2StoryHousingImages, setLewella2StoryHouseImages] = useState(
    []
  );
  const [aniwatta2StoryHousingImages, setAniwatta2StoryHouseImages] = useState(
    []
  );
  const [kundasaleHousingImages, setKundasaleHouseImages] = useState([]);

  // ongoing proj gallery array (for modal) *
  const [katugastotaHotelImages, setKatugastotaHotelImages] = useState([]);
  const [polgollaImages, setPolgollaImages] = useState([]);
  const [aniwatteImages, setAniwatteImages] = useState([]);
  const [gohagodaImages, setGohagodaImages] = useState([]);
  const [kurunegalaImages, setKurunegalaImages] = useState([]);
  const [balagollaImages, setBalagollaImages] = useState([]);
  const [gunawardanaImages, setGunawardanaImages] = useState([]);

  // use effect for auto loading *
  useEffect(() => {
    // Load katugastota_hotel_grid images
    const loadKatugastotaHotelImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(katugastota_hotel_grid).map((key) =>
          katugastota_hotel_grid[key]()
        )
      );
      setKatugastotaHotelImages(resolvedImages.map((mod) => mod.default));
    };

    loadKatugastotaHotelImages();

    // Load hara_hou_grid images
    const loadHaraHouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(hara_hou_grid).map((key) => hara_hou_grid[key]())
      );
      setHaraHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadHaraHouseImages();

    // Load nuw_eliya_hou_grid images
    const loadNuwaraEliyaHousingImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(nuw_eliya_hou_grid).map((key) => nuw_eliya_hou_grid[key]())
      );
      setNuwEliyaHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadNuwaraEliyaHousingImages();

    // Load kandy_hou_grid images
    const loadKandyHousingImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(kandy_hou_grid).map((key) => kandy_hou_grid[key]())
      );
      setKandyHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadKandyHousingImages();

    // Load abathenna_hou_grid images
    const loadAbathennaHousingImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(abathenna_hou_grid).map((key) => abathenna_hou_grid[key]())
      );
      setAbathennaHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadAbathennaHousingImages();

    // Load wells_park_grid images
    const loadWellsParkImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(wells_park_grid).map((key) => wells_park_grid[key]())
      );
      setWellsParkImages(resolvedImages.map((mod) => mod.default));
    };

    loadWellsParkImages();

    // Load ranawana_hou_grid images
    const loadRanwawanaHouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(ranawana_hou_grid).map((key) => ranawana_hou_grid[key]())
      );
      setRanawanaHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadRanwawanaHouseImages();

    // Load hantana_2_hou_grid images
    const loadHantana2HouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(hantana_2_hou_grid).map((key) => hantana_2_hou_grid[key]())
      );
      setHantana2HouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadHantana2HouseImages();

    // Load katugastota_2_hou_grid images
    const loadKatugastota2HouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(katugastota_2_hou_grid).map((key) =>
          katugastota_2_hou_grid[key]()
        )
      );
      setKatugastota2HouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadKatugastota2HouseImages();

    // Load wattaranthenna_hou_grid images
    const loadWattaranthennaHouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(wattaranthenna_hou_grid).map((key) =>
          wattaranthenna_hou_grid[key]()
        )
      );
      setWattaranthennaHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadWattaranthennaHouseImages();

    // Load nugawela_hou_grid images
    const loadNugawelaHouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(nugawela_hou_grid).map((key) => nugawela_hou_grid[key]())
      );
      setNugawelaHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadNugawelaHouseImages();

    // Load kengalla_hou_grid images
    const loadKengallaHouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(kengalla_hou_grid).map((key) => kengalla_hou_grid[key]())
      );
      setKengallaHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadKengallaHouseImages();

    // Load hantana_1_hou_grid images
    const loadHantana1HouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(hantana_1_hou_grid).map((key) => hantana_1_hou_grid[key]())
      );
      setHantana1HouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadHantana1HouseImages();

    // Load ranawana_eco_grid images
    const loadRanawanaEcoImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(ranawana_eco_grid).map((key) => ranawana_eco_grid[key]())
      );
      setRanawanaEcoImages(resolvedImages.map((mod) => mod.default));
    };

    loadRanawanaEcoImages();

    // Load heerasgala_hou_grid images
    const loadHeerasgalaHouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(heerasgala_hou_grid).map((key) =>
          heerasgala_hou_grid[key]()
        )
      );
      setHeerasgalaHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadHeerasgalaHouseImages();

    // Load nittabuwa_3story_hou_grid images
    const loadNittabuwa3StoryHouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(nittabuwa_3story_hou_grid).map((key) =>
          nittabuwa_3story_hou_grid[key]()
        )
      );
      setNittabuwa3StoryHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadNittabuwa3StoryHouseImages();

    // Load iriyagama_hou_grid images //
    const loadIriyagamaHouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(iriyagama_hou_grid).map((key) => iriyagama_hou_grid[key]())
      );
      setIriyagamaHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadIriyagamaHouseImages();

    // Load dodamwala_3story_hou_grid images //
    const loadDodamwala3StoryHouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(dodamwala_3story_hou_grid).map((key) =>
          dodamwala_3story_hou_grid[key]()
        )
      );
      setDodamwala3StoryHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadDodamwala3StoryHouseImages();

    // Load mahaiyawa_2story_hou_grid images //
    const loadMahaiyawa2StoryHouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(mahaiyawa_2story_hou_grid).map((key) =>
          mahaiyawa_2story_hou_grid[key]()
        )
      );
      setMahaiyawa2StoryHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadMahaiyawa2StoryHouseImages();

    // Load lewella_2story_hou_grid images //
    const loadLewella2StoryHouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(lewella_2story_hou_grid).map((key) =>
          lewella_2story_hou_grid[key]()
        )
      );
      setLewella2StoryHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadLewella2StoryHouseImages();

    // Load aniwatta_2story_hou_grid images //
    const loadAniwatta2StoryHouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(aniwatta_2story_hou_grid).map((key) =>
          aniwatta_2story_hou_grid[key]()
        )
      );
      setAniwatta2StoryHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadAniwatta2StoryHouseImages();

    // Load kundasale_hou_grid images //
    const loadKundasaleHouseImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(kundasale_hou_grid).map((key) => kundasale_hou_grid[key]())
      );
      setKundasaleHouseImages(resolvedImages.map((mod) => mod.default));
    };

    loadKundasaleHouseImages();

    // Load polgolla_grid images //
    const loadPolgollaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(polgolla_grid).map((key) => polgolla_grid[key]())
      );
      setPolgollaImages(resolvedImages.map((mod) => mod.default));
    };

    loadPolgollaImages(); //

    // Load aniwatte_grid images //
    const loadAniwatteImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(aniwatte_grid).map((key) => aniwatte_grid[key]())
      );
      setAniwatteImages(resolvedImages.map((mod) => mod.default));
    };

    loadAniwatteImages(); //

    // Load gohagoda_grid images //
    const loadGohagodaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(gohagoda_grid).map((key) => gohagoda_grid[key]())
      );
      setGohagodaImages(resolvedImages.map((mod) => mod.default));
    };

    loadGohagodaImages(); //

    // Load kurunegala_grid images //
    const loadKurunegalaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(kurunegala_grid).map((key) => kurunegala_grid[key]())
      );
      setKurunegalaImages(resolvedImages.map((mod) => mod.default));
    };

    loadKurunegalaImages(); //

    // Load balagolla_grid images //
    const loadBalagollaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(balagolla_grid).map((key) => balagolla_grid[key]())
      );
      setBalagollaImages(resolvedImages.map((mod) => mod.default));
    };

    loadBalagollaImages(); //

    // Load gunawardana_grid images //
    const loadGunawardanaImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(gunawardana_grid).map((key) => gunawardana_grid[key]())
      );
      setGunawardanaImages(resolvedImages.map((mod) => mod.default));
    };

    loadGunawardanaImages(); //
  }, []);

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
      <div className="grid w-full grid-cols-4 gap-4 px-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:h-full">
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
