import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./_components/project-card"
import TechStack from "./_components/tech-stack"
import { TextAnimate } from "@/components/magicui/text-animate"
import { MarqueeDemo } from "./_components/review-card"

export default function Page() {
  return (
    <div className="min-h-screen max bg-background">
      <header className="sticky top-0 z-50 w-full border-b px-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Renskyth.dev</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#reviews" className="transition-colors hover:text-foreground/80">
                Reviews
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="container px-4 md:px-6 max-w-[1380px] mx-auto">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <TextAnimate animation="slideUp" by="word">Full Stack Developer</TextAnimate>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  <TextAnimate>🚀 Transforme sua ideia em uma experiência digital impactante! Com soluções modernas, eficientes e personalizadas, eu ajudo a levar seu projeto para o próximo nível. Vamos construir algo incrível juntos! 💡</TextAnimate> 
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/Ranskyth" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/gabriel-lima-a54557169/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://x.com/GaLima2205" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Naruto Wiki"
                description="📖 Esta aplicação é uma Wiki interativa sobre os personagens de Naruto, desenvolvida com Angular para uma experiência dinâmica e envolvente! 🍥"
                image="https://raw.githubusercontent.com/Ranskyth/wiki-naruto-angular/refs/heads/master/assets/img.png"
                link="https://github.com/Ranskyth/wiki-naruto-angular"
                tags={["Angula"]}
                isDeploy={true}
                deploy="https://wiki-naruto-angular.vercel.app/"
              />
              <ProjectCard
                title="Aluno Api"
                description="🛠️ Esta API em ASP.NET Core foi desenvolvida para gerenciar alunos, utilizando PostgreSQL em Docker para máxima eficiência e escalabilidade. 🚀"
                image="https://workana.s3.amazonaws.com/portfolios/ih/32fb180193ae06931f45db6912ad1b6b/Capturadetelade20241224122013.png?response-content-disposition=inline%3Bfilename%3D%22Captura%20de%20tela%20de%202024-12-24%2012-20-13.png%22&response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA33COQEVTJSIXHA73%2F20250223%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250223T230321Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Signature=35cded5c9e90a844c038d0c0cb1ebf66eeed42be4f4ad72cd80b2a2539b52bc4"
                link="https://github.com/Ranskyth/AlunoAPI"
                tags={["Asp.Net Core", "ef core", "docker", "postgres"]}
              />
              <ProjectCard
                title="Consulta Web Cep"
                description="🖥️ Front-end desenvolvido com Next.js e Tailwind CSS, integrado à API ViaCEP para consulta de endereços de forma rápida e responsiva. 🚀"
                image="https://raw.githubusercontent.com/Ranskyth/consulta_web_cep/refs/heads/main/assets/Captura.png"
                link="https://github.com/Ranskyth/consulta_web_cep"
                tags={["Next.js", "TailwindCSS"]}
                isDeploy={true}
                deploy="https://consultawebcep.vercel.app/"
              />
            </div>
          </div>
        </section>
        <section id="reviews" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Reviews
            </h2>
            <MarqueeDemo />
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Renskyth. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

