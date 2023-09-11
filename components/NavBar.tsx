"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "@shared/translations/i18n-client";
import infiniteLogo from "@public/images/infinite-logo.png";
import "../styles/fonts.css";

type NavBarProps = {
  isOpen: boolean;
  onToggle: () => void;
};

type NavBarItemProps = {
  title: string;
  icon: string;
  href: any;
  color?: string;
};

const NavBar = ({ onToggle, isOpen }: NavBarProps) => {
  const { i18n } = useTranslation();
  const { t } = useTranslation("static");
  const router = useRouter();
  const pathName = usePathname();
  const scrollToElement = async (e: any, targetElementId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetElementId);
    console.log(pathName);
    if (pathName === "/") {
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "end",
        });
      }
    } else {
      await router.push("/");
      setTimeout(() => {
        const element = document.getElementById(targetElementId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "end",
          });
        }
      }, 100);
    }
  };
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white shadow-bottom">
        <div className="flex flex-wrap items-center justify-between px-8 py-4 mx-auto">
          <div className="flex items-center 7xs:w-3/5">
            <Link href={"/"} className="relative flex items-center ">
              <div className="mx-auto">
                <img
                  src={infiniteLogo.src}
                  alt="logo"
                  className="object-fit max-h-12"
                />
              </div>
            </Link>
          </div>

          <div className="flex font-medium custom-text-light text-n-dark-grey">
            <>
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement(e, "how-it-work");
                }}
                className="items-center hidden pr-8 xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden 5xs:hidden 6xs:hidden 7xs:hidden md:flex lg-max:flex lg:flex xl:flex 2xl:flex"
              >
                {t("sidebar.how_it_works")}
              </Link>
              <Link
                href={"/"}
                className="items-center hidden pr-8 xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden 5xs:hidden 6xs:hidden 7xs:hidden md:flex lg-max:flex lg:flex xl:flex 2xl:flex"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement(e, "our-client");
                }}
              >
                {t("sidebar.our_clients")}
              </Link>
              <Link
                href={"/about-us"}
                className="items-center hidden pr-8 xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden 5xs:hidden 6xs:hidden 7xs:hidden md:flex lg-max:flex lg:flex xl:flex 2xl:flex"
              >
                {t("sidebar.about_us")}
              </Link>
              <Link
                href={"/"}
                className="items-center hidden pr-8 xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden 5xs:hidden 6xs:hidden 7xs:hidden md:flex lg-max:flex lg:flex xl:flex 2xl:flex"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement(e, "contact-us");
                }}
              >
                {t("sidebar.contact_us")}
              </Link>
            </>
          </div>
          <div className="flex">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 2xs:block xs:block 3xs:block 4xs:block 5xs:block 6xs:block 7xs:block lg-max:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              {isOpen ? (
                <XMarkIcon
                  className="w-6 h-6 text-l2t-purple"
                  onClick={onToggle}
                />
              ) : (
                <Bars3Icon
                  className="w-6 h-6 text-l2t-purple"
                  onClick={onToggle}
                />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
