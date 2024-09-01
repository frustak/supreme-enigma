import { IconInnerShadowRightFilled } from "@tabler/icons-react";

export function Header() {
  return (
    <header className="w-full h-14">
      <div className="fixed inset-0 h-14 bg-background">
        <div className="container flex items-center h-full">
          <div className="relative">
            <IconInnerShadowRightFilled className="absolute right-full" />
            <h1 className="font-bold lowercase font-display ml-2">IDKTNY</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
