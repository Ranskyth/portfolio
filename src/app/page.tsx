import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./_components/project-card"
import TechStack from "./_components/tech-stack"
import { TextAnimate } from "@/components/magicui/text-animate"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <div className="min-h-screen max bg-background">
      <header className="sticky flex justify-center top-0 z-50 w-full border-b px-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Gabriel.dev</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                Inicio
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projetos
              </Link>
              <Link href="#stack" className="transition-colors hover:text-foreground/80">Tecnologias</Link>
            </nav>
          </div>
          <div className="self-center flex w-full gap-2 justify-end ">
            <ThemeToggle/>
            <div>
              <Link href={"/assets/GabrielLimaSantana.pdf"} target="_blank">
              <Button variant="ghost" size="icon">
                <Download/>
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="container px-4 md:px-6 max-w-[1380px] mx-auto">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <TextAnimate className="uppercase font-bold line leading-[.75rem] text-[14px] md:text-[21px] text-left">Oi Eu Sou o Gabriel</TextAnimate>
                <TextAnimate className="  font-bold tracking-tighter text-left text-[4.2rem] leading-[1.05] sm:text-[8.5rem]" animation="slideUp" by="word">Full Stack Developer</TextAnimate>
                  <TextAnimate className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">🚀 Vamos construir algo incrível juntos! 💡</TextAnimate> 
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/Ranskyth" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/gabriel-lima-a54557169/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://x.com/GaLima2205" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projetos</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
                title="Solp Pet"
                description="Sistema de Pet Shop Simples"
                link="https://github.com/Ranskyth/solp-pet-frontend"
                tags={["Next.js","Vercel","Nest.js","Render", "Prisma", "Postgres", "Tailwind"]}
           
                deploy="https://solp-pet-frontend.vercel.app/"
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
                title="Aluno Api"
                description="🛠️ Esta API em ASP.NET Core foi desenvolvida para gerenciar alunos, utilizando PostgreSQL em Docker para máxima eficiência e escalabilidade. 🚀"
                image="/assets/projects/aluno_api.png"
                link="https://github.com/Ranskyth/AlunoAPI"
                tags={["Asp.Net Core", "ef core", "docker", "postgres"]}
              />
              <ProjectCard
                title="Consulta Web Cep"
                description="🖥️ Front-end desenvolvido com Next.js e Tailwind CSS, integrado à API ViaCEP para consulta de endereços de forma rápida e responsiva. 🚀"
                image="https://raw.githubusercontent.com/Ranskyth/consulta_web_cep/refs/heads/main/assets/Captura.png"
                link="https://github.com/Ranskyth/consulta_web_cep"
                tags={["Next.js", "TailwindCSS", "Vercel"]}
                deploy="https://consultawebcep.vercel.app/"
              />
                <ProjectCard
                title="Newflix"
                description="New Flix é um projeto desenvolvido com Next.js e Tailwind CSS, que consome a API do TMDb usando Axios para exibir informações sobre filmes"
                image="/assets/projects/newflix.png"
                link="https://github.com/Ranskyth/newflix"
                tags={["Next.js", "TailwindCSS", "Vercel"]}
                deploy="https://newflix-sage.vercel.app"
              />
                              <ProjectCard
                title="Gerador de Senhas"
                description="🔑 Gerador de senhas aleatórias feito com HTML, CSS e JavaScript. 🖥️"
                image="/assets/projects/gen_senhas.png"
                link="https://github.com/Ranskyth/Gerador_de_Senhas"
                tags={["HTML", "CSS", "Javascript", "Github Pages"]}
            
                deploy="https://ranskyth.github.io/Gerador_de_Senhas"
              />
                                            <ProjectCard
                title="React Imc Calc"
                description="Esta aplicação é uma calculadora de IMC simples, desenvolvida com React ⚛️."
                image="/assets/projects/imc_calc.png"
                link="https://github.com/Ranskyth/React_IMC_Calc"
                tags={["React","Vite", "Vercel"]}
               
                deploy="https://imc-calc-coal.vercel.app"
              />
            </div>
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
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400"> &copy; 2025 Gabriel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

