import { useFormContext } from 'react-hook-form';
import Section from '../../shared/section';
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PersonalInfo = () => {
    const { register, formState: {errors} } = useFormContext() 
    return (
        <Section title="Personal information">
        <input
          {...register("firstName")}
          className={cx("form__input")}
          placeholder="Firts Name *"
        />
        {errors.firstName && <span>{`${errors.firstName.message ?? ''}`}</span>}
        <input
          {...register("lastName")}
          className={cx("form__input")}
          placeholder="Last Name *"
        />
        {errors.lastName && <span>{`${errors.lastName.message ?? ''}`}</span>}
      </Section>
    );
};

export default PersonalInfo;