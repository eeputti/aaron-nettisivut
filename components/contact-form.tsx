"use client";

import { FormEvent, useState } from "react";
import { company } from "@/data/company";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subjectBase = form.name
      ? `Tarjouspyyntö - ${form.name}`
      : "Tarjouspyyntö";

    const body = [
      "Hei,",
      "",
      "Lähetän tarjouspyynnön.",
      "",
      `Nimi: ${form.name || "-"}`,
      `Puhelinnumero: ${form.phone || "-"}`,
      `Sähköposti: ${form.email || "-"}`,
      "",
      "Viesti:",
      form.message || "-",
    ].join("\n");

    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
      subjectBase,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Nimi</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(event) =>
            setForm((current) => ({ ...current, name: event.target.value }))
          }
          required
        />
      </div>

      <div className="field">
        <label htmlFor="phone">Puhelinnumero</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(event) =>
            setForm((current) => ({ ...current, phone: event.target.value }))
          }
          required
        />
      </div>

      <div className="field">
        <label htmlFor="email">Sähköposti</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(event) =>
            setForm((current) => ({ ...current, email: event.target.value }))
          }
          required
        />
      </div>

      <div className="field">
        <label htmlFor="message">Viesti</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          required
        />
      </div>

      <button className="submit-button" type="submit">
        Avaa sähköpostiviesti
      </button>
    </form>
  );
}
