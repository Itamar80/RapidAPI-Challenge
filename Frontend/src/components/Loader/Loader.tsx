import React, { useEffect, useState } from "react";
import "./loader.scss";

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = (props) => {
  return <div className={"loader-container"}>loader</div>;
};
