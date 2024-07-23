import clsx from "clsx";

import styles from "./container.module.scss";

interface Options {
  size?: "md" | "lg" | "xlg" | "max";
}

const container = ({ size = "lg" }: Options = {}) =>
  clsx(styles.root, styles[size]);

export default container;
