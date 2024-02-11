import Link from "next/link";

interface enlace{
    href: string,
    label: string
}

export const ButtonEnlace =({href, label}: enlace)=>{
    return(
        <a href={href} className=" w-52 mt-4 hover:bg-red-600 bg-red-500 text-white rounded-lg py-3 px-4 border-solid border-2 mx-auto block">{label}</a>
    )
}
export const ButtonEnlaceRound =({href, label}: enlace)=>{
    return(
        <a href={href} className=" w-[85%] text-center mt-4 hover:bg-red-600 bg-red-500 text-white  rounded-full py-2 px-4 border-solid border-2 mx-auto block">{label}</a>
    )
}