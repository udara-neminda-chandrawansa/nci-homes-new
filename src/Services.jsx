import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import guy from "./images/services/guy.png";
import lady from "./images/services/lady.png"

function Services() {
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
            <h1 className="text-5xl uppercase">Services</h1>
            <p className="text-lg g-font-1">
              We treat our customers with the best we have. Therefore we provide
              them a quality customer service which would saticfy their
              expectations. We offers many facilities as follows:
            </p>
          </div>
          {/*services list*/}
          <div className="flex px-4 max-lg:flex-col">
            <div className="justify-center lg:w-1/3 max-lg:flex">
              <img
                src={guy}
                alt=""
                className="max-lg:h-[300px] lg:h-[400px] object-contain"
              />
            </div>
            <div className="lg:w-2/3 max-lg:px-4">
              <ul className="flex flex-col justify-center gap-4 list-disc">
                <li>
                  2D and 3D Elevations and House plans are drawn under
                  supervision by charted Civil Engineers.
                </li>
                <li>Floor area counting.</li>
                <li>Provides special loan facilities.</li>
                <li>Planning approvals.</li>
                <li>Making bill of quantities for bank loans.</li>
                <li>Constructions are done in any area of the country.</li>
                <li>
                  Personalized home building on your land or on any land
                  selected by you.
                </li>
                <li>Landscaping with new and old designs</li>
                <li>
                  Turn-key construction services (ready-to-use houses) for both
                  Sri Lankan and Foreigners.
                </li>
              </ul>
            </div>
          </div>
          {/*free list*/}
          <div className="flex px-4 max-lg:flex-col">
            <div className="flex flex-col gap-10 px-4 pt-10 lg:w-2/3">
              <h1 className="text-5xl uppercase text-[#133E87]">Free for you</h1>
              <p>
                If your construction project is handed over to us, we would do
                the following services for you free of charge.
              </p>
              <ul className="flex flex-col justify-center gap-4 list-disc">
                <li>Building Plan</li>
                <li>Bill of Quantities</li>
                <li>Plan Approval</li>
                <li>Arrange a Loan Facility</li>
              </ul>
            </div>
            <div className="flex items-end max-lg:justify-center lg:w-1/3">
              <img
                src={lady}
                alt=""
                className="max-lg:h-[300px] lg:h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Services;
