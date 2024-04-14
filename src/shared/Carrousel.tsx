import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ICarrousel } from "./interface";
import WavesButton from "./Button";

const Carrousel = ({ items }: { items: ICarrousel[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrow: true,
  };

  const generateSlide = () =>
    items.map((item) => (
      <div key={item.title}>
        <div
          className="featured_image relative !bg-cover "
          style={{
            background: `url(${item.img})`,
            // height: `${window.innerHeight}px`,
            height: `85vh`,
            // backgroundSize: "cover",
          }}
        >
          <div className="featured_action absolute top-[45%] left-[8%]">
            <div className="tag title bg-[#82828287] text-white uppercase font-bold text-8xl">
              {item.title}
            </div>
            <div className="tag low_title text-white font-light mt-2 text-5xl">
              {item.title}
            </div>
            <div>
              <WavesButton
                type="default"
                title={item.subtitle}
                altClass=""
                linkTo={item.linkTo}
                style={{
                  marginTop: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ));
  return <Slider {...settings}>{generateSlide()}</Slider>;
};

export default Carrousel;
