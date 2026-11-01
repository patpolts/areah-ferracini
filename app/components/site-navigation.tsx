"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const sections = [
  { href: "#primeiros-passos", label: "Primeiros passos" },
  { href: "#na-prancheta", label: "Na prancheta" },
  { href: "#como-se-faz", label: "Como se faz" },
  { href: "#linha-do-tempo", label: "Linha do tempo" },
  { href: "#sapatos-estilosos", label: "Sapatos estilosos" },
  { href: "#trabalho-manual", label: "Trabalho manual" },
  { href: "#bizarrices-nos-pes", label: "Bizarrices nos pés" },
];

export function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const scrollAnimationFrame = useRef<number | null>(null);

  useEffect(() => {
    const breakpoint = window.matchMedia("(min-width: 64rem)");

    function updateBreakpoint() {
      setIsDesktop(breakpoint.matches);
      setIsOpen(false);
    }

    updateBreakpoint();
    breakpoint.addEventListener("change", updateBreakpoint);

    let ticking = false;

    function updateScrollState() {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        const hero = document.querySelector("#inicio");
        const header = document.querySelector("header");
        const heroBottom = hero?.getBoundingClientRect().bottom ?? 0;
        const headerHeight = header?.getBoundingClientRect().height ?? 0;
        setIsNavigationVisible(heroBottom <= headerHeight);
        ticking = false;
      });
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      breakpoint.removeEventListener("change", updateBreakpoint);
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  useEffect(() => {
    const observedSections = sections
      .map((section) => document.querySelector(section.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);

        if (visibleSections[0]) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      },
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  function scrollToSection(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      closeMenu();
      return;
    }

    const target = document.querySelector(href);
    if (!target) {
      closeMenu();
      return;
    }

    event.preventDefault();
    closeMenu();
    window.history.pushState(null, "", href);

    if (scrollAnimationFrame.current !== null) {
      window.cancelAnimationFrame(scrollAnimationFrame.current);
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const scrollPadding = Number.parseFloat(
      window.getComputedStyle(document.documentElement).scrollPaddingTop,
    );
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const start = window.scrollY;
    const destination = Math.max(
      0,
      Math.min(
        target.getBoundingClientRect().top +
          start -
          (Number.isFinite(scrollPadding) ? scrollPadding : 0),
        maxScroll,
      ),
    );

    if (reducedMotion) {
      window.scrollTo({ top: destination, behavior: "instant" });
      return;
    }

    const duration = 800;
    const startTime = performance.now();
    const originalScrollBehavior =
      document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    function easeInOutCubic(progress: number) {
      return progress < 0.5
        ? 4 * progress ** 3
        : 1 - (-2 * progress + 2) ** 3 / 2;
    }

    function animateScroll(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      window.scrollTo(0, start + (destination - start) * easedProgress);

      if (progress < 1) {
        scrollAnimationFrame.current =
          window.requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, destination);
        document.documentElement.style.scrollBehavior =
          originalScrollBehavior;
        scrollAnimationFrame.current = null;
      }
    }

    scrollAnimationFrame.current = window.requestAnimationFrame(animateScroll);
  }

  const isNavigationOpen = isOpen || (isDesktop && isNavigationVisible);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[70] border-b border-white/15 bg-[#2169a0] text-white shadow-md shadow-black/15 [background-image:url('/imgs/bg-nav.png')] [background-repeat:repeat-y]">
        <div className="content-width flex min-h-16 items-center justify-between gap-5">
          <a
            href="#inicio"
            className="flex shrink-0 items-center rounded-sm"
            aria-label="AreaH apresenta Ferracini — início"
            onClick={closeMenu}
          >
            <Image
              src="/imgs/areaH-logo.png"
              alt="AreaH"
              width={122}
              height={42}
              className="h-8 w-auto object-contain"
              style={{ width: "auto", height: "32px" }}
            />
          </a>

          <a
            href="#inicio"
            aria-label="Ferracini — início"
            className={`absolute left-1/2 hidden -translate-x-1/2 transition-opacity duration-300 lg:block ${isScrolled ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <Image
              src="/imgs/ferracini-logo-small.png"
              alt="Ferracini"
              width={111}
              height={20}
              className="h-5 w-auto object-contain"
            />
          </a>

          <div className="hidden items-center gap-3 lg:flex" aria-label="Redes sociais">
            <a
              href="https://facebook.com/calcadosferracini"
              target="_blank"
              rel="noreferrer"
              aria-label="Ferracini no Facebook (abre em nova aba)"
              className="rounded-sm"
            >
              <Image
                src="/imgs/icon-facebook.png"
                alt=""
                width={31}
                height={31}
              />
            </a>
            <a
              href="https://twitter.com/Ferracini24h"
              target="_blank"
              rel="noreferrer"
              aria-label="Ferracini no Twitter (abre em nova aba)"
              className="rounded-sm"
            >
              <Image src="/imgs/icon-twitter.png" alt="" width={31} height={31} />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/50 p-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-offset-2 lg:hidden"
            aria-controls="primary-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsOpen((open) => !open)}
            onKeyDown={(event) => {
              if (event.key === "Escape") closeMenu();
            }}
          >
            <span aria-hidden="true" className="text-xl leading-none">
              {isOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </header>

      <nav
        id="primary-navigation"
        aria-label="Navegação principal"
        aria-hidden={!isNavigationOpen}
        inert={!isNavigationOpen}
        onKeyDown={(event) => {
          if (event.key === "Escape") closeMenu();
        }}
        className={`fixed inset-x-0 top-16 z-[60] flex flex-col gap-1 border-y border-[#d1cfce] bg-[#f7f2ef] p-3 text-[#55514f] shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:flex-row lg:items-stretch lg:justify-center lg:gap-0 lg:border-b-0 lg:p-0 lg:shadow-md ${isNavigationOpen ? "translate-y-0" : "-translate-y-[150%]"}`}
      >
        {sections.map((section) => (
          <a
            key={section.href}
            href={section.href}
            onClick={(event) => scrollToSection(event, section.href)}
            aria-current={activeSection === section.href ? "location" : undefined}
            className={`flex min-h-11 items-center justify-center border-b-[3px] px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide transition-colors hover:text-[#93130b] lg:flex-1 lg:border-r lg:border-b-[3px] lg:border-r-[#d1cfce] lg:px-2 ${activeSection === section.href ? "border-[#93130b] text-[#93130b]" : "border-[#bebebe] text-[#55514f]"}`}
          >
            {section.label}
          </a>
        ))}
      </nav>

      {isScrolled && (
        <a
          href="#inicio"
          aria-label="Voltar ao início da página"
          className="fixed right-5 bottom-6 z-30 grid size-12 place-items-center rounded-full border-[3px] border-white bg-[#777]/85 shadow-lg transition-transform hover:scale-105 focus-visible:outline-offset-2"
        >
          <Image
            src="/imgs/ico-arow-up.png"
            alt=""
            width={31}
            height={31}
            className="size-7 object-contain"
          />
        </a>
      )}
    </>
  );
}
