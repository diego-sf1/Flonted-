import { Nav } from "../Molecule/navMobile";
import { NavDesktop } from "../Molecule/navDesktop";
import { Aside } from "../Molecule/aside";



export const Header = ()=>{
    
    return(
       
        <header className="bg-[#041925] p-5">
            <div className="container mx-auto flex justify-between md:justify-start items-center h-[96px]">
                <Nav />
                <NavDesktop />
                <Aside />
            </div>
        </header>
       
    )
}