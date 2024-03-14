import Link from "next/link";


interface Enlace {
    href: string;
    label: string;
    margin?: string;
    icon?: JSX.Element; // Propiedad opcional para el icono
}

export const ButtonEnlace =({href, label, margin}: Enlace)=>{
    const marginRigth = margin ? `mr-${margin}` : '';
    return(
        <a href={href} className={`w-[124px]  hover:bg-red-600 bg-red-500 text-white rounded-lg py-2 px-2 border-solid mx-auto block ${marginRigth}`}>{label}</a>
    )
}



export const ButtonEnlaceRound = ({ href, label, margin, icon }: Enlace) => {
    const marginRigth = margin ? `mr-${margin}` : '';
    return (
        <a href={href} className={`w-[95%] mb-8 text-center hover:bg-red-600 bg-red-500 text-white rounded-full py-2 px-4 border-solid border-2 mx-auto block flex items-center justify-center ${marginRigth}`}>
            {icon && <span className="mr-2">{icon}</span>}
            {label}
        </a>
    );
};
