import React from "react";
import './Work.css';
import work1 from "../../img/www.labona.cz_.png";
import work2 from "../../img/www.provanoce.cz_.png";
import work3 from "../../img/dratel.cz_ (2).png";
import work4 from "../../img/www.tozame.cz_.png";
import work5 from "../../img/reznictvistloukal.cz_ (2).png";
import work6 from "../../img/pneuservis.png";
import work7 from "../../img/ph-logistics.png";
import work8 from "../../img/finex.png";

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
            <h5>My work</h5>
            <h2>Projects i worked on</h2>

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
                        <p className={"work__text"}>A custom-made e-shop created using the Nette framework according to the design</p>
                        <div className={"work__box__img pointer relative"}>
                            <div className={"work__img__box"}>
                                <a href={"https://www.labona.cz/"} target={"_blank"} rel={"noreferrer"}><img src={work1} className={"work__img"} alt={"labona"}></img></a>
                            </div>
                        </div>
                        <div className={"work__meta absolute"}>
                            <a href={"https://www.labona.cz/"} className={"work__btn"} target={"_blank"} rel={"noreferrer"}>Visit website</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="work">
                    <div className={"work__box pointer relative"}>
                        <h2 className={"work__text"}>Provanoce.cz</h2>
                        <p className={"work__text"}>A custom-made e-shop created using the Nette framework</p>
                        <div className={"work__box__img pointer relative"}>
                            <div className={"work__img__box"}>
                                <a href={"https://www.provanoce.cz/"} target={"_blank"} rel={"noreferrer"}><img src={work2} className={"work__img"} alt={"provanoce"}></img></a>
                            </div>
                        </div>
                        <div className={"work__meta absolute"}>
                            <a href={"https://www.provanoce.cz/"} className={"work__btn"} target={"_blank"} rel={"noreferrer"}>Visit website</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="work">
                    <div className={"work__box pointer relative"}>
                        <h2 className={"work__text"}>Pneuservisbabice.cz</h2>
                        <p className={"work__text"}>Website using html/css/js</p>
                        <div className={"work__box__img pointer relative"}>
                            <div className={"work__img__box"}>
                                <a href={"https://www.pneuservisbabice.cz/"} target={"_blank"} rel={"noreferrer"}><img src={work6} className={"work__img"} alt={"pneuservis"}></img></a>
                            </div>
                        </div>
                        <div className={"work__meta absolute"}>
                            <a href={"https://www.pneuservisbabice.cz/"} className={"work__btn"} target={"_blank"} rel={"noreferrer"}>Visit website</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="work">
                    <div className={"work__box pointer relative"}>
                        <h2 className={"work__text"}>Dratel.cz</h2>
                        <p className={"work__text"}>Wordpress web developed in Elementor builder according to the design</p>
                        <div className={"work__box__img pointer relative"}>
                            <div className={"work__img__box"}>
                                <a href={"https://www.dratel.cz/"} target={"_blank"} rel={"noreferrer"}><img src={work3} className={"work__img"} alt={"dratel"}></img></a>
                            </div>
                        </div>
                        <div className={"work__meta absolute"}>
                            <a href={"https://www.dratel.cz/"} className={"work__btn"} target={"_blank"} rel={"noreferrer"}>Visit website</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="work">
                    <div className={"work__box pointer relative"}>
                        <h2 className={"work__text"}>Tozame.cz</h2>
                        <p className={"work__text"}>Shoptet e-shop, where i do adjustments in js/css</p>
                        <div className={"work__box__img pointer relative"}>
                            <div className={"work__img__box"}>
                                <a href={"https://www.tozame.cz/"} target={"_blank"} rel={"noreferrer"}><img src={work4} className={"work__img"} alt={"tozame"}></img></a>
                            </div>
                        </div>
                        <div className={"work__meta absolute"}>
                            <a href={"https://www.tozame.cz/"} className={"work__btn"} target={"_blank"} rel={"noreferrer"}>Visit website</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="work">
                    <div className={"work__box pointer relative"}>
                        <h2 className={"work__text"}>PH logistics</h2>
                        <p className={"work__text"}>Wordpress web developed in Oxygen builder according to the design which i designed</p>
                        <div className={"work__box__img pointer relative"}>
                            <div className={"work__img__box"}>
                                <a href={"https://phlogistics.krejtadev.cz/"} target={"_blank"} rel={"noreferrer"}><img src={work7} className={"work__img"} alt={"ph-logistics"}></img></a>
                            </div>
                        </div>
                        <div className={"work__meta absolute"}>
                            <a href={"https://phlogistics.krejtadev.cz/"} className={"work__btn"} target={"_blank"} rel={"noreferrer"}>Visit website</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="work">
                    <div className={"work__box pointer relative"}>
                        <h2 className={"work__text"}>Reznictvistloukal.cz</h2>
                        <p className={"work__text"}>Website using html/css/js</p>
                        <div className={"work__box__img pointer relative"}>
                            <div className={"work__img__box"}>
                                <a href={"https://www.reznictvistloukal.cz/"} target={"_blank"} rel={"noreferrer"}><img src={work5} className={"work__img"} alt={"reznictvi"}></img></a>
                            </div>
                        </div>
                        <div className={"work__meta absolute"}>
                            <a href={"https://www.reznictvistloukal.cz/"} className={"work__btn"} target={"_blank"} rel={"noreferrer"}>Visit website</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="work">
                    <div className={"work__box pointer relative"}>
                        <h2 className={"work__text"}>Trading platform</h2>
                        <p className={"work__text"}>Testing homepage</p>
                        <div className={"work__box__img pointer relative"}>
                            <div className={"work__img__box"}>
                                <a href={"http://msrs.funsite.cz/"} target={"_blank"} rel={"noreferrer"}><img src={work8} className={"work__img"} alt={"trading"}></img></a>
                            </div>
                        </div>
                        <div className={"work__meta absolute"}>
                            <a href={"http://msrs.funsite.cz/"} className={"work__btn"} target={"_blank"} rel={"noreferrer"}>Visit website</a>
                        </div>
                    </div>
                </SwiperSlide>

                

            </Swiper>

        </section>
    )
}

export default Work;