import React from "react";
import "./Process.scss";

const steps = [
  { title: "Заявка и консультация", text: "Оставляете заявку в WhatsApp или звоните. Уточняем жалобы, подбираем удобное время и отвечаем на вопросы." },
  { title: "Осмотр и диагностика", text: "Проводим осмотр, при необходимости делаем снимок. Объясняем план лечения простыми словами." },
  { title: "Лечение без боли", text: "Используем современные материалы и анестезию. Работаем аккуратно, чтобы сохранить здоровье зуба." },
  { title: "Рекомендации и контроль", text: "Даем рекомендации по уходу, назначаем контрольный осмотр и фиксируем результат." },
];

const faqs = [
  { q: "Больно ли лечить зубы?", a: "Нет. Мы используем современную анестезию и работаем аккуратно. Перед лечением врач подбирает подходящий вариант обезболивания." },
  { q: "Сколько длится консультация?", a: "Обычно 15–30 минут. Время зависит от жалоб и необходимости диагностики." },
  { q: "Можно записаться в WhatsApp?", a: "Да. Нажмите кнопку записи или напишите нам — ответим быстро и подберём удобное время." },
  { q: "Как вы обеспечиваете стерильность?", a: "Инструменты проходят стерилизацию, используем одноразовые расходники и соблюдаем санитарные стандарты." },
];

const Process = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="work" aria-labelledby="work-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        <div className="process">
          <div className="process__top" data-aos="fade-up">
            <div className="badge">
              <span className="dot" /> Как мы работаем
            </div>

            <h2 id="work-title">
              Понятный процесс лечения в <span>Dent Clinic</span>
            </h2>

            <p>
              Стоматология с современным подходом: диагностика, лечение и рекомендации — всё прозрачно и поэтапно.
            </p>
          </div>

          <ol className="process__grid">
            {steps.map((s, idx) => (
              <li className="step" key={idx} data-aos="fade-up" data-aos-delay={idx * 90}>
                <div className="num">{String(idx + 1).padStart(2, "0")}</div>
                <div className="content">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="faq" aria-label="FAQ" data-aos="fade-up">
            <h3 className="faq__title">Частые вопросы</h3>

            <div className="faq__grid">
              {faqs.map((f, idx) => (
                <details className="faqItem" key={idx}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="process__bottom" data-aos="fade-up">
            <div className="callout">
              <b>Запишитесь сейчас</b>
              <span>Ответим быстро и подберём удобное время для приёма.</span>
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

export default Process;