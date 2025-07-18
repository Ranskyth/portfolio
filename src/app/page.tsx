"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import Link from "next/link";
import ProjectCard from "../components/_components/project-card";
import TechStack from "../components/_components/tech-stack";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function Page() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        String(process.env.NEXT_PUBLIC_EMAIL_ID),
        String(process.env.NEXT_PUBLIC_EMAIL_TAMPLATE),
        String(form.current),
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="min-h-screen max bg-background">
      <header className="sticky flex justify-center top-0 z-50 w-full border-b px-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">
                Gabriel.dev
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#about"
                className="transition-colors hover:text-foreground/80"
              >
                Inicio
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-foreground/80"
              >
                Projetos
              </Link>
              <Link
                href="#stack"
                className="transition-colors hover:text-foreground/80"
              >
                Tecnologias
              </Link>
              <Link
                href="#contato"
                className="transition-colors hover:text-foreground/80"
              >
                Contato
              </Link>
            </nav>
          </div>
          <div className="self-center flex w-full gap-2 justify-end ">
            <ThemeToggle />
            <div>
              <Link href={"/assets/GabrielLimaSantana.pdf"} target="_blank">
                <Button variant="ghost" size="icon">
                  <Download />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="container px-4 md:px-6 max-w-[1380px] mx-auto">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="flex">
                  <div>
                    <TextAnimate className="uppercase font-bold line leading-[.75rem] text-[14px] md:text-[21px] text-left">
                      Oi Eu Sou o Gabriel
                    </TextAnimate>
                    <TextAnimate
                      className="  font-bold tracking-tighter text-left text-[4.2rem] leading-[1.05] sm:text-[8.5rem]"
                      animation="slideUp"
                      by="word"
                    >
                      Full Stack Developer
                    </TextAnimate>
                    <TextAnimate className="text-start max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                      🚀 Vamos construir algo incrível juntos! 💡
                    </TextAnimate>

                    <div className="mt-5 space-x-4 text-start">
                      <Link href="https://github.com/Ranskyth" target="_blank">
                        <Button variant="outline" size="icon">
                          <SiGithub className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/gabriel-lima-a54557169/"
                        target="_blank"
                      >
                        <Button variant="outline" size="icon">
                          <SiLinkedin className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="https://x.com/GaLima2205" target="_blank">
                        <Button variant="outline" size="icon">
                          <SiX className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <img
                    className="rounded-[50%] w-[20rem] h-[20rem]"
                    src={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_PERFIL}.png`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Projetos
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Solp Pet"
                description="Sistema de Pet Shop"
                link="https://github.com/Ranskyth/solp-pet"
                image="https://raw.githubusercontent.com/Ranskyth/solp-pet/refs/heads/main/assets/Captura%20de%20tela%20de%202025-05-27%2015-57-55.png"
                tags={[
                  "Next.js",
                  "Vercel",
                  "Nest.js",
                  "Prisma",
                  "Postgres",
                  "Tailwind",
                ]}
              />
              <ProjectCard
                title="Naruto Wiki"
                description="📖 Esta aplicação é uma Wiki interativa sobre os personagens de Naruto, desenvolvida com Angular para uma experiência dinâmica e envolvente! 🍥"
                image="https://raw.githubusercontent.com/Ranskyth/wiki-naruto-angular/refs/heads/master/assets/img.png"
                link="https://github.com/Ranskyth/wiki-naruto-angular"
                tags={["Angular", "Vercel"]}
                deploy="https://wiki-naruto-angular.vercel.app/"
              />
              <ProjectCard
                title="Newflix"
                description="New Flix é um projeto desenvolvido com Next.js e Tailwind CSS, que consome a API do TMDb usando Axios para exibir informações sobre filmes"
                image="/assets/projects/newflix.png"
                link="https://github.com/Ranskyth/newflix"
                tags={["Next.js", "TailwindCSS", "Vercel"]}
                deploy="https://newflix-sage.vercel.app"
              />
            </div>
          </div>
          <div className="mt-2 w-full flex justify-center">
            <Link href={"/projetos"} className=" text-[#858585] flex gap-1">
              Ver Todos Projetos
              <ArrowRight />
            </Link>
          </div>
        </section>

        <section id="stack" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tecnologias
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contato" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Contato
            </h2>
            <div className="flex justify-center">
              <div></div>
              <form
                onSubmit={sendEmail}
                ref={form}
                className="flex flex-col gap-5 w-[500px]"
                action=""
              >
                <Card>
                  <CardContent className="flex mt-5 flex-col gap-5">
                    <Input name="name" placeholder="Seu Nome" />
                    <Input name="email" placeholder="Seu Email" />
                    <Textarea
                      name="message"
                      placeholder="Sua Mensagem"
                      rows={4}
                    />
                    <Button
                      onClick={() => {
                        toast.promise(
                          () =>
                            new Promise((resolve) =>
                              setTimeout(() => resolve({}), 2000)
                            ),
                          {
                            loading: "Enviando...",
                            success: () => {
                              return "Mensagem enviada com sucesso";
                            },
                            error: "Error",
                          }
                        );
                      }}
                      type="submit"
                      variant={"secondary"}
                    >
                      Enviar
                    </Button>
                  </CardContent>
                </Card>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {" "}
            &copy; 2025 Gabriel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
