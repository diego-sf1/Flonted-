import { Enlace } from "../Atoms/enlace"
import clsx from "clsx"


export const NavDesktop = ()=>{
   
    const animation = "transition-all duration-300 ease-out",
          desktop = "center hidden w-full justify-center items-center md:flex z-4 ";

    return(
        <nav className={clsx(animation, desktop)}>
            <Enlace  margin="4" href="#" label="Inicio" />
            <Enlace  margin="4" href="#" label="Estaciones en vivo" />  
            <Enlace  margin="4" href="#" label="Grupo DS Radio" />
            <Enlace  margin="4"  href="#" label=" Premium" />
            <Enlace  margin="4" href="#" label=" Ondemand" />
            <Enlace  margin="4" href="#" label="Deportes" />
        </nav>
    )
}