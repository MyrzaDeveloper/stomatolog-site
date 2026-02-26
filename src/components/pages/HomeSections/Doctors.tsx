import React from "react";
import "./Doctors.scss";

const doctors = [
  { name: "Айжан Садыкова", spec: "Стоматолог-терапевт", exp: "Опыт 8 лет", img: "/doctor1.jpg" },
  { name: "Нурсултан Абдыкадыров", spec: "Ортопед / Протезирование", exp: "Опыт 12 лет", img: "/doctor2.jpg" },
  { name: "Эльвира Жумабекова", spec: "Детский стоматолог", exp: "Опыт 6 лет", img: "/doctor3.jpg" },
];

const Doctors = () => {
  return (
    <section id="doctors">
      <div className="container">
        <div className="doctors">
          <div className="doctors__top" data-aos="fade-up">
            <div className="badge">
              <span className="dot" /> Наши врачи
            </div>

            <h2>
              Профессиональная <span>команда</span>
            </h2>

            <p>Опытные специалисты с современным подходом к лечению.</p>
          </div>

          <div className="doctors__grid">
            {doctors.map((doc, index) => (
              <div className="card" key={index} data-aos="zoom-in" data-aos-delay={index * 90}>
                <div className="card__image">
                  <img src={doc.img} alt={`${doc.name} — ${doc.spec}`} />
                </div>

                <div className="card__content">
                  <h3>{doc.name}</h3>
                  <span className="spec">{doc.spec}</span>
                  <span className="exp">{doc.exp}</span>

                  <a className="btn" href="#contact">
                    Записаться
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;