import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";

import decoracao from "../assets/decoracao.jpg";
import festaCliente from "../assets/festa-cliente.jpg";
import galeria1 from "../assets/galeria-1.jpg";
import galeria2 from "../assets/galeria-2.jpg";
import galeria3 from "../assets/galeria-3.jpg";
import heroFesta from "../assets/hero-festa.jpg";
import buffetImg from "../assets/buffet.jpg";

const ASSET_PHOTOS = [
  { src: heroFesta, alt: "Festa completa decorada" },
  { src: decoracao, alt: "Arco de balões rosa e dourado" },
  { src: buffetImg, alt: "Mesa de buffet para festa" },
  { src: festaCliente, alt: "Festa montada no espaço do cliente" },
  { src: galeria1, alt: "Detalhes da decoração" },
  { src: galeria2, alt: "Mesa de doces" },
  { src: galeria3, alt: "Ambiente da festa" },
];

const BUFFET_PHOTOS = [
  {
    src: "/novas%20fotos/bufet1.jpeg",
    alt: "Buffet preparado para convidados",
  },
  {
    src: "/novas%20fotos/bufet2.jpeg",
    alt: "Mesa de buffet para comemoração",
  },
  {
    src: "/buffet/WhatsApp%20Image%202026-09-22%20at%2019.01.40%20(1).jpeg",
    alt: "Mesa de buffet pronta para servir",
  },
  {
    src: "/buffet/WhatsApp%20Image%202026-09-22%20at%2019.01.40%20(2).jpeg",
    alt: "Comidas e montagem do buffet",
  },
  {
    src: "/buffet/WhatsApp%20Image%202026-09-22%20at%2019.01.40.jpeg",
    alt: "Detalhes do buffet para convidados",
  },
  {
    src: "/buffet/WhatsApp%20Image%202026-09-22%20at%2019.01.41%20(1).jpeg",
    alt: "Mesa de buffet preparada para festa",
  },
  {
    src: "/buffet/WhatsApp%20Image%202026-09-22%20at%2019.01.41.jpeg",
    alt: "Buffet preparado para uma festa",
  },
  {
    src: "/novas%20fotos/bufet3.jpeg",
    alt: "Mesa de buffet decorada",
  },
  {
    src: "/novas%20fotos/bufet4.jpeg",
    alt: "Detalhes de um buffet para festa",
  },
];

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
    src: "/galeria/WhatsApp%20Image%202026-09-22%20at%2019.02.05%20(2).jpeg",
    alt: "Mesa temática em uma comemoração",
  },
  {
    src: "/galeria/buffet-festa.jpeg",
    alt: "Detalhe de uma festa preparada com carinho",
  },
];

const NEW_PHOTOS = [
  {
    src: "/novas%20fotos/decoracao5.jpg",
    alt: "Decoração de festa",
  },
  {
    src: "/novas%20fotos/WhatsApp%20Image%202026-10-05%20at%2015.07.41%20(2).jpeg",
    alt: "Mesa decorada para comemoração",
  },
  {
    src: "/novas%20fotos/WhatsApp%20Image%202026-10-05%20at%2015.07.4441%20(1).jpeg",
    alt: "Casal celebrando em preto e branco",
  },
  {
    src: "/novas%20fotos/WhatsApp%20Image%202026-10-05%20at5%2015.03.18.jpeg",
    alt: "Festa com decoração especial",
  },
  { src: "/novas%20fotos/paisagem.jpeg", alt: "Decoração de festa ao ar livre" },
  { src: "/novas%20fotos/paquita%20roxa.jpeg", alt: "Decoração de festa em tons roxos" },
];

const PHOTOS = [
  ...ASSET_PHOTOS,
  ...BUFFET_PHOTOS,
  ...PUBLIC_GALLERY_PHOTOS,
  ...NEW_PHOTOS,
];

function GalleryPhoto({ photo }: { photo: { src: string; alt: string } }) {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical" | null>(null);

  return (
    <figure
      className={`relative overflow-hidden rounded-3xl shadow-md ${
        orientation === "horizontal"
          ? "aspect-[4/3]"
          : orientation === "vertical"
            ? "aspect-[3/4]"
            : "aspect-square"
      }`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        width={1024}
        height={1024}
        loading="lazy"
        onLoad={(event) => {
          const { naturalWidth, naturalHeight } = event.currentTarget;
          setOrientation(naturalWidth >= naturalHeight ? "horizontal" : "vertical");
        }}
        className="size-full rounded-3xl object-cover"
      />
    </figure>
  );
}

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

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {PHOTOS.map((photo) => (
              <GalleryPhoto key={photo.src} photo={photo} />
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
