"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappFab.scss";

export default function WhatsappFab() {
  const phone = "996555000992";

  const message = encodeURIComponent(
    "Здравствуйте! Хочу записаться на прием. Подскажите, пожалуйста, свободное время.",
  );

  const wa = `https://wa.me/${phone}?text=${message}`;

  return (
    <Link
      href={wa}
      target="_blank"
      className="whatsappFab"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={28} />
    </Link>
  );
}
