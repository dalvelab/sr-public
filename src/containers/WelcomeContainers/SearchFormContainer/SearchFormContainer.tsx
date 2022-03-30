import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import classNames from "classnames";
import * as Yup from "yup";

import { RouterUrl } from "@models/urls";
import { Button } from "@components/Buttons";
import { uniqueItemsCountSelector } from "@selectors/count";

import "./SearchFormContainer.scss";

interface ISearchForm {
  searchInput: string;
}

export const SearchFormContainer: React.FC = () => {
  const navigate = useNavigate();

  const { count } = useSelector(uniqueItemsCountSelector);

  const initialValues: ISearchForm = { searchInput: "" };
  const searchFormSchema = Yup.object({
    searchInput: Yup.string()
      .min(3, "Минимальное количество символов - 3")
      .max(35, "Максимальное количество символов - 35")
      .required("Заполните поле для поиска товаров"),
  });

  const handleSearchFormSumbit = (values: ISearchForm) => {
    navigate(`${RouterUrl.shop().path}?search=${values.searchInput}`);
  };

  return (
    <div className="search__form__container">
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={searchFormSchema}
        initialValues={initialValues}
        onSubmit={(values) => handleSearchFormSumbit(values)}
      >
        {({ touched, errors }) => (
          <div className="search__form__content">
            <h3 className="search__form__title">
              Искать среди <span className="font--primary">{count}</span>{" "}
              товаров
            </h3>
            <Form className="search__form__wrapper">
              <Field
                className={classNames("search__input", {
                  "search__input--active": errors.searchInput,
                })}
                type="text"
                name="searchInput"
                placeholder="Найти..."
              />
              <div className="search__button">
                <Button
                  type="submit"
                  height="100%"
                  color="#ffffff"
                  backgroundColor="#3661ed"
                >
                  Поиск товаров
                </Button>
              </div>
            </Form>
            {errors.searchInput && touched.searchInput && (
              <small>{errors.searchInput}</small>
            )}
          </div>
        )}
      </Formik>
    </div>
  );
};
