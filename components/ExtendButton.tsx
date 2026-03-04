export default function ExtendButton({
  id,
  leftWidth,
  setLeftWidth,
  topHeightWidth,
  setTopHeightWidth,
  fullScreen,
  setFullScreen,
}: {
  id: string;
  leftWidth: number;
  setLeftWidth: (width: number) => void;
  topHeightWidth: number;
  setTopHeightWidth: (height: number) => void;
  fullScreen: boolean;
  setFullScreen: (fullScreen: boolean) => void;
}) {
  return (
    <span
      id={id}
      onClick={() => {
        if (id == "leftWidth") {
          setLeftWidth(leftWidth >= 90 ? 50 : 99);
        } else if (id == "topEditorHeight") {
          setTopHeightWidth(topHeightWidth >= 90 ? 50 : 99);
        } else {
          setFullScreen(!fullScreen);
          if (!fullScreen) {
            setLeftWidth(0);
            setTopHeightWidth(99);
          } else {
            setLeftWidth(50);
            setTopHeightWidth(70);
          }
        }
      }}
      style={{
        position: "absolute",
        top: "18%",
        right: "2%",
        padding: "2px 4px",
        textAlign: "center",
        borderRadius: "4px",
        color: "white",
        fontSize: "10px",
      }}
      onMouseOver={(e) => (e.currentTarget.style.background = "#555555")}
      onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
    >
      {id === "leftWidth" ? (
        <i className="fa-solid fa-arrow-right"></i>
      ) : id === "topEditorHeight" ? (
        <i className="fa-solid fa-arrow-down"></i>
      ) : (
        <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
      )}
    </span>
  );
}
