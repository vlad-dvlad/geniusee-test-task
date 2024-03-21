import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IProps {
  title: string;
  children: ReactNode;
}

const Section: FC<IProps> = ({ title, children }) => {
  return (
    <div className={cx("section")}>
      <span className={cx("section__title")}>{title}</span>
      {children}
    </div>
  );
};

export default Section;
