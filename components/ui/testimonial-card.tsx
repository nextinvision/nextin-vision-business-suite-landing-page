import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'

  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-2xl border border-white/10",
        "bg-white/5 backdrop-blur-sm",
        "p-8 text-start",
        "hover:bg-white/10 transition-colors duration-300",
        "max-w-[320px] sm:max-w-[320px]",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-lg md:text-xl font-extrabold leading-tight text-white tracking-tight">
            {author.name}
          </h3>
          <p className="text-sm md:text-base text-[#005B82] font-bold mt-1 tracking-wide">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-lg md:text-xl mt-4 text-neutral-200 leading-relaxed italic tracking-wide font-light">
        &quot;{text}&quot;
      </p>
    </Card>
  )
}