const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div
        className="orb"
        style={{
          width: "40vw",
          height: "40vw",
          minWidth: "300px",
          minHeight: "300px",
          top: "5%",
          left: "5%",
          animationDuration: "21s",
          animationDelay: "0.2s",
        }}
      />
      <div
        className="orb top-[70%] left-[0%] sm:left-[35%] w-[40vw] h-[40vw] min-w-[250px] min-h-[250px]"
        style={{
          animationName: "float2",
          animationDuration: "26s",
          animationDelay: "1.1s",
        }}
      />
      <div
        className="orb top-[35%] left-[70%] sm:top-[7%] w-[30vw] h-[30vw] min-w-[350px] min-h-[350px]"
        style={{
          animationName: "float3",
          animationDuration: "28s",
          animationDelay: "0.7s",
        }}
      />
    </div>
  );
};

export default BackgroundOrbs;
