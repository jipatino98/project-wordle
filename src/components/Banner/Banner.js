import React from "react";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

function Banner({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default Banner;
