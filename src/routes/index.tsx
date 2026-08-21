import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageCircle, Star, Calendar, MapPin, Sparkles, ChefHat } from "lucide-react";
import heroFesta from "@/assets/hero-festa.jpg";
import galeria1 from "@/assets/galeria-1.jpg";
import galeria2 from "@/assets/galeria-2.jpg";
import galeria3 from "@/assets/galeria-3.jpg";

const galeria = [galeria1, galeria2, galeria3, heroFesta, galeria3, galeria1, galeria2, heroFesta];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Duda e Bia Festas Maricá | Buffet, Decoração e Eventos Completos" },
      { name: "description", content: "Duda e Bia Festas Maricá oferece buffet, decoração e estrutura completa para realizar seu sonho de festa. Buffet, decoração de festas em Maricá." },
      { property: "og:title", content: "Duda e Bia Festas Maricá | Buffet e Decoração" },
      { property: "og:description", content: "Transformamos seu sonho de festa em realidade. Buffet, decoração e estrutura completa para eventos em Maricá." },
    ],
  }),
});

function Index() {
  const whatsappLink = "https://wa.me/5521999999999"; // Placeholder, update to actual

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">melhore esse layout copiando o site www.vivianfestabaloes.com
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0354aed?q=80&w=2070&auto=format&fit=crop" 
            alt="Festa elegante" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 tracking-tight">Seu sonho de festa começa aqui</h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">Buffet, decoração e toda a estrutura para transformar sua comemoração em um momento inesquecível.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg rounded-full" asChild>
              <a href={whatsappLink}>Solicitar orçamento</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 h-14 px-8 text-lg rounded-full backdrop-blur-sm">Conheça nossos serviços</Button>
          </div>
        </motion.div>
      </section>

      {/* Formatos de Atendimento */}
      <section className="py-24 px-4 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-accent/30 border border-primary/10"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Levamos a festa até você</h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">Você escolhe o local e nós cuidamos do restante. Levamos buffet, decoração e toda a estrutura necessária para transformar o seu espaço em uma festa completa e especial.</p>
            <ul className="grid grid-cols-2 gap-6">
              {['Buffet Completo', 'Decoração Temática', 'Estrutura de Festa', 'Organização Total'].map(item => (
                <li key={item} className="flex items-center gap-3 font-medium"><Sparkles className="h-5 w-5 text-primary" /> {item}</li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/10 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Festa com local</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Quer praticidade e tranquilidade? Escolha a opção com local e deixe que a Duda e Bia cuidem de todos os detalhes para realizar seu sonho por completo.</p>
            </div>
            <Button className="mt-12 h-14 rounded-full text-lg" size="lg" asChild>
                <a href={whatsappLink}>Agendar visita ao local</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/50 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Buffet', icon: ChefHat, desc: 'Variedade e sabor em cada prato, preparado com ingredientes selecionados.' },
              { title: 'Decoração', icon: Sparkles, desc: 'Cenários mágicos e personalizados que contam a sua história.' },
              { title: 'Festas Infantis', icon: Calendar, desc: 'Toda a alegria e diversão que os pequenos merecem.' },
              { title: 'Festas de Aniversário', icon: Calendar, desc: 'Celebre a vida com elegância e praticidade.' },
              { title: 'Eventos Personalizados', icon: Sparkles, desc: 'Do corporativo ao social, cuidamos de cada detalhe.' },
              { title: 'Organização Completa', icon: Sparkles, desc: 'Tranquilidade total para você aproveitar a festa.' }
            ].map((service) => (
              <Card key={service.title} className="hover:shadow-2xl transition-all duration-500 border-none bg-card shadow-sm group rounded-3xl overflow-hidden">
                <CardHeader className="pt-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-10">
                  <p className="text-muted-foreground text-lg">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Momentos que merecem ser lembrados</h2>
          <p className="text-lg text-muted-foreground">Confira alguns dos eventos realizados pela Duda e Bia. Qualidade e capricho em cada detalhe.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square rounded-[2rem] overflow-hidden bg-muted group cursor-pointer shadow-md"
            >
              <img 
                src={`https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop&crop=focalpoint&fp-y=${0.1 * i}`} 
                alt="Evento" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Diferencial */}
      <section className="py-24 bg-primary text-white px-4 text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Uma festa completa, do seu jeito</h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            A Duda e Bia assume toda a produção da festa, desde o buffet e decoração até a estrutura e organização. 
            Praticidade e capricho para você apenas aproveitar o momento.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold h-14 px-10 rounded-full text-lg" asChild>
            <a href={whatsappLink}>Saiba Mais</a>
          </Button>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 px-4 container mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-20">Como Funciona</h2>
        <div className="grid md:grid-cols-4 gap-12 relative">
          {[
            { step: '1', title: 'Você entra em contato', desc: 'Fale conosco via WhatsApp ou formulário.' },
            { step: '2', title: 'Conta seu sonho', desc: 'Conte para a gente como imagina sua festa.' },
            { step: '3', title: 'Montamos a proposta', desc: 'Criamos um projeto personalizado para você.' },
            { step: '4', title: 'Vocês realizam o evento', desc: 'Nós cuidamos de tudo no grande dia.' }
          ].map((item, idx) => (
            <div key={item.step} className="text-center relative">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-xl shadow-primary/20 relative z-10">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-24 bg-muted/30 px-4">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-serif font-bold mb-8">Sobre a Duda e Bia</h2>
            <p className="text-xl text-primary font-medium mb-6 italic">"Transformando sonhos em memórias inesquecíveis."</p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com dedicação e capricho, nossa equipe trabalha para que cada evento seja único. 
              Do buffet artesanal à decoração impecável, nosso compromisso é com a sua felicidade e a de seus convidados.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-lg font-medium text-primary"><div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><Star className="h-5 w-5 fill-current" /></div> Experiência e Confiança</div>
              <div className="flex items-center gap-4 text-lg font-medium text-primary"><div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><Star className="h-5 w-5 fill-current" /></div> Dedicação em cada detalhe</div>
              <div className="flex items-center gap-4 text-lg font-medium text-primary"><div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><Star className="h-5 w-5 fill-current" /></div> Atendimento Acolhedor</div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-2xl relative"
          >
            <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" alt="Evento Produzido" className="w-full h-full object-cover aspect-[4/5]" />
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-4 text-center bg-accent text-accent-foreground relative overflow-hidden">
        <div className="container mx-auto max-w-2xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Vamos realizar esse sonho juntos?</h2>
          <p className="text-xl opacity-80 mb-12 leading-relaxed">
            Conte para a Duda e Bia como você imagina sua festa e receba uma proposta personalizada e sem compromisso.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold h-16 px-12 rounded-full text-xl shadow-2xl shadow-primary/20" asChild>
            <a href={whatsappLink}>Solicitar orçamento pelo WhatsApp</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-background border-t px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-primary tracking-tight">Duda e Bia Festas Maricá</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">Buffet, decoração e toda a estrutura para sua festa em Maricá e toda a região metropolitana.</p>
            <div className="flex gap-6">
              <a href="https://instagram.com/dudaebiafestasmarica" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                IG
              </a>
              <a href={whatsappLink} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                WA
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Onde Atendemos</h4>
            <p className="text-lg text-muted-foreground flex items-start gap-3"><MapPin className="h-6 w-6 text-primary shrink-0" /> Maricá - RJ e Região Metropolitana</p>
            <div className="mt-12 pt-12 border-t border-border">
                <p className="text-sm text-muted-foreground">© 2026 Duda e Bia Festas Maricá. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href={whatsappLink} 
        aria-label="Contato via WhatsApp"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <MessageCircle className="h-9 w-9" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-foreground px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Fale conosco agora!
        </span>
      </a>
    </div>
  );
}
