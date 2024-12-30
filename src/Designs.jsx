import { useState } from "react";
import { useEffect } from "react";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

// image galleries of completed projects
const two_story_grid = import.meta.glob(
  "./images/designs/two/*.{png,jpg,jpeg,svg}"
);
const three_story_grid = import.meta.glob(
  "./images/designs/three/*.{png,jpg,jpeg,svg}"
);
const single_story_grid = import.meta.glob(
  "./images/designs/single/*.{png,jpg,jpeg,svg}"
);
const commercial_grid = import.meta.glob(
  "./images/designs/commercial/*.{png,jpg,jpeg,svg}"
);

export default function Designs() {
  // completed proj gallery array (for modal)
  const [singleImages, setSingleImages] = useState([]);
  const [twoImages, setTwoImages] = useState([]);
  const [threeImages, setThreeImagess] = useState([]);
  const [commercialImages, setCommercialImages] = useState([]);

  // use effect for auto loading *
  useEffect(() => {
    // Load single_story_grid images
    const loadSingleImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(single_story_grid).map((key) => single_story_grid[key]())
      );
      setSingleImages(resolvedImages.map((mod) => mod.default));
    };

    loadSingleImages();

    // Load two_story_grid images
    const loadTwoImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(two_story_grid).map((key) => two_story_grid[key]())
      );
      setTwoImages(resolvedImages.map((mod) => mod.default));
    };

    loadTwoImages();

    // Load three_story_grid images
    const loadThreeImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(three_story_grid).map((key) => three_story_grid[key]())
      );
      setThreeImagess(resolvedImages.map((mod) => mod.default));
    };

    loadThreeImages();

    // Load commercial_grid images
    const loadCommercialImages = async () => {
      const resolvedImages = await Promise.all(
        Object.keys(commercial_grid).map((key) => commercial_grid[key]())
      );
      setCommercialImages(resolvedImages.map((mod) => mod.default));
    };

    loadCommercialImages();
  }, []);

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
            <h1 className="text-5xl uppercase">Designs</h1>
            <p className="text-lg g-font-1">
              Welcome to NIC Homes (Pvt) Ltd - where design meets excellence.
              Explore our wide range of projects, including single-story homes,
              two-story and three-story residences, and commercial buildings.
              Each structure is thoughtfully designed to blend functionality,
              innovation, and quality. Discover your ideal space with NIC Homes
              - built for life, built for you.
            </p>
          </div>
        </div>
      </div>
      {/*card container*/}
      <div className="flex flex-col w-full gap-12 px-4 max-lg:h-full">
        <h1 className="text-5xl">Single Story Designs</h1>
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 h-[500px] overflow-y-scroll">
          {/*single map*/}
          {singleImages.map((image, index) => (
            <img src={image} key={index} alt="single story image" />
          ))}
        </div>
        <h1 className="text-5xl">Two Story Designs</h1>
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 h-[500px] overflow-y-scroll">
          {/*two map*/}
          {twoImages.map((image, index) => (
            <img src={image} key={index} alt="two story image" />
          ))}
        </div>
        <h1 className="text-5xl">Three Story Designs</h1>
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 h-[500px] overflow-y-scroll">
          {/*three map*/}
          {threeImages.map((image, index) => (
            <img src={image} key={index} alt="three story image" />
          ))}
        </div>
        <h1 className="text-5xl">Commercial Designs</h1>
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {/*commercial map*/}
          {commercialImages.map((image, index) => (
            <img src={image} key={index} alt="commercial image" />
          ))}
        </div>

        <Footer></Footer>
        {/*image modal*/}
        <dialog id="my_modal_3" className="modal">
          <div className="w-11/12 max-w-5xl modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                ✕
              </button>
            </form>
            <div className="grid grid-cols-1"></div>
          </div>
        </dialog>
      </div>
    </>
  );
} //
