"use client";
import Link from "next/link";
import "./Hero.scss";

const Hero = () => {
  const phone = "996555000992";
  const msg = encodeURIComponent(
    "Здравствуйте! Хочу записаться на прием. Подскажите, пожалуйста, свободное время."
  );
  const wa = `https://wa.me/${phone}?text=${msg}`;

  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          {/* LEFT */}
          <div className="hero__left">
            <div className="hero__badge" data-aos="fade-down">
              <span className="dot" />
              Современная стоматология • Чисто • Безопасно
            </div>

            <h1 data-aos="fade-up" data-aos-delay="80">
              Улыбка — это <span>уверенность</span>.
              <br /> Лечим аккуратно и красиво
            </h1>

            <p data-aos="fade-up" data-aos-delay="140">
              Профессиональная диагностика, безболезненное лечение и эстетика
              улыбки. Запишитесь онлайн — ответим за пару минут.
            </p>

            <div className="hero__cta" data-aos="fade-up" data-aos-delay="200">
              <Link className="btn btn--primary" href={wa} target="_blank">
                Записаться в WhatsApp
              </Link>
              <a className="btn btn--ghost" href="tel:+996555000992">
                Позвонить
              </a>
            </div>

            <div className="hero__trust" data-aos="fade-up" data-aos-delay="260">
              <div className="trustItem">
                <b>10+ лет</b>
                <span>опыта</span>
              </div>
              <div className="trustItem">
                <b>5 000+</b>
                <span>пациентов</span>
              </div>
              <div className="trustItem">
                <b>Гарантия</b>
                <span>на работы</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero__right" data-aos="zoom-in" data-aos-delay="180">
            <div className="heroCard">
              <div className="heroCard__top">
                <div className="miniTitle">Ближайшая запись</div>
                <div className="pill">Сегодня</div>
              </div>

              <div className="heroCard__grid">
                <div className="info">
                  <span>Время</span>
                  <b>16:30</b>
                </div>
                <div className="info">
                  <span>Врач</span>
                  <b>Дежурный</b>
                </div>
                <div className="info">
                  <span>Адрес</span>
                  <b>г. Бишкек</b>
                </div>
                <div className="info">
                  <span>Ответ</span>
                  <b>1–5 мин</b>
                </div>
              </div>

              <div className="heroCard__actions">
                <Link className="btn btn--primary w100" href={wa} target="_blank">
                  Быстро записаться
                </Link>
                <a className="btn btn--soft w100" href="#service">
                  Смотреть услуги
                </a>
              </div>

              <div className="heroCard__note">
                * Консультация и осмотр по записи. Подберём удобное время.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;