"use client"
import DefaultHero from "@/app/[locale]/components/DefaultHero";
import React from "react";
import {useTranslation} from "react-i18next";
import BookingForm from "@/app/[locale]/components/home/BookingForm";
import HotelList from "@/app/[locale]/components/home/HotelList";


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
    },
    {
        name: "rooms.royal.title",
        des:"rooms.royal.subtitle",
        image:"/assets/images/rooms/room-4.png"
    },
    {
        name: "rooms.sanatorium.title",
        des:"rooms.sanatorium.subtitle",
        image:"/assets/images/rooms/room-5.png"
    },
    {
        name: "rooms.handicapped.title",
        des:"rooms.handicapped.subtitle",
        image:"/assets/images/rooms/room-6.png"
    }
]
export default function Rooms() {
    const {t,i18n} = useTranslation();
    const lang = "/" + i18n.language;
    return (
        <>
            <DefaultHero
                imageName="rooms.jpg"
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
            <div className="container mt">
                <div className="row align-items-center" style={{paddingTop: "0px", paddingBottom: "50px"}}>
                    {hotel.map((h, index) => (
                        <div className="col-lg-4 col-md-6 mt-5" key={h.name}>
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
                                        <a href={`${lang}/room-details/${t(`rooms:${h.name}`).toLowerCase().replace(/\s+/g, '-')}`}>
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
                                    <a href={`${lang}/room-details/${t(`rooms:${h.name}`).toLowerCase().replace(/\s+/g, '-')}`}
                                        style={{marginBottom: h.name === "o2zoda_palace" ? "44px" : "20px"}}>
                                        {t(`rooms:${h.name}`)}
                                    </a>
                                    {/*<p>{t(`home:${h.des}`)}</p>*/}
                                </div>
                                <div className="room-bottom">
                                    <div className="room-bottom-icon">
    <span>
      <img src="/assets/images/home-1/room-bottom-icon.png" alt=""/> {t('rooms:KingBed')}
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