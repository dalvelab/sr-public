import { Helmet } from "react-helmet";

import { CatalogContainer } from "@containers/StoreContainers";

export const StorePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Строительные решения - каталог товаров</title>
      </Helmet>
      <section className="store__page__catalog__section">
        <h2 className="section__title font--primary">Каталог</h2>
        <CatalogContainer />
      </section>
    </>
  );
};
