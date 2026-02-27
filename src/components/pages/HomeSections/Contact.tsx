"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import "./Contact.scss";

const Contact = () => {
  const clinic = {
    name: "Dent Clinic",
    city: "Бишкек",
    address: "проспект Чуй, Ала-Тоо аянты",
    phoneDisplay: "+996 (555) 000-992",
    phoneTel: "+996555000992",
    whatsapp: "996555000992",
    hours: "Пн–Сб: 09:00–19:00, Вс: выходной",

    mapEmbed:
      "https://www.google.com/maps?q=42.8746,74.5698&output=embed",

    gisLink:
      "https://2gis.kg/bishkek/search/%D0%90%D0%BB%D0%B0-%D0%A2%D0%BE%D0%BE%20%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C",
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
      sameAs: [waLink, clinic.gisLink],
    };
  }, [clinic, waLink]);

  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Заявка с сайта:\nИмя: ${form.name}\nТел: ${form.phone}\nСообщение: ${form.message}`
    );
    window.open(
      `https://wa.me/${clinic.whatsapp}?text=${text}`,
      "_blank"
    );
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

            <p>
              Оставьте заявку — мы быстро ответим и подберём удобное время.
            </p>
          </div>

          <div className="contact__grid">
            <div className="infoCard" data-aos="fade-right">
              <div className="infoRow">
                <span className="label">Телефон</span>
                <a
                  className="value"
                  href={`tel:${clinic.phoneTel}`}
                >
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
                <span className="value">
                  {clinic.hours}
                </span>
              </div>

              <div className="actions">
                <Link
                  className="btn btn--primary"
                  href={waLink}
                  target="_blank"
                >
                  Написать в WhatsApp
                </Link>

                <a
                  className="btn btn--ghost"
                  href={`tel:${clinic.phoneTel}`}
                >
                  Позвонить
                </a>

                <a
                  className="btn btn--ghost"
                  href={clinic.gisLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Открыть в 2ГИС
                </a>
              </div>

              <div className="mini">
                <b>Совет:</b> Если болит зуб — напишите сейчас,
                мы ответим быстро.
              </div>

              <div className="mapWrap">
                <iframe
                  src={clinic.mapEmbed}
                  loading="lazy"
                  title="Dent Clinic map"
                  style={{
                    width: "100%",
                    height: "250px",
                    border: 0,
                    borderRadius: "12px",
                  }}
                />
              </div>
            </div>

            <form
              className="formCard"
              onSubmit={onSubmit}
              data-aos="fade-left"
            >
              <h3>Оставить заявку</h3>
              <p className="hint">
                Мы свяжемся с вами в WhatsApp или по телефону.
              </p>

              <label>
                <span>Ваше имя</span>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Например: Айбек"
                  required
                />
              </label>

              <label>
                <span>Номер телефона</span>
                <input
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  placeholder="+996..."
                  required
                />
              </label>

              <label>
                <span>Сообщение</span>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  placeholder="Например: болит зуб / хочу чистку / консультация..."
                  rows={4}
                />
              </label>

              <button className="submit" type="submit">
                Отправить заявку
              </button>

              <div className="safe">
                Нажимая “Отправить”, вы соглашаетесь на обработку заявки.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;