import { Controller, useFormContext } from "react-hook-form";
import Section from "../../shared/section";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { countries } from "../../config/countries";

const cx = classNames.bind(styles);

const ContactInfo = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Section title="Contact information">
      <input
        {...register("email")}
        className={cx("form__input", { errors: !!errors.email })}
        placeholder="Email *"
      />
      {errors.email && <span className={cx('form__error')}>{`${errors.email.message ?? ""}`}</span>}
      <Controller
        control={control}
        name="country"
        render={({ field: { onChange, value } }) => (
          <select
            value={value}
            onChange={onChange}
            className={cx("form__select", { errors: !!errors.country })}
          >
            <option value={""}>Select Country *</option>
            {countries.map((country) => (
              <option key={country.shortName} value={country.shortName}>
                {country.name}
              </option>
            ))}
          </select>
        )}
      />
      {errors.country && <span className={cx('form__error')}>{`${errors.country.message ?? ""}`}</span>}
      <input
            {...register('phoneNums[0]')}
            className={cx("form__input", { errors: !!errors.phoneNums })}

            placeholder="Phone number 1"
        />
        <input
            {...register('phoneNums[1]')}
            className={cx("form__input", { errors: !!errors.phoneNums })}

            placeholder="Phone number 2"
        />
        <input
            {...register('phoneNums[2]')}
            className={cx("form__input", { errors: !!errors.phoneNums })}
            placeholder="Phone number 3"
        />
        {errors.phoneNums && <span className={cx('form__error')}>{`${errors.phoneNums.message ?? ""}`}</span>}
      <input
        {...register("address")}
        className={cx("form__input", { errors: !!errors.address })}
        placeholder="Adress *"
      />
      {errors.address && <span className={cx('form__error')}>{`${errors.address.message ?? ""}`}</span>}
    </Section>
  );
};

export default ContactInfo;
