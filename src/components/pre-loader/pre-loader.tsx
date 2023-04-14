import React, { useEffect } from "react";
import { PreLoaderAnimate } from "../../utils/pre-loader-animate";

export const PreLoader: React.FC = () => {
  useEffect(() => {
    PreLoaderAnimate();
  }, []);

  return (
    <div className="preloader">
      <div className="preloader__container">
        <span>Developer,</span>
        <span>Curator,</span>
        <span>Vibe</span>
      </div>
    </div>
  );
};
