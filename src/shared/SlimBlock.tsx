import WavesButton from "./Button";
import { ICarrousel } from "./interface";

const SlimBlock = ({ items }: { items: ICarrousel }) => {
  const renderPromotion = () => (
    <div
      className="slim_promotion_img !bg-cover flex flex-col items-center justify-center"
      style={{
        background: `url(${items.img})`,
        height: "400px",
        padding: "70px",
      }}
    >
      <div className="tag bg-primary-bcga  text-white px-5 font-bold uppercase">
        {items.title}
      </div>
      <div className="tag low_title text-4xl text-white">{items.subtitle}</div>
      <div className="btn">
        <WavesButton
          title={items.btn}
          type="default"
          linkTo={items.linkTo}
          altClass=""
        />
      </div>
    </div>
  );
  return <div className="slim_promotion">{renderPromotion()}</div>;
};

export default SlimBlock;
