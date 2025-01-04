import choose_us_img from "./../images/landing/choose_us_img.png";
import bg from "./../images/landing/why choose us bg.jpg";

function HomeSection2New() {
  return (
    <div className="pb-3">
      {/*why choose us*/}
      <span className="flex items-center gap-3 pl-3 text-xs tracking-widest text-gray-600 uppercase g-font-2">
        Our Uniqueness
        <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
      </span>
      <div className="flex gap-6 p-3 max-md:flex-col">
        <div className="md:w-1/3">
          <img
            src={choose_us_img}
            alt="choose_us_img"
            className="object-cover w-full h-full rounded-lg max-md:max-h-[300px] max-md:object-contain max-md:object-top"
          />
        </div>
        <div
          className="relative flex flex-col gap-6 justify-evenly md:w-2/3"
        >
          <h1 className="z-10 text-5xl md:text-start poltawski max-md:text-3xl max-md:text-center">
            Why Choose Us
          </h1>
          <div className="z-10 ">
            <h3 className="text-xl font-medium">Competitive rates</h3>
            <p className="text-justify max-sm:text-sm">
              We offer you the most competitive rates of the current market.
              Brand new houses are available from 3.5 million onwards.
            </p>
          </div>
          <div className="z-10 ">
            <h3 className="text-xl font-medium">
              High quality construction services and standards
            </h3>
            <p className="text-justify max-sm:text-sm">
              We use quality materials and manpower. Unique, innovative
              architectural designs. Quality customer service.
            </p>
          </div>
          <div className="z-10 ">
            <h3 className="text-xl font-medium">
              Loan Facilities & Insurance facilities
            </h3>
            <p className="text-justify max-sm:text-sm">
              We would help our customers to obtain a housing loan from a
              recognized finance institution. Free insurance facilities from
              recognized insurance company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeSection2New;
