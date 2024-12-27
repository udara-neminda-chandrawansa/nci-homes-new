import Button from "./components/Button";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

export default function Projects() {
  const handleLaunchFilter = (Filter) => {
    const launchSpans = document.querySelectorAll(".launch-span");
    const coming_soons = document.querySelectorAll(".coming-soon");
    const avaiable_nows = document.querySelectorAll(".now-available");

    // Reset the background color of all elements with the class "launch-span"
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
                Ongoing Projects (24)
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*card container*/}
      <div className="flex flex-col w-full gap-12 px-4 max-lg:h-full">
        {/*completed*/}
        <div className="unit-card coming-soon w-full h-[320px] flex gap-4 max-md:flex-col max-md:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2020/03/ES_View_13-706x385.jpg"
              alt="img"
              className="object-cover w-full h-full"
            ></img>
          </div>
          <div className="flex flex-col justify-center w-1/2 max-md:w-full max-md:h-1/2">
            <div className="flex flex-col justify-between pl-12 h-4/5 max-md:pl-0 max-md:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Completed Projects
              </p>
              <h1 className="text-3xl font-semibold uppercase">
                NCI Homes South
              </h1>
              <p className="w-full g-font-1">
                NCI Homes South's newest townhouses that blend local charm with
                global outlook.
              </p>
              <Button
                displayText={"View More Details"}
                theme={"dark"}
                extraClasses={"text-xs"}
                width={"fit"}
              ></Button>
            </div>
          </div>
        </div>
        {/*ongoing*/}
        <div className="unit-card now-available w-full h-[320px] flex gap-4 max-md:flex-col max-lg:h-fit">
          <div className="w-1/2 max-md:w-full max-md:h-1/2">
            <img
              src="https://cdn.properties.emaar.com/wp-content/uploads/2024/10/HERO_1620X832_1-4-706x385.jpg"
              alt="img"
              className="object-cover w-full h-full"
            ></img>
          </div>
          <div className="flex flex-col justify-center w-1/2 max-md:w-full max-lg:h-fit">
            <div className="flex flex-col justify-between pl-12 h-4/5 max-md:pl-0 max-lg:gap-5">
              <p className="uppercase px-8 py-1 border-[1px] text-blue-900 border-solid border-gray-400 w-fit text-sm">
                Ongoing Projects
              </p>
              <h1 className="text-3xl font-semibold uppercase">
                GREENVILLE AT NCI Homes SOUTH
              </h1>
              <span>
                <p className="w-full g-font-1">
                  Welcome to Greenville, a peaceful community designed for
                  families to thrive.
                </p>
              </span>
              <span className="flex gap-2 max-lg:flex-col">
                <Button
                  displayText={"View More Details"}
                  theme={"dark"}
                  extraClasses={"text-xs"}
                  width={"fit"}
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                ></Button>
              </span>
            </div>
          </div>
        </div>
        <Footer></Footer>
        {/*image modal*/}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
      </div>
    </>
  );
}
