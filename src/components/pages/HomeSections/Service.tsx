import React from "react";
import "./Service.scss";

const services = [
  { title: "Консультация и диагностика", text: "Осмотр, план лечения, рекомендации и снимок (при необходимости).", price: "от 500 сом" },
  { title: "Профессиональная чистка", text: "Удаление налёта и камня, полировка, профилактика.", price: "от 1500 сом" },
  { title: "Лечение кариеса", text: "Современные пломбы, аккуратно и без боли.", price: "от 1200 сом" },
  { title: "Отбеливание", text: "Осветление эмали безопасными методами.", price: "от 6000 сом" },
  { title: "Удаление зубов", text: "Бережное удаление, быстрое восстановление.", price: "от 2000 сом" },
  { title: "Протезирование / коронки", text: "Керамика, цирконий — эстетика и прочность.", price: "от 9000 сом" },
];

const Service = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="service">
          <div className="service__top" data-aos="fade-up">
            <div className="badge">
              <span className="dot" /> Наши услуги
            </div>

            <h2>
              Всё для <span>здоровой</span> и красивой улыбки
            </h2>

            <p>
              Подбираем лечение индивидуально. Объясняем понятно, работаем аккуратно и стерильно.
            </p>
          </div>

          <div className="service__grid">
            {services.map((s, idx) => (
              <div className="card" key={idx} data-aos="fade-up" data-aos-delay={idx * 80}>
                <div className="card__head">
                  <h3>{s.title}</h3>
                  <span className="price">{s.price}</span>
                </div>

                <p>{s.text}</p>

                <div className="card__bottom">
                  <a className="more" href="#contact">
                    Узнать подробнее →
                  </a>
                  <span className="chip">Без боли</span>
                </div>
              </div>
            ))}
          </div>

          <div className="service__bottom" data-aos="fade-up" data-aos-delay="120">
            <div className="callout">
              <b>Не уверены, что вам нужно?</b>
              <span>Напишите — мы подскажем и подберём удобное время.</span>
            </div>

            <a className="cta" href="#contact">
              Записаться на консультацию
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;