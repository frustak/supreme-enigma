type Props = {
  children: string;
  href: string;
};

export function Link({ children, href }: Props) {
  return (
    <a
      href={href}
      className="hover:underline decoration-2 underline-offset-4 py-0.5 px-2"
    >
      {children}
    </a>
  );
}
