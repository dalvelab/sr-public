import React from "react";

import {
  SearchFormContainer,
  CategoriesContainer,
  SpecialOfferContainer,
} from "@containers/WelcomeContainers";

import {
  IconBrickWall,
  IconBolt,
  IconConstructionTool,
} from "@components/Icons";

import "./WelcomePage.scss";

export const WelcomePage: React.FC = () => {
  return (
    <section>
      <section className="welcome__page__form__section">
        <div className="welcome__page--text-wrapper">
          <div className="icons__wrapper">
            <div className="icon">
              <IconBrickWall color="#3661ed" />
            </div>
            <div className="icon">
              <IconBolt color="#3661ed" />
            </div>
            <div className="icon">
              <IconConstructionTool color="#3661ed" />
            </div>
          </div>
          <div className="text__wrapper">
            <h1 className="welcome__title font--black">
              Магазин <span className="font--primary">строительных</span> <br />{" "}
              материалов
            </h1>
            <p className="welcome__text font--blue-gray">
              Небольшое описание на несколько слов
            </p>
          </div>
        </div>
        <SearchFormContainer />
      </section>
      <section className="section__default">
        <h2 className="section__default__title">Категории товаров</h2>
        <CategoriesContainer />
      </section>
      <section className="section__default">
        <h2 className="section__default__title">Специальные предложения</h2>
        <SpecialOfferContainer />
      </section>
    </section>
  );
};
