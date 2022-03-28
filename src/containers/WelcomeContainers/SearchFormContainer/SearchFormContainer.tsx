import { StandardInput } from "@components/Inputs";
import { Button } from "@components/Buttons";

import "./SearchFormContainer.scss";

export const SearchFormContainer: React.FC = () => {
  return (
    <div className="search__form__container">
      <div className="search__form__wrapper">
        <div className="input__wrapper">
          <StandardInput width="100%" height="100%" />
        </div>
        <div className="button__wrapper">
          <Button
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            height="100%"
            color="#ffffff"
            backgroundColor="#3661ed"
          >
            Поиск товаров
          </Button>
        </div>
      </div>
    </div>
  );
};
