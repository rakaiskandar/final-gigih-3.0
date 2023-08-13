import { Helmet } from "react-helmet-async";
import NavbarChannel from "../../components/NavbarChannel";
import VideoCard from "../../components/VideoCard";
import VideoGrid from "../../components/VideoGrid";
import useFetchData from "../../hooks/useFetchData";
import { api } from "../../configs/api";
import Skeleton from "react-loading-skeleton";

function Home() {
    
    const { item: videos, loading: loadingVideos, error: errorVideos } = useFetchData(api.BASE_URL + api.GET_VIDEOS);

    if (loadingVideos) {
        return (
            <>
                <div className="flex flex-col px-5 py-3">
                    <Skeleton height={40}/>
                </div>
                <VideoGrid>
                    <Skeleton className="w-full h-96 rounded-md"/>
                    <Skeleton className="w-full h-96 rounded-md"/>
                    <Skeleton className="w-full h-96 rounded-md"/>
                    <Skeleton className="w-full h-96 rounded-md"/>
                    <Skeleton className="w-full h-96 rounded-md"/>
                    <Skeleton className="w-full h-96 rounded-md"/>
                </VideoGrid>
            </>
        )
    }

    return ( 
        <>
            <Helmet>
                <title>Tokopedia Play Clone - Nonton Video</title>
            </Helmet>

            <NavbarChannel />

            {!videos.videos ? 
                <>
                    { errorVideos && 
                    <div className="px-5 py-3 flex flex-col justify-center items-center font-bold border-red-600 text-red-600 rounded-md">
                        Gagal Mengambil Data
                    </div>}
                </>
            : 
                <VideoGrid>
                    { videos.videos && videos.videos.map((video) => {
                        return (
                            <VideoCard 
                            key={video._id}
                            path={video.videoId}
                            img={video.videoThumb}
                            title={video.title}
                            />
                        )
                    })}
                </VideoGrid> 
            }   

        </>
     );
}

export default Home;