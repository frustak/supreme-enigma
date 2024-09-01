import { IconPlus } from "@tabler/icons-react";

export function AddButton() {
  return (
    <button className="flex items-center justify-center transition-colors rounded-lg w-9 h-9 lg:w-8 lg:h-8 bg-accent text-accent-foreground hover:text-foreground">
      <IconPlus className="w-5 h-5" />
    </button>
  );
}
