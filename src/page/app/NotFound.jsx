import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate("/");

    return ( 
        <div className="flex flex-col justify-center w-full h-screen m-auto items-center gap-6">
            <img src="./notfoundtokopedia.png" alt="image" className="w-72 h-52"/>
            <h2 className="w-[300px] font-bold text-lg lg:text-3xl text-center">
                Waduh, tujuanmu nggak ada!
            </h2>
            <div className="w-[300px] text-xs lg:text-sm text-center">
                Mungkin kamu salah jalan atau alamat. Ayo balik sebelum gelap!
            </div>
            <button className="bg-green-500 font-bold text-xs p-2 w-52 lg:text-base lg:px-3 lg:py-2 rounded-md"
            onClick={() => navigate("/")}>
                Ke Homepage
            </button>
        </div>
     );
}

export default NotFound;