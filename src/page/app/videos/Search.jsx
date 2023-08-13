import { useLocation, useSearchParams } from "react-router-dom";
import NavbarSearch from "../../../components/NavbarSearch";
import VideoGrid from "../../../components/VideoGrid";
import VideoCard from "../../../components/VideoCard";
import { api } from "../../../configs/api";
import useFetchData from "../../../hooks/useFetchData";
import { Helmet } from "react-helmet-async";
import Skeleton from "react-loading-skeleton";

function Search() {
    const [queryParams] = useSearchParams();

    const { item, loading, error } = useFetchData(api.BASE_URL + api.SEARCH_VIDEOS + `?${queryParams}`)

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
                {!item.video || !item.query ?
                    <>
                        <h2 className="font-bold">Cari video yang kamu ingin tonton!</h2>
                    </>
                    :
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
                }
            </div>
        </>
    );
}

export default Search;