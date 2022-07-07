import React, { useEffect, useState } from "react";

import "./Progress.css";
import "../common.css";

export interface ProgressProps {
  // label: string;
  // value: string;
  percent: number | "loading";
  showInfo?: boolean;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

const Progress = ({
  // label, value,
  percent,
  showInfo = false,
  size = "medium",
  fullWidth = false,
  ...props
}: ProgressProps) => {
  const [isLoading, setIsLoading] = useState(percent === "loading");
  const [loadingOverlay, setLoadingOverlay] = useState(false);

  useEffect(() => {
    if (percent && percent < 100 && percent !== "loading") {
      setLoadingOverlay(true);
    } else if (percent && percent >= 100 && percent !== "loading") {
      setLoadingOverlay(false);
    }
  }, [percent]);

  return (
    <div
      className={[fullWidth ? "progress-outer" : "progress-outer-fix"].join(
        " "
      )}
      {...props}
    >
      <div
        className={`progress ${size ? "progress--" + size : ""} ${
          isLoading ? "progress--" + "loading" : ""
        }`}
      >
        <div
          className={`progress-bar`}
          style={{ width: percent + "%", transition: "width 1s" }}
        >
          {percent !== "loading" && (
            <div
              className={`progress-uploading ${
                loadingOverlay ? "progress-uploading-animation" : ""
              }`}
            ></div>
          )}
        </div>
      </div>

      {isLoading == false && showInfo ? (
        <span className="progress-info">{percent}%</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Progress;
