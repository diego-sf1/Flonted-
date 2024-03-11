import { Nav } from "../Molecule/navMobile";
import { NavDesktop } from "../Molecule/navDesktop";
import { Aside } from "../Molecule/aside";
import Image from 'next/image';
import logo from '@/public/logo-header.png'



export const Header = ()=>{
    
    return(
       
        <header className="bg-[#041925] p-5 relative z-10">
            <div className="container mx-auto flex justify-between md:justify-start items-center h-[96px]">
                <Nav />
                <figure>
                    <Image src={logo} alt="radio" width={169} height={53} /> 
                </figure>
                <NavDesktop />
                <Aside />
               
            </div>
        </header>
       
    )
}