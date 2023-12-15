const Card = ({ big, children }) => {
  return (
    <div
      className="d-flex flex-column center jc-c ai-c p-4 br-4"
      style={{
        minWidth: !big ? "258px" : "300px",
        width: !big ? "258px" : "300px",
        height: !big ? "180px" : "220px",
        minHeight: !big ? "180px" : "220px",
        boxShadow: "0 0 1.5px #000",
        backgroundColor: !big ? "var(--color1-0)" : "var(--color1)",
        color: !big ? "var(--black)" : "var(--white)",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
