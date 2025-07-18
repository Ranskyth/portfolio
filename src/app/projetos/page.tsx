import ProjectCard from "@/components/_components/project-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Projetos = () => {
  return (
    <>
      <div className=" p-5">
        <div>
          <h1 className="text-center font-semibold mb-7 text-[2rem]">
            Projetos
          </h1>
          <div className="px-36">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
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
                description="Gerador de senhas aleatórias feito com HTML, CSS e JavaScript."
                image="/assets/projects/gen_senhas.png"
                link="https://github.com/Ranskyth/Gerador_de_Senhas"
                tags={["HTML", "CSS", "Javascript", "Github Pages"]}
                deploy="https://ranskyth.github.io/Gerador_de_Senhas"
              />
              <ProjectCard
                title="Calculadora IMC"
                description="Esta aplicação é uma calculadora de IMC simples, desenvolvida com React ⚛️."
                image="/assets/projects/imc_calc.png"
                link="https://github.com/Ranskyth/React_IMC_Calc"
                tags={["React", "Vite", "Vercel"]}
                deploy="https://imc-calc-coal.vercel.app"
              />
            </div>
            <div className="flex justify-end">
              <Button asChild className="mt-5" variant={"outline"}>
                <Link href="/">
                  <ArrowLeft />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projetos;
