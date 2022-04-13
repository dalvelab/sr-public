import { Helmet } from "react-helmet";

import { FavouriteItemsContainer } from "@containers/FavouriteItemsContainer";

export const FavouritePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Строительные решения - избранное</title>
      </Helmet>
      <section className="favourite__page__section">
        <h2 className="section__title font--primary">Избранное</h2>
        <FavouriteItemsContainer />
      </section>
    </>
  );
};
