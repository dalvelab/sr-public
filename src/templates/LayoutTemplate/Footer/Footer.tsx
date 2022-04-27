import { Link } from "react-router-dom";

import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer__main">
      <div className="footer__content__top">
        <div className="footer__address">
          <span className="address__city">г. Березовский</span>
          <span className="address__street">ул. Гагарина 29</span>
        </div>
      </div>
      <div className="footer__content__middle">
        <div className="footer__contacts">
          <div className="contact">
            <a className="contact__link" href="tel:89126303507">
              8-912-630-35-07
            </a>
            <span className="contact__description"> - по всем вопросам</span>
          </div>
        </div>
        <div className="footer__links">
          <Link to="/shop">Каталог</Link>
          <Link to="/about">О компании</Link>
          <Link to="/ship-and-payment">Оплата и доставка</Link>
        </div>
      </div>
      <div className="footer__content__bottom">
        <span className="footer__credentials">
          ООО “Строительные решения”, ИНН: 6678084295 КПП: 667801001
        </span>
      </div>
    </footer>
  );
};
