"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import "./Header.scss";

const nav = [
  { href: "#home", label: "Главная" },
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

  const scrollTo = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const phone = "996555000992";
  const message = encodeURIComponent(
    "Здравствуйте! Хочу записаться на прием. Подскажите, пожалуйста, свободное время."
  );
  const wa = `https://wa.me/${phone}?text=${message}`;

  return (
    <header id="header" className={scrolled ? "isScrolled" : ""} data-aos="fade-down">
      <div className="container">
        <div className="header">
          <a className="brand" href="#home" onClick={scrollTo("#home")}>
            <span className="logoWrap">
              <Image src={logo} alt="Dent Clinic" priority />
            </span>
            <span className="brandText">
              <b>Dent Clinic</b>
              <small>Стоматология • Бишкек</small>
            </span>
          </a>

          <nav className="nav">
            {nav.map((i) => (
              <a key={i.href} href={i.href} className="navLink" onClick={scrollTo(i.href)}>
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
              aria-label="Menu"
              onClick={() => setOpen((p) => !p)}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`mobile ${open ? "open" : ""}`}>
          <div className="mobileCard">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="mobileLink"
                onClick={scrollTo(i.href)}
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
        </div>
      </div>
    </header>
  );
}