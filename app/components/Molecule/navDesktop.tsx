import { Enlace } from "../Atoms/enlace"
import clsx from "clsx"
import Image from 'next/image';

export const NavDesktop = ()=>{
   
<<<<<<< HEAD
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
=======
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
>>>>>>> 4acf0b84d3a5783b3f59eb02292671cfa9c7abf2
        </nav>
        


        

        </>
       

    )
}