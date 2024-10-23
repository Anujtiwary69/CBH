"use client"
import BookingForm from "@/app/[locale]/components/home/BookingForm";
import Hero from "@/app/[locale]/components/home/hero";
import About from "@/app/[locale]/components/home/About";
import Offers from "@/app/[locale]/components/home/Offers";

import HotelList from "@/app/[locale]/components/home/HotelList";

import Sanatorium from "@/app/[locale]/components/Sanatorium";
import Wellness from "@/app/[locale]/components/home/Wellness";
import Other from "@/app/[locale]/components/home/Other";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { i18n } = useTranslation();
    const [key, setKey] = useState(0);

    useEffect(() => {
        const handleLanguageChange = () => {
            // Force re-render when the language changes
            setKey(prevKey => prevKey + 1); // Changing key will force remount of components with key={key}
        };

        i18n.on("languageChanged", handleLanguageChange);

        // Cleanup event listener to avoid memory leaks
        return () => {
            i18n.off("languageChanged", handleLanguageChange);
        };
    }, [i18n]);

    return (
        <div className="bg-white text-black">
            <Hero />
            <BookingForm />
            <About />
            <HotelList key={i18n.language} /> {/* Remount this when the language changes */}
            <Sanatorium />
            <Other />
            <Wellness />
            <Offers />
        </div>
    );
}