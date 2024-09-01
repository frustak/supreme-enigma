import { Logo } from "../molecules/logo";

export function Header() {
  return (
    <header className="w-full h-14">
      <div className="fixed inset-0 h-14 bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-full">
          <Logo />
          <div className="text-sm font-bold">
            <a
              href="/"
              className="hover:underline decoration-2 underline-offset-4 py-0.5 px-2"
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
