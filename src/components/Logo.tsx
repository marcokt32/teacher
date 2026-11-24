type Props = { className?: string };

// PLACEHOLDER: trocar pelo logotipo da marca (arquivos em public/logo)
export default function Logo({ className = "" }: Props) {
  return (
    <div
      className={`flex h-10 w-40 items-center justify-center rounded-lg border-2 border-dashed border-lilas text-sm font-medium text-ameixa ${className}`}
    >
      LOGO
    </div>
  );
}
