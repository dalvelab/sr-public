import "./FiltersModal.scss";

export const FiltersModal: React.FC = (props) => {
  const { children } = props;
  return (
    <>
      <div className="filters__modal">
        <span className="filters__modal__title">Фильтры</span>
        {children}
      </div>
    </>
  );
};
