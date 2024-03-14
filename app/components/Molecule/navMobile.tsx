"use client";
import { useState } from "react";
import { Enlace } from "../Atoms/enlace";
import clsx from "clsx";
import { Close } from "../Atoms/close";
import { ButtonEnlace, ButtonEnlaceRound } from "../Atoms/button";
import { IconInicio,IconPremiun,IconBusqueda,IconEstaVivo,IconOndeman,IconGrupoDs,IconMusica,IconDeportes,IconNoti,IconPodcast } from "./icons_navMovile/Icons";

export const Nav = () => {
  const [isActive, setIscative] = useState(false);

  const handleClick = () => {
    setIscative((a) => !a);
  };
  const mobile =
      "fixed left-0 top-0 px-5 p-6 py-5 w-full h-screen z-10 flex bg-[#041925] flex-col opacity-0",
    animation = "transition-all duration-300 ease-out",
    desktop =
      "md:justify-start md:text-center md:bg-transparent md:relative md:translate-x-0 md:flex-row md:h-[auto] md:items-center md:hidden";

  return (
    <>
      <span onClick={handleClick} className="block md:hidden cursor-pointer ">
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </span>
      <nav
        className={clsx(
          mobile,
          animation,
          isActive ? "translate-x-0 opacity-100" : "translate-x-[-950px] mb-2"
        )}
      >
        <div className="flex justify-end cursor-pointer">
          <span onClick={handleClick}>
            <Close />
          </span>
        </div>
        <figure>
          <img src="./logo.png" alt="" className="pb-6 ml-8" />
        </figure>
        <ButtonEnlaceRound href="#" label="Iniciar prueba gratuita " />
        <br></br>
        <Enlace href="#" label="Inicio"  icon={<IconInicio />} margin="" />
        <Enlace href="#" label="Premium" icon={<IconPremiun/>} margin="" />
        <Enlace href="#" label="Busqueda"icon={<IconBusqueda/>} margin="" />
        <Enlace href="#" label="Estaciones en vivo" icon={<IconEstaVivo/>} margin="" />
        <Enlace href="#" label=" Ondemand" icon={<IconOndeman/>} margin="" />
        <Enlace href="#" label="Grupo DS Radio" icon={<IconGrupoDs/>} margin="" />
        <Enlace href="#" label="Música" icon={<IconMusica/>} margin="" />
        <Enlace href="#" label="Deportes" icon={<IconDeportes/>} margin="" />
        <Enlace href="#" label="Noticias y Hablada" icon={<IconNoti/>} margin="" />
        <Enlace href="#" label="Podcast" icon={<IconPodcast/>} margin="" />
        <br />
        <br />
        <div className="buttons">
          <ButtonEnlaceRound href="#" label="INICIAR SESION" />
          <ButtonEnlaceRound href="#" label="REGISTRARSE" />
        </div>
      </nav>
    </>
  );
};
