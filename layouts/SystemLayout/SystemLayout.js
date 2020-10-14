import React from "react";
import PageDecor from "~/components/PageDecor";
import MainHeader from "~/blocks/common/MainHeader";
import MainFooter from "~/blocks/common/MainFooter";
import MobileApp from "~/blocks/common/MobileApp";
import UsefulServiceCard from "~/components/cards/UsefulServicesCard";
import MenuFoodSystem from "~/components/MenuFoodSystem";
import MediaQuery from "react-responsive";
import { useRouter } from "next/router";
import decorArray from "../decor";
import { getVariant } from "~/helpers/domain";
import ProductGroupsCtx from "~/services/ctx/ProductGroups";
import * as log from "~/services/LogService";

const SystemLayout = (props) => {
  //#region Loging----------------------------------------------------------/
  if (process.env.NODE_ENV !== "production") {
    log.component("SystemLayout", "component render with props...", { props });
  }
  //#endregion Loging----------------------------------------------------------/
  const router = useRouter();
  return (
    <ProductGroupsCtx>
      <div className="page-wrapper page-wrapper__food-system">
        <PageDecor variant={getVariant(router.pathname, decorArray)} />
        <MainHeader variant="food-system" />
        <div className="wrapper wrapper-flex">
          <MediaQuery minWidth={1101}>
            <div className="page-container-left">
              <MenuFoodSystem />
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
    </ProductGroupsCtx>
  );
};

export default SystemLayout;
