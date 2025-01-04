import logo from "../images/logo.png";
import bg from "../images/landing/who we are bg.jpg";

function WhoWeAre() {
  return (
    <div className="py-3">
      {/*who we are*/}
      <span className="flex items-center gap-5 pl-3 text-xs tracking-widest text-gray-600 uppercase g-font-2">
        Our Legacy
        <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
      </span>
      <div className="flex gap-6 p-3 max-md:flex-col">
        <div className="md:w-1/3 p-4">
          <img
            src={logo}
            alt="logo"
            className="w-full h-[300px] rounded-lg max-md:max-h-[300px] object-contain"
          />
        </div>
        <div className="relative flex flex-col justify-center gap-6 md:w-2/3 bg-cover bg-bottom text-white shadow-inner p-4" style={{ backgroundImage: `url(${bg})` }}>
        {/*Top layer (backdrop)*/}
        <div className="absolute bottom-0 inset-0 bg-gradient-to-br from-[#4B4B4BB5] to-[#000000B5]"></div>
          <h1 className="text-5xl z-10 md:text-start poltawski max-md:text-3xl max-md:text-center">
            Who We Are
          </h1>
          <div className=" z-10">
            <p className="text-justify max-sm:text-sm">
              NCI Homes Private Limited is a well-established <strong>Civil Engineering </strong>
              and <strong>Construction</strong> company located in Kandy-Sri Lanka.
            </p>
          </div>
          <div className=" z-10">
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
