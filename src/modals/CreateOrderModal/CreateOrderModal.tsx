import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import classNames from "classnames";
import * as Yup from "yup";

import { createShopOrder } from "@actions/shop";
import { Button } from "@components/Buttons";
import { IconClose } from "@components/Icons";
import { Order } from "@models/data";

import "./CreateOrderModal.scss";

interface IProps {
  isOpened: boolean;
  item: string;
  price: number;
  closeOverlay: () => void;
  closeModal: () => void;
}

interface ICreateForm {
  item: string;
  amount: number | typeof NaN;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const CreateOrderModal: React.FC<IProps> = (props) => {
  const { isOpened, item, price, closeModal, closeOverlay } = props;

  const dispatch = useDispatch();

  const [isSuccess, setIsSuccess] = useState(false);

  const initialValues: ICreateForm = {
    item: item,
    amount: NaN,
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const createOrderFormSchema = Yup.object({
    amount: Yup.number()
      .min(1, "Минимальное количество - 1")
      .required("Введите примерное количество товара"),
    name: Yup.string()
      .min(3, "Минимальное количество символов - 3")
      .max(35, "Максимальное количество символов - 50")
      .required("Введите имя"),
    email: Yup.string()
      .email("Введите валидный Email")
      .required("Введите Email"),
    phone: Yup.string().required("Введите телефон"),
  });

  const handleSearchFormSumbit = (values: ICreateForm) => {
    const order: Order = {
      title: values.item,
      orderSum: price * values.amount,
      amount: values.amount,
      name: values.name,
      phone: values.phone,
      email: values.email,
      status: "Новый заказ",
    };
    dispatch(createShopOrder(order));
    setIsSuccess(true);
  };

  const handleCreateModalClose = () => {
    closeModal();
    closeOverlay();
    setIsSuccess(false);
  };

  return (
    <div
      className={classNames("modal__create__order", {
        "modal__create__order--active": isOpened,
        "modal__create__order--inactive": !isOpened,
      })}
    >
      <div
        onClick={handleCreateModalClose}
        className="modal__create__order--close"
      >
        <IconClose />
      </div>
      {isSuccess ? (
        <div className="modal__create__order__success">
          <h3>Спасибо за заказ!</h3>
          <p>Менеджер перезвонит Вам в ближайшее время</p>
          <div className="modal__create__order__button--close">
            <Button
              type="submit"
              height="100%"
              color="#ffffff"
              backgroundColor="#3661ed"
              onClick={handleCreateModalClose}
            >
              Закрыть
            </Button>
          </div>
        </div>
      ) : (
        <>
          <h4>Оформление заказа</h4>
          <div className="modal__create__form">
            <Formik
              validateOnChange={false}
              validateOnBlur={false}
              validationSchema={createOrderFormSchema}
              initialValues={initialValues}
              onSubmit={(values) => handleSearchFormSumbit(values)}
            >
              {({ touched, errors }) => (
                <div className="create__order__form__content">
                  <Form
                    className="create__order__form__wrapper"
                    autoComplete="off"
                  >
                    <div className="input__wrapper">
                      <Field
                        className="form__input"
                        type="text"
                        name="item"
                        value={item}
                        disabled
                      />
                    </div>
                    <div className="input__wrapper">
                      <Field
                        className="form__input"
                        type="text"
                        name="price"
                        value={`${price} рублей за шт/ед`}
                        disabled
                      />
                    </div>
                    <div className="input__wrapper">
                      <Field
                        className={classNames("form__input", {
                          "form__input--error": errors.amount,
                        })}
                        type="number"
                        name="amount"
                        autoComplete="off"
                        placeholder="Количество (шт)"
                      />
                      {errors.amount && touched.amount && (
                        <small>{errors.amount}</small>
                      )}
                    </div>
                    <div className="input__wrapper">
                      <Field
                        className={classNames("form__input", {
                          "form__input--error": errors.name,
                        })}
                        type="text"
                        name="name"
                        placeholder="Имя"
                      />
                      {errors.name && touched.name && (
                        <small>{errors.name}</small>
                      )}
                    </div>
                    <div className="input__wrapper">
                      <Field
                        className={classNames("form__input", {
                          "form__input--error": errors.email,
                        })}
                        type="text"
                        name="email"
                        placeholder="Email"
                      />
                      {errors.email && touched.email && (
                        <small>{errors.email}</small>
                      )}
                    </div>
                    <div className="input__wrapper">
                      <Field
                        className={classNames("form__input", {
                          "form__input--error": errors.phone,
                        })}
                        type="text"
                        name="phone"
                        placeholder="Телефон"
                      />
                      {errors.phone && touched.phone && (
                        <small>{errors.phone}</small>
                      )}
                    </div>
                    <div className="input__wrapper">
                      <Field
                        className="form__input"
                        type="text"
                        name="address"
                        autoComplete="off"
                        placeholder="Адрес доставки (если нужна)"
                      />
                    </div>
                    <div className="create__order__button">
                      <Button
                        type="submit"
                        height="100%"
                        color="#ffffff"
                        backgroundColor="#3661ed"
                      >
                        Оформить заказ
                      </Button>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </>
      )}
    </div>
  );
};
