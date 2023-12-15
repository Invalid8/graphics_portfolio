const NothingBox = () => {
  return (
    <div
      className="nothingBox"
      style={{
        width: "100%",
        height: "calc(100%)",
        display: "grid",
        placeContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "25px",
      }}
    >
      <h1 style={{ fontSize: "118%" }}>Nothing to see here</h1>
      <h2>¯\_(ツ)_/¯</h2>
    </div>
  );
};

export default NothingBox;
