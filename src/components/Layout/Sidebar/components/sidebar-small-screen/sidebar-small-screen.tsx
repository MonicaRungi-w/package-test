import React, { useState } from "react";
import AngleUp from "../../../../../assets/svg-components/angle-up";
import "bootstrap/dist/js/bootstrap.min.js";

import "./sidebar-small-screen.css";

export type Item = {
  key: string;
  label: string;
  icon: string;
};

type SidebarSmallScreenProps = JSX.IntrinsicElements["div"] & {
  collapsible?: boolean;
  title?: string;
  iconTitle?: string;
  items: {
    key: string;
    label: string;
    icon: string;
    link: () => void;
  }[];
  footer?: JSX.Element;
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
};

const SidebarSmallScreen = ({
  collapsible = true,
  title,
  iconTitle,
  items,
  footer,
  isOpen,
  setIsOpen,
  ...props
}: SidebarSmallScreenProps) => {
  const [isActive, setIsActive] = useState(true);
  const [selected, setSelected] =
    useState<{
      key: string;
      label: string;
      icon: string;
      link: () => void;
    }>();

  return <div className="d-block d-sm-none">aaaaa</div>;
};

export default SidebarSmallScreen;
