import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavbarSearch() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-row justify-start gap-3 bg-[#28282F] items-center px-4 py-[10px] sticky top-0 z-50">
                <button onClick={() => navigate("/")}>
                    <Icon icon="material-symbols:arrow-back" width={25}/>
                </button>
                <SearchBar />
            </div> 
        </> 
     );
}

export default NavbarSearch;