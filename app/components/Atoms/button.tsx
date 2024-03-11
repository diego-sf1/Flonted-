import Link from "next/link";

interface enlace{
    href: string,
    label: string,
    margin: string
}

export const ButtonEnlace =({href, label, margin}: enlace)=>{
    const marginRigth = margin ? `mr-${margin}` : '';
    return(
        <a href={href} className={`w-[124px]  hover:bg-red-600 bg-red-500 text-white rounded-lg py-2 px-2 border-solid mx-auto block ${marginRigth}`}>{label}</a>
    )
}
export const ButtonEnlaceRound =({href, label, margin }: enlace)=>{
    const marginRigth = margin ? `mr-${margin}` : '';
    return(
        <a href={href} className={`w-[85%] text-center hover:bg-red-600 bg-red-500 text-white  rounded-full py-2 px-4 border-solid border-2 mx-auto block ${marginRigth}`}>{label}</a>
    )
}