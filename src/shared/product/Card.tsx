import { IBySold } from "@/interfaces/product.model";
import { renderCardImage } from "@/utils/toastConfig";

const Card = ({ item }: ICardProp) => {
  return (
    <div className="flex  items-center flex-col inset-4  shadow-lg bg-dark-alpha">
      <div>
        <img
          src={`${renderCardImage(item?.images)}`}
          alt=""
          className="px-4 py-2 "
        />
      </div>
      <div className="mx-4 self-stretch">
        <div className="tags">
          <div className="bg-dark-main  text-white text-2xl px-6 py-2">
            {item.brand.name}
          </div>
          <div className="name">{item.model}</div>
          <div className="bg-primary-bcga text-white mb-2 font-extrabold">
            {item.price}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ICardProp {
  item: IBySold;
}

export default Card;
