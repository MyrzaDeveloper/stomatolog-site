import React from "react";
import "./Reviews.scss";

const reviews = [
  {
    name: "Айгүл",
    city: "Бишкек",
    text: "Очень чистая клиника, врач всё подробно объяснил. Лечение прошло без боли. Спасибо!",
    rate: 5,
  },
  {
    name: "Нурбек",
    city: "Токмок",
    text: "Делал пломбу — всё качественно. Цена адекватная, сервис на хорошем уровне.",
    rate: 5,
  },
  {
    name: "Эльмира",
    city: "Бишкек",
    text: "Детский стоматолог нашёл подход к ребёнку. Теперь будем ходить только сюда.",
    rate: 5,
  },
  {
    name: "Руслан",
    city: "Кант",
    text: "После профессиональной чистки зубы стали идеально чистыми. Врач дал полезные рекомендации.",
    rate: 5,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="stars" aria-label={`${count} stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "star active" : "star"}>
        ★
      </span>
    ))}
  </div>
);

const Reviews = () => {
  return (
    <section id="reviews">
      <div className="container">
        <div className="reviews">
          <div className="reviews__top" data-aos="fade-up">
            <div className="badge">
              <span className="dot" /> Отзывы
            </div>

            <h2>
              Нас выбирают за <span>качество</span> и заботу
            </h2>

            <p>Реальные впечатления пациентов после лечения и консультации.</p>
          </div>

          <div className="reviews__grid">
            {reviews.map((r, idx) => (
              <div
                className="reviewCard"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                <div className="reviewCard__head">
                  <div className="avatar">{r.name.slice(0, 1)}</div>

                  <div className="who">
                    <b>{r.name}</b>
                    <span>{r.city}</span>
                  </div>

                  <Stars count={r.rate} />
                </div>

                <p className="reviewCard__text">“{r.text}”</p>

                <div className="reviewCard__bottom">
                  <span className="pill">Проверенный отзыв</span>
                  <span className="date">2026</span>
                </div>
              </div>
            ))}
          </div>

          <div className="reviews__bottom" data-aos="fade-up">
            <div className="callout">
              <b>Приходите на приём</b>
              <span>
                После первой консультации вы получите чёткий план лечения и
                ответы на все вопросы.
              </span>
            </div>

            <a className="cta" href="#contact">
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
