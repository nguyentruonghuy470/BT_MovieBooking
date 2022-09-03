import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";

import { getBanners } from "../../slices/bannerSlice";
import { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./css/BannerStyle.css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

import "swiper/css";

const Banner = () => {
  const dispatch = useDispatch();
  const { banners, isLoading, error } = useSelector((state) => state.banner);
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  const TRAILERS = [
    "https://www.youtube.com/embed/uqJ9u7GSaYM",
    "https://www.youtube.com/embed/kBY2k3G6LsM",
    "https://www.youtube.com/embed/Eu9G8nO5-Ug",
  ];
  const bannersMapped = banners?.map((banner, index) => {
    return { ...banner, trailer: TRAILERS[index] };
  });
  useEffect(() => {
    dispatch(getBanners());
  }, []);
  const openModal = (id) => {
    const contacts = bannersMapped.filter((banner, index) => {
      console.log(id);
      console.log(banner.maPhim);
      if (banner.maPhim === id) {
        return { ...banner, trailer: TRAILERS[index] };
      }
    });

    setModal(!modal);
    setContacts(contacts);
  };
  const spinner = () => {
    setVideoLoading(!videoLoading);
  };
  return (
    <>
      <Swiper
        className="containerBanner"
        modules={[Navigation, EffectFade]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        loop
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {contacts.map((i) => {
          console.log(i);
          return (
            <div className="App">
              <button onClick={openModal} className="modal-Video">
                {modal ? (
                  <section className="modal__bg">
                    <div className="modal__align">
                      <div className="modal__content">
                        <IoCloseOutline
                          className="modal__close"
                          arial-label="Close modal"
                        />
                        <div className="modal__video-align">
                          {videoLoading ? (
                            <div className="modal__spinner">
                              <BiLoaderAlt className="modal__spinner-style" />
                            </div>
                          ) : null}
                          <iframe
                            className="modal__video-style"
                            onLoad={spinner}
                            loading="lazy"
                            width="800"
                            height="500"
                            src={i.trailer}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : null}
              </button>
            </div>
          );
        })}
        {banners.map((banner) => {
          return (
            <div key={banner.maPhim}>
              <SwiperSlide key={banner.maPhim}>
                <div className="content-Banner">
                  <img
                    className="imgBanner"
                    src={banner.hinhAnh}
                    alt={`banner-${banner.maBanner}`}
                  />
                  <div className="jss156">
                    <button
                      className="MuiButtonBase"
                      tabIndex={0}
                      type="button"
                      onClick={() => openModal(banner.maPhim)}
                    >
                      <span className="MuiFab-label">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABvFBMVEUAAABPT08AAAAAAABFRUX////+/v5RUVFLS0s/Pz9NTU3///8KCgpKSkr5+fn+/v7////////////////////////8/Pz///////9paWlXV1eWlpYQEBD7+/v///+6uroqKirX19eVlZWIiIhQUFAfHx/////19fX39/f////////////////////////n5+fZ2dnj4+O4uLiNjY09PT3///////////////////////////+zs7P///8VFRX///9HR0cxMTH////////////p6en////n5+fb29vq6urU1NTAwMCnp6d5eXlxcXFzc3NeXl5qamoeHh5BQUE4ODj////8/Pzt7e3a2trQ0ND///////+9vb3Pz8/GxsacnJyYmJiUlJSmpqZ2dnb////////////+/v7x8fH09PT///+5ubnU1NSsrKyhoaGJiYmcnJxaWlqRkZE4ODj////x8fHn5+f////////U1NTIyMj///+/v7+1tbWJiYn///+fn5////9BQUEyMjJgYGD////////s7Ozc3NzJycna2tq/v7+GhoZCQkIWFhb///////////////////8kNpXEAAAAk3RSTlNrawBnaPz6a2pmagZraPP8KRY59PIM9M+ti22La/PMnWu3hoCAawLx6+aomoZZGsrJxq+dawT2xLaxo5yciW5ra2toXAre1tXOzcajl5SQi4V0c2trTfbc1MXBvrSvpqShm4x5ZE9A7Onj1Lewq6aaj4aDeDjezsm9sqygoJ+cl5J/enZvQyLj1MC7tIt7Z04kIw15AUOJAAAFPElEQVRYw6XZd3/SQBgH8NBcEgKEQJiitIW2tBXpslRrl917L23VWq177733Hr837KnVEAOXEJ//+X6eu+dy44GrYIY3GMj1xGONYUEIN8biPblA0Mv+BcfStK0H5wUYQjj/YEvzOgG9gT2VYQokbzWnjnVPPX061X0s1XwrKQDhyj0Bb5ng0HI8BPhHj56YT0gehRBZJkTxSIn5E0dH/UAovjxUBpjPrQHi+KMaRSYelyE8RCY1j8ZFYC2XtwtqnQL8remErhnCTeREutUPoVOzBTZlQ1hJ1RC3WdPzdJOa1ApC2SZrULsDtTmtEJdFECXdrOKOZgFmts6goUrRx8rIkihVDTizlWGBkSfA6nXZZTPk66vAk0hpMLgb6r2XxGU7yMt7KnYHS4Gv15GcVNyuMsKtTCax/ro4GLyLaJVp9ixnsiqKu8FiYGQ3og8V6pUpKg+j2B0pAmZpfgyPIdIcs2awD+okcbschJtMquj7FzwdxkVWPdiVuYjwaSPYFENrgnoOxUQrYk2FYKYLDSeJy3GQkw3oyhSAN0WxSveciFWiqOmgdz+a9fE6G3Uz9nv/gjkhmib/B5J0VMj9ASP7kCKe/+EkyaWksC+yDS6r/hriHKPjXVzq/zxXry7/BjNxtBKnmbkPtlfX7fJxHMcfRjzzCwyExLTbmdbeX7eL2w5+TgwFfoF7MJ7wMD8td7GBupcoVhi+Mez5CQ5VoltmeAdPXjdVjOZWTTVj8HtROUTBmyF2SeSrZ+4niGGoi7pWCNbWh25ScACjiocF7gRu18j6WBerfbpiEA9hoILzHsBR2cUERdCT0PV7IunMUa4E2IYDXi54XjhBLEGI7+dlml17ndnRwVl1JMgFhOi8xxoEVneSRZodKxb8QoA7hXMJlx0Qyfu9PMeOVeS4ZxiX7IHAWK2F2IIeLo6Uxy6Ihg2ORfJH0MnFcEyxDUJ9d4NngJcR4xrRTeyDwPAMXxp8jEYujKmyQKx8WCgJTiPMAVdllifJHwUY4xJfCpwBrEDp4K4dRtC/0csxQKsht+/ijeDoDp5jDpldlCUfZwBXLtHFzSwKe9n0+zgD+GaaZ67DDcQYC1ty0X2qEBQmTIvQvLBZn141xxWCDZs+6ll+evrmYPYM4Fv6IVvFMAYN25fJ08GoXg2L7Ss4QjfYEp4ODs/q1WBvsCWOAKnfp4O0Gi8MHPMI+HlImQ/edh+ng+eumKrBOKQqNPMxKi0WbvUvPrE44zGq6Qe98fu1A5Q66OlV5LbxKuKuc8DpV5GKQIfxsiRVO/L4a2JH4BeYN17npCWfM5Be5/LFLpysCWSXRP1ScCXWrzd1nDPwAr0SF7m0S/0OvbmkMGh6VrBXDBts0Z8VNLTth4/zAW+KolbkaSa1O/RunEVX3vx4lNwOB+ybQKypyPPW47QibQifLvYAlx0u6Q3R/ACvyGSRnOKdbQpJZDNFmxj+47wD77i/eBOjIrgO/16+/Pz8WA8WbwR9W2PkyMhv7SujVSW2+fgyOF+byGhV0XnMAhPPedve8wkg+53V7sv3hXF2k+dtcfzmWYT78hYNyVeVUFvmKGnJzbWoqHxlo2Xa1YHkhVpKMrnaC0l0dDXZa+ruF1B/+FovNUtovdcO10PYr9ltO3sH9wHi2N5a3mzyNLm9YyKwb9BbRmM8cireAdQfaptd8FFkO+i2sjDbdqge6Iifijho3YcA1T/ccuTylemZmekrl4+0DPtVIFRm6143tYEDI/gnRg4MMP9csP77Y7CnM9YYAkKNsc6eQcu/P34ANod6sZ/pavoAAAAASUVORK5CYII="
                          alt="video-button"
                          className="jss158"
                        />
                      </span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
};

export default Banner;
