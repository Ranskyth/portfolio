import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Lucas",
    username: "@lucas",
    body: "Profissional excelente! Entregou exatamente o que eu precisava, com qualidade e no prazo.",
  },
  {
    name: "Ana",
    username: "@ana",
    body: "Ótima experiência! Comunicação clara e código bem estruturado. Recomendo demais!",
  },
  {
    name: "Pedro",
    username: "@pedro",
    body: "Muito competente e atencioso. Resolveu meu problema rapidamente. Trabalho impecável!",
  },
  {
    name: "Mariana",
    username: "@mariana",
    body: "Serviço de altíssima qualidade! Entregou tudo como prometido e ainda deu ótimas sugestões.",
  },
  {
    name: "Gabriel",
    username: "@gabriel",
    body: "Excelente profissional! Muito conhecimento técnico e compromisso com o projeto.",
  },
  {
    name: "Juliana",
    username: "@juliana",
    body: "Superou minhas expectativas! Profissional dedicado e entrega impecável.",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  username,
  body,
}: {
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
      
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
