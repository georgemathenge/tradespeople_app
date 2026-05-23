'use client'; // This allows the animations to work
import Image from 'next/image';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // This replicates your IntersectionObserver script for the "fade-in" effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
  }, []);

  return (
    <main className="relative bg-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md  h-20 flex items-center justify-between px-[5%]">
        <Link
          href="#"
          className="flex items-center gap-2.5 font-inter font-bold text-lg text-brand-dark"
        >
          <div className="w-9 h-9 bg-brand-green rounded-lg flex items-center justify-center text-white">
            📞
          </div>
          DerAuftragsRetter
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="#wie-es-funktioniert"
              className="text-brand-gray text-sm font-medium hover:text-brand-green transition-colors"
            >
              Wie es funktioniert
            </Link>
          </li>
          <li>
            <Link
              href="#vorteile"
              className="text-brand-gray text-sm font-medium hover:text-brand-green transition-colors"
            >
              Vorteile
            </Link>
          </li>
          <li>
            <Link
              href="#preise"
              className="text-brand-gray text-sm font-medium hover:text-brand-green transition-colors"
            >
              Preise
            </Link>
          </li>
          <li>
            <Link
              href="#kontakt"
              className="text-brand-gray text-sm font-medium hover:text-brand-green transition-colors"
            >
              Kontakt
            </Link>
          </li>
        </ul>
        <Link href="#demo" className="btn-primary py-2.5 px-5 text-sm">
          Demo anfragen
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 md:pt-40 pb-20 px-[5%] max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
        <div className="fade-in opacity-0 translate-y-6 transition-all duration-700">
          <div className="inline-flex items-center gap-2 bg-brand-green-pale text-brand-green px-3.5 py-1.5 rounded-full text-xs font-bold font-inter mb-6">
            <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></span>
            DONE-FOR-YOU SYSTEM FÜR HANDWERKER
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.15] mb-5 font- text-brand-dark">
            Jeder verpasste Anruf ist ein{' '}
            <span className="text-brand-green">verlorener Auftrag.</span>
          </h1>
          <p className="text-lg leading-relaxed text-brand-gray mb-9 max-w-lg">
            DerAuftragsRetter ist ein komplettes System zur
            Kundenanfragen-Erfassung  speziell für Handwerksbetriebe. Wir
            übernehmen alles: vom verpassten Anruf bis zur strukturierten
            WhatsApp-Benachrichtigung. Sie konzentrieren sich auf die Arbeit,
            wir sorgen dafür, dass keine Anfrage verloren geht.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#demo" className="btn-primary text-base px-8 py-4">
              Demo anfragen
            </Link>
            <Link
              href="#wie-es-funktioniert"
              className="btn-outline text-base px-8 py-4"
            >
              Wie es funktioniert
            </Link>
          </div>
        </div>

        {/* IMAGE SIDE */}
        {/* IMAGE SIDE CONTAINER */}
        <div className="relative w-full h-full min-h-[400px] md:min-h-[550px] self-stretch">
          {/* The Main Image */}
          <div className="relative w-full h-full overflow-hidden rounded-[2rem] shadow-2xl border border-black/5">
            <Image
              src="/hero-handwerker.png"
              alt="Handwerker bei der Arbeit"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
              quality={90}
            />
            {/* Subtle gradient overlay to make the white tiles "pop" even more */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* FLOATING TILES - STAGGERED & ASYMMETRICAL */}

          {/* Tile 1: Top Left - Floating partially off-image */}
          <div className="absolute top-8 -left-4 md:-left-8 animate-float">
            <div className="bg-white/60 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="text-[#111810] text-xs font-bold font-inter uppercase tracking-tight">
                Keine Anfrage geht verloren
              </span>
            </div>
          </div>

          {/* Tile 2: Top Right - High contrast green accent */}
          <div className="absolute bottom-30 -right-3 md:-right-6 animate-float-delayed">
            <div className="bg-brand-green text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/20">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                </svg>
              </div>
              <span className="text-xs font-bold font-inter uppercase tracking-tight">
                Strukturierte Lead-Benachrichtigung
              </span>
            </div>
          </div>

          {/* Tile 3: Bottom Left - Hanging off bottom */}
          <div className="absolute bottom-12 -left-2 md:-left-6 animate-float">
            <div className="bg-white/80 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <span className="text-[#111810] text-xs font-bold font-inter uppercase tracking-tight">
                Komplett eingerichtet für Sie
              </span>
            </div>
          </div>

          {/* Tile 4: Bottom Right - Simple Glass */}
          <div className="absolute -bottom-6 right-4 md:-right-4 animate-float-delayed">
            <div className="bg-white/95 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-2xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="text-[#111810] text-xs font-bold font-inter uppercase tracking-tight">
                Mehr Anfragen, mehr Aufträge
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM STRIP */}
      <div className="bg-[#111810] py-16 px-[5%] text-center">
        <p className="text-brand-green text-xs font-bold font-inter uppercase tracking-widest mb-4">
          Das Problem
        </p>
        <h2 className="text-white text-2xl md:text-3xl font-extrabold font-inter max-w-3xl mx-auto leading-snug mb-4">
          Sie sind auf der Baustelle. Ihr Telefon klingelt. Sie können nicht
          rangehen.
        </h2>
        <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed mb-10">
          Der Kunde wartet keine zwei Minuten , er ruft einfach beim nächsten
          Betrieb an. Der Auftrag ist weg. Nicht weil Sie schlechte Arbeit
          machen, sondern weil Sie gerade arbeiten. Das passiert Handwerkern
          täglich und kostet bares Geld.
        </p>
      </div>

      {/* HOW IT WORKS */}
      <section
        className="py-24 px-[5%] max-w-7xl mx-auto"
        id="wie-es-funktioniert"
      >
        <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 mb-16">
          <div className="text-brand-green font-inter text-xs font-bold tracking-widest uppercase mb-3">
            So funktioniert es
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark font-inter mb-4">
            Ein System das für Sie arbeitet, damit Sie es nicht müssen
          </h2>
          <p className="text-brand-gray text-lg max-w-xl leading-relaxed">
            DerAuftragsRetter wird komplett für Sie eingerichtet. Kein
            kompliziertes Setup, keine Technik-Kenntnisse nötig. Das System
            läuft im Hintergrund, Sie konzentrieren sich auf Ihre Arbeit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line Desktop */}
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-brand-border z-0"></div>

          {[
            {
              step: '1',
              title: 'Anruf wird automatisch erfasst',
              desc: 'Wenn Sie nicht abnehmen können, springt Ihr digitaler Assistent ein. Er meldet sich professionell, erfasst den Namen, die Telefonnummer und das Anliegen des Kunden vollautomatisch und zuverlässig.',
            },
            {
              step: '2',
              title: 'Sie erhalten eine strukturierte WhatsApp-Nachricht',
              desc: 'Alle Kundeninformationen landen sofort als übersichtliche WhatsApp-Nachricht bei Ihnen. Kein Zettel, kein Chaos nur klare Daten, die Sie sofort verstehen und weiterverarbeiten können.',
            },
            {
              step: '3',
              title: 'Sie melden sich zurück und sichern den Auftrag',
              desc: 'Sie rufen zurück, wenn es passt, mit allen Infos bereits in der Hand. Kein verlorener Anruf, kein verlorener Auftrag. Das System sorgt dafür, dass aus jeder Anfrage eine echte Chance wird.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative z-10 fade-in opacity-0 translate-y-6 transition-all duration-700"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-14 h-14 bg-brand-green text-white rounded-full flex items-center justify-center font-inter font-bold text-xl mb-6 shadow-lg shadow-brand-green/20">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 font-inter">
                {item.title}
              </h3>
              <p className="text-brand-gray leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-16 bg-brand-green-pale border border-brand-green/20 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-dark font-inter font-semibold text-sm md:text-base max-w-xl">
            Das gesamte System wird von uns für Sie eingerichtet und laufend
            optimiert Sie müssen sich um nichts kümmern.
          </p>
          <Link
            href="#demo"
            className="btn-primary whitespace-nowrap px-6 py-3 text-sm"
          >
            Kostenlos testen →
          </Link>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        className="py-24 px-[5%] max-w-7xl mx-auto border-t border-brand-border"
        id="vorteile"
      >
        {/* Header */}
        <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 mb-12">
          <div className="text-brand-green font-inter text-xs font-bold tracking-widest uppercase mb-3">
            Ihre Vorteile
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark font-inter mb-4">
            Weniger verpasste Anfragen. Mehr gewonnene Aufträge.
          </h2>
          <p className="text-brand-gray text-lg max-w-xl leading-relaxed">
            DerAuftragsRetter arbeitet im Hintergrund, damit Sie sich auf das
            konzentrieren können, was Sie am besten können.
          </p>
        </div>

        {/* Grid Wrapper */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: Image */}
          <div className="lg:col-span-5 fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
            <div className="relative h-[400px] lg:h-[600px] w-full">
              <Image
                src="/IMG_0850.JPG"
                alt="Handwerker nutzt WhatsApp"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="rounded-3xl shadow-2xl object-cover"
              />
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-brand-green-pale rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>

          {/* RIGHT: Benefits */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 fade-in opacity-0 translate-y-6 transition-all duration-700 delay-300">
            {[
              {
                icon: '📋',
                title: 'Keine Anfrage geht verloren',
                desc: 'Jeder Anruf wird erfasst, egal ob Sie gerade auf der Baustelle sind, beim Kunden oder nach Feierabend. Kein Kunde fällt mehr durchs Raster.',
              },
              {
                icon: '💬',
                title: 'Strukturierte WhatsApp-Benachrichtigung',
                desc: 'Sie erhalten alle Kundendaten sofort als übersichtliche WhatsApp-Nachricht. Name, Nummer, Anliegen, alles auf einen Blick, ohne Zettelchaos.',
              },
              {
                icon: '🔁',
                title: 'Verpasste Anrufe werden nachgefasst',
                desc: 'Wer auflegt bevor der Assistent antwortet, wird automatisch per SMS kontaktiert. So gehen auch diese Anfragen nicht verloren.',
              },
              {
                icon: '✅',
                title: 'Komplett eingerichtet für Sie',
                desc: 'Wir richten alles ein, testen es und optimieren es laufend. Sie müssen sich um nichts kümmern  das System läuft einfach.',
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-brand-bg border border-brand-border p-6 rounded-2xl hover:border-brand-green hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-10 h-10 bg-brand-green-pale rounded-xl flex items-center justify-center text-xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-md font-bold text-brand-dark mb-2 font-inter">
                  {benefit.title}
                </h3>
                <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-[5%] bg-brand-bg" id="preise">
        <div className="max-w-7xl mx-auto text-center mb-16 fade-in opacity-0 translate-y-6 transition-all duration-700">
          <div className="text-brand-green font-inter text-xs font-bold tracking-widest uppercase mb-3">
            Pakete
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark font-inter mb-4">
            Wählen Sie Ihr passendes Paket
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto">
            Kein kompliziertes Setup. Wir richten alles ein. Monatlich kündbar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* ERREICHBAR - Basic */}
          <div className="bg-white border-2 border-brand-border p-10 rounded-3xl fade-in opacity-0 translate-y-6 transition-all duration-700">
            <div className="text-brand-muted text-xs font-bold uppercase tracking-widest mb-1 font-inter">
              Erreichbar
            </div>
            <p className="text-brand-gray text-xs mb-4 font-inter">
              Für Einzelunternehmer und kleine Betriebe die keine Anfrage mehr
              verlieren wollen.
            </p>
            <div className="text-4xl font-extrabold text-brand-dark font-inter mb-2">
              95€{' '}
              <span className="text-sm font-normal text-brand-muted">
                / Monat
              </span>
            </div>
            <p className="text-brand-gray text-sm mb-6 border-b border-brand-border pb-6">
              Alles was Sie brauchen um erreichbar zu bleiben komplett
              eingerichtet.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Digitaler Telefonassistent - nimmt Anrufe entgegen wenn Sie es nicht können',
                'Strukturierte WhatsApp-Benachrichtigung nach jedem Anruf',
                'Automatische Kundendatenerfassung - Name, Nummer, Anliegen',
                'Verpasste Anrufe werden automatisch nachgefasst',
                'Bis zu 50 Anrufe pro Monat',
                'Komplett eingerichtet und getestet für Sie',
              ].map((f, i) => (
                <li key={i} className="flex gap-3 text-sm text-brand-gray">
                  <span className="text-brand-green font-bold mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="#demo" className="btn-outline w-full py-4 text-center">
              Jetzt starten
            </Link>
          </div>

          {/* MEHR ANFRAGEN - Business */}
          <div className="bg-white border-2 border-brand-green p-10 rounded-3xl shadow-2xl relative fade-in opacity-0 translate-y-6 transition-all duration-700 delay-150">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-green text-white text-[10px] font-bold py-1 px-4 rounded-full uppercase tracking-widest whitespace-nowrap">
              Beliebteste Wahl
            </div>
            <div className="text-brand-muted text-xs font-bold uppercase tracking-widest mb-1 font-inter">
              Mehr Anfragen
            </div>
            <p className="text-brand-gray text-xs mb-4 font-inter">
              Für wachsende Betriebe die mehr Anfragen erfassen und mehr
              Aufträge gewinnen wollen.
            </p>
            <div className="text-4xl font-extrabold text-brand-dark font-inter mb-2">
              129€{' '}
              <span className="text-sm font-normal text-brand-muted">
                / Monat
              </span>
            </div>
            <p className="text-brand-gray text-sm mb-6 border-b border-brand-border pb-6">
              Das komplette Lead-Erfassungssystem  mit stärkerer Nachverfolgung
              und mehr Kontrolle.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Alles aus Erreichbar',
                'Erweiterte Anrufbearbeitung mit detaillierteren Kundeninformationen',
                'Benachrichtigungen an mehrere Empfänger und Nummern',
                'Einfaches Anfragen-Tracking - behalten Sie den Überblick',
                'Laufende Optimierung durch unser Team',
                'Priorisierter Support - wir sind schneller für Sie da',
                'Monatliche Auswertung Ihrer Anfragen und Erreichbarkeit',
              ].map((f, i) => (
                <li key={i} className="flex gap-3 text-sm text-brand-gray">
                  <span className="text-brand-green font-bold mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="#demo" className="btn-primary w-full py-4 text-center">
              Jetzt starten
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section
        className="py-24 px-[5%] max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
        id="kontakt"
      >
        <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 relative h-[500px] w-full">
          <Image
            src="/IMG_0849.JPG"
            alt="Vertrauen"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>
        <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-200">
          <div className="text-brand-green font-inter text-xs font-bold tracking-widest uppercase mb-3">
            Vertrauen
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark font-inter mb-6">
            Ein System das läuft ohne dass Sie sich darum kümmern müssen.
          </h2>
          <ul className="divide-y divide-brand-border">
            {[
              'In wenigen Minuten einsatzbereit - kein IT-Wissen erforderlich',
              'Ihre Daten sind sicher - DSGVO-konform in Deutschland',
              'Monatlich kündbar - kein langfristiges Risiko',
              'Persönlicher Support - wir sind für Sie da',
            ].map((text, i) => (
              <li
                key={i}
                className="py-4 flex gap-4 items-start text-brand-gray text-sm md:text-base"
              >
                <span className="w-6 h-6 bg-brand-green-pale text-brand-green rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  ✓
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-dark py-24 px-[5%] text-center" id="demo">
        <div className="max-w-3xl mx-auto fade-in opacity-0 translate-y-6 transition-all duration-700">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-inter mb-6 leading-tight">
            Bereit,{' '}
            <span className="text-[#5cc872]">
              keine Kundenanfrage mehr zu verlieren?
            </span>
          </h2>
          <p className="text-[#aab5ab] text-lg mb-10 max-w-xl mx-auto">
            Wir richten alles für Sie ein, kein Aufwand, kein Risiko. Fordern
            Sie jetzt Ihre kostenlose Demo an und sehen Sie, wie
            DerAuftragsRetter Ihren Betrieb absichert.
          </p>
          <Link
            href="mailto:demo@derauftragsretter.de"
            className="bg-[#5cc872] hover:bg-[#72d986] text-brand-dark font-bold py-4 px-10 rounded-lg text-lg transition-all inline-block"
          >
            Kostenlose Demo anfragen →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0c130d] text-brand-muted py-12 px-[5%]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2.5 font-inter font-bold text-white">
            <div className="w-8 h-8 bg-brand-green rounded flex items-center justify-center text-sm">
              📞
            </div>
            DerAuftragsRetter
          </div>
          <p className="text-xs">
            © 2026 DerAuftragsRetter. Alle Rechte vorbehalten.
          </p>
          <nav className="flex gap-6 text-xs">
            <Link href="#" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
            <Link
              href="#kontakt"
              className="hover:text-white transition-colors"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
