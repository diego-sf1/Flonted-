import { Enlace } from "../Atoms/enlace"
import clsx from "clsx"


export const NavDesktop = ()=>{
   
    const animation = "transition-all duration-300 ease-out",
          desktop = "center hidden w-full justify-center items-center md:flex ";

    return(
        <nav className={clsx(animation, desktop)}>
            <Enlace href="#" label="Inicio" />
            <Enlace href="#" label="Estaciones en vivo" />  
            <Enlace href="#" label="Grupo DS Radio" />
            <Enlace href="#" label=" Premium" />
            <Enlace href="#" label=" Ondemand" />
            <Enlace href="#" label="Deportes" />
        </nav>
    )
}