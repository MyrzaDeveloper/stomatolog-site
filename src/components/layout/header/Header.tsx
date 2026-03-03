"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import logo from "@/assets/logo.png";
import "./Header.scss";

const nav = [
  { href: "#hero", label: "Главная" },
  { href: "#service", label: "Услуги" },
  { href: "#doctors", label: "Врачи" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#work", label: "Как мы работаем" },
  { href: "#contact", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToHash = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    setOpen(false);

    // меню жабылсын (сенде 0.25s transition)
    setTimeout(() => {
      const id = hash.replace("#", "");
      const target = document.getElementById(id);
      if (!target) return;

      // эң ишенимдүү мобилде
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // URL жаңылансын
      window.history.pushState(null, "", hash);
    }, 260);
  };

  const phone = "996555000992";
  const message = useMemo(
    () =>
      encodeURIComponent(
        "Здравствуйте! Хочу записаться на прием. Подскажите, пожалуйста, свободное время.",
      ),
    [],
  );
  const wa = `https://wa.me/${phone}?text=${message}`;

  return (
    <header id="header" className={scrolled ? "isScrolled" : ""}>
      <div className="container">
        <div className="header">
          <a className="brand" href="#home" onClick={scrollToHash("#home")}>
            <span className="logoWrap">
              <Image src={logo} alt="Dent Clinic" priority />
            </span>

            <span className="brandText">
              <b>Dent Clinic</b>
              <small>Стоматология • Бишкек</small>
            </span>
          </a>

          <nav className="nav" aria-label="Основная навигация">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="navLink"
                onClick={scrollToHash(i.href)}
              >
                {i.label}
              </a>
            ))}
          </nav>

          <div className="actions">
            <a className="phone" href="tel:+996555000992">
              +996 (555) 000-992
            </a>

            <Link className="cta" href={wa} target="_blank">
              Записаться
            </Link>

            <button
              className={`burger ${open ? "open" : ""}`}
              aria-label="Открыть меню"
              aria-expanded={open}
              onClick={() => setOpen((p) => !p)}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div
          className={`mobile ${open ? "open" : ""}`}
          role="dialog"
          aria-label="Мобильное меню"
        >
          <div className="mobileCard">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="mobileLink"
                onClick={scrollToHash(i.href)}
              >
                {i.label}
              </a>
            ))}

            <div className="mobileBottom">
              <a className="mobilePhone" href="tel:+996555000992">
                +996 (555) 000-992
              </a>

              <Link className="mobileCta" href={wa} target="_blank">
                Записаться в WhatsApp
              </Link>
            </div>
          </div>

          <button
            className="overlay"
            aria-label="Закрыть меню"
            onClick={() => setOpen(false)}
            type="button"
          />
        </div>
      </div>
    </header>
  );
}
