import { Icon } from "@iconify/react";
import { useNavigate, useParams } from "react-router-dom";
import CommentCard from "../../../components/CommentCard";
import ProductCard from "../../../components/ProductCard";
import useFetchData from "../../../hooks/useFetchData";
import { api } from "../../../configs/api";
import rupiahConverter from "../../../helpers/rupiahConverter";
import { useState } from "react";
import formatDate from "../../../helpers/formatDate";
import Skeleton from "react-loading-skeleton";
import addData from "../../../helpers/addData";
import { Helmet } from "react-helmet-async";
import ProductModal from "../../../components/ProductModal";
import useTextInput from "../../../hooks/useTextInput";

function DetailVideos() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    
    const { value: inputUsername, onChange: handleChangeUsername } = useTextInput("");
    const { value: inputComment, onChange: handleChangeComment } = useTextInput("");

    const { item: comments, loading: loadingComments, getData: refetcher } = useFetchData(api.BASE_URL + api.GET_COMMENTS + id);
    const { item: products, loading: loadingProducts } = useFetchData(api.BASE_URL + api.GET_PRODUCTS + id);
    const { item: videos, loading: loadingVideos, error: errorVideos } = useFetchData(api.BASE_URL + api.GET_VIDEOS_ID + id)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { username: inputUsername, comment: inputComment }

        try {
            addData(api.BASE_URL + api.POST_COMMENTS + id, body, refetcher);
        } catch (e) {
            console.log(e.message);
        }
    }

    if (loadingComments || loadingProducts || loadingVideos) {
        return (
            <>
                <div className="flex flex-col px-4 py-[10px] h-50">
                    <Skeleton height={30} />
                </div>

                <div className="flex flex-col lg:flex-row gap-4 justify-center pb-3">
                    <div className="flex flex-col items-center pl-4 lg:flex-row gap-3">
                        <Skeleton width={780} height={400}/>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-col gap-3 w-full">
                        <Skeleton width={530} height={200} />
                        <Skeleton width={530} />
                        <Skeleton width={530} />
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <Helmet>
                <title>Nonton {videos.videos[0].title} - Tokopedia Play Clone </title>
            </Helmet>

            <ProductModal isOpen={showModal} setIsOpen={setShowModal}>
                <ProductCard>
                    {products.products && products.products.map((item) => (
                        <div className="flex flex-shrink-0 flex-col gap-2 w-60 bg-white px-2 py-10 justify-center rounded-md" key={item._id}>
                            <h4 className="text-black text-base">{item.title}</h4>
                            <p className="text-black font-bold text-2xl">{rupiahConverter(item.price)}</p>
                            <a href={item.url} className="text-sm text-blue-500 font-semibold flex items-center">
                                Kunjungi Produk <Icon icon="tabler:external-link" width={20} />
                            </a>
                        </div>
                    ))}
                </ProductCard>
            </ProductModal>

            <div className="flex flex-row justify-between bg-[#28282F] items-center sticky top-0 z-50 px-3 py-2 lg:p-4">
                <div className="flex flex-row items-center gap-2">
                    <button onClick={() => navigate(-1)}>
                        <Icon icon="akar-icons:cross" width={25} />
                    </button>
                    <h3 className="text-sm font-bold w-40 lg:w-full lg:text-xl">{videos.videos[0].title}</h3>
                </div>
                <button className="bg-green-500 font-bold text-xs p-2 lg:text-base lg:px-3 lg:py-3 rounded-md" onClick={() => setShowModal(true)}>
                    Lihat Produk
                </button>
            </div>
            <div className="mx-4">
                <div className="flex flex-col lg:flex-row gap-4 justify-center pb-3 h-[400px]">
                    <div className="flex flex-col lg:flex-row gap-3">
                        <div className="flex">
                        { errorVideos && 
                        <div className="px-5 py-3 flex flex-col justify-center items-center font-bold border-red-600 text-red-600 rounded-md">
                            Gagal Mengambil Data
                        </div>}
                            <iframe className="aspect-[9/5] lg:aspect-video" width={780} src={`https://www.youtube-nocookie.com/embed/${id}`}
                                title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-col gap-3 w-full">
                        {!comments.comments ?
                            <CommentCard length={comments.length ? comments.length : 0}>
                                <div>Komentar tidak ditemukan</div>
                            </CommentCard>
                            :
                            <CommentCard length={comments.comments.length ? comments.comments.length : 0}>
                                {comments.comments && comments.comments.map((item) => (
                                    <div className="flex flex-col gap-2" key={item._id}>
                                        <div className="flex flex-row justify-between items-center gap-2">
                                            <h2 className="font-bold">{item.username}</h2>
                                            <p className="text-sm text-gray-400">{formatDate(item.date)}</p>
                                        </div>
                                        <p className="text-gray-300">{item.comment}</p>
                                    </div>
                                ))}
                            </CommentCard>
                        }
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col w-full gap-3">
                                <input type="text" className="inputStyle" placeholder="Nama Pengguna"
                                    value={inputUsername} onChange={handleChangeUsername} required />
                                <textarea placeholder="Komentar" className="inputStyle" 
                                    value={inputComment} onChange={handleChangeComment} required />
                            </div>
                            {inputComment && <div className="flex justify-end mt-3">
                                <button className="bg-green-500 font-bold px-4 py-3 rounded-md">
                                    Kirim
                                </button>
                            </div>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailVideos;