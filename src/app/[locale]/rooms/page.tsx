"use client"
import DefaultHero from "@/app/[locale]/components/DefaultHero";
import React from "react";
import {useTranslation} from "react-i18next";
import BookingForm from "@/app/[locale]/components/home/BookingForm";
import HotelList from "@/app/[locale]/components/home/HotelList";


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
export default function Rooms() {
    const {t,i18n} = useTranslation();
    const lang = "/" + i18n.language;
    return (
        <>
            <DefaultHero
                imageName="hero-bg.jpg"
                title="The Best Luxury Hotel in UZBEKISTAN"
                subTitle="Rooms & Suites"
            />
            <BookingForm/>
            <br/>
            {/*<div className="room-title-area">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row align-items-center">*/}
            {/*            <div className="col-lg-12 text-center">*/}
            {/*                <div className="section-title two center container">*/}
            {/*                    <h2>{t('press:contact_us_subtitle')}</h2>*/}
            {/*                    <h4>{t('press:contact_us_subtitle')}</h4>*/}
            {/*                    <p>{t('press:contact_us_description')}</p>*/}
            {/*                    /!*<p>{t('press:contact_us_description')}</p>*!/*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <br/>
            <HotelList/>
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
                                    <a href="royella/room.html"
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




        </>

    );
}