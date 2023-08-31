import {
  ArrowLeftOnRectangleIcon,
  CurrencyDollarIcon,
  HomeIcon,
  PhoneIcon,
  NewspaperIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/24/solid";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@shared/translations/i18n-client";

type SideBarItemProps = {
  title: string;
  icon: JSX.Element;
  items?: SidebarLinkProps[];
  href?: any;
};

const btnClass = `flex w-full bg-white text-black items-center justify-between px-4 py-2 text-lg hover:bg-l2t-fade-purple transition-colors duration-75 focus:outline-none`;

type SideBarProps = {
  isOpen: boolean;
  onToggle: () => void;
};

type SideBarToggleProps = Omit<SideBarProps, "isOpen">;

export default function SideBar({ isOpen, onToggle }: SideBarProps) {
  const { t } = useTranslation("static");
  const sidebarItems: SideBarItemProps[] = [
    {
      title: t("sidebar.how_it_works"),
      icon: <HomeIcon />,
      href: "/",
    },
    {
      title: t("sidebar.our_clients"),
      icon: <CurrencyDollarIcon />,
      href: "/",
    },
    {
      title: t("sidebar.about_us"),
      icon: <PhoneIcon />,
      href: "/",
    },
    {
      title: t("sidebar.contact_us"),
      icon: <LanguageIcon />,
      href: "/",
    },
  ];

  return (
    <>
      {isOpen && (
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-full h-screen py-10 transition-transform translate-x-0 bg-white border sm:mt-0 sm:w-80 sm:translate-x-0 border-slate-500"
          aria-label="Sidebar"
        >
          <div className="mt-16 overflow-y-auto font-bold">
            {sidebarItems.map((item, index) => (
              <div key={index + item.title}>
                <SidebarItem {...item} onToggle={onToggle} />
              </div>
            ))}
          </div>
        </aside>
      )}
    </>
  );
}

type SidebarLinkProps = {
  title: string;
  href: any;
  icon: JSX.Element;
};

const SidebarLink: React.FC<SidebarLinkProps & SideBarToggleProps> = ({
  title,
  href,
  icon,
  onToggle,
}) => {
  const pathname = usePathname();
  const isSelect = pathname.includes(href);
  return (
    <Link href={href}>
      <button className={`ml-2 pl-8 ${btnClass} `} onClick={onToggle}>
        <span className="flex items-center gap-2">
          <div className="w-6 h-6">{icon}</div>
          {title}
        </span>
      </button>
    </Link>
  );
};

const SidebarItem: React.FC<SideBarItemProps & SideBarToggleProps> = (
  props
) => {
  return (
    <div className="bg-l2t-purple">
      {props.href ? (
        <Link
          href={props.href}
          aria-controls="dropdown-sidebar"
          data-collapse-toggle="dropdown-sidebar"
        >
          <button className={btnClass} onClick={props.onToggle}>
            <span className="flex items-center gap-2">
              <div className="w-6 h-6">{props.icon}</div>
              {props.title}
            </span>
          </button>
        </Link>
      ) : (
        <button
          aria-controls="dropdown-sidebar"
          data-collapse-toggle="dropdown-sidebar"
          className={btnClass}
        >
          <div className="flex items-center gap-2 w-max">
            <div className="w-6 h-6">{props.icon}</div>
            {props.title}
          </div>
          <ChevronDownIcon
            className={`w-6 h-6 transition-transform duration-200`}
          />
        </button>
      )}
      {props.items && (
        <div className={`grid transition-all duration-200 grid-rows-[0fr]`}>
          <ul className="overflow-hidden transition-all duration-200">
            {props.items.map((item) => (
              <li key={item.title}>
                <SidebarLink {...item} onToggle={props.onToggle} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
