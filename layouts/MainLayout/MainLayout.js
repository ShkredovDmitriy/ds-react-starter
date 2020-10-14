import React from "react";
import PageDecor from "~/components/PageDecor";
import MainHeader from "~/blocks/common/MainHeader";
import MainFooter from "~/blocks/common/MainFooter";
import { useRouter } from "next/router";
import decorArray from "../decor";
import { getVariant } from "~/helpers/domain";
import * as log from "~/services/LogService";

const MainLayout = (props) => {
  //#region Loging----------------------------------------------------------/
  if (process.env.NODE_ENV !== "production") {
    log.component("MainLayout", "component render with props...", { props });
  }
  //#endregion Loging----------------------------------------------------------/
  const router = useRouter();

  return (
    <div className="page-wrapper page-wrapper__main-page">
      <PageDecor variant={getVariant(router.pathname, decorArray)} />
      <MainHeader />
      {props.children}
      <MainFooter />
    </div>
  );
};

export default MainLayout;
