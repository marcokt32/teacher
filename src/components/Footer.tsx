import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ameixa text-neutro-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <Logo className="border-lavanda text-lavanda" />
        <p className="text-sm">© {new Date().getFullYear()} Teacher Esther. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
