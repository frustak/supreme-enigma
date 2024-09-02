import { IconInnerShadowRightFilled } from "@tabler/icons-react";

export function Logo() {
  return (
    <a href="/" className="relative group">
      <IconInnerShadowRightFilled className="absolute transition-transform duration-300 right-full group-hover:rotate-45" />
      <h1 className="ml-2 font-bold lowercase font-display">IDKTNY</h1>
    </a>
  );
}
