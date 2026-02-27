import React from "react";
import "./SeoBlock.scss";
import Hero from "./HomeSections/Hero";
import Service from "./HomeSections/Service";
import Doctors from "./HomeSections/Doctors";
import Reviews from "./HomeSections/Reviews";
import Process from "./HomeSections/Process";
import Contact from "./HomeSections/Contact";
import WhatsappFab from "./WhatsappFab";

const HomePages = () => {
  return (
    <>
      <Hero />
      <section id="about" className="seoBlock">
        <div className="container">
          <div className="seoBlock__inner" data-aos="fade-up">
            <div className="badge">
              <span className="dot" /> О клинике
            </div>

            <h2>Стоматология Dent Clinic в Бишкеке — лечение и чистка зубов</h2>

            <div className="seoBlock__text">
              <p>
                Dent Clinic — современная стоматология в Бишкеке, где мы
                заботимся о здоровье и красоте вашей улыбки. Наша клиника
                предлагает полный спектр стоматологических услуг: лечение
                кариеса, профессиональная чистка зубов, отбеливание, удаление и
                протезирование.
              </p>
              <p>
                Мы используем современное оборудование и качественные материалы,
                соблюдаем строгие стандарты стерильности и безопасности. Каждый
                пациент получает индивидуальный план лечения и подробные
                рекомендации по уходу за зубами.
              </p>
              <p>
                Если вам нужна стоматология в Бишкеке с внимательным подходом,
                комфортной атмосферой и честными ценами — запишитесь на
                консультацию через WhatsApp или по телефону. Dent Clinic — это
                качество, доверие и забота о вашем здоровье.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Service />
      <Doctors />
      <Reviews />
      <Process />

      <Contact />
      <WhatsappFab />
    </>
  );
};

export default HomePages;
