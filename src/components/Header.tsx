import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "#sobre", texto: "Sobre" },
  { href: "#como-funciona", texto: "Como funciona" },
  { href: "#contato", texto: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutro-100 bg-neutro-50/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Teacher Esther - início">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-medium text-ameixa hover:underline">
              {l.texto}
            </a>
          ))}
        </nav>

        <Link
          href="/login"
          className="rounded-full bg-ameixa px-5 py-2 font-medium text-white hover:opacity-90"
        >
          Entrar
        </Link>
      </div>
    </header>
  );
}
