import logo from "../images/logo.png";
function WhoWeAre() {
  return (
    <div className="py-3">
      {/*who we are*/}
      <span className="flex items-center gap-5 pl-3 text-xs tracking-widest text-gray-600 uppercase g-font-2">
        Our Legacy
        <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
      </span>
      <div className="flex gap-6 p-3 max-md:flex-col">
        <div className="md:w-1/3">
          <img
            src={logo}
            alt="logo"
            className="object-cover w-full h-full rounded-lg max-md:max-h-[300px] max-md:object-contain max-md:object-top"
          />
        </div>
        <div className="flex flex-col gap-6 justify-evenly md:w-2/3">
          <h1 className="text-5xl md:text-start poltawski max-md:text-3xl max-md:text-center">
            Who We Are
          </h1>
          <div>
            <p className="text-justify max-sm:text-sm">
              NCI Homes Private Limited is a well-established <strong>Civil Engineering </strong>
              and <strong>Construction</strong> company located in Kandy-Sri Lanka.
            </p>
          </div>
          <div>
            <p className="text-justify max-sm:text-sm">
              In last two decades we have earned its reputation as a creative
              and innovative construction institution that offers high quality
              construction services in Sri Lanka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhoWeAre;
