import { Enlace } from "../Atoms/enlace"
import clsx from "clsx"
import Image from 'next/image';

export const NavDesktop = ()=>{
   
     const animation = "transition-all duration-300 ease-out",
          desktop = "center hidden w-full justify-around items-center md:flex text-center ";
    return(
        <>
     <nav className={clsx(animation, desktop)}>
            <img src="./logo.png" alt="" />
            <Enlace href="#" label="Inicio" />
            <Enlace href="#" label="Estaciones en vivo" />  
            <Enlace href="#" label="Grupo DS Radio" />
            <Enlace href="#" label=" Premium" />
            <Enlace href="#" label=" Ondemand" />
            <Enlace href="#" label="Deportes" />
        </nav>
        


        

        </>
       

    )
}