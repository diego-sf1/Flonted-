'use client'
import { useState } from "react"
import { Enlace } from "../Atoms/enlace"
import clsx from "clsx"
import { Close } from "../Atoms/close"
import { ButtonEnlace, ButtonEnlaceRound } from "../Atoms/button"


export const Nav = ()=>{
    
    const [isActive, setIscative]= useState(false)

    const handleClick =()=>{
        setIscative((a)=> !a )
    }
    const mobile = "fixed left-0 top-0 px-5 p-6 py-5 w-full h-screen z-10 flex bg-[#041925] flex-col opacity-0",
          animation = "transition-all duration-300 ease-out",
          desktop = "md:justify-start md:text-center md:bg-transparent md:relative md:translate-x-0 md:flex-row md:h-[auto] md:items-center md:hidden";

    return(
        <>
            <span onClick={handleClick} className="block md:hidden cursor-pointer ">
                <svg className="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
            </span>
            <nav className={clsx( mobile, animation, isActive ? "translate-x-0 opacity-100" :"translate-x-[-950px] " )}>
                <div className="flex justify-end cursor-pointer">
                    <span onClick={handleClick}>
                        <Close  />
                    </span>
                </div>
                <ButtonEnlaceRound href="#" label="Iniciar prueba gratuita " />
                <br></br>
                <Enlace href="#" label="Inicio" />
                <Enlace href="#" label="Estaciones en vivo" />  
                <Enlace href="#" label="Grupo DS Radio" />
                <Enlace href="#" label=" Premium" />
                <Enlace href="#" label=" Ondemand Deportes" />
                <ButtonEnlaceRound href="#" label="INICIAR SESION" />
                <ButtonEnlaceRound href="#" label="REGISTRARSE" />
            </nav>
        </>
       
    )
}