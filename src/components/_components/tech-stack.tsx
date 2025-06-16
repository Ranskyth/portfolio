import { Card } from "@/components/ui/card"
const technologies = [
  {
    category: "Frontend",
    skills: ["html","css","react", "nextjs", "tailwind"],
  },
  {
    category: "Backend",
    skills: ["nodejs", "express", "nestjs", "fastify", "mysql", "postgresql", "mongodb"],
  },
  {
    category: "DevOps / Tools",
    skills: ["docker", "git", "linux", "nginx", "apache","vscode", "github", "netlify", "vercel"],
  },
  {
    category: "languages",
    skills: ["javascript", "typescript", "java",],
  },

]

export default function TechStack() {
  return (
      <div className="flex justify-center gap-5">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg text-center font-semibold mb-4">{tech.category}</h3>
          <div className="flex justify-center flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <img
                src={`${process.env.NEXT_PUBLIC_API_ICONS}/api/icons?i=${skill}`}
                key={skill}
                className="inline-flex w-12 gap-2 items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              />
            ))}
          </div>
        </Card>
      ))}
      </div>
  )
}

