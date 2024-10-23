"use client"
import {useTranslation} from "react-i18next";
import {useCallback, useEffect} from "react";

const hotel= [
    {
        name: "grand_chortoq_resort",
        des:"nature_healing_paradise",
        image:"/assets/images/rooms/room-1.jpg"
    },
    {
        name: "chortoq_boutique_hotel",
        des:"chic_modern_vibrant",
        image:"/assets/images/rooms/room-2.jpg"
    },
    {
        name: "o2zoda_palace",
        des:"serene_mountain_escape",
        image:"/assets/images/rooms/room-4.jpg"
    }
]
export default function HotelList(){
    const { t,i18n } = useTranslation();
    const lang = "/" + i18n.language;
    console.log(i18n.language)

    const handleLanguageChanged = useCallback(() => {
        console.log(`Language changed to: ${i18n.language}`);
    }, []);

    useEffect(() => {
        i18n.on('languageChanged', handleLanguageChanged);
        return () => {
            i18n.off('languageChanged', handleLanguageChanged);
        };
    }, [handleLanguageChanged]);
    return(
        <>
            <div className="room-title-area align-items-center" style={{paddingTop:"30px",paddingBottom:"30px"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 text-center">
                            <div className="section-title center" data-cue="zoomIn" style={{width:'100%'}}>
                                <div className="section-thumb">
                                    {/*<img*/}
                                    {/*    src="/assets/images/home-1/section-shape1.png"*/}
                                    {/*    alt=""*/}
                                    {/*/>*/}
                                </div>
                                <h1>Rooms & Suites</h1>
                                <p className="section-desc-1">
                                    Proactively morph optimal infomediaries rather than accurate expertise. Intrinsicly progressive resources rather than resource-leveling


                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*room-area*/}
            <div className="container">
            <div className="row align-items-center" style={{paddingTop:"0px",paddingBottom:"50px"}}>
                {hotel.map((h, index) => (
                <div className="col-lg-4 col-md-6" key={h.name}>
                    <div
                        className="room-single-box"
                        data-cue="zoomIn"
                        data-show="true"
                        style={{
                            animationName: "zoomIn",
                            animationDuration: "2500ms",
                            animationTimingFunction: "ease",
                            animationDelay: "0ms",
                            animationDirection: "normal",
                            animationFillMode: "both"
                        }}
                    >
                        <div className="room-thumb">
                            <img src={h.image} alt=""/>
                            <div className="room-details-button">
                                <a href={`${lang}/room-details`}>
                                    {t('home:explore')}
                                    <i className="bi bi-arrow-right"/>
                                </a>
                            </div>
                        </div>
                        <div className="room-pricing">
                            <span className="dolar">$560</span>
                            <span>Night</span>
                        </div>
                        <div className="room-content">
                            <h4>simply dummy text of the printing and typesetting industry. </h4>
                            <a href={`${lang}/room-details`}
                                style={{marginBottom: h.name === "o2zoda_palace" ? "44px" : "20px"}}>Lorem Ipsum
                            </a>
                            {/*<p>{t(`home:${h.des}`)}</p>*/}
                        </div>
                        <div className="room-bottom">
                            <div className="room-bottom-icon">
    <span>
      <img src="/assets/images/home-1/room-bottom-icon.png" alt=""/>2 King Bed
    </span>
                            </div>
                            <div className="coustomar-rating">
                                <ul>
                                    <li>
                                        <i className="bi bi-star-fill"/>
                                    </li>
                                    <li>
                                        <i className="bi bi-star-fill"/>
                                    </li>
                                    <li>
                                        <i className="bi bi-star-fill"/>
                                    </li>
                                    <li>
                                        <i className="bi bi-star-fill"/>
                                    </li>
                                    <li>
                                        <i className="bi bi-star-half"/>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
                ))}
            </div>
            </div>


            {/*<div className="room-area">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row margin-top" data-cue="zoomIn">*/}
            {/*            <div className="room_list owl-carousel">*/}
            {/*                {hotel.map((h, index) => (*/}
            {/*                    <div className="col-lg-12" key={h.name}>*/}
            {/*                        <div className="room-single-box">*/}
            {/*                            <div className="room-thumb">*/}
            {/*                                <img src={h.image} alt=""/>*/}
            {/*                                <div className="room-details-button">*/}
            {/*                                    <a href="royella/room-details.html">*/}
            {/*                                        {t('home:explore')}*/}
            {/*                                        <i className="bi bi-arrow-right"/>*/}
            {/*                                    </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                            /!*<div className="room-pricing">*!/*/}
            {/*                            /!*    <span className="dolar">$560</span>*!/*/}
            {/*                            /!*    <span>Night</span>*!/*/}
            {/*                            /!*</div>*!/*/}
            {/*                            <div className="room-content">*/}
            {/*                                <h4>{t(`home:${h.des}`)}</h4>*/}
            {/*                                <a href="royella/room.html"*/}
            {/*                                   style={{marginBottom: h.name === "o2zoda_palace" ? "44px" : "20px"}}>{t(`home:${h.name}`)}</a>*/}
            {/*                                /!*<p>1500 SQ.FT/Rooms</p>*!/*/}
            {/*                            </div>*/}

            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                ))}*/}

            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>

    );
}