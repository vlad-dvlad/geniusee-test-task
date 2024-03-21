import { Controller, useFieldArray, useFormContext } from "react-hook-form";
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


  const { fields } = useFieldArray({
    control,
    name: 'phNum',
    rules: { minLength: 1, maxLength: 3}
  })

  return (
    <Section title="Contact information">
      <input
        {...register("email")}
        className={cx("form__input")}
        placeholder="Email *"
      />
      {errors.email && <span>{`${errors.email.message ?? ""}`}</span>}
      <Controller
        control={control}
        name="country"
        render={({ field: { onChange, value } }) => (
          <select
            value={value}
            onChange={onChange}
            className={cx("form__select")}
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
      {fields.map((field, index) => (
        <input
            key={field.id}
            {...register(`phNum.${index}.value`)}
        />
    ))}
      {errors.country && <span>{`${errors.country.message ?? ""}`}</span>}
      <input
        {...register("address")}
        className={cx("form__input")}
        placeholder="Adress *"
      />
      {errors.address && <span>{`${errors.address.message ?? ""}`}</span>}
    </Section>
  );
};

export default ContactInfo;
