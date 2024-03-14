// Enlace.tsx
import Link from "next/link";

interface EnlaceProps {
  href: string;
  label: string;
  margin?: string;
  icon?: JSX.Element; // Prop para el icono
}

export const Enlace: React.FC<EnlaceProps> = ({
  href,
  label,
  margin,
  icon,
}) => {
  const marginRigth = margin ? `mr-${margin}` : "";

  return (
    <Link
      href={href}
      className={`mt-2 flex items-center text-white text-base font-semibold hover:text-red-600 transition-all ${marginRigth}`}
    >
      {icon && <span className="mr-3 text-xl ">{icon}</span>}{" "}
      {/* Renderiza el icono si se proporciona */}
      {label}
    </Link>
  );
};
