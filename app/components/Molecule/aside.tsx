import { Search } from "../Atoms/iconSearch"
import { IconUser } from '../Atoms/iconUser';

export const Aside = ()=>{
    return(
        <aside className="flex gap-3">
            <Search />
             <IconUser /> 
        </aside>
    )
}