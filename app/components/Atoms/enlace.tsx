import Link from "next/link";

interface enlace{
    href: string,
    label: string
}

export const Enlace = ({href, label}: enlace)=>{
    return(
        <Link href={href} className="mb-5 text-white mr-2 text-base font-medium hover:text-red-600 transition-all">{label}</Link>
    )
}