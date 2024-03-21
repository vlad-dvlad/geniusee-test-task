import { useFormContext } from 'react-hook-form';
import Section from '../../shared/section';
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const PaymentDetails = () => {
    const {
        register,
        formState: { errors },
      } = useFormContext();
    return (
        <Section title="Payment details">
        <input
          {...register("creditCard")}
          className={cx("form__input", { errors: !!errors.creditCard })}
          placeholder="Credit card *"
        />
        {errors.creditCard && <span className={cx('form__error')}>{`${errors.creditCard.message ?? ""}`}</span>}
        <input
          {...register("cvv2")}
          className={cx("form__input", { errors: !!errors.cvv2 })}
          placeholder="CVV2 *"
        />
        {errors.cvv2 && <span className={cx('form__error')}>{`${errors.cvv2.message ?? ""}`}</span>}
        <div className={cx("form__agree")}>
          <input
            type="checkbox"
            {...register("agreeTerms")}
            className={cx("form__input")}
          />
          <label htmlFor="agreeTerms">Agree with terms of use</label>
        </div>
        {errors.agreeTerms && <span className={cx('form__error')}>{`${errors.agreeTerms.message ?? ""}`}</span>}
      </Section>
    );
};

export default PaymentDetails;