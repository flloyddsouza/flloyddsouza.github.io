import { Fragment, useEffect } from "react";
import {
  aali_tm_moving_animation,
  aTagClick,
  dataImage,
  wowJsAnimation,
} from "../utilits";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Preloader from "./Preloader";

const Layout = ({ children, headName, dark }) => {
  useEffect(() => {
    dataImage();
    wowJsAnimation();
    aali_tm_moving_animation();
    aTagClick();
  });
  return (
    <Fragment>
      <Preloader />
      <div className="aali_tm_all_wrap" data-magic-cursor="show">
        <MobileMenu />
        <Header dark={dark} />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
