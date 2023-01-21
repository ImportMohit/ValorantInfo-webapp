const ShimmerUI = () => {
  return (
    <>
      <div className="searchinput shimmer" />

      <div className="agentlist">
        {Array(10)
          .fill("")
          .map(() => (
            <div className="shimmer" />
          ))}
      </div>

      
    </>
  );
};

export default ShimmerUI;
