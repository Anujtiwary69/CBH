import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import "../../../public/css/main.css"
import "../../../public/css/animation.css"
import Header from "@/app/[locale]/components/home/header";

import Footer from "@/app/[locale]/components/home/Footer";

import HeadSection from "@/app/[locale]/components/HeadSection";
import JSSection from "@/app/[locale]/components/JSSection";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/[locale]/components/TranslationsProvider";
import 'rsuite/dist/rsuite-no-reset.min.css';


export default async function RootLayout({
                                             children,
                                             params
                                         }: Readonly<{
    children: React.ReactNode;
    params: { locale: string }
}>) {
    const i18nNamespaces = ["default", "menus", "sanatorium", "home", "footer","wellness","dine","meet","shop","offers","about","press","rooms"];
    const {resources} = await initTranslations(params.locale, i18nNamespaces);
    return (
        <html lang="en" className="bg-white">
        <>
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <title>Chortoq Hospitality </title>
            <link rel="canonical"/>
            <meta name="deScription" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            {/* Favicon */}
            <HeadSection/>
        </>
        <body>
        <div className="bg-white">
            <TranslationsProvider namespaces={i18nNamespaces} locale={params.locale} resources={resources}>

                <Header/>
                {children}
                <JSSection/>

                <Footer/>
            </TranslationsProvider>
        </div>

        </body>
        </html>
    );
}
