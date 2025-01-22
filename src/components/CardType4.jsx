import Button from "./Button";
import Carousel from "./Carousel";

function CardType4({
  cardHeader,
  cardHeaderClasses,
  cardText1,
  cardText1Classes,
  cardText2,
  cardText2Classes,
  cardProject,
  cardImageClasses,
  btnText,
  url,
  extraClasses,
}) {
  return (
    <div
      className={`flex flex-col items-center justify-between ${extraClasses}`}
    >
      <span className={`w-full overflow-hidden h-full group`}>
        {/*

        TODO:
        rename the cardImage attribute of this component to something like neededProj and get that value from HomeSection3
        to do that, completedProjects and ongoingProjects arrays in HomeSection3 need to be modified
        Currently these arrays provide an image in the [1] position
        change that to Project Name (camelCase them to match the array names in ProjectImageLoader) and that's it!
        Now u can use the attribute (mentioned in step 1) to give to the Carousel below
        
        */}
        <Carousel neededProjectName={cardProject}/>
      </span>
      <h1 className={`uppercase text-center line-clamp-1 ${cardHeaderClasses}`}>
        {cardHeader}
      </h1>
      <span className="flex flex-col">
        <p className={`text-center text-white ${cardText1Classes}`}>
          {cardText1}
        </p>
        <p className={`text-center text-white ${cardText2Classes}`}>
          {cardText2}
        </p>
      </span>
      {btnText !== "nobtn" ? (
        <Button
          displayText={btnText}
          theme={"dark"}
          extraClasses={"w-[200px]"}
          url={url}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default CardType4;
