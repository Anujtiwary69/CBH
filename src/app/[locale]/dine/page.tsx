"use client"
import DefaultHero from "@/app/[locale]/components/DefaultHero";
import React from "react";
import {useTranslation} from "react-i18next";
import BookingForm from "@/app/[locale]/components/home/BookingForm";

export default function Dine(){
    const {t} = useTranslation();
    return(
        <>
            <DefaultHero
                imageName="dine.png"
                title={t('dine:dining_subtitle')}
                subTitle={t('dine:dining_title')}
            />
            <BookingForm/>
            <br/>
            <div className="room-title-area" >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center">
                            <div className="section-title two center container" >
                                <h2>{t('dine:dining_section_title')}</h2>
                                <h4>{t('dine:dining_description')}</h4>
                                <p>{t('dine:dining_intro')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="about-area pt-40">
                <div className="container mt-40">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{t('dine:delices_subtitle')}</h4>
                                <h1>{t('dine:delices_title')}</h1>
                                <p className="section-desc-2">
                                    {t('dine:delices_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src='/assets/images/dine/d1.jpg'
                                                alt={t('dine:delices_title')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="container mt-60">
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/dine/d2.jpg" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('dine:salon_bienvenue_title')}</h4>
                                <h1>{t('dine:salon_bienvenue_subtitle')}</h1>
                                <p className="section-desc-2">
                                    {t('dine:salon_bienvenue_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/dine/d3.jpg" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('dine:rendezvous_title')}</h4>
                                <h1>{t('dine:rendezvous_subtitle')}</h1>
                                <p className="section-desc-2">
                                    {t('dine:rendezvous_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/dine/d4.jpg" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('dine:aloha_title')}</h4>
                                <h1>{t('dine:aloha_subtitle')}</h1>
                                <p className="section-desc-2">
                                    {t('dine:aloha_description')}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div className="about-area pt-40">
                <div className="container mt-40">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="row" data-cue="zoomIn">
                                <div className="about_list owl-carousel">
                                    <div className="col-md-12">
                                        <div className="about-thumb">
                                            <img
                                                src='/assets/images/dine/d5.jpg'
                                                alt={t('dine:delices_title')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 upper">
                            <div className="section-title two" data-cue="zoomIn">
                                <h4>{t('dine:gourmandise_title')}</h4>
                                <h1>{t('dine:gourmandise_subtitle')}</h1>
                                <p className="section-desc-2">
                                    {t('dine:gourmandise_description')}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <section>
                <div className="container mt-60">
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/dine/d8.jpg" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('dine:hawai_title')}</h4>
                                <h1>{t('dine:hawai_subtitle')}</h1>
                                <p className="section-desc-2">
                                    {t('dine:hawai_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/dine/d6.jpg" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('dine:tea_chat_title')}</h4>
                                <h1>{t('dine:tea_chat_subtitle')}</h1>
                                <p className="section-desc-2">
                                    {t('dine:tea_chat_description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-title two">
                                <img src="/assets/images/dine/d7.jpg" alt={t('wellness:welcome_boulevard')}/>
                                <h4 className="mt-3">{t('dine:zippo_title')}</h4>
                                <h1>{t('dine:zippo_subtitle')}</h1>
                                <p className="section-desc-2">
                                    {t('dine:zippo_description')}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
        </>
    )
}