import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Cake,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Heart,
  MapPin,
  Menu,
  Quote,
  X,
  Check,
  
} from "lucide-react";
import { ptBR } from "date-fns/locale";

import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import heroFesta from "../assets/hero-festa.jpg";
import decoracao from "../assets/decoracao.jpg";
import buffetImg from "../assets/buffet.jpg";
import festaCliente from "../assets/festa-cliente.jpg";
import galeria1 from "../assets/galeria-1.jpg";
import galeria2 from "../assets/galeria-2.jpg";
import galeria3 from "../assets/galeria-3.jpg";

const festaLocal = "/novas%20fotos/WhatsApp%20Image%202026-10-05%20at%2015.03.19.jpeg";

// Substitua pelo número oficial de WhatsApp da Duda & Bia (formato 55DDDNÚMERO).
const WHATSAPP = "5521988522664";
const INSTAGRAM = "https://www.instagram.com/dudaebiafestasmarica/";

const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Buffet", href: "#buffet" },
  { label: "Galeria", href: "/galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const TESTIMONIALS = [
  {
    name: "Rayssa",
    text: "Roberta, muito bom dia. Eu quero agradecer a você, toda sua equipe, por toda organização, simpatia e perfeição. Todos muito solícitos e educados. Gratidão pela paciência ao longo desses meses de planejamento. Eu só tenho a agradecer e elogiar. Todo mundo falou super bem da comida, dos salgados, bolos e doces — isso eu já sabia que era uma delícia, kkkk. Obrigada por tornar um sonho realizado ainda mais perfeito.",
  },
  {
    name: "Rafaela",
    text: "Boa noite!! Passando pra te agradecer por toda paciência, carinho e cuidado nos mínimos detalhes, fazendo com que a festa fosse um verdadeiro evento. Recebi muitas mensagens elogiando a decoração, comida e tudo mais. E sem dúvidas ter acreditado em você de olhos fechados foi a minha melhor experiência. Só tenho a te agradecer e elogiar pela linda festa. O circo da Maitê não poderia ter sido melhor, saiu tudo do jeitinho como planejado. E que venha novas festas.",
  },
  {
    name: "Renata",
    text: "Bom diaaaa, queria te agradecer muito pela excelência no atendimento do seu buffet! A responsável pelo buffet é um anjo e toda a equipe, muito atenciosos! Meus convidados elogiaram muito o atendimento, tudo muito gostoso, quentinho e farto! A torta salgada e o jantar maravilhosos!! Minha filha amou a decoração, ficou do jeitinho que ela sonhou (e olha que ela é exigente e tem gosto diferenciado rsrsrs)! Parabéns! Te desejo muito sucesso e que Deus te abençoe sempre!",
  },
  {
    name: "Jéssica",
    text: "Oiee, bom dia! Passando pra agradecer por tudoo! A decoração linda demais, todo dentro do tema, eu fiquei encantadaaa! A equipe maravilhosa, atenciosos, a todo tempo me auxiliando. Fiquei tranquila, curti a festa, buffet maravilhoso, todo mundo comeu e bebeu muito haha, só elogios de tudo, estou recebendo várias msgs hoje de convidados elogiando haha. Obrigada mesmo! Foi incrível demais! Ah, a Tia Nana da animação, a recepcionista, as meninas monitoras, todos sem exceção, galera tooop. Tia Nana animou a festa inteira, até os adultos haha, foi de fato memorável. Muito obrigadaa.",
  },
  {
    name: "Bárbara",
    text: "Quero deixar aqui minha imensa gratidão à você por todo carinho, atenção e cuidado com cada detalhe no aniversário do meu filho. Foi um dia muito especial para nossa família, e o espaço estava simplesmente impecável, organizado e acolhedor. Dá para perceber quando tudo é feito com amor. Obrigada pela dedicação, pela paciência e por tornar o sonho do aniversário do meu filho uma realidade tão linda. Que Deus abençoe cada vez mais o seu trabalho! Com certeza indicarei de olhos fechados!",
  },
  {
    name: "Ana Paula",
    text: "Bom dia, Roberta, queria te agradecer de coração por tudo! A decoração ficou simplesmente maravilhosa, exatamente do jeitinho que eu sonhei para o primeiro aniversário da Laura. Cada detalhe estava lindo e fez toda a diferença para tornar esse dia tão especial. E o buffet também foi impecável! Tudo muito gostoso, bem organizado e feito com muito carinho. Recebi muitos elogios dos convidados. Obrigada por todo o cuidado, dedicação, carinho e por fazerem parte de um momento tão importante para a nossa família. A festa ficou linda e, com certeza, será uma lembrança que vamos guardar para sempre! Muito obrigada por tudo! Você e sua equipe foram maravilhosos.",
  },
  {
    name: "Natália",
    text: "Quero agradecer imensamente pela noite maravilhosa e mágica que você realizou para minha filha. Não tenho palavras para agradecer todo comprometimento e carinho. Você deixou do jeitinho que eu idealizei, muito obrigada mesmo. Estamos encantado com tudo que vivemos! Quero agradecer também a toda sua equipe que trabalhou para que essa noite fosse perfeita. Amei todos, as meninas da cozinha são maravilhosas, teve todo cuidado e carinho em guardar tudo pra mim e meu esposo. Aproveitamos tanto que quase não comemos nada. Haha. Obrigada, Roberta, tenho certeza que vamos fazer outras festas juntas, afinal, se tem uma coisa que eu gosto de fazer é festa!",
  },
  {
    name: "Glauciana",
    text: "Boa tarde, Roberta! Quero agradecer imensamente por terem tornado a festa do Henry simplesmente maravilhosa! Tudo foi perfeito e superou nossas expectativas. A equipe do buffet foi incrível: atenciosa, prestativa e sempre com um sorriso no rosto. A comida estava deliciosa e encantou a todos. A decoração estava perfeita, linda em cada detalhe — um verdadeiro sonho! O animador também foi sensacional: muito simpático, animou a todos e colocou todo mundo para dançar e brincar. Até os adultos entraram na diversão! Estão todos de parabéns pelo excelente trabalho. Sua equipe é maravilhosa! Que Deus abençoe muito todos vocês! Eu amei cada momento... foi um sonho realizado!",
  },
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
    src: "/buffet/WhatsApp%20Image%202026-09-22%20at%2019.01.41.jpeg",
    alt: "Buffet preparado para uma festa",
  },
  {
    src: "/buffet/WhatsApp%20Image%202026-09-22%20at%2019.01.41%20(1).jpeg",
    alt: "Mesa de buffet preparada para festa",
  },
  {
    src: "/buffet/WhatsApp%20Image%202026-09-22%20at%2019.01.40.jpeg",
    alt: "Detalhes do buffet para convidados",
  },
  {
    src: "/buffet/WhatsApp%20Image%202026-09-22%20at%2019.01.40%20(2).jpeg",
    alt: "Comidas e montagem do buffet",
  },
  {
    src: "/buffet/WhatsApp%20Image%202026-09-22%20at%2019.01.40%20(1).jpeg",
    alt: "Mesa de buffet pronta para servir",
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Duda & Bia Festas Maricá | Buffet e Decoração de Festas",
      },
      {
        name: "description",
        content:
          "Buffet em Maricá, decoração de festas e festa completa com local. A Duda & Bia leva toda a estrutura da festa até o seu espaço. Peça seu orçamento pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "Duda & Bia Festas Maricá | Buffet e Decoração",
      },
      {
        property: "og:description",
        content:
          "Festas completas em Maricá: buffet, decoração e organização no seu espaço ou com local incluso.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Instagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.34 4.95L2 22l5.23-1.37a9.9 9.9 0 0 0 4.81 1.23h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm0 18.03h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.25 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.71-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42l-.47-.01c-.17 0-.44.06-.66.31-.23.24-.87.85-.87 2.07s.89 2.4 1.02 2.56c.12.17 1.75 2.67 4.24 3.75.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`animate-rise ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Testimonials() {
  const [carouselRef, carouselApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateCurrentIndex = () => setCurrentIndex(carouselApi.selectedScrollSnap());
    updateCurrentIndex();
    carouselApi.on("select", updateCurrentIndex);

    return () => {
      carouselApi.off("select", updateCurrentIndex);
    };
  }, [carouselApi]);

  return (
    <section id="depoimentos" className="bg-blush/35 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Depoimentos dos clientes
          </p>
          <h2 className="mt-4 text-3xl font-bold text-balance-pretty sm:text-4xl">
            Carinho que fica na memória
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Cada mensagem representa um momento especial que tivemos a alegria de preparar.
          </p>
        </div>

        <div className="mt-10">
          <div
            ref={carouselRef}
            className="overflow-hidden touch-pan-y"
            role="region"
            aria-roledescription="carrossel"
            aria-label="Depoimentos dos clientes"
          >
            <div className="flex items-stretch">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.name} className="min-w-0 flex-[0_0_100%] px-1">
                  <figure className="flex h-full min-h-80 flex-col justify-between rounded-3xl border border-primary/10 bg-card p-7 shadow-lg shadow-primary/8 sm:p-10">
                    <div>
                      <Quote className="mb-5 size-8 text-primary" aria-hidden="true" />
                      <blockquote className="rounded-2xl bg-[oklch(0.97_0.025_350)] p-5 text-base leading-relaxed text-[oklch(0.36_0.03_340)] sm:text-lg">
                        {testimonial.text}
                      </blockquote>
                    </div>
                    <figcaption className="mt-8 border-t border-border pt-5 font-semibold">
                      {testimonial.name}
                      <span className="ml-2 text-sm font-normal text-muted-foreground">
                        Cliente Duda &amp; Bia
                      </span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => carouselApi?.scrollPrev()}
              aria-label="Ver depoimento anterior"
              className="grid size-11 place-items-center rounded-full border border-primary/20 bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="size-5" />
            </button>
            <p className="min-w-20 text-center text-sm text-muted-foreground" aria-live="polite">
              {currentIndex + 1} de {TESTIMONIALS.length}
            </p>
            <button
              type="button"
              onClick={() => carouselApi?.scrollNext()}
              aria-label="Ver próximo depoimento"
              className="grid size-11 place-items-center rounded-full border border-primary/20 bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Arraste para o lado para ver outros depoimentos
          </p>
        </div>
      </div>
    </section>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [budgetFormOpen, setBudgetFormOpen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState<Date>();
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [dateError, setDateError] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleBudgetSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!eventDate) {
      setDateError("Selecione a data do evento.");
      return;
    }

    const formattedDate = `${String(eventDate.getDate()).padStart(2, "0")}/${String(
      eventDate.getMonth() + 1,
    ).padStart(2, "0")}/${eventDate.getFullYear()}`;
    const message = `Olá, Duda & Bia! Gostaria de solicitar um orçamento.\nNome: ${eventName.trim()}\nData do evento: ${formattedDate}`;

    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setBudgetFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="sr-only">coloque uma cor na seção de baixo do site, onde fica a navegação, inicio, sobre etc</div>
      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="relative flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
              <span className="font-display text-xl font-bold tracking-tighter">D&amp;B</span>
            </span>
            <div className="flex flex-col">
              <span
                className={`font-display text-lg leading-none font-bold tracking-tight ${
                  scrolled ? "text-foreground" : "text-primary-foreground drop-shadow"
                }`}
              >
                Duda &amp; Bia
              </span>
              <span className="mt-1 text-[9px] font-sans font-bold tracking-[0.3em] uppercase opacity-80 mix-blend-overlay">
                Festas Maricá
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-foreground/80" : "text-primary-foreground/90 drop-shadow"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={waLink("Olá! Gostaria de um orçamento para minha festa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className={`grid size-10 place-items-center rounded-full md:hidden ${
              scrolled ? "bg-secondary text-foreground" : "bg-background/25 text-primary-foreground"
            }`}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background px-5 pb-5 md:hidden">
            <nav className="flex flex-col">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-sm font-medium text-foreground/80"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={waLink("Olá! Gostaria de um orçamento para minha festa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <WhatsAppIcon className="size-4" />
                Fale conosco pelo WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative min-h-[92vh] w-full overflow-hidden">
        <img
          src={heroFesta}
          alt="Festa decorada com balões e mesa de bolo em Maricá"
          width={1024}
          height={1024}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/45 to-foreground/80" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-4xl flex-col items-center justify-center px-5 pt-28 pb-20 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-soft/50 bg-background/15 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase backdrop-blur">
              Festas • Buffet • Decoração
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-4xl leading-[1.1] font-bold text-primary-foreground text-balance-pretty sm:text-5xl md:text-6xl">
              Sua festa dos sonhos <span className="text-gold">começa aqui!</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/90 text-balance-pretty sm:text-lg">
              Levamos buffet, decoração e toda a festa até o seu espaço. Ou escolha a festa com
              local: realizaremos seu sonho por completo.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href={waLink("Olá, Duda & Bia! Quero fazer uma festa e gostaria de um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105 sm:text-base"
              >
                <WhatsAppIcon className="size-5" />
                Fale conosco pelo WhatsApp
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-background/10 px-8 py-4 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-background/20 sm:text-base"
              >
                Conheça nossos serviços
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <img
              src="/novas%20fotos/WhatsApp%20Image%202026-10-05%20at%2015.03.18.jpeg"
              alt="Decoração de festa com arco de balões rosa e dourado"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-auto rounded-[2rem] shadow-2xl shadow-primary/15"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-card px-6 py-5 shadow-xl sm:block">
              <p className="font-display text-2xl font-bold text-primary">Do seu jeito</p>
              <p className="text-sm text-muted-foreground">cada detalhe pensado com carinho</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Sobre nós
            </p>
            <h2 className="mt-4 text-3xl font-bold text-balance-pretty sm:text-4xl">
              Uma festa completa, feita com dedicação
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              A Duda &amp; Bia Festas nasceu do amor por celebrar. Cuidamos do buffet, da decoração
              e de toda a estrutura para que você aproveite o momento ao lado de quem ama — sem
              preocupação com nada.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Atendemos Maricá e região, com atendimento personalizado do primeiro contato até o
              último detalhe do seu evento.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Atendimento personalizado",
                "Buffet caprichado",
                "Decoração criativa",
                "Organização completa",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/12 text-primary">
                    <Check className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Dois formatos */}
      <section className="bg-accent/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Escolha como quer celebrar
            </p>
            <h2 className="mt-4 text-3xl font-bold text-balance-pretty sm:text-4xl">
              Sua festa, do seu jeito
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                img: "/novas%20fotos/paquitas.jpeg",
                title: "Levamos a festa até você",
                text: "Buffet, decoração e toda a estrutura montada no espaço escolhido por você. Você indica o local, a gente transforma em festa.",
                items: ["Buffet completo", "Decoração temática", "Estrutura e montagem"],
                msg: "Olá! Quero uma festa no meu espaço. Podem me passar um orçamento?",
              },
              {
                img: "/novas%20fotos/paisagem.jpeg",
                title: "Festa completa com local",
                text: "Local, decoração, buffet e organização em uma solução completa. Praticidade total: você só precisa aproveitar.",
                items: ["Local incluso", "Buffet e decoração", "Organização do evento"],
                msg: "Olá! Tenho interesse na festa com local incluso. Podem me passar detalhes?",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-[2rem] bg-card shadow-lg shadow-primary/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{card.text}</p>
                  <ul className="mt-5 space-y-2">
                    {card.items.map((i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-medium">
                        <span className="size-1.5 rounded-full bg-gold" />
                        {i}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(card.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    <WhatsAppIcon className="size-4" />
                    Pedir orçamento
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">Serviços</p>
          <h2 className="mt-4 text-3xl font-bold text-balance-pretty sm:text-4xl">
            Tudo que sua festa precisa
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Check,
              img: decoracao,
              title: "Decoração de festas",
              text: "Painéis, balões, mesas temáticas e ambientação sob medida para o seu tema.",
            },
            {
              icon: Cake,
              img: buffetImg,
              title: "Buffet",
              text: "Salgados, doces, bebidas e mesa montada com apresentação caprichada.",
            },
            {
              icon: Check,
              img: heroFesta,
              title: "Festas completas",
              text: "Da proposta à montagem: cuidamos de toda a produção do seu evento.",
            },
            {
              icon: MapPin,
              img: festaCliente,
              title: "Festas no espaço do cliente",
              text: "Levamos estrutura, buffet e decoração até o local que você escolher.",
            },
            {
              icon: Heart,
              img: festaLocal,
              title: "Festas com local",
              text: "Solução completa com local incluso, pronta para receber seus convidados.",
            },
            {
              icon: Check,
              img: galeria2,
              title: "Eventos personalizados",
              text: "Aniversários, chás, batizados e comemorações do jeitinho que você imaginou.",
            },
          ].map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-3xl bg-card shadow-md shadow-primary/8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 grid size-10 place-items-center rounded-full bg-card text-primary shadow-lg">
                  <s.icon className="size-5" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Buffet */}
      <section id="buffet" className="bg-blush/45 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">Buffet</p>
            <h2 className="mt-4 text-3xl font-bold text-balance-pretty sm:text-4xl">
              Sabor e carinho em cada detalhe
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Um buffet preparado para deixar sua comemoração ainda mais gostosa, bonito na mesa
              e pronto para receber seus convidados.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BUFFET_PHOTOS.map((photo, index) => (
              <figure
                key={photo.src}
                className={`group relative overflow-hidden rounded-3xl bg-card shadow-md shadow-primary/10 ${
                  index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-[4/3] size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="bg-secondary/60 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <a
              href="/galeria"
              className="inline-block text-xs font-semibold tracking-[0.25em] text-primary uppercase transition-colors hover:text-primary/70"
            >
              Galeria
            </a>
            <h2 className="mt-4 text-3xl font-bold text-balance-pretty sm:text-4xl">
              Momentos que merecem ser lembrados
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { src: heroFesta, alt: "Festa completa decorada" },
              { src: decoracao, alt: "Arco de balões rosa e dourado" },
              { src: buffetImg, alt: "Mesa de buffet para festa" },
              { src: galeria1, alt: "Detalhes da decoração" },
              { src: galeria2, alt: "Mesa de doces" },
              { src: galeria3, alt: "Ambiente da festa" },
              { src: festaCliente, alt: "Festa montada no espaço do cliente" },
            ].map((g, i) => (
              <figure
                key={g.alt}
                className="relative aspect-square overflow-hidden rounded-3xl bg-background shadow-md"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="size-full object-contain"
                />
              </figure>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="/galeria"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              Ver mais
            </a>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Festa com local (destaque) */}
      <section id="festa-com-local" className="relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Festa com local
            </p>
            <h2 className="mt-4 text-3xl font-bold text-balance-pretty sm:text-4xl">
              Realizaremos seu sonho por completo
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Quer praticidade total? Escolha a opção com local e deixe tudo com a Duda &amp; Bia:
              espaço, decoração, buffet e organização em um único pacote, pensado para você só
              precisar aproveitar.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { t: "Local preparado", d: "Ambiente montado e decorado para o seu tema." },
                { t: "Buffet incluso", d: "Cardápio combinado com você, servido com capricho." },
                { t: "Decoração completa", d: "Painéis, balões e mesa principal impecáveis." },
                { t: "Organização", d: "Acompanhamento do início ao fim do evento." },
              ].map((b) => (
                <div key={b.t} className="rounded-2xl bg-card p-5 shadow-sm">
                  <p className="font-semibold">{b.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
            <a
              href={waLink("Olá! Quero saber sobre a festa com local incluso.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="size-4" />
              Consultar disponibilidade
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/novas%20fotos/WhatsApp%20Image%202026-10-05%20at5%2015.03.18.jpeg"
              alt="Decoração de festa especial"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-auto rounded-[2rem] shadow-2xl shadow-primary/15"
            />
          </div>
        </div>
      </section>

      <div className="flex justify-center bg-background px-5 pt-10 text-center">
        <a
          href="/galeria"
          className="inline-block text-base font-semibold tracking-[0.2em] text-primary uppercase transition-colors hover:text-primary/70"
        >
          Ver mais em Galeria
        </a>
      </div>

      {/* Por que escolher */}
      <section className="bg-accent/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-balance-pretty sm:text-4xl">
              Por que escolher a Duda &amp; Bia?
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Heart, t: "Atendimento personalizado", d: "Conversamos de perto para entender o seu sonho." },
              { icon: Check, t: "Criatividade", d: "Decoração pensada para o seu tema e estilo." },
              { icon: Check, t: "Praticidade", d: "Você escolhe, nós montamos e organizamos tudo." },
              { icon: Check, t: "Organização", d: "Prazos cumpridos e evento fluindo do jeito certo." },
              { icon: Check, t: "Cuidado nos detalhes", d: "Capricho em cada mesa, arranjo e acabamento." },
            ].map((f) => (
              <div
                key={f.t}
                className="rounded-3xl bg-card p-6 text-center shadow-md shadow-primary/8 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="mx-auto grid size-12 place-items-center rounded-full bg-primary/12 text-primary">
                  <f.icon className="size-5" />
                </span>
                <p className="mt-4 font-semibold">{f.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Como funciona
          </p>
          <h2 className="mt-4 text-3xl font-bold text-balance-pretty sm:text-4xl">
            Simples do começo ao fim
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            { n: "01", t: "Você entra em contato", d: "Fale com a gente pelo WhatsApp." },
            { n: "02", t: "Conta como imagina", d: "Tema, data, número de convidados e local." },
            { n: "03", t: "Montamos a proposta", d: "Enviamos um orçamento personalizado." },
            { n: "04", t: "Realizamos o evento", d: "Cuidamos de tudo no grande dia." },
          ].map((s) => (
            <div key={s.n} className="relative rounded-3xl border border-border bg-card p-7">
              <span className="font-display text-4xl font-bold text-primary/25">{s.n}</span>
              <p className="mt-3 font-semibold">{s.t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Instagram + CTA final */}
      <section id="contato" className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src={galeria3}
            alt=""
            aria-hidden="true"
            width={1024}
            height={1024}
            loading="lazy"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/75" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground text-balance-pretty sm:text-4xl">
            Vamos realizar esse sonho juntos?
          </h2>
          <p className="mt-5 leading-relaxed text-primary-foreground/85">
            Conte para a Duda &amp; Bia como você imagina sua festa e receba uma proposta
            personalizada.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setBudgetFormOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105 sm:text-base"
            >
              <WhatsAppIcon className="size-5" />
              Solicitar orçamento pelo WhatsApp
            </button>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-background/10 px-8 py-4 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-background/20 sm:text-base"
            >
              <Instagram className="size-5" />
              @dudaebiafestasmarica
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-4" />
              </span>
              <span className="font-display text-lg font-bold">Duda &amp; Bia Festas</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Buffet, decoração e festas completas em Maricá e região. Também realizamos festas no
              local.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Navegação</p>
            <ul className="mt-4 space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Contato</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> Maricá — RJ e região
              </li>
              <li>
                <a
                  href={waLink("Olá! Vim pelo site da Duda & Bia Festas.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <WhatsAppIcon className="size-4 text-primary" /> 21 98852-2664
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Instagram className="size-4 text-primary" /> @dudaebiafestasmarica
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-border px-5 pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Duda &amp; Bia Festas Maricá. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <Dialog
        open={budgetFormOpen}
        onOpenChange={(nextOpen) => {
          setBudgetFormOpen(nextOpen);
          if (!nextOpen) setDateError("");
        }}
      >
        <DialogContent className="max-h-[90vh] overflow-y-auto rounded-3xl sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Solicitar orçamento</DialogTitle>
            <DialogDescription>
              Informe seu nome e a data da festa para continuar pelo WhatsApp.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleBudgetSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="budget-event-name" className="text-sm font-medium">
                Seu nome
              </label>
              <input
                id="budget-event-name"
                name="name"
                autoComplete="name"
                required
                value={eventName}
                onChange={(event) => setEventName(event.currentTarget.value)}
                className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Data do evento</label>
              <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    aria-label="Escolher data do evento"
                    aria-haspopup="dialog"
                    className="inline-flex h-11 w-full items-center justify-start gap-2 rounded-xl border border-input bg-background px-3 text-left text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <CalendarDays className="size-4 text-muted-foreground" />
                    {eventDate
                      ? `${String(eventDate.getDate()).padStart(2, "0")}/${String(
                          eventDate.getMonth() + 1,
                        ).padStart(2, "0")}/${eventDate.getFullYear()}`
                      : "Selecione uma data"}
                  </button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={eventDate}
                    onSelect={(date) => {
                      setEventDate(date);
                      setDateError("");
                      setDatePickerOpen(false);
                    }}
                    locale={ptBR}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {dateError && <p className="text-sm text-destructive">{dateError}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <WhatsAppIcon className="size-4" />
              Continuar pelo WhatsApp
            </button>
          </form>
        </DialogContent>
      </Dialog>

      {/* WhatsApp flutuante */}
      <a
        href={waLink("Olá, Duda & Bia! Gostaria de um orçamento.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="21 988522664"
        className="fixed right-5 bottom-24 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      {/* Instagram flutuante */}
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram @dudaebiafestasmarica"
        className="fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white shadow-2xl transition-transform hover:scale-110"
      >
        <Instagram className="size-7" />
      </a>
    </div>
  );
}
