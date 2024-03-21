import * as yup from "yup";
import { countries } from "./countries";

const countriesShortNames = countries.map((c) => c.shortName);

export const formSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email"),
  phoneNums: yup.array()
  .min(1, 'At least 1 phone number is required')
  .max(3, 'Maximum 3 phone numbers allowed').required(),
  country: yup
    .string()
    .oneOf(countriesShortNames, "Country is required")
    .required(),
  address: yup.string().required("Address is required"),
  creditCard: yup
    .string()
    .matches(
      /^\d{4}-\d{4}-\d{4}-\d{4}$/,
      "Credit card number must be in the format XXXX-XXXX-XXXX-XXXX"
    )
    .required("Credit card number is required"),
  cvv2: yup
    .string()
    .matches(/^\d{3}$/, "CVV2 code must be a 3 digit number")
    .required(),
  agreeTerms: yup.boolean().required().oneOf([true]),
});
