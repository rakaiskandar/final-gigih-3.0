import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

function SearchBar() {
    const [query] = useSearchParams();
    const [value, setValue] = useState(query.get("q") ? query.get("q") : "");
    const location = useLocation();

    useEffect(() => {
        if (!location.pathname.includes("search")) {
            setValue("");
        }
    }, []);

    const handleClearButton = () => {
        setValue("");
    }

    return (
        <>
            {!location.pathname.includes("channels") && <div className="flex flex-row items-center bg-[#525867] gap-1 w-full px-3 py-[2px] rounded-lg">
                <Icon icon="zondicons:search" width={15} />
                <form className="w-full" action="/search">
                    <input type="text" className="inputStyle" placeholder="Cari video yang mau ditonton"
                        value={value} onChange={(e) => setValue(e.target.value)} name="q" />
                </form>
                {value && <button onClick={handleClearButton}>
                    <Icon icon="gridicons:cross-circle" color="white" />
                </button>}
            </div>}
        </>
    );
}

export default SearchBar;