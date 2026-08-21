import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageCircle, Star, Calendar, MapPin, Sparkles, ChefHat } from "lucide-react";

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
    <div className="min-h-screen bg-background text-foreground">
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Seu sonho de festa começa aqui</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Buffet, decoração e toda a estrutura para transformar sua comemoração em um momento inesquecível.</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <a href={whatsappLink}>Solicitar orçamento</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">Conheça nossos serviços</Button>
          </div>
        </motion.div>
      </section>

      {/* Formatos de Atendimento */}
      <section className="py-20 px-4 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="p-8 rounded-3xl bg-accent/30">
            <h2 className="text-3xl font-serif font-bold mb-4">Levamos a festa até você</h2>
            <p className="mb-6 text-muted-foreground">Você escolhe o local e nós cuidamos do restante. Levamos buffet, decoração e toda a estrutura necessária para transformar o seu espaço em uma festa completa e especial.</p>
            <ul className="grid grid-cols-2 gap-4">
              {['Buffet', 'Decoração', 'Estrutura', 'Organização'].map(item => (
                <li key={item} className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> {item}</li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="p-8 rounded-3xl bg-primary/5">
            <h2 className="text-3xl font-serif font-bold mb-4">Festa com local</h2>
            <p className="text-muted-foreground">Quer praticidade e tranquilidade? Escolha a opção com local e deixe que a Duda e Bia cuidem de todos os detalhes para realizar seu sonho por completo.</p>
            <Button className="mt-8" asChild>
                <a href={whatsappLink}>Agendar visita ao local</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Buffet', 'Decoração', 'Festas Infantis', 'Eventos Personalizados'].map((service) => (
              <Card key={service} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <ChefHat className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Atendimento personalizado e capricho em cada detalhe para sua festa ser um sucesso.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a href={whatsappLink} className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-colors">
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
}
