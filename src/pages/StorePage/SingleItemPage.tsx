import { SingleItemContainer } from "@containers/StoreContainers";

import "./SingleItemPage.scss";

export const SingleItemPage: React.FC = () => {
  return (
    <section className="store__page__single__item__section">
      <SingleItemContainer />
    </section>
  );
};
