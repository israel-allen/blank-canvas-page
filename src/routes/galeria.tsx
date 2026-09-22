import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";

import decoracao from "../assets/decoracao.jpg";
import festaCliente from "../assets/festa-cliente.jpg";
import galeria1 from "../assets/galeria-1.jpg";
import galeria2 from "../assets/galeria-2.jpg";
import galeria3 from "../assets/galeria-3.jpg";
import heroFesta from "../assets/hero-festa.jpg";
import buffetImg from "../assets/buffet.jpg";

const PUBLIC_GALLERY_PHOTOS = [
  {
    src: "/galeria/WhatsApp%20Image%202026-09-22%20at%2019.02.03%20(1).jpeg",
    alt: "Festa decorada com detalhes personalizados",
  },
  {
    src: "/galeria/WhatsApp%20Image%202026-09-22%20at%2019.02.04%20(1).jpeg",
    alt: "Mesa decorada para comemoração",
  },
  {
    src: "/galeria/WhatsApp%20Image%202026-09-22%20at%2019.02.02.jpeg",
    alt: "Decoração de festa em tons delicados",
  },
  {
    src: "/galeria/WhatsApp%20Image%202026-09-22%20at%2019.02.03.jpeg",
    alt: "Mesa principal de uma festa",
  },
  {
    src: "/galeria/WhatsApp%20Image%202026-09-22%20at%2019.02.04%20(3).jpeg",
    alt: "Detalhe de decoração temática",
  },
  {
    src: "/galeria/WhatsApp%20Image%202026-09-22%20at%2019.02.04%20(4).jpeg",
    alt: "Ambientação de festa para convidados",
  },
  {
    src: "/galeria/WhatsApp%20Image%202026-09-22%20at%2019.02.04%20(2).jpeg",
    alt: "Mesa de doces decorada",
  },
  {
    src: "/galeria/WhatsApp%20Image%202026-09-22%20at%2019.02.04.jpeg",
    alt: "Composição de mesa para festa",
  },
  {
    src: "/galeria/WhatsApp%20Image%202026-09-22%20at%2019.02.05.jpeg",
    alt: "Detalhes de uma festa completa",
  },
  {
    src: "/galeria/WhatsApp%20Image%202026-09-22%20at%2019.02.05%20(3).jpeg",
    alt: "Decoração pronta para receber convidados",
  },
  {
    src: "/galeria/WhatsApp%20Image%202026-09-22%20at%2019.02.05%20(2).jpeg",
    alt: "Mesa temática em uma comemoração",
  },
  {
    src: "/galeria/WhatsApp%20Image%202026-09-22%20at%2019.02.05%20(1).jpeg",
    alt: "Detalhe especial da decoração",
  },
  {
    src: "/galeria/fest.jpeg",
    alt: "Festa decorada para uma comemoração especial",
  },
  {
    src: "/galeria/buffet-festa.jpeg",
    alt: "Detalhe de uma festa preparada com carinho",
  },
];

const PHOTOS = [
  { src: heroFesta, alt: "Festa completa decorada", span: "col-span-2 row-span-2" },
  { src: decoracao, alt: "Arco de balões rosa e dourado", span: "col-span-2" },
  { src: buffetImg, alt: "Mesa de buffet para festa", span: "" },
  { src: galeria1, alt: "Detalhes da decoração", span: "" },
  { src: galeria2, alt: "Mesa de doces", span: "" },
  { src: galeria3, alt: "Ambiente da festa", span: "" },
  { src: festaCliente, alt: "Festa montada no espaço do cliente", span: "col-span-2" },
  ...PUBLIC_GALLERY_PHOTOS.map((photo) => ({ ...photo, span: "" })),
];

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria | Duda & Bia Festas Maricá" },
      {
        name: "description",
        content: "Veja alguns dos momentos e festas realizados pela Duda & Bia.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/90 px-5 py-5 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" aria-label="Voltar para o início">
            <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
              <span className="font-display text-xl font-bold tracking-tighter">D&amp;B</span>
            </span>
            <span className="font-display text-lg font-bold">Duda &amp; Bia</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Voltar
          </Link>
        </div>
      </header>

      <section className="bg-secondary/60 px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">Galeria</p>
            <h1 className="mt-4 text-4xl font-bold text-balance-pretty sm:text-5xl">
              Momentos que merecem ser lembrados
            </h1>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Cada festa é preparada com cuidado para transformar planos especiais em memórias
              inesquecíveis.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
            {PHOTOS.map((photo) => (
              <figure
                key={photo.alt}
                className={`group relative overflow-hidden rounded-3xl bg-card shadow-md ${photo.span}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </figure>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://www.instagram.com/dudaebiafestasmarica/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#dd2a7b]/25 transition-transform hover:scale-105"
            >
              <ExternalLink className="size-4" />
              Ver mais no Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
