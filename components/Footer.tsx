import {
  ChatBubbleOvalLeftEllipsisIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "@shared/translations/i18n-client";
import Link from "next/link";
const Footer = () => {
  const { t } = useTranslation("static");
  return (
    <>
      <div className="flex-col pt-20 pb-2 text-center bg-white">
        <div>
          <p className="text-base">
            <span className="italic custom-text-light text-n-gray">
              {t("powered_by")}
            </span>
            <span className="pl-2 text-n-dark-grey custom-text-light">
              {t("n_infinite")}
            </span>
            <span className="custom-text-light text-n-gray">
              {t("c_symbol")}
            </span>
          </p>
        </div>
        <div>
          <p className="pt-4 text-n-dark-grey custom-text-light">
            {t("copy_right")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
