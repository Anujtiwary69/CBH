"use client"
import {useTranslation} from "react-i18next";
import {useCallback, useEffect} from "react";

const hotel= [
    {
        name: "rooms.standard.title",
        des:"rooms.standard.subtitle",
        image:"/assets/images/rooms/room-1.png"
    },
    {
        name: "rooms.deluxe.title",
        des:"rooms.deluxe.subtitle",
        image:"/assets/images/rooms/room-2.png"
    },
    {
        name: "rooms.suites.title",
        des:"rooms.suites.subtitle",
        image:"/assets/images/rooms/room-3.png"
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
            <div className="room-title-area align-items-center" style={{paddingTop: "30px", paddingBottom: "30px"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 text-center">
                            <div className="section-title center" data-cue="zoomIn" style={{width: '100%'}}>
                                <div className="section-thumb">
                                    {/*<img*/}
                                    {/*    src="/assets/images/home-1/section-shape1.png"*/}
                                    {/*    alt=""*/}
                                    {/*/>*/}
                                </div>
                                <div className="section-title two">
                                    <h4>{t('home:room_subtitle')}</h4>
                                    <h1>{t('home:ROOMS&SUITES')}</h1>

                                    <p className="section-desc-2" style={{width: '100%'}}>
                                        {t('home:room_des')}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*room-area*/}
            <div className="container">
                <div className="row align-items-center" style={{paddingTop: "0px", paddingBottom: "50px"}}>
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
                                            {t('rooms:explore')}
                                            <i className="bi bi-arrow-right"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="room-pricing">
                                    <span className="dolar">$000</span>
                                    <span>Night</span>
                                </div>
                                <div className="room-content">
                                    <h4>{t(`rooms:${h.des}`)}</h4>
                                    <a href={`${lang}/room-details`}
                                       style={{marginBottom: h.name === "o2zoda_palace" ? "44px" : "20px"}}>
                                        {t(`rooms:${h.name}`)}
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

            <div className="room-title-area align-items-center" style={{paddingTop: "30px", paddingBottom: "30px"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 text-center">
                            <div className="luxury-button" data-cue="zoomIn" style={{opacity: 1}}><a
                                href={`${lang}/rooms`}> View All </a></div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
                        }