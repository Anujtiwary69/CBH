"use client"
import React from 'react';
import {useTranslation} from "react-i18next";

export default function Wellness(){
    const { t,i18n } = useTranslation();
    const lang = "/" + i18n.language
    return (
        <div className="about-area pt-40">
            <div className="container mt-40">
                <div className="row align-items-center">


                    <div className="col-lg-6 col-md-12">
                        <div className="row" data-cue="zoomIn">
                            <div className="about_list owl-carousel">
                                <div className="col-md-12">
                                    <div className="about-thumb">
                                        <img
                                            src="/assets/images/well.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12  upper">
                        <div className="section-title two" data-cue="zoomIn">
                            <h4>{t('home:wellness')}</h4>
                            <h1>  {t('home:wellness_sub')}</h1>
                            {/*<h1>Californta, Usa</h1>*/}
                            <p className="section-desc-2">
                                {t('home:wellness_description')}
                            </p>
                        </div>


                        {/*<div className="animation-bar" data-cue="zoomIn"></div>*/}
                        <div className="luxury-button" data-cue="zoomIn">
                            <a href={`${lang}/wellness`}>  {t('home:learn_more')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

