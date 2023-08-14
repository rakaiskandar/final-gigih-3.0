import { useNavigate, useSearchParams } from "react-router-dom";
import NavbarSearch from "../../../components/NavbarSearch";
import VideoGrid from "../../../components/VideoGrid";
import VideoCard from "../../../components/VideoCard";
import { api } from "../../../configs/api";
import useFetchData from "../../../hooks/useFetchData";
import { Helmet } from "react-helmet-async";
import Skeleton from "react-loading-skeleton";

function Search() {
    const [queryParams] = useSearchParams();
    const navigate = useNavigate();

    const { item, loading } = useFetchData(api.BASE_URL + api.SEARCH_VIDEOS + `?${queryParams}`)

    if (loading) {
        return (
            <>
                <div className="flex flex-col px-4 py-[10px]">
                    <Skeleton height={40} />
                </div>

                <div className="px-4">
                    <Skeleton className="w-40" />
                </div>

                <VideoGrid>
                    <Skeleton className="w-full h-96 rounded-md" />
                    <Skeleton className="w-full h-96 rounded-md" />
                    <Skeleton className="w-full h-96 rounded-md" />
                    <Skeleton className="w-full h-96 rounded-md" />
                    <Skeleton className="w-full h-96 rounded-md" />
                    <Skeleton className="w-full h-96 rounded-md" />
                </VideoGrid>
            </>
        )
    }

    return (
        <>
            <Helmet>
                <title>Cari {`${queryParams.get("q") === null ? "" : queryParams.get("q")}`} - Tokopedia Play Clone</title>
            </Helmet>

            <NavbarSearch />

            <div className="px-3 py-4">
                {item.count || item.query || item.video ?
                    <>
                        <h2 className="font-bold">{item.count} Hasil Pencarian dari "{item.query}"</h2>
                        <VideoGrid>
                            {item.video && item.video.map((item) => (
                                <VideoCard
                                    key={item._id}
                                    path={item.videoId}
                                    img={item.videoThumb}
                                    title={item.title}
                                />
                            ))}
                        </VideoGrid>
                    </>
                    :
                    <>{ queryParams.get("q") === null ? "" 
                    : 
                    <div className="flex flex-wrap gap-10 mx-2">
                        <div className="flex flex-row justify-center gap-1 items-center">
                            <img src="./searchnotfound.png" alt="image" className="w-[50%] lg:w-[35%]"/>
                           <div className="flex flex-col justify-around gap-3 lg:gap-0">
                                <h2 className="font-bold text-base lg:text-3xl">Coba cari video lainnya aja!</h2>
                                <p className="text-xs lg:text-2xl">Cari dengan kata kunci lain atau cek video rekomendasi yang mungkin kamu akan suka.</p>
                           </div>
                        </div>
                        
                        <button className="bg-green-500 font-bold text-base w-full p-1 lg:text-xl rounded-lg" onClick={() => navigate("/")}>
                            Cari Video Lain
                        </button>
                    </div> 
                    }
                    </>
                }
            </div>
        </>
    );
}

export default Search;