function ProductCard({ children }) {
    return ( 
        <div className="flex flex-row gap-3">
            { children }
        </div>
     );
}

export default ProductCard;