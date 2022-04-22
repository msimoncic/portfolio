import React from "react";
import './Work.css';
import work1 from "../../img/www.labona.cz_.png";
import work2 from "../../img/www.provanoce.cz_.png";
import work3 from "../../img/dratel.cz_ (2).png";
import work4 from "../../img/www.tozame.cz_.png";
import work5 from "../../img/reznictvistloukal.cz_ (2).png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { EffectCoverflow, Pagination, Navigation, Mousewheel, Keyboard } from "swiper";

function Work() {
    return (
        <section id="work">
            <h5>Moje práce</h5>
            <h2>Projekty, na kterých jsem se podílel</h2>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[EffectCoverflow, Pagination, Navigation, Mousewheel, Keyboard]}
                className="container work__container">

                <SwiperSlide className="work">
                    <div className={"work__box pointer relative"}>
                        <h2 className={"work__text"}>Labona.cz</h2>
                        <p className={"work__text"}>E-shop na míru vytvořený pomocí Nette frameworku podle návrhu</p>
                        <div className={"work__box__img pointer relative"}>
                            <div className={"work__img__box"}>
                                <a href={"https://www.labona.cz/"} target={"_blank"}><img src={work1} className={"work__img"}></img></a>
                            </div>
                        </div>
                        <div className={"work__meta absolute"}>
                            <a href={"https://www.labona.cz/"} className={"work__btn"} target={"_blank"}>Navštívit web</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="work">
                    <div className={"work__box pointer relative"}>
                        <h2 className={"work__text"}>Provanoce.cz</h2>
                        <p className={"work__text"}>E-shop na míru vytvořený pomocí Nette frameworku</p>
                        <div className={"work__box__img pointer relative"}>
                            <div className={"work__img__box"}>
                                <a href={"https://www.provanoce.cz/"} target={"_blank"}><img src={work2} className={"work__img"}></img></a>
                            </div>
                        </div>
                        <div className={"work__meta absolute"}>
                            <a href={"https://www.provanoce.cz/"} className={"work__btn"} target={"_blank"}>Navštívit web</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="work">
                    <div className={"work__box pointer relative"}>
                        <h2 className={"work__text"}>Dratel.cz</h2>
                        <p className={"work__text"}>Wordpress stránky vytvořeny pomocí Elementoru podle návrhu</p>
                        <div className={"work__box__img pointer relative"}>
                            <div className={"work__img__box"}>
                                <a href={"https://www.dratel.cz/"} target={"_blank"}><img src={work3} className={"work__img"}></img></a>
                            </div>
                        </div>
                        <div className={"work__meta absolute"}>
                            <a href={"https://www.dratel.cz/"} className={"work__btn"} target={"_blank"}>Navštívit web</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="work">
                    <div className={"work__box pointer relative"}>
                        <h2 className={"work__text"}>Tozame.cz</h2>
                        <p className={"work__text"}>Shoptet e-shop, na kterém dělám úpravy dle přání klienta</p>
                        <div className={"work__box__img pointer relative"}>
                            <div className={"work__img__box"}>
                                <a href={"https://www.tozame.cz/"} target={"_blank"}><img src={work4} className={"work__img"}></img></a>
                            </div>
                        </div>
                        <div className={"work__meta absolute"}>
                            <a href={"https://www.tozame.cz/"} className={"work__btn"} target={"_blank"}>Navštívit web</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="work">
                    <div className={"work__box pointer relative"}>
                        <h2 className={"work__text"}>Reznictvistloukal.cz</h2>
                        <p className={"work__text"}>Stránky vytvořeny pomocí klasického html/css/js</p>
                        <div className={"work__box__img pointer relative"}>
                            <div className={"work__img__box"}>
                                <a href={"https://www.reznictvistloukal.cz/"} target={"_blank"}><img src={work5} className={"work__img"}></img></a>
                            </div>
                        </div>
                        <div className={"work__meta absolute"}>
                            <a href={"https://www.reznictvistloukal.cz/"} className={"work__btn"} target={"_blank"}>Navštívit web</a>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section>
    )
}

export default Work;