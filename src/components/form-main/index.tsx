import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData } from "../../config/types";
import { formSchema } from "../../config/schema";
import Section from "../../shared/section";
import { countries } from "../../config/countries";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import PersonalInfo from "../personal-info";
import ContactInfo from "../contact-info";
import PaymentDetails from "../payment-details";

const cx = classNames.bind(styles);

const FormMain = () => {
  const methods = useForm<IFormData>({
    resolver: yupResolver(formSchema),
  });

  const { handleSubmit } = methods;

  const submit = (formData: IFormData) => console.log(formData);

  return (
    <div className={cx("form", "form__container")}>
      <FormProvider {...methods}>
        <form
          className={cx("form__content")}
          onSubmit={handleSubmit(submit)}
          noValidate
        >
          <PersonalInfo />
          <ContactInfo />
          <PaymentDetails />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>

    </div>
  );
};

export default FormMain;
