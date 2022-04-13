import { Helmet } from "react-helmet";

import "./AboutPage.scss";

export const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Строительные решения - о компании</title>
      </Helmet>
      <section className="section__about__page">
        <h2 className="section__title font--primary">О Компании</h2>
        <p>Описание деятельности компании</p>
      </section>
    </>
  );
};
