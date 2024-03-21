import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData } from "../../config/types";
import { formSchema } from "../../config/schema";
import Section from "../../shared/section";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { countries } from "../../config/countries";

const cx = classNames.bind(styles);

const FormMain = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(formSchema),
  });

  const submit = (formData: IFormData) => console.log(formData);

  return (
    <div className={cx("form", "form__container")}>
      <form
        className={cx("form__content")}
        onSubmit={handleSubmit(submit)}
        noValidate
      >
        <Section title="Personal information">
          <input
            {...register("firstName")}
            className={cx("form__input")}
            placeholder="Firts Name *"
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}
          <input
            {...register("lastName")}
            className={cx("form__input")}
            placeholder="Last Name *"
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </Section>
        <Section title="Contact information">
          <input
            {...register("email")}
            className={cx("form__input")}
            placeholder="Email"
          />
          {errors.email && <span>{errors.email.message}</span>}
          {/* 
                        to do phone number
                    <input {...register('lastName')} className={cx('form__input')} placeholder='Last Name *' />
                    { errors.lastName && <span>{errors.lastName.message}</span> } */}

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

          {errors.country && <span>{errors.country.message}</span>}

          <input
            {...register("address")}
            className={cx("form__input")}
            placeholder="Adress *"
          />
          {errors.address && <span>{errors.address.message}</span>}
        </Section>
        <Section title="Payment details">
          <input
            {...register("creditCard")}
            className={cx("form__input")}
            placeholder="Credit card *"
          />
          {errors.creditCard && <span>{errors.creditCard.message}</span>}
          <input
            {...register("cvv2")}
            className={cx("form__input")}
            placeholder="CVV2 *"
          />
          {errors.cvv2 && <span>{errors.cvv2.message}</span>}
          <div className={cx("form__agree")}>
            <input
              type="checkbox"
              {...register("agreeTerms")}
              className={cx("form__input")}
            />
            <label htmlFor="agreeTerms">Agree with terms of use</label>
          </div>

          {errors.agreeTerms && <span>{errors.agreeTerms.message}</span>}
        </Section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormMain;
