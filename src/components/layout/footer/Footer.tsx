import React from "react";
import Link from "next/link";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          {/* LEFT */}
          <div className="footer__col brand">
            <h3>Dent Clinic</h3>
            <p>
              Современная стоматология в Бишкеке. Лечение, чистка,
              отбеливание, протезирование и забота о вашей улыбке.
            </p>

            <div className="socials">
              <a href="https://wa.me/996555000992" target="_blank">
                WhatsApp
              </a>
              <a href="#" target="_blank">
                Instagram
              </a>
            </div>
          </div>

          {/* NAV */}
          <div className="footer__col">
            <h4>Навигация</h4>
            <ul>
              <li><a href="#home">Главная</a></li>
              <li><a href="#service">Услуги</a></li>
              <li><a href="#doctors">Врачи</a></li>
              <li><a href="#reviews">Отзывы</a></li>
              <li><a href="#work">Как мы работаем</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer__col">
            <h4>Контакты</h4>
            <ul className="contact">
              <li>
                Тел: <a href="tel:+996555000992">+996 (555) 000-992</a>
              </li>
              <li>г. Бишкек, ул. Примерная 12</li>
              <li>Пн–Сб: 09:00–19:00</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Dent Clinic. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;