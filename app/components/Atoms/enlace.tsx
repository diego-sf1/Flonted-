import Link from "next/link";

interface enlace{
    href: string,
    label: string
    margin: string
}

export const Enlace = ({href, label, margin}: enlace)=>{
    const marginRigth = margin ? `mr-${margin}` : '';
    return(
        <Link href={href} className={`text-white text-base font-semibold hover:text-red-600 transition-all ${marginRigth}`}>{label}</Link>
    )
}