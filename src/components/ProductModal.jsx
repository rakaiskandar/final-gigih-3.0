function ProductModal({ isOpen, setIsOpen, children }) {
    return ( 
        <>
            {isOpen ? <div className="fixed inset-0 z-10 w-full overflow-x-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setIsOpen(false)}>
                </div>
                <div className="flex items-center min-h-screen py-4">
                    <div className="relative w-full max-w-sm lg:max-w-lg p-3 mx-auto bg-[#525867] overflow-x-scroll rounded-md shadow-lg">
                        { children }
                    </div>
                </div>
            </div> : null}
        </>
     );
}

export default ProductModal;