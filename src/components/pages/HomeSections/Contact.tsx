"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import "./Contact.scss";

const Contact = () => {
  const clinic = {
    name: "Dent Clinic",
    city: "Бишкек",
    address: "ул. Примерная, 12 (ориентир: ...)",
    phoneDisplay: "+996 (555) 000-992",
    phoneTel: "+996555000992",
    whatsapp: "996555000992",
    hours: "Пн–Сб: 09:00–19:00, Вс: выходной",
    mapEmbed: "https://www.google.com/maps?q=Bishkek&output=embed",
  };

  const waMsg = encodeURIComponent(
    "Здравствуйте! Хочу записаться на прием. Подскажите, пожалуйста, свободное время."
  );
  const waLink = `https://wa.me/${clinic.whatsapp}?text=${waMsg}`;

  const schema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "Dentist",
      name: clinic.name,
      telephone: clinic.phoneDisplay,
      address: {
        "@type": "PostalAddress",
        addressLocality: clinic.city,
        streetAddress: clinic.address,
        addressCountry: "KG",
      },
      openingHours: ["Mo-Sa 09:00-19:00"],
      url: "https://example.com",
      sameAs: [waLink],
    };
  }, [clinic.address, clinic.city, clinic.name, clinic.phoneDisplay, waLink]);

  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Заявка с сайта:\nИмя: ${form.name}\nТел: ${form.phone}\nСообщение: ${form.message}`
    );
    window.open(`https://wa.me/${clinic.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" aria-labelledby="contact-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="container">
        <div className="contact">
          <div className="contact__top" data-aos="fade-up">
            <div className="badge">
              <span className="dot" /> Контакты
            </div>

            <h2 id="contact-title">
              Запишитесь в <span>{clinic.name}</span>
            </h2>

            <p>Оставьте заявку — мы быстро ответим и подберём удобное время.</p>
          </div>

          <div className="contact__grid">
            <div className="infoCard" data-aos="fade-right">
              <div className="infoRow">
                <span className="label">Телефон</span>
                <a className="value" href={`tel:${clinic.phoneTel}`}>
                  {clinic.phoneDisplay}
                </a>
              </div>

              <div className="infoRow">
                <span className="label">Адрес</span>
                <span className="value">
                  {clinic.city}, {clinic.address}
                </span>
              </div>

              <div className="infoRow">
                <span className="label">График</span>
                <span className="value">{clinic.hours}</span>
              </div>

              <div className="actions">
                <Link className="btn btn--primary" href={waLink} target="_blank">
                  Написать в WhatsApp
                </Link>
                <a className="btn btn--ghost" href={`tel:${clinic.phoneTel}`}>
                  Позвонить
                </a>
              </div>

              <div className="mini">
                <b>Совет:</b> Если болит зуб — напишите сейчас, мы ответим быстро.
              </div>

              <div className="mapWrap" aria-label="Карта">
                <iframe
                  src={clinic.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dent Clinic map"
                />
              </div>
            </div>

            <form className="formCard" onSubmit={onSubmit} data-aos="fade-left">
              <h3>Оставить заявку</h3>
              <p className="hint">Мы свяжемся с вами в WhatsApp или по телефону.</p>

              <label>
                <span>Ваше имя</span>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Например: Айбек"
                  required
                />
              </label>

              <label>
                <span>Номер телефона</span>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+996..."
                  required
                />
              </label>

              <label>
                <span>Сообщение</span>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Например: болит зуб / хочу чистку / консультация..."
                  rows={4}
                />
              </label>

              <button className="submit" type="submit">
                Отправить заявку
              </button>

              <div className="safe">Нажимая “Отправить”, вы соглашаетесь на обработку заявки.</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;