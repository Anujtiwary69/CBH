"use client"
import DefaultHero from "@/app/[locale]/components/DefaultHero";
import React from "react";
import {useTranslation} from "react-i18next";


export default function RoomDetailPage({params}: { params: { name: string } }) {
    const {t} = useTranslation()
    const facilities = t(`rooms:rooms.${params.name.split('-')[0]}.services`, { returnObjects: true });

    return (
        <>
            {/*<DefaultHero*/}
            {/*    imageName="hero-bg.jpg"*/}
            {/*    title="The Best Luxury Hotel in UZBEKISTAN"*/}
            {/*    subTitle="Rooms & Suites"*/}
            {/*/>*/}
            <div className="room-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/*<div className="row">*/}
                            {/*    <div className="room-details-list owl-carousel owl-loaded owl-drag">*/}
                            {/*        <div className="owl-stage-outer">*/}
                            {/*            <div className="owl-stage" >*/}
                            {/*                <div className="owl-item active" style={{width: '856px'}}>*/}
                            {/*                    <div className="col-lg-12">*/}
                            {/*                        <div className="room-detils-thumb">*/}
                            {/*                            <img src="/assets/images/rooms/room-1.png" alt=""/>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}


                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="owl-nav">*/}
                            {/*            <div className="owl-prev"><i className="bi bi-arrow-left"/></div>*/}
                            {/*            <div className="owl-next"><i className="bi bi-arrow-right"/></div>*/}
                            {/*        </div>*/}
                            {/*        <div className="owl-dots disabled"/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="room-details-content mt-0">
                                        <img src="/assets/images/rooms/room-1.png" alt="" style={{width: '100%'}}/>
                                        {/*<h4>Luxury Room</h4>*/}
                                        <h1>  {t(`rooms:rooms.${params.name.split('-')[0]}.title`)}</h1>
                                        <p>
                                            {t(`rooms:rooms.${params.name.split('-')[0]}.description`)}
                                        </p>

                                        <div className="room-details-check-box" data-cue="zoomIn" data-show="true"
                                             style={{
                                                 animationName: 'zoomIn',
                                                 animationDuration: '2500ms',
                                                 animationTimingFunction: 'ease',
                                                 animationDelay: '0ms',
                                                 animationDirection: 'normal',
                                                 animationFillMode: 'both'
                                             }}>
                                            <div className="room-details-check-content">
                                                <span><img src="/assets/images/inner/room-details-1.png" alt=""/>Check In</span>
                                                <p className="check-item"><i
                                                    className="bi bi-check2"/>{t("rooms:CheckIn")}</p>
                                            </div>
                                        </div>
                                        <div className="room-details-check-box upper" data-cue="zoomIn" data-show="true"
                                             style={{
                                                 animationName: 'zoomIn',
                                                 animationDuration: '2500ms',
                                                 animationTimingFunction: 'ease',
                                                 animationDelay: '750ms',
                                                 animationDirection: 'normal',
                                                 animationFillMode: 'both'
                                             }}>
                                            <div className="room-details-check-content">
                                                <span><img src="/assets/images/inner/room-details-2.png" alt=""/>Check Out</span>
                                                <p className="check-item"><i
                                                    className="bi bi-check2"/>{t("rooms:CheckOut")}</p>

                                            </div>
                                        </div>
                                        <h1 className="room-detils-title-2" data-cue="zoomIn" data-show="true" style={{
                                            animationName: 'zoomIn',
                                            animationDuration: '2500ms',
                                            animationTimingFunction: 'ease',
                                            animationDelay: '0ms',
                                            animationDirection: 'normal',
                                            animationFillMode: 'both'
                                        }}>{t('rooms:Bedding')}</h1>
                                        <div className="room-details-check-content">
                                            <br/>
                                            <p className="check-item"><i
                                                className="bi bi-check2"/> {t(`rooms:rooms.${params.name.split('-')[0]}.bedding.kingSize`)}
                                            </p>
                                            <p className="check-item"><i
                                                className="bi bi-check2"/>{t(`rooms:rooms.${params.name.split('-')[0]}.bedding.twinBeds`)}
                                            </p>
                                            <br/>
                                        </div>
                                        <h1 className="room-detils-title-2"
                                            data-cue="zoomIn">
                                            Total Area of Room
                                            (m2)

                                        </h1>
                                        <p className="room-detils-desc"
                                           data-cue="zoomIn">
                                            <div className="room-detls-list-item" data-cue="zoomIn">
                                                <div
                                                    dangerouslySetInnerHTML={{__html: t(`rooms:rooms.${params.name.split('-')[0]}.size`)}}/>
                                            </div>


                                        </p>
                                        <h1 className="room-detils-title-2"
                                            data-cue="zoomIn">{t('rooms:MaximumCapacity')}</h1>
                                        <p className="room-detils-desc"
                                           data-cue="zoomIn">{t(`rooms:rooms.${params.name.split('-')[0]}.capacity`)}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="booking-list">
                                        <div className="booking-list-content">
                                            <h4>Booking</h4>
                                        </div>
                                        <div className="booking-item">
                                            <ul>
                                                <li><strong>Check In -</strong>04 Oct, 2024</li>
                                                <li><strong>Check Out -</strong>10 Oct, 2024</li>
                                                <li><strong>Adult -</strong>02</li>
                                                <li><strong>Childreen -</strong>02</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="room-details-amenities">
                                        <div className="room-details-amenities-content">
                                            <h4>Service and Facilities</h4>
                                        </div>
                                        <div className="room-amenities-item">
                                            <ul>
                                                {Array.isArray(facilities) ? (
                                                    facilities.map((facility, index) => (
                                                        <li key={index}><i className="bi bi-check2"></i> {facility}</li>
                                                    ))
                                                ) : (
                                                    <li>No facilities available</li>
                                                )}

                                                {/*<li>2 - 5*/}
                                                {/*    Persons*/}
                                                {/*</li>*/}

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}