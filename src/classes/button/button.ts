import clsx from "clsx";

import styles from "./button.module.scss";

interface Options {
  typ?: "button" | "icon";
  variant?: "primary" | "secondary" | "ghost" | "danger" | "inactive";
  size?: "small" | "medium" | "large";
}

const btn = ({
  typ = "button",
  variant = "secondary",
  size = "medium",
}: Options) => clsx(styles.base, styles[typ], styles[variant], styles[size]);

export default btn;
