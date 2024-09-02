import { Link } from "../atoms/link";
import { Logo } from "../molecules/logo";

export function Header() {
  return (
    <header className="w-full h-14">
      <div className="fixed inset-0 z-10 h-14 bg-background/85 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-full">
          <Logo />
          <div className="text-sm font-bold">
            <Link href="/shop">T-Shirts</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
