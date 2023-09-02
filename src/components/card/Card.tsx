import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import kfc from '../../assets/kfc.jpeg';
import kfcLogo from '../../assets/kfc-logo.png';
import 'swiper/css';
import 'swiper/css/pagination';
import './Card.css';

function Card() {
  return (
    <div className="flex flex-col">
      <div className="w-full max-h-[400px] mb-[20px]">
        <Swiper
          className="h-full w-full"
          modules={[Pagination]}
          pagination={{
            type: 'fraction',
          }}
        >
          <SwiperSlide>
            <img
              src={kfc}
              alt=""
              className="w-full h-full object-cover rounded-[6px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={kfc}
              alt=""
              className="w-full h-full object-cover rounded-[6px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <div className="rounded-full overflow-hidden w-[50px] h-[50px]">
            <img src={kfcLogo} alt="kfc logo" className="w-full h-full" />
          </div>
          <div className="text-black font-bold">KFC</div>
        </div>

        <div className="text-[14px]">123 Main Street</div>

        <div className="font-bold text-green">8.5</div>

        <a
          href="/"
          className="rounded-[60px] bg-black py-[5px] px-[20px] capitalize min-h-[50px] flex items-center justify-center gap-[10px] text-white text-[14px] font-medium no-underline"
        >
          Watch more
          <div className="rounded-full w-[22px] h-[22px] flex items-center justify-center bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              fill="none"
            >
              <path
                d="M10.67 7.062 4.931 12.8l-.943-.943 5.737-5.738H4.67V4.786h7.334v7.333h-1.334V7.062Z"
                fill="#A3C6A9"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card;
