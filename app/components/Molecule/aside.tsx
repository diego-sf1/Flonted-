import { ButtonEnlace, ButtonEnlaceRound } from "../Atoms/button";
import { Enlace } from "../Atoms/enlace";
import { Search } from "../Atoms/iconSearch"
import { IconUser } from '../Atoms/iconUser';

export const Aside = ()=>{
    return(
        <aside className="flex gap-4 items-center">
            <Search />
            <div className=" hidden md:flex md:items-center gap-2">
                <ButtonEnlace href="#" label="Iniciar sesion" margin=" " />
                <Enlace href="#" label="Registrarse" margin=" " />
            </div>
        </aside>
    )
}