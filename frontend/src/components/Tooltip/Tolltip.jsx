import React, { useState } from "react";
import "./styles.css";

export const Tooltip = ({
    direction,
    content,
    children,
}) => {
  const [active, setActive] = useState(false);

  const showTip = () => {
      setActive(true);
  };

  const hideTip = () => {
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {active && (
        <div className={`Tooltip-Tip ${direction || "top"}`}>
          {content}
        </div>
      )}
      {children}
    </div>
  );
};
