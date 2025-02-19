"use client";

import Link from 'next/link';
import React, {useState, useRef, useEffect} from 'react';

import $ from 'jquery';
import {useTranslation} from "react-i18next";
import LanguageChanger from "@/app/[locale]/components/LanguageChanger";
import {router} from "next/client";


const menuItems = [
    // {
    //     name: 'Hotels',
    //     link: '/hotels',
    //     submenu: [
    //         {name: 'Grand Chortoq Resort', link: '/meetings',},
    //         {name: 'Chortoq Boutique Hotel', link: '/events'},
    //         {name: 'O2Zoda Resort & Spa', link: '/conferences'},
    //     ],
    // },
    {
        name:"rooms",
        link: '/rooms',
    },
    {
        name: 'Sanatorium',
        link: '/sanatorium',
        // submenu: [
        //     { name: 'Chortoq Sanatorium', link: '/meetings' },
        //     { name: 'Chortoq Diagnostic Centre', link: '/events' },
        //     { name: 'Chortoq Laboratory', link: '/conferences' },
        //     { name: 'Physiotheraphy Centre', link: '/meetings' },
        //     { name: 'Salt Room', link: '/events' },
        //     { name: 'Balneotherapy', link: '/conferences' },P
        //     { name: 'Gyneco Studio', link: '/meetings' },
        //     { name: 'Colon Hydrotherapy', link: '/events' },
        //     { name: 'Comfort Massage Centre', link: '/conferences' },
        //     { name: 'Cosmetology', link: '/conferences' },
        // ],
    },
    {
        name: 'Wellness',
        link: '/wellness',
        // submenu: [
        //     {
        //         name: 'Chortoq Club House', link: '/meetings',
        //         submenu: [
        //             {name: 'VIP Spa', link: '/room1'},
        //             {name: 'Sensasia Spa', link: '/room2'},
        //             {name: 'Billiards', link: '/room2'},
        //             {name: 'Dance Studio', link: '/room2'},
        //             {name: 'Social Space', link: '/room2'},
        //             {name: 'Swimming Pool with Kids Pool', link: '/room2'},
        //             {name: 'Jacuzzi', link: '/room2'},
        //             {name: 'Pirates Club', link: '/room2'},
        //         ]
        //     },
        //     {
        //         name: 'Wakatua Club', link: '/events',
        //         submenu: [
        //             {name: 'Kiki Beach', link: '/room1'},
        //             {name: 'Tahiti - Bora Bora - Tetiaroa', link: '/room2'},
        //             {name: 'Chortoq Stables', link: '/room2'},
        //             {name: 'Tennis', link: '/room2'},
        //             {name: 'Basketball', link: '/room2'},
        //             {name: 'Football', link: '/room2'},
        //             {name: 'Jogging Track', link: '/room2'},
        //
        //         ]
        //     },
        //     {name: 'Energy Fitness Club', link: '/conferences'},
        //     {
        //         name: 'Serene Spa', link: '/meetings',
        //         submenu: [
        //             {name: 'Fantasy Showers', link: '/room1'},
        //             {name: 'Mineral Water Pool', link: '/room2'},
        //             {name: 'Aquatonic Pool', link: '/room2'},
        //             {name: 'Massage Rooms', link: '/room2'},
        //             {name: 'Hammam', link: '/room2'},
        //             {name: 'Male & Female Changing Rooms', link: '/room2'},
        //             {name: 'Relax Areas', link: '/room2'},
        //             {name: 'Pantry', link: '/room2'},
        //
        //         ]
        //     },
        //     {name: 'Welcome Boulevard', link: '/events'},
        //     {name: 'Live Show Podium', link: '/conferences'},
        //     {name: 'Sunset Boulevard', link: '/meetings'},
        //     {name: 'Outdoor Facilities', link: '/events'},
        //     {name: 'Prayer Room', link: '/conferences'},
        // ],


    },
    {
        name: 'Dine',
        link: '/dine',
        // submenu: [
        //     {name: 'Delices - Dietetic Restaurant', link: '/meetings'},
        //     {name: 'Salon Bienvenue', link: '/events'},
        //     {name: 'Rendezvous', link: '/conferences'},
        //     {name: 'Aloha', link: '/meetings'},
        //     {name: 'Hawai', link: '/events'},
        //     {name: 'Tea Chat', link: '/conferences'},
        //     {name: 'Gourmandise', link: '/meetings'},
        //     {name: 'Zippo Deck', link: '/events'},
        //     {name: 'Bonjour', link: '/conferences'},
        //     {name: 'Fringale Restaurant', link: '/conferences'},
        //     {name: 'Ambassadors', link: '/conferences'},
        //     {name: 'BAR TECA', link: '/conferences'},
        //     {name: 'La Terrace', link: '/conferences'},
        // ],
    },
    {
        name: 'Meet',
        link: '/meet',
        // submenu: [
        //     {name: 'Alpha Board Room', link: '/meetings'},
        //     {name: 'Chortoq 1 - Conference Hall', link: '/events'},
        //     {name: 'Chortoq 2 - Meeting Room', link: '/conferences'},
        //     {name: 'Chortoq 3 - Meeting Room', link: '/conferences'},
        //     {name: 'Beta Meeting Room', link: '/conferences'},
        //     {name: 'Zeta Meeting Room', link: '/conferences'},
        //     {name: 'Lota Meeting Room', link: '/conferences'},
        //
        // ],
    },
    // {
    //     name: 'Celebrate',
    //     link: '/meet',
    //
    // },
    {
        name: 'Shop',
        link: '/shop',
        // submenu: [
        //     {name: 'Gift Vouchers', link: '/boutique'},
        //     {name: 'Caprice Boutique', link: '/grocery'},
        //     {name: 'Tailor ', link: '/pharmacy'},
        //     {name: 'Ladies Salon ', link: '/pharmacy'},
        //     {name: 'Deli Shop ', link: '/pharmacy'},
        //     {name: 'Chortoq Organic Grocery ', link: '/pharmacy'},
        //     {name: 'Chortoq Pharmacy', link: '/pharmacy'},
        // ],
    },
    {
        name: "Offers",
        link: "/offers",
    }

];

interface SectionType {
    name: string;
    link: string;

}

export default function Header() {
    const {t, i18n} = useTranslation()
    const lang = "/" + i18n.language
    const shop: SectionType[] = t('menus:menu.shop.submenu', {returnObjects: true}) as SectionType[];
    const meet: SectionType[] = t('menus:menu.meet.submenu', {returnObjects: true}) as SectionType[];
    const wellness: SectionType[] = t('menus:menu.wellness.submenu', {returnObjects: true}) as SectionType[];
    const hotels: SectionType[] = t('menus:menu.hotels.submenu', {returnObjects: true}) as SectionType[];
    const dine: SectionType[] = t('menus:menu.dine.submenu', {returnObjects: true}) as SectionType[];
    const sanatorium: SectionType[] = t('menus:menu.sanatorium.submenu', {returnObjects: true}) as SectionType[];

    // console.log("ANuj")
    // console.log(typeof menuItems);

    useEffect(() => {
        const handleClick = () => {
            router.push("/your-target-url"); // Change to your target URL
        };
        const meanBar = document.querySelector(".mean-container .mean-bar");
        if (meanBar) {
            meanBar.addEventListener("click", handleClick);
        }
        const handleLanguageChange = () => {
            // Remove 'owl-loaded' and 'owl-drag' classes when language changes
            // $('.owl-carousel').each(function () {
            //     if ($(this).hasClass('owl-loaded') || $(this).hasClass('owl-drag')) {
            //         $(this).removeClass('owl-loaded owl-drag');
            //     }
            //     if (!$(this).hasClass('owl-loaded') || !$(this).hasClass('owl-drag')) {
            //         $(this).addClass('owl-loaded owl-drag');
            //     }
            // });
        };

        $('.owl-carousel').each(function () {
            if (!$(this).hasClass('owl-loaded') || !$(this).hasClass('owl-drag')) {
                $(this).addClass('owl-loaded owl-drag');
            }
        });
        $('[data-cue="zoomIn"], [data-cues="zoomIn"] > *').css('opacity', '1');
        i18n.on("languageChanged", handleLanguageChange);
        // Initial call to handle the current language state
        handleLanguageChange();
        // Cleanup to avoid memory leaks
        return () => {
            const meanBarCleanup = document.querySelector(".mean-container .mean-bar");
            if (meanBarCleanup) {
                meanBarCleanup.removeEventListener("click", handleClick);
            }
            i18n.off("languageChanged", handleLanguageChange);
        };

    }, [i18n.language,router]); // Add dependencies here
    return (
        <>

            <div className="header-area" id="sticky-header" style={{position:'absolute',width:'100%',zIndex:'999'}}>

                <div className="container-fluid"> {/* Fixed typo here */}
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="header-logo">
                                <a href={lang}>
                                    <img src="/image/logo.png" alt="Company Logo" className="w-24"
                                    />

                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="header-menu">
                                <ul>
                                    {menuItems.map((menuItem, index) => (
                                        <li className="menu-item-has-children" key={menuItem.name + index}>

                                            <a href={lang + menuItem.link}>
                                                {t(`menus:menu.${menuItem.name.toLowerCase()}.name`)}
                                                {/*{menuItem.submenu ? <i className="fas fa-chevron-down"/> : null}*/}
                                            </a>

                                {/*            {menuItem.submenu && (*/}

                                {/*                <ul className="sub-menu">*/}
                                {/*                    {menuItem.name === 'Shop' ? (*/}
                                {/*                        shop.map((subItem, subIndex) => (*/}
                                {/*                            <li key={subItem.name + subIndex}>*/}
                                {/*                                <Link href={lang + subItem.link}>*/}
                                {/*                                    {t(`${subItem.name}`)}*/}
                                {/*                                </Link>*/}
                                {/*                            </li>*/}
                                {/*                        ))*/}
                                {/*                    ) : menuItem.name === 'Meet' ? (*/}
                                {/*                        meet.map((subItem, subIndex) => (*/}
                                {/*                            <li key={subItem.name + subIndex}>*/}
                                {/*                                <Link href={lang + subItem.link}>*/}
                                {/*                                    {t(`${subItem.name}`)}*/}
                                {/*                                </Link>*/}
                                {/*                            </li>*/}
                                {/*                        ))*/}
                                {/*                    ) : menuItem.name === 'Wellness' ? (*/}
                                {/*                            wellness.map((subItem, subIndex) => (*/}
                                {/*                                <li key={subItem.name + subIndex}>*/}
                                {/*                                    <Link href={lang + subItem.link}>*/}
                                {/*                                        {t(`${subItem.name}`)}*/}
                                {/*                                    </Link>*/}
                                {/*                                </li>*/}
                                {/*                            ))*/}
                                {/*                        ) :*/}

                                {/*                        menuItem.name === 'Hotels' ? (*/}
                                {/*                            hotels.map((subItem, subIndex) => (*/}
                                {/*                                <li key={subItem.name + subIndex}>*/}
                                {/*                                    <Link href={lang + subItem.link}>*/}
                                {/*                                        {t(`${subItem.name}`)}*/}
                                {/*                                    </Link>*/}
                                {/*                                </li>*/}
                                {/*                            ))*/}
                                {/*                        ) : menuItem.name === 'Dine' ? (*/}
                                {/*                                dine.map((subItem, subIndex) => (*/}
                                {/*                                    <li key={subItem.name + subIndex}>*/}
                                {/*                                        <Link href={lang + subItem.link}>*/}
                                {/*                                            {t(`${subItem.name}`)}*/}
                                {/*                                        </Link>*/}
                                {/*                                    </li>*/}
                                {/*                                ))*/}
                                {/*                            )*/}
                                {/*                            : menuItem.name === 'Sanatorium' ? (*/}
                                {/*                                sanatorium.map((subItem, subIndex) => (*/}
                                {/*                                    <li key={subItem.name + subIndex}>*/}
                                {/*                                        <Link href={lang + subItem.link}>*/}
                                {/*                                            {t(`${subItem.name}`)}*/}
                                {/*                                        </Link>*/}
                                {/*                                    </li>*/}
                                {/*                                ))*/}
                                {/*                            ) : (*/}
                                {/*                                <li>*/}

                                {/*                                </li>*/}
                                {/*                            )*/}

                                {/*                    }*/}
                                {/*                </ul>*/}
                                {/*            )}*/}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-lg-2 d-flex align-items-center">
                            <div className="header-button text-right" >
                                <Link href="#" style={{fontSize: i18n.language === "en" ? "16px" : "12px"}}>{t('home:book_now')}</Link>
                            </div>
                            <LanguageChanger/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none ">
                <div className="mobile-menu">
                    <nav className="header-menu">

                            <ul className="nav_scroll">
                                {menuItems.map((menuItem, index) => (
                                    <li className="menu-item-has-children" key={menuItem.name + index}>

                                        <a href={lang + menuItem.link}>
                                            {t(`menus:menu.${menuItem.name.toLowerCase()}.name`)}
                                            {/*{menuItem.submenu ? <i className="fas fa-chevron-down"/> : null}*/}
                                        </a>

                                        {/*{menuItem.submenu && (*/}

                                        {/*    <ul className="sub-menu">*/}
                                        {/*        {menuItem.name === 'Shop' ? (*/}
                                        {/*            shop.map((subItem, subIndex) => (*/}
                                        {/*                <li key={subItem.name + subIndex}>*/}
                                        {/*                    <Link href={lang + subItem.link}>*/}
                                        {/*                        {t(`${subItem.name}`)}*/}
                                        {/*                    </Link>*/}
                                        {/*                </li>*/}
                                        {/*            ))*/}
                                        {/*        ) : menuItem.name === 'Meet' ? (*/}
                                        {/*            meet.map((subItem, subIndex) => (*/}
                                        {/*                <li key={subItem.name + subIndex}>*/}
                                        {/*                    <Link href={lang + subItem.link}>*/}
                                        {/*                        {t(`${subItem.name}`)}*/}
                                        {/*                    </Link>*/}
                                        {/*                </li>*/}
                                        {/*            ))*/}
                                        {/*        ) : menuItem.name === 'Wellness' ? (*/}
                                        {/*                wellness.map((subItem, subIndex) => (*/}
                                        {/*                    <li key={subItem.name + subIndex}>*/}
                                        {/*                        <Link href={lang + subItem.link}>*/}
                                        {/*                            {t(`${subItem.name}`)}*/}
                                        {/*                        </Link>*/}
                                        {/*                    </li>*/}
                                        {/*                ))*/}
                                        {/*            ) :*/}

                                        {/*            menuItem.name === 'Hotels' ? (*/}
                                        {/*                hotels.map((subItem, subIndex) => (*/}
                                        {/*                    <li key={subItem.name + subIndex}>*/}
                                        {/*                        <Link href={lang + subItem.link}>*/}
                                        {/*                            {t(`${subItem.name}`)}*/}
                                        {/*                        </Link>*/}
                                        {/*                    </li>*/}
                                        {/*                ))*/}
                                        {/*            ) : menuItem.name === 'Dine' ? (*/}
                                        {/*                    dine.map((subItem, subIndex) => (*/}
                                        {/*                        <li key={subItem.name + subIndex}>*/}
                                        {/*                            <Link href={lang + subItem.link}>*/}
                                        {/*                                {t(`${subItem.name}`)}*/}
                                        {/*                            </Link>*/}
                                        {/*                        </li>*/}
                                        {/*                    ))*/}
                                        {/*                )*/}
                                        {/*                : menuItem.name === 'Sanatorium' ? (*/}
                                        {/*                    sanatorium.map((subItem, subIndex) => (*/}
                                        {/*                        <li key={subItem.name + subIndex}>*/}
                                        {/*                            <Link href={lang + subItem.link}>*/}
                                        {/*                                {t(`${subItem.name}`)}*/}
                                        {/*                            </Link>*/}
                                        {/*                        </li>*/}
                                        {/*                    ))*/}
                                        {/*                ) : (*/}
                                        {/*                    <li>*/}

                                        {/*                    </li>*/}
                                        {/*                )*/}

                                        {/*        }*/}
                                        {/*    </ul>*/}
                                        {/*)}*/}
                                    </li>
                                ))}
                            </ul>

                    </nav>
                </div>
            </div>

        </>
    );
}