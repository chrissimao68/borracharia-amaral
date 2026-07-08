"use client"

import { useState } from "react"
import { Catamaran } from "next/font/google"
import {
  Wrench,
  Car,
  BatteryCharging,
  Paintbrush,
  Hammer,
  Sparkles,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Share2,
  Star,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Gauge,
  LifeBuoy,
} from "lucide-react"

const catamaran = Catamaran({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const whatsappLink = "https://whats.link/borracharia24hrs"
const instagramLink = "https://www.instagram.com/borracharia_amara1/"
const facebookLink = "https://www.facebook.com/profile.php?id=100085314463563"
const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Abel+Gomes+Filho+150+Bocaina+Lavras+MG"

export default function Page() {
  const [fotoAtual, setFotoAtual] = useState(0)

  const servicos = [
    { titulo: "Borracharia", texto: "Troca, reparo, calibragem e atendimento rápido para pneus.", icon: <Car /> },
    { titulo: "Mecânica", texto: "Manutenção automotiva para mais segurança no dia a dia.", icon: <Wrench /> },
    { titulo: "Elétrica", texto: "Diagnóstico e reparos elétricos para seu veículo.", icon: <BatteryCharging /> },
    { titulo: "Funilaria", texto: "Correção e recuperação da lataria com capricho.", icon: <Hammer /> },
    { titulo: "Pintura", texto: "Serviços de pintura e acabamento automotivo.", icon: <Paintbrush /> },
    { titulo: "Estética", texto: "Cuidados para deixar seu carro limpo, bonito e valorizado.", icon: <Sparkles /> },
  ]

  const galeria = [
    "/borracharia-fachada.jpg",
    "/borracharia-1.jpg",
    "/borracharia-2.jpg",
    "/borracharia-3.jpg",
  ]

  function proximaFoto() {
    setFotoAtual((atual) => (atual + 1) % galeria.length)
  }

  function fotoAnterior() {
    setFotoAtual((atual) => (atual === 0 ? galeria.length - 1 : atual - 1))
  }

  return (
    <main className={`${catamaran.className} min-h-screen bg-[#f6f6f2] text-zinc-950`}>
      <header className="fixed left-0 top-0 z-50 w-full border-b-4 border-yellow-400 bg-zinc-950/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <div>
            <h1 className="text-xl font-black uppercase tracking-wide text-yellow-400 sm:text-2xl">
              Borracharia Amaral
            </h1>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
              Auto Center • Lavras-MG
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-black uppercase text-black transition hover:bg-yellow-300"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden bg-zinc-950 px-4 pt-28 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(250,204,21,0.18),transparent_35%,rgba(250,204,21,0.12))]" />
        <div className="absolute -right-24 top-32 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 py-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-md border border-yellow-400/50 bg-yellow-400/10 px-4 py-2 text-sm font-black uppercase tracking-wide text-yellow-400">
              <LifeBuoy size={18} />
              Socorro • Mecânica • Borracharia
            </span>

            <h2 className="mt-7 text-5xl font-black uppercase leading-[0.9] sm:text-6xl lg:text-8xl">
              Seu veículo em boas mãos
            </h2>

            <p className="mt-7 max-w-xl text-xl font-semibold leading-relaxed text-white/70">
              Serviços de borracharia, mecânica, elétrica, funilaria, pintura,
              estética automotiva e martelinho de ouro.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <MiniInfo icon={<ShieldCheck />} text="Atendimento confiável" />
              <MiniInfo icon={<Gauge />} text="Serviço rápido" />
              <MiniInfo icon={<Clock />} text="Socorro 24hrs" />
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-yellow-400 px-8 py-4 text-center text-lg font-black uppercase text-black transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                Solicitar atendimento
              </a>

              <a
                href="#servicos"
                className="rounded-md border-2 border-yellow-400 px-8 py-4 text-center text-lg font-black uppercase text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
              >
                Ver serviços
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 bg-yellow-400" />
            <img
              src="/borracharia-fachada.jpg"
              alt="Fachada Borracharia Amaral"
              className="relative h-[360px] w-full object-cover shadow-2xl sm:h-[460px]"
            />
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-yellow-400 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Wrench className="mx-auto text-black" size={48} />
            <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
              Serviços automotivos
            </h2>
            <p className="mt-4 text-xl font-bold text-black/70">
              Tudo para seu carro em um só lugar, com atendimento prático e direto.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((servico) => (
              <div
                key={servico.titulo}
                className="border-2 border-black bg-white p-7 shadow-[8px_8px_0px_#111] transition hover:-translate-y-1"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center bg-black text-yellow-400">
                  {servico.icon}
                </div>

                <h3 className="text-2xl font-black uppercase">{servico.titulo}</h3>

                <p className="mt-3 text-lg font-semibold leading-relaxed text-zinc-600">
                  {servico.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
              Auto Center Amaral
            </span>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
              Oficina completa em Lavras
            </h2>

            <p className="mt-5 text-xl font-semibold leading-relaxed text-zinc-700">
              A Borracharia Amaral presta serviços de mecânica, borracharia,
              elétrica, funilaria, pintura, martelinho de ouro, estética
              automotiva e socorro 24 horas.
            </p>

            <div className="mt-7 grid gap-3">
              {[
                "Atendimento para veículos de passeio",
                "Socorro automotivo 24 horas",
                "Serviços de pneus, pintura e reparos",
                "Localização no bairro Bocaina",
              ].map((item) => (
                <p key={item} className="flex items-center gap-3 text-lg font-black">
                  <CheckCircle className="text-yellow-500" size={22} />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="border-4 border-black bg-yellow-400 p-3 shadow-[10px_10px_0px_#111]">
            <img
              src="/borracharia-fachada.jpg"
              alt="Borracharia Amaral"
              className="h-[430px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <Car className="mx-auto text-yellow-400" size={48} />
            <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
              Galeria da oficina
            </h2>
            <p className="mt-4 text-xl text-white/60">
              Fotos da fachada, equipe, serviços e veículos atendidos.
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-5xl">
            <div className="border-4 border-yellow-400 bg-black">
              <img
                src={galeria[fotoAtual]}
                alt="Foto da galeria"
                className="h-[300px] w-full object-cover sm:h-[460px]"
              />
            </div>

            <button
              type="button"
              onClick={fotoAnterior}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-yellow-400 text-black"
              aria-label="Foto anterior"
            >
              <ChevronLeft />
            </button>

            <button
              type="button"
              onClick={proximaFoto}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-yellow-400 text-black"
              aria-label="Próxima foto"
            >
              <ChevronRight />
            </button>

            <div className="mt-5 grid grid-cols-4 gap-2">
              {galeria.map((foto, index) => (
                <button
                  key={foto}
                  type="button"
                  onClick={() => setFotoAtual(index)}
                  className={`overflow-hidden border-2 ${
                    fotoAtual === index ? "border-yellow-400" : "border-white/20"
                  }`}
                >
                  <img
                    src={foto}
                    alt={`Miniatura ${index + 1}`}
                    className="h-16 w-full object-cover sm:h-24"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Star className="mx-auto text-yellow-500" size={48} />
            <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
              Atendimento de confiança
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Depoimento texto="Atendimento rápido, serviço bem feito e equipe prestativa." />
            <Depoimento texto="Resolveu meu problema com agilidade. Recomendo." />
            <Depoimento texto="Oficina completa, preço justo e ótimo atendimento." />
          </div>
        </div>
      </section>

      <section className="bg-yellow-400 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="border-4 border-black bg-white p-8 shadow-[10px_10px_0px_#111] md:p-12">
            <div className="text-center">
              <MessageCircle className="mx-auto text-black" size={52} />

              <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">
                Precisa de atendimento?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-xl font-bold text-zinc-600">
                Chame no WhatsApp para consultar serviços, valores ou solicitar
                socorro automotivo.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-md bg-black px-10 py-4 text-xl font-black uppercase text-yellow-400 transition hover:-translate-y-1"
              >
                Chamar no WhatsApp
              </a>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <Info icon={<Phone />} titulo="Telefone" texto="(35) 99239-6859" />
              <Info icon={<MapPin />} titulo="Endereço" textSmall texto="Abel Gomes Filho, 150 - Bocaina" />
              <Info icon={<Clock />} titulo="Atendimento" texto="Socorro 24 horas" />
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Social href={instagramLink} label="Instagram" />
              <Social href={facebookLink} label="Facebook" />
              <Social href={mapsLink} label="Localização" />
            </div>
          </div>
        </div>
      </section>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110"
        aria-label="Chamar no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      <footer className="border-t-4 border-yellow-400 bg-black py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row">
          <div>
            <h2 className="text-xl font-black uppercase text-yellow-400">
              Borracharia Amaral
            </h2>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              Auto Center • Lavras-MG
            </p>
          </div>

          <p className="text-sm text-white/50">
            © 2026 Borracharia Amaral. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}

function MiniInfo({ icon, text }) {
  return (
    <div className="flex items-center gap-2 border border-yellow-400/30 bg-black/40 p-3 text-sm font-black text-white/80">
      <span className="text-yellow-400">{icon}</span>
      {text}
    </div>
  )
}

function Depoimento({ texto }) {
  return (
    <div className="border-2 border-black bg-white p-7 shadow-[8px_8px_0px_#facc15]">
      <div className="flex gap-1 text-yellow-500">
        {[1, 2, 3, 4, 5].map((item) => (
          <Star key={item} size={20} fill="currentColor" />
        ))}
      </div>

      <p className="mt-4 text-lg font-semibold leading-relaxed text-zinc-700">
        “{texto}”
      </p>

      <h3 className="mt-5 text-xl font-black">Cliente Amaral</h3>
    </div>
  )
}

function Info({ icon, titulo, texto }) {
  return (
    <div className="border-2 border-black bg-yellow-400 p-5 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center bg-black text-yellow-400">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-black uppercase">{titulo}</h3>
      <p className="mt-1 font-bold text-black/70">{texto}</p>
    </div>
  )
}

function Social({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 border-2 border-black px-6 py-3 font-black uppercase transition hover:bg-black hover:text-yellow-400"
    >
      <Share2 size={20} />
      {label}
    </a>
  )
}