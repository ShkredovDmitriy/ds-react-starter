import React from "react";
import PageDecor from "~/components/PageDecor";
import MainHeader from "~/blocks/common/MainHeader";
import MainFooter from "~/blocks/common/MainFooter";
import MobileApp from "~/blocks/common/MobileApp";
import UsefulServiceCard from "~/components/cards/UsefulServicesCard";
import MenuProducts from "~/components/MenuProducts";
import MediaQuery from "react-responsive";
import { useRouter } from "next/router";
import decorArray from "../decor";
import { getVariant } from "~/helpers/domain";
import * as log from "~/services/LogService";
import ProductFilterCtx from "~/services/ctx/ProductFilter";

const ProductLayout = (props) => {
  //#region Loging----------------------------------------------------------/
  if (process.env.NODE_ENV !== "production") {
    log.component("ProductLayout", "component render with props...", { props });
  }
  //#endregion Loging----------------------------------------------------------/
  const router = useRouter();
  return (
    <ProductFilterCtx>
      <div className="page-wrapper page-wrapper__main-page">
        <PageDecor variant={getVariant(router.pathname, decorArray)} />
        <MainHeader />
        <div className="wrapper wrapper-flex">
          <MediaQuery minWidth={1101}>
            <div className="page-container-left">
              <MenuProducts />
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
    </ProductFilterCtx>
  );
};

export default ProductLayout;
