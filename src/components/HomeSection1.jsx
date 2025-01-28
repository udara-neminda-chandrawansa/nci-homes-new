//import Button from "./Button";
import CardType1 from "./CardType1";
import card_1 from "../images/services/card_1.png";
import card_2 from "../images/services/card_2.png";
import card_3 from "../images/services/card_3.png";
import card_4 from "../images/services/card_4.png";

function HomeSection1() {
  return (
    <div className="flex flex-col items-start gap-3 px-3 pb-3">
      <span className="flex items-center gap-5 text-xs tracking-widest text-gray-600 uppercase g-font-2">
        Services
        <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
      </span>
      <span className="w-full overflow-x-scroll cursor-grab no-scrollbar">
        <span className="grid grid-cols-4 gap-1 max-lg:grid-cols-2 max-md:grid-cols-1">
          <CardType1
            cardHeader={"Floor area counting"}
            cardHeaderClasses={
              "text-4xl max-xl:text-3xl max-lg:text-3xl max-md:text-xl max-sm:text-lg"
            }
            cardText1={
              "Precise calculations for your property's floor area, ensuring accurate utilization and planning of every square foot."
            }
            cardImage={card_1}
            extraClasses={"h-[70dvh] "}
            btnText={"Read More"}
            url="/services"
          />
          <CardType1
            cardHeader={"special loan facilities"}
            cardHeaderClasses={
              "text-4xl max-xl:text-3xl max-lg:text-3xl max-md:text-xl max-sm:text-lg"
            }
            cardText1={
              "Tailored loan options to make your dream home affordable and within reach with ease."
            }
            cardImage={card_2}
            extraClasses={"h-[70dvh]"}
            btnText={"Read More"}
            url="/services"
          />
          <CardType1
            cardHeader={"Planning approvals"}
            cardHeaderClasses={
              "text-4xl max-xl:text-3xl max-lg:text-3xl max-md:text-xl max-sm:text-lg"
            }
            cardText1={
              "Hassle-free assistance in securing necessary approvals to streamline your construction and renovation projects."
            }
            cardImage={card_3}
            extraClasses={"h-[70dvh] "}
            btnText={"Read More"}
            url="/services"
          />
          <CardType1
            cardHeader={"Landscaping"}
            cardHeaderClasses={
              "text-4xl max-xl:text-3xl max-lg:text-3xl max-md:text-xl max-sm:text-lg"
            }
            cardText1={
              "Transform your outdoor spaces with innovative designs or refreshing existing landscapes for a stunning environment."
            }
            cardImage={card_4}
            extraClasses={"h-[70dvh]"}
            btnText={"Read More"}
            url="/services"
          />
        </span>
      </span>
    </div>
  );
}

export default HomeSection1;
