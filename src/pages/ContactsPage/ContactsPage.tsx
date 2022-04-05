import "./ContactsPage.scss";

export const ContactsPage: React.FC = () => {
  return (
    <section className="contacts__page__section">
      <h2 className="section__title font--primary">Контакты</h2>
      <div className="company__requisites__wrapper">
        <h4>Карточка предприятия</h4>
        <div className="company__requisites__row">
          <span className="requisites__title">Юридическое лицо:</span>
          <span className="requisites__content">
            ООО "Снабжение и поставка"
          </span>
        </div>
        <div className="company__requisites__row">
          <span className="requisites__title">ИНН:</span>
          <span className="requisites__content">6678084295</span>
        </div>
        <div className="company__requisites__row">
          <span className="requisites__title">КПП:</span>
          <span className="requisites__content">667801001</span>
        </div>
        <div className="company__requisites__row">
          <span className="requisites__title">Банк:</span>
          <span className="requisites__content">
            МОСКОВСКИЙ ФИЛИАЛ АО КБ “МОДУЛЬБАНК
          </span>
        </div>
        <div className="company__requisites__row">
          <span className="requisites__title">БИК:</span>
          <span className="requisites__content">044525092</span>
        </div>
        <div className="company__requisites__row">
          <span className="requisites__title">к/с №:</span>
          <span className="requisites__content">30101810645250000092</span>
        </div>
        <div className="company__requisites__row">
          <span className="requisites__title">Счет №:</span>
          <span className="requisites__content">40702810570010273923</span>
        </div>
      </div>
      <div className="company__address__wrapper">
        <h4>Местоположение</h4>
        <div className="company__address__row">
          <span className="address__title">Телефон:</span>
          <span className="address__content">
            <a href="tel:89126303507">8-912-630-35-07</a>
          </span>
        </div>
        <div className="company__address__row">
          <span className="address__title">Адрес:</span>
          <span className="address__content">
            г. Березовский ул. Гагарина 29, офис 2903
          </span>
        </div>
      </div>
      <div className="yandex__map__wrapper">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6bd21cfade73d6983bdcad02c6984b9aa8ba7559ed9dcaddcc8e87e0729546db&amp;source=constructor"
          width="100%"
          height="651"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  );
};
