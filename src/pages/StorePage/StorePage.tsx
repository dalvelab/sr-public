import { CatalogContainer } from "@containers/StoreContainers";

export const StorePage: React.FC = () => {
  return (
    <section className="store__page__catalog__section">
      <h2 className="section__title font--primary">Каталог</h2>
      <CatalogContainer />
    </section>
  );
};
