import { useState, useEffect } from "react";

// image galleries of completed projects
const hara_hou_grid = import.meta.glob(
  "../images/projects/completed/haragama_housing/*.{png,jpg,jpeg,svg}"
);
const nuw_eliya_hou_grid = import.meta.glob(
  "../images/projects/completed/nuwara_eliya_housing/*.{png,jpg,jpeg,svg}"
);
const kandy_hou_grid = import.meta.glob(
  "../images/projects/completed/housing_kandy/*.{png,jpg,jpeg,svg}"
);
const abathenna_hou_grid = import.meta.glob(
  "../images/projects/completed/abathenna_housing/*.{png,jpg,jpeg,svg}"
);
const wells_park_grid = import.meta.glob(
  "../images/projects/completed/wells_park_kandy/*.{png,jpg,jpeg,svg}"
);
const ranawana_hou_grid = import.meta.glob(
  "../images/projects/completed/ranawana_housing/*.{png,jpg,jpeg,svg}"
);
const hantana_2_hou_grid = import.meta.glob(
  "../images/projects/completed/hantana_2_housing/*.{png,jpg,jpeg,svg}"
);
const katugastota_2_hou_grid = import.meta.glob(
  "../images/projects/completed/katugastota_2_housing/*.{png,jpg,jpeg,svg}"
);
const wattaranthenna_hou_grid = import.meta.glob(
  "../images/projects/completed/wattaranthenna_housing/*.{png,jpg,jpeg,svg}"
);
const nugawela_hou_grid = import.meta.glob(
  "../images/projects/completed/nugawela_housing/*.{png,jpg,jpeg,svg}"
);
const kengalla_hou_grid = import.meta.glob(
  "../images/projects/completed/kengalla_housing/*.{png,jpg,jpeg,svg}"
);
const hantana_1_hou_grid = import.meta.glob(
  "../images/projects/completed/hantana_1_housing/*.{png,jpg,jpeg,svg}"
);
const ranawana_eco_grid = import.meta.glob(
  "../images/projects/completed/ranawana_eco_housing/*.{png,jpg,jpeg,svg}"
);
const heerasgala_hou_grid = import.meta.glob(
  "../images/projects/completed/heerasgala_housing/*.{png,jpg,jpeg,svg}"
);
const nittabuwa_3story_hou_grid = import.meta.glob(
  "../images/projects/completed/nittabuwa_three_story/*.{png,jpg,jpeg,svg}"
);
const iriyagama_hou_grid = import.meta.glob(
  "../images/projects/completed/iriyagama_housing/*.{png,jpg,jpeg,svg}"
);
const dodamwala_3story_hou_grid = import.meta.glob(
  "../images/projects/completed/dodamwala_three_story/*.{png,jpg,jpeg,svg}"
);
const mahaiyawa_2story_hou_grid = import.meta.glob(
  "../images/projects/completed/mahaiyawa_2_story/*.{png,jpg,jpeg,svg}"
);
const lewella_2story_hou_grid = import.meta.glob(
  "../images/projects/completed/lewella_2_story/*.{png,jpg,jpeg,svg}"
);
const aniwatta_2story_hou_grid = import.meta.glob(
  "../images/projects/completed/aniwatta_2_story/*.{png,jpg,jpeg,svg}"
);
const kundasale_hou_grid = import.meta.glob(
  "../images/projects/completed/kundasale_housing/*.{png,jpg,jpeg,svg}"
);

// image galleries of ongoing projects *
const katugastota_hotel_grid = import.meta.glob(
  "../images/projects/ongoing/katugastota_hotel/*.{png,jpg,jpeg,svg}"
);
const polgolla_grid = import.meta.glob(
  "../images/projects/ongoing/polgolla/*.{png,jpg,jpeg,svg}"
); //
const aniwatte_grid = import.meta.glob(
  "../images/projects/ongoing/aniwatte/*.{png,jpg,jpeg,svg}"
); //
const gohagoda_grid = import.meta.glob(
  "../images/projects/ongoing/gohagoda/*.{png,jpg,jpeg,svg}"
); //
const kurunegala_grid = import.meta.glob(
  "../images/projects/ongoing/kurunegala/*.{png,jpg,jpeg,svg}"
); //
const balagolla_grid = import.meta.glob(
  "../images/projects/ongoing/balagolla/*.{png,jpg,jpeg,svg}"
); //
const gunawardana_grid = import.meta.glob(
  "../images/projects/ongoing/gunawardana/*.{png,jpg,jpeg,svg}"
); //

export default function ProjectImageLoader({ neededProjectName }) {
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

  switch (neededProjectName) {
    case "wellsParkImages":
      return wellsParkImages;
    case "ranawanaHousingImages":
      return ranawanaHousingImages;
    case "ranawanaEcoImages":
      return ranawanaEcoImages;
    case "heerasgalaHousingImages":
      return heerasgalaHousingImages;
    case "nittabuwa3StoryHousingImages":
      return nittabuwa3StoryHousingImages;
    case "iriyagamaHousingImages":
      return iriyagamaHousingImages;
    case "dodamwala3StoryHousingImages":
      return dodamwala3StoryHousingImages;
    case "hantana2HousingImages":
      return hantana2HousingImages;
    case "mahaiyawa2StoryHousingImages":
      return mahaiyawa2StoryHousingImages;
    case "kengallaHousingImages":
      return kengallaHousingImages;
    case "lewella2StoryHousingImages":
      return lewella2StoryHousingImages;
    case "katugastota2HousingImages":
      return katugastota2HousingImages;
    case "aniwatta2StoryHousingImages":
      return aniwatta2StoryHousingImages;
    case "hantana1HousingImages":
      return hantana1HousingImages;
    case "kundasaleHousingImages":
      return kundasaleHousingImages;
    default:
      break;
  }
}
