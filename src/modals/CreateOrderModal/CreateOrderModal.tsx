import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import classNames from "classnames";
import * as Yup from "yup";

import { createShopOrder } from "@actions/shop";
import { Button } from "@components/Buttons";
import { IconClose } from "@components/Icons";
import { useScrollBlock } from "@hooks/useScrollBlock";
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
  const [blockScroll, allowScroll] = useScrollBlock();

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpened) {
      blockScroll();
    }
    return () => allowScroll();
  }, [allowScroll, blockScroll, isOpened]);

  const initialValues: ICreateForm = {
    item: item,
    amount: 0,
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const createOrderFormSchema = Yup.object({
    amount: Yup.number()
      .typeError("Количество должно быть числом")
      .min(1, "Минимальное количество товара - 1")
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
          <h5>Оформление заказа</h5>
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
                    <label htmlFor="item">Товар</label>
                    <Field
                      className="form__input"
                      type="text"
                      name="item"
                      value={item}
                      disabled
                    />
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="price">Цена товара</label>
                    <Field
                      className="form__input"
                      type="text"
                      name="price"
                      value={`${price} рублей за шт/ед`}
                      disabled
                    />
                  </div>
                  <div
                    className={classNames("input__wrapper", {
                      "input__wrapper--error": errors.amount,
                    })}
                  >
                    <label htmlFor="price">Количество товара (шт/ед)</label>
                    <Field
                      className="form__input"
                      type="number"
                      name="amount"
                      autoComplete="off"
                      placeholder="Количество (шт)"
                    />
                    {errors.amount && touched.amount && (
                      <small>{errors.amount}</small>
                    )}
                  </div>
                  <div
                    className={classNames("input__wrapper", {
                      "input__wrapper--error": errors.name,
                    })}
                  >
                    <label htmlFor="name">Ваше Имя</label>
                    <Field
                      className="form__input"
                      type="text"
                      name="name"
                      placeholder="Имя"
                    />
                    {errors.name && touched.name && (
                      <small>{errors.name}</small>
                    )}
                  </div>
                  <div
                    className={classNames("input__wrapper", {
                      "input__wrapper--error": errors.email,
                    })}
                  >
                    <label htmlFor="email">Ваш Email</label>
                    <Field
                      className="form__input"
                      type="text"
                      name="email"
                      placeholder="Email"
                    />
                    {errors.email && touched.email && (
                      <small>{errors.email}</small>
                    )}
                  </div>
                  <div
                    className={classNames("input__wrapper", {
                      "input__wrapper--error": errors.phone,
                    })}
                  >
                    <label htmlFor="phone">Ваш телефон</label>
                    <Field
                      className="form__input"
                      type="text"
                      name="phone"
                      placeholder="Телефон"
                    />
                    {errors.phone && touched.phone && (
                      <small>{errors.phone}</small>
                    )}
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="address">
                      Адрес доставки (необязательно)
                    </label>
                    <Field
                      className="form__input"
                      type="text"
                      name="address"
                      autoComplete="off"
                      placeholder="Адрес"
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
        </>
      )}
    </div>
  );
};
