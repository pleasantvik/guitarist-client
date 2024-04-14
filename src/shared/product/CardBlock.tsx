import { IBySold } from "@/interfaces/product.model";
import Card from "./Card";
// import WavesButton from "../Button";
import CustomButton from "../CustomButton";

const CardBlock = ({ items, title }: ICardBlock) => {
  const renderCards = () => {
    return items
      ? items?.map((item) => (
          <div className="flex flex-col gap-4">
            <Card key={item._id} item={item} />
            <div className="flex gap-2 ">
              {/* <WavesButton
                title="View Product"
                linkTo=""
                type="default"
                style={{
                  width: "50%",
                }}
              /> */}
              {/* <WavesButton
                title="Add to cart"
                linkTo=""
                type="default"
                style={{
                  width: "50%",
                }}
              /> */}
              <CustomButton variant="outline" className="w-[50%]">
                View Product
              </CustomButton>
              <CustomButton className="w-[50%]">Add to Cart</CustomButton>
            </div>
          </div>
        ))
      : null;
  };
  return (
    <div className="my-8">
      <div className={`container mx-auto text-center `}>
        <h2 className="text-4xl mb-4 uppercase text-dark-text">{title}</h2>

        <div className="flex gap-4">{renderCards()}</div>
      </div>
    </div>
  );
};

interface ICardBlock {
  title?: string;
  items: IBySold[];
  shop?: boolean;
  grid?: boolean;
}
export default CardBlock;
