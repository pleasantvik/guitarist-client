import Carrousel from "@/shared/Carrousel";
import { ICarrousel } from "@/shared/interface";

const Featured = () => {
  const carrouselItem: ICarrousel[] = [
    {
      img: "/images/featured/featured_home.jpg",
      title: "Fender",
      subtitle: "Custom shop",
      btn: "Shop Now",
      linkTo: "/shop",
    },
    {
      img: "/images/featured/featured_home_2.jpg",
      title: "B-Stock",
      subtitle: "Awesome Discount",
      btn: "View offers",
      linkTo: "/shop",
    },
    {
      img: "/images/featured/featured_home_3.jpg",
      title: "Croll",
      subtitle: "Custom shop",
      btn: "Shop Now",
      linkTo: "/shop",
    },
  ];

  return (
    <div>
      <Carrousel items={carrouselItem} />
    </div>
  );
};

export default Featured;
