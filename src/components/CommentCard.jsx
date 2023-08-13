function CommentCard({ length, children }) {
    return ( 
        <div className="flex flex-col gap-3 bg-[#525867] px-3 py-3 w-full overflow-y-auto rounded-md">
            <h2 className="border-b border-white mb-2">{ length } Komentar</h2>
            { children }
        </div>
     );
}

export default CommentCard;