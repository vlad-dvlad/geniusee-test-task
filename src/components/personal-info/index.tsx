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
          className={cx("form__input", { errors: !!errors.firstName })}
          placeholder="Firts Name *"
        />
        {errors.firstName && <span className={cx('form__error')}>{`${errors.firstName.message ?? ''}`}</span>}
        <input
          {...register("lastName")}
          className={cx("form__input", { errors: !!errors.lastName })}
          placeholder="Last Name *"
        />
        {errors.lastName && <span className={cx('form__error')}>{`${errors.lastName.message ?? ''}`}</span>}
      </Section>
    );
};

export default PersonalInfo;