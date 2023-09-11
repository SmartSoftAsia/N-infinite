"use client";

// import Footer from "@components/Footer";
import img1 from "@public/images/about_us1.png";
import img2 from "@public/images/about_us2.png";
import img3 from "@public/images/about_us3.png";
import Image from "next/image";
import imageLoader from "@utils/loader.js";

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

export default function About() {
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
          <div className="h-auto max-w-full mt-8 border-none pt-36 mx-autorelative xs:px-8 2xs:px-8 3xs:px-8 4xs:px-8 5xs:px-8 6xs:px-8 7xs:px-8 2xl:px-40 xl:px-40 lg:px-40 md:px-40 lg-max:px-40">
            <div className="flex justify-center">
              <h1 className="pb-8 text-4xl custom-text-bold text-n-dark-grey">
                <span className="pr-4 text-n-yellow">{t("our_mission")}</span>
                {t("our_mission_detail")}
              </h1>
            </div>
            <div className="flex justify-between pt-8 2xl:flex xl:flex lg:flex lg-max:flex-col 2xs:flex-col 3xs:flex-col 4xs:flex-col 5xs:flex-col 6xs:flex-col 7xs:flex-col xs:flex-col">
              <div className="basis-6/12">
                <div className="flex items-center 2xl:justify-start xl:justify-start lg:justify-start lg-max:justify-center 2xs:justify-center 3xs:justify-center 4xs:justify-center 5xs:justify-center 6xs:justify-center 7xs:justify-center xs:justify-center">
                  <p className="pt-2 text-justify custom-text-regular">
                    {t("n_infinite_was_created_to_help_restaurants")}{" "}
                    <span className="px-2 text-n-yellow">
                      {t(
                        "unlock_the_power_of_analytics_and_business_intelligence"
                      )}
                    </span>
                    ;{t("first_section")}
                  </p>
                </div>
              </div>
              <div className="basis-6/12">
                <Image
                  loader={imageLoader}
                  src={img1.src}
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
                  loader={imageLoader}
                  src={img2.src}
                  alt="menu pricing"
                  width={200}
                  height={200}
                  className="mx-auto w-fit 2xl:pt-0 xl:pt-0 lg:pt-0 lg-max:pt-4 2xs:pt-4 3xs:pt-4 4xs:pt-4 5xs:pt-4 6xs:pt-4 7xs:pt-4 xs:pt-4"
                />
              </div>
              <div className="basis-6/12">
                <div className="flex-col items-center 2xl:justify-start xl:justify-start lg:justify-start lg-max:justify-center 2xs:justify-center 3xs:justify-center 4xs:justify-center 5xs:justify-center 6xs:justify-center 7xs:justify-center xs:justify-center">
                  <h2 className="text-3xl text-center custom-text-bold">
                    {t("why_n_Infinite_and_why_now")}
                  </h2>
                  <p className="pt-2 text-justify custom-text-light">
                    {t("second_section")}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-8 2xl:flex xl:flex lg:flex lg-max:flex-col 2xs:flex-col 3xs:flex-col 4xs:flex-col 5xs:flex-col 6xs:flex-col 7xs:flex-col xs:flex-col">
              <div className="basis-6/12">
                <div className="flex-col items-center 2xl:justify-start xl:justify-start lg:justify-start lg-max:justify-center 2xs:justify-center 3xs:justify-center 4xs:justify-center 5xs:justify-center 6xs:justify-center 7xs:justify-center xs:justify-center">
                  <h2 className="text-3xl text-center custom-text-bold">
                    {t("our_story")}
                  </h2>
                  <p className="pt-2 text-justify custom-text-light">
                    {t("third_section")}
                  </p>
                </div>
              </div>
              <div className="basis-6/12">
                <Image
                  loader={imageLoader}
                  src={img3.src}
                  alt="menu selection"
                  width={200}
                  height={200}
                  className="mx-auto w-fit 2xl:pt-0 xl:pt-0 lg:pt-0 lg-max:pt-4 2xs:pt-4 3xs:pt-4 4xs:pt-4 5xs:pt-4 6xs:pt-4 7xs:pt-4 xs:pt-4"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-24 divide-n-grey"></hr>
        <Footer />
      </div>
    </main>
  );
}
