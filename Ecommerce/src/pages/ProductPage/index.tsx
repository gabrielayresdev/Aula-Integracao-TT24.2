import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/api";
import { Product } from "../Home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Logo from "../../../assets/bars-solid.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ContainerImage, Image } from "./styles";

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState<Product | null>(null);
  const images = [
    "../../../assets/clark-tibbs-oqStl2L5oxI-unsplash.jpg",
    "../../../assets/efe-kurnaz-RnCPiXixooY-unsplash.jpg",
    "../../../assets/florian-klauer-mk7D-4UCfmg-unsplash.jpg",
  ];

  React.useEffect(() => {
    const request = async () => {
      if (!id) return;
      const data = await getProductById(id);
      if (data?.data !== undefined) setProduct(data.data);
    };
    request();
  }, [id]);

  if (!product) return null;
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ContainerImage>
            <Image src={images[0]} />
          </ContainerImage>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerImage>
            <Image src={images[1]} />
          </ContainerImage>
        </SwiperSlide>
        <SwiperSlide>
          <ContainerImage>
            <Image src={images[2]} />
          </ContainerImage>
        </SwiperSlide>
      </Swiper>
      <Logo />
    </div>
  );
};
