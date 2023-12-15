const ProductCard = ({ big, children }) => {
  return (
    <div
      className="d-flex flex-column center jc-c ai-c p-4 br-4 w-100 h-100"
      style={{
        width: "100%",
        height: "auto",
        maxWidth: !big ? "258px" : "300px",
        maxHeight: !big ? "auto" : "auto",
        boxShadow: "0 0 1.5px #000",
        backgroundColor: !big ? "var(--color1-0)" : "var(--color1)",
        color: !big ? "var(--black)" : "var(--white)",
      }}
    >
      {children}
    </div>
  );
};

export default ProductCard;
