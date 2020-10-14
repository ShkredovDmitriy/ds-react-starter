import React from "react";
import PageDecor from "~/components/PageDecor";
import MainHeader from "~/blocks/common/MainHeader";
import MainFooter from "~/blocks/common/MainFooter";
import MobileApp from "~/blocks/common/MobileApp";
import UsefulServiceCard from "~/components/cards/UsefulServicesCard";
import MediaQuery from "react-responsive";
import { useRouter } from "next/router";
import decorArray from "../decor";
import { getVariant } from "~/helpers/domain";
import * as log from "~/services/LogService";

const OthersLayout = (props) => {
  //#region Loging----------------------------------------------------------/
  if (process.env.NODE_ENV !== "production") {
    log.component("OthersLayout", "component render with props...", { props });
  }
  //#endregion Loging----------------------------------------------------------/
  const router = useRouter();
  return (
    <div className="page-wrapper page-wrapper__about-page">
      <PageDecor variant={getVariant(router.pathname, decorArray)} />
      <MainHeader />
      <div className="wrapper wrapper-flex">
        <MediaQuery minWidth={1101}>
          <div className="page-container-left">
            <MobileApp variant="compact" />
            <UsefulServiceCard
              image="/images/image-useful-services-card-compact-1.jpg"
              title="Задать вопрос эксперту"
              description="С помощью этого сервиса вы можете задать любые вопросы на интересующие темы через форму обратно связи на нашем сайте"
              color="white"
              variant="compact"
              href="/feedback"
              text="Задать вопрос эксперту"
            />
          </div>
        </MediaQuery>
        {props.children}
      </div>
      <MainFooter />
    </div>
  );
};

export default OthersLayout;
