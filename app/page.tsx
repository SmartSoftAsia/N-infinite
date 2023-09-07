"use client";

// import Footer from "@components/Footer";
import bannerImg from "@public/images/banner.png";
import partnerImg from "@public/images/partner.png";
import MenuImg from "@public/images/menu_strength.png";
import PricingMenuImg from "@public/images/pricing_strategy.png";
import PromotionMenuImg from "@public/images/promotion.png";
import AdsMenuImg from "@public/images/advertising_campaigns.png";

import img1 from "@public/images/image_1.png";
import img2 from "@public/images/image_2.png";
import img3 from "@public/images/image_3.png";
import Image from "next/image";

import { useState } from "react";
import {
  BuildingOffice2Icon,
  ChatBubbleLeftEllipsisIcon,
  CloudIcon,
  Cog8ToothIcon,
  StarIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import NavBar from "@components/NavBar";
import SideBar from "@components/SideBar";
import { useTranslation } from "@shared/translations/i18n-client";
import CountrySelector from "@components/SelectCountry";
import { button } from "@material-tailwind/react";
import Footer from "@components/Footer";

export default function Home() {
  const { t } = useTranslation("static");

  const [isMobileOpened, setIsMobileOpened] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileOpened((opened) => !opened);
  };
  return (
    <main>
      <div>
        <NavBar onToggle={toggleMobileMenu} isOpen={isMobileOpened} />
        <SideBar isOpen={isMobileOpened} onToggle={toggleMobileMenu} />
        <div className="overflow-x-hidden">
          <div className="h-auto max-w-full border-none mx-autorelative pt-36 xs:px-8 2xs:px-8 3xs:px-8 4xs:px-8 5xs:px-8 6xs:px-8 7xs:px-8 2xl:px-40 xl:px-40 lg:px-40 md:px-40 lg-max:px-40">
            <div className="flex justify-between custom-text-thin md:flex-col lg-max:flex-col xs:flex-col 2xs:flex-col 3xs:flex-col 4xs:flex-col 5xs:flex-col 6xs:flex-col 7xs:flex-col 2xl:flex-row xl:flex-row lg:flex-row">
              <div className="basis-6/12 md:basis-full">
                <h1 className="text-3xl custom-text-bold">
                  {t("header_details")}
                </h1>
                <p className="pt-6 text-xl">
                  <span className="text-dark-grey">{t("unlock_title")}</span>{" "}
                  <span className="text-n-yellow">
                    {t("unlock_title_details")}
                  </span>
                </p>
                <p className="pt-6 text-xl">
                  <span className="text-dark-grey">
                    {t("our_cutting_edge")}
                  </span>{" "}
                  <span className="text-n-yellow">
                    {t("from_various_sources")}
                  </span>
                  <span className="text-dark-grey">{t("crafting")}</span>{" "}
                  <span className="text-n-yellow">
                    {t("tailored_strategies")}
                  </span>
                  <span className="text-dark-grey">{t("that_drive")}</span>{" "}
                  <span className="text-n-yellow">
                    {t("organic_growth_boost_sales")}
                  </span>{" "}
                  <span className="text-dark-grey">
                    {t("and_enhance_your_restaurants")}
                  </span>{" "}
                  <span className="text-n-yellow">
                    {t("online_visibility")}
                  </span>
                </p>
              </div>
              <div className="basis-6/12 md:basis-full md:pt-4 lg-max:pt-4 xs:pt-4 2xs:pt-4 3xs:pt-4 4xs:pt-4 5xs:pt-4 6xs:pt-4 7xs:pt-4">
                <img
                  src={bannerImg.src}
                  alt="logo"
                  className="w-full h-auto object-fit"
                />
              </div>
            </div>
            <div className="flex justify-center pt-20 2xl:pt-20 xl:pt-20 lg:pt-20 md:pt-4 lg-max:pt-4 xs:pt-4 2xs:pt-4 3xs:pt-4 4xs:pt-4 5xs:pt-4 6xs:pt-4 7xs:pt-4">
              <div className="basis-6/12 2xl:basis-6/12 xl:basis-6/12 lg:basis-6/12 md:basis-6/12 lg-max:basis-8/12 4xs:basis-9/12 5xs:basis-9/12 6xs:basis-9/12 7xs:basis-9/12 xs:basis-9/12">
                <img
                  src={partnerImg.src}
                  alt="logo"
                  className="w-full h-auto object-fit"
                  id="our-client"
                />
              </div>
            </div>
          </div>
          <div className="h-auto max-w-full mt-8 border-none mx-autorelative bg-n-dark-grey xs:px-8 2xs:px-8 3xs:px-8 4xs:px-8 5xs:px-8 6xs:px-8 7xs:px-8 2xl:px-40 xl:px-40 lg:px-40 md:px-40 lg-max:px-40">
            <div className="flex gap-10 py-8 xs:flex-col sm:flex-col lg-max:flex-col 2xl:flex-row xl:flex-row lg:flex-row">
              <div className="flex flex-row justify-center gap-16 flex-container md:flex-col lg-max:flex-col xs:flex-col 2xs:flex-col 3xs:flex-col 4xs:flex-col 5xs:flex-col 6xs:flex-col 7xs 2xl:flex-row xl:flex-row lg:flex-row">
                <div className="flex flex-col basis-4/12">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex justify-center">
                      <img src={img1.src} alt="logo" className="" />
                    </div>
                    <h3 className="pt-4 text-2xl text-center text-white custom-text-light">
                      {t("grow_online_sales")}
                    </h3>
                    <p className="pt-4 text-xl text-justify custom-text-light">
                      <span className="text-white">
                        {t("together_our_group_has_the")}
                      </span>{" "}
                      <span className="text-n-yellow">
                        {t("voice_and_negotiation_power")}
                      </span>{" "}
                      <span className="text-white">
                        {t("with_online_food")}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col basis-4/12">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex justify-center">
                      <img src={img2.src} alt="logo" className="" />
                    </div>
                    <h3 className="pt-4 text-2xl text-center text-white custom-text-light">
                      {t("launch_new_online")}
                    </h3>
                    <p className="pt-4 text-xl text-justify custom-text-light">
                      <span className="text-white">
                        {t("launch_new_online_brands_to")}
                      </span>{" "}
                      <span className="text-n-yellow">
                        {t("optimize_kitchen_capacities")}
                      </span>{" "}
                      <span className="text-white">
                        {t("and_drive_innovation")}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col basis-4/12">
                  <div className="flex flex-col items-center justify-center">
                    <img src={img3.src} alt="logo" className="" />
                    <h3 className="pt-4 text-2xl text-center text-white custom-text-light">
                      {t("invest_and_help_restaurants")}
                    </h3>
                    <p className="pt-4 text-xl text-justify custom-text-light">
                      <span className="text-white">{t("we_build_and")}</span>{" "}
                      <span className="text-n-yellow">{t("invest_into")}</span>
                      {" - "}
                      <span className="text-white">
                        {t("leveraging_technology")}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-auto max-w-full mt-8 border-none mx-autorelative xs:px-8 2xs:px-8 3xs:px-8 4xs:px-8 5xs:px-8 6xs:px-8 7xs:px-8 2xl:px-40 xl:px-40 lg:px-40 md:px-40 lg-max:px-40"
            id="how-it-work"
          >
            <div className="flex justify-center">
              <h2 className="pb-8 text-xl custom-text-regular">
                {t("we_take_a_data_driven")}{" "}
                <span className="text-n-yellow">
                  {t("optimize_delivery_platform_performance")}
                </span>
              </h2>
            </div>
            <div className="flex justify-between 2xl:flex xl:flex lg:flex lg-max:flex-col 2xs:flex-col 3xs:flex-col 4xs:flex-col 5xs:flex-col 6xs:flex-col 7xs:flex-col xs:flex-col">
              <div className="basis-6/12">
                <div className="flex items-center 2xl:justify-start xl:justify-start lg:justify-start lg-max:justify-center 2xs:justify-center 3xs:justify-center 4xs:justify-center 5xs:justify-center 6xs:justify-center 7xs:justify-center xs:justify-center">
                  <p className="px-4 py-2 text-white rounded-full bg-n-dark-grey">
                    1
                  </p>
                  <h3 className="pl-1 text-xl custom-text-regular text-n-yellow">
                    {t("menu_selection")}
                  </h3>
                </div>
                <p className="pt-2 text-justify custom-text-light">
                  {t("menu_selection_detail")}
                </p>
              </div>
              <div className="basis-6/12">
                <Image
                  src={MenuImg.src}
                  alt="menu selection"
                  width={200}
                  height={200}
                  className="mx-auto w-fit 2xl:pt-0 xl:pt-0 lg:pt-0 lg-max:pt-4 2xs:pt-4 3xs:pt-4 4xs:pt-4 5xs:pt-4 6xs:pt-4 7xs:pt-4 xs:pt-4"
                />
              </div>
            </div>
            <div className="flex justify-between pt-8 2xl:flex xl:flex lg:flex lg-max:flex-col-reverse 2xs:flex-col-reverse 3xs:flex-col-reverse 4xs:flex-col-reverse 5xs:flex-col-reverse 6xs:flex-col-reverse 7xs:flex-col-reverse xs:flex-col-reverse">
              <div className="basis-6/12">
                <Image
                  src={PricingMenuImg.src}
                  alt="menu pricing"
                  width={200}
                  height={200}
                  className="mx-auto w-fit 2xl:pt-0 xl:pt-0 lg:pt-0 lg-max:pt-4 2xs:pt-4 3xs:pt-4 4xs:pt-4 5xs:pt-4 6xs:pt-4 7xs:pt-4 xs:pt-4"
                />
              </div>
              <div className="basis-6/12">
                <div className="flex items-center 2xl:justify-start xl:justify-start lg:justify-start lg-max:justify-center 2xs:justify-center 3xs:justify-center 4xs:justify-center 5xs:justify-center 6xs:justify-center 7xs:justify-center xs:justify-center">
                  <p className="px-4 py-2 text-white rounded-full bg-n-dark-grey">
                    2
                  </p>
                  <h3 className="pl-1 text-xl custom-text-regular text-n-yellow">
                    {t("pricing_strategy")}
                  </h3>
                </div>
                <p className="pt-2 text-justify custom-text-light">
                  {t("pricing_strategy_detail")}
                </p>
              </div>
            </div>
            <div className="flex justify-between pt-8 2xl:flex xl:flex lg:flex lg-max:flex-col 2xs:flex-col 3xs:flex-col 4xs:flex-col 5xs:flex-col 6xs:flex-col 7xs:flex-col xs:flex-col">
              <div className="basis-6/12">
                <div className="flex items-center 2xl:justify-start xl:justify-start lg:justify-start lg-max:justify-center 2xs:justify-center 3xs:justify-center 4xs:justify-center 5xs:justify-center 6xs:justify-center 7xs:justify-center xs:justify-center">
                  <p className="px-4 py-2 text-white rounded-full bg-n-dark-grey">
                    3
                  </p>
                  <h3 className="pl-1 text-xl custom-text-regular text-n-yellow">
                    {t("promotion_menu")}
                  </h3>
                </div>
                <p className="pt-2 text-justify custom-text-light">
                  {t("promotion_menu_detail")}
                </p>
              </div>
              <div className="basis-6/12">
                <Image
                  src={PromotionMenuImg.src}
                  alt="menu selection"
                  width={200}
                  height={200}
                  className="mx-auto w-fit 2xl:pt-0 xl:pt-0 lg:pt-0 lg-max:pt-4 2xs:pt-4 3xs:pt-4 4xs:pt-4 5xs:pt-4 6xs:pt-4 7xs:pt-4 xs:pt-4"
                />
              </div>
            </div>
            <div className="flex justify-between pt-8 2xl:flex xl:flex lg:flex lg-max:flex-col-reverse 2xs:flex-col-reverse 3xs:flex-col-reverse 4xs:flex-col-reverse 5xs:flex-col-reverse 6xs:flex-col-reverse 7xs:flex-col-reverse xs:flex-col-reverse">
              <div className="basis-6/12">
                <Image
                  src={AdsMenuImg.src}
                  alt="menu pricing"
                  width={200}
                  height={200}
                  className="mx-auto w-fit 2xl:pt-0 xl:pt-0 lg:pt-0 lg-max:pt-4 2xs:pt-4 3xs:pt-4 4xs:pt-4 5xs:pt-4 6xs:pt-4 7xs:pt-4 xs:pt-4"
                />
              </div>
              <div className="basis-6/12">
                <div className="flex items-center 2xl:justify-start xl:justify-start lg:justify-start lg-max:justify-center 2xs:justify-center 3xs:justify-center 4xs:justify-center 5xs:justify-center 6xs:justify-center 7xs:justify-center xs:justify-center">
                  <p className="px-4 py-2 text-white rounded-full bg-n-dark-grey">
                    4
                  </p>
                  <h3 className="pl-1 text-xl custom-text-regular text-n-yellow">
                    {t("advertising_campaigns")}
                  </h3>
                </div>
                <p className="pt-2 text-justify custom-text-light">
                  {t("pricing_strategy_detail")}
                </p>
              </div>
            </div>
          </div>
          <div className="h-auto max-w-full mt-8 border-none mx-autorelative bg-n-dark-grey xs:px-8 2xs:px-8 3xs:px-8 4xs:px-8 5xs:px-8 6xs:px-8 7xs:px-8 2xl:px-40 xl:px-40 lg:px-40 md:px-40 lg-max:px-40">
            <div
              className="justify-between gap-8 py-8 2xl:flex xl:flex lg:flex lg-max:flex-col 2xs:flex-col 3xs:flex-col 4xs:flex-col 5xs:flex-col 6xs:flex-col 7xs:flex-col xs:flex-col"
              id="contact-us"
            >
              <div className="basis-6/12">
                <h3 className="text-3xl text-center text-white custom-text-bold">
                  {t("ready_to_get_started")}
                </h3>
                <p className="pt-4 text-justify text-white custom-text-light">
                  {t("ready_to_get_started_details")}
                </p>
              </div>
              <div className="basis-6/12 custom-text-light 2xl:pt-0 xl:pt-0 lg:pt-0 lg-max:pt-4 2xs:pt-4 3xs:pt-4 4xs:pt-4 5xs:pt-4 6xs:pt-4 7xs:pt-4 xs:pt-4">
                <div className="flex justify-between gap-8 ">
                  <div className="basis-6/12">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      {t("first_name")}
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                    ></input>
                  </div>
                  <div className="basis-6/12">
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      {t("last_name")}
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      required
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between gap-8 pt-2 ">
                  <div className="basis-6/12">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      {t("email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="email@email.com"
                      required
                    ></input>
                  </div>
                  <div className="basis-6/12">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      {t("phone")}
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0xx-xxxxxxx"
                      required
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between gap-8 pt-2">
                  <div className="basis-6/12">
                    <label
                      htmlFor="company"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      {t("company")}
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                      placeholder="ssa"
                      required
                    ></input>
                  </div>
                  <div className="basis-6/12">
                    <label
                      htmlFor="country"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      {t("country")}
                    </label>
                    <CountrySelector />
                  </div>
                </div>
                <div className="flex justify-between gap-8 pt-4">
                  <div className="basis-6/12"></div>
                  <div className="basis-6/12">
                    <button className="w-full text-center text-white rounded-full bg-n-yellow">
                      <p className="m-4 custom-text-regular">{t("apply")}</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
