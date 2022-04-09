import { FavouriteItemsContainer } from "@containers/FavouriteItemsContainer";

export const FavouritePage: React.FC = () => {
  return (
    <section className="favourite__page__section">
      <h2 className="section__title font--primary">Избранное</h2>
      <FavouriteItemsContainer />
    </section>
  );
};
