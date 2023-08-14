function ProductModal({ isOpen, setIsOpen, children }) {
    return ( 
        <>
            {isOpen ? <div className="fixed inset-0 z-10 w-full overflow-x-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setIsOpen(false)}>
                </div>
                <div className="flex items-center min-h-screen py-4">
                    <div className="relative w-full max-w-sm lg:max-w-xl p-3 mx-auto bg-[#28282F] overflow-x-scroll rounded-md shadow-md">
                        { children }
                    </div>
                </div>
            </div> : null}
        </>
     );
}

export default ProductModal;