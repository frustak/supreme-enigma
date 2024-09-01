export function Footer() {
  return (
    <footer className="container flex items-center justify-start h-14">
      <p className="text-xs text-center text-muted-foreground">
        © {new Date().getFullYear()} idktny. All rights reserved.
      </p>
    </footer>
  );
}
