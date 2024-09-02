import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export function Hero() {
  return (
    <section className="container flex flex-col gap-6 lg:grid lg:gap-20 lg:grid-cols-2">
      <div className="flex flex-col items-start">
        <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display">
          Wear Your Story
        </h2>
        <h3 className="text-sm lg:text-base mt-1.5 text-muted-foreground grow">
          Premium quality t-shirts that fit your style
        </h3>
        <a
          href="/shop"
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full mt-4 lg:w-auto",
          )}
        >
          Find Your Style
        </a>
      </div>
      <img
        src="/images/hero.jpg"
        alt=""
        className="rounded-lg place-self-end h-[min(50vh,64rem)] w-full object-cover"
      />
    </section>
  );
}
