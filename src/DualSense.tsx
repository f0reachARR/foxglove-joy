import { useGamepad } from "./useGamepad";

const DualSense = () => {
  const { gamepad } = useGamepad();

  const buttons = gamepad?.buttons ?? new Array(18).fill({ pressed: false });
  const axes = gamepad?.axes ?? new Array(4).fill(0);

  // Styles
  const controllerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "1200px",
    minWidth: "1200px",
    height: "600px",
    aspectRatio: "10/6",
    backgroundColor: "rgb(189, 189, 189)",
    borderRadius: "20px",
    boxShadow: "0 8px 8px rgba(0, 0, 0, 0.1)",
    margin: "20px",
  };

  const bodyStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "90%",
    width: "90%",
    position: "relative",
  };

  const partsTopLeftStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: "#f9f9f9",
    width: "250px",
    height: "400px",
    transform: "translate(-228px, 0px)",
    clipPath: "polygon(30% 5%, 85% 0%, 100% 30%, 20% 100%, 0% 95%)",
    zIndex: 10,
  };

  const partsTopRightStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: "#f9f9f9",
    width: "250px",
    height: "400px",
    transform: "translate(228px, 0px)",
    clipPath: "polygon(70% 5%, 15% 0%, 0% 30%, 80% 100%, 100% 95%)",
    zIndex: 10,
  };

  const partsTopCenterStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[17]?.pressed ? "#e5e5e5" : "#f9f9f9",
    width: "260px",
    height: "120px",
    transform: "translate(0px, -140px)",
    transformOrigin: "0 0",
    clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
    zIndex: 10,
    transition: "background-color 0.1s",
  };

  const partsCenterStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: "#808080",
    width: "360px",
    height: "120px",
    transform: "translate(0px, -10px)",
    transformOrigin: "0 0",
    clipPath: "polygon(24% 0%, 76% 0%, 100% 100%, 0% 100%)",
    zIndex: 10,
  };

  const buttonTopLeftLeftStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[6].pressed ? "#1e1e1e" : "#4f4f4f",
    width: "50px",
    height: "40px",
    transform: "translate(-254px, -205px)",
    clipPath: "polygon(0% 30%, 100% 0%, 100% 83%, 0% 100%)",
    zIndex: 11,
    transition: "background-color 0.1s",
  };

  const buttonTopLeftRightStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[4].pressed ? "#1e1e1e" : "#4f4f4f",
    width: "50px",
    height: "40px",
    transform: "translate(-199px, -213px)",
    clipPath: "polygon(0% 20%, 100% 10%, 100% 84%, 0% 100%)",
    zIndex: 11,
    transition: "background-color 0.1s",
  };

  const buttonTopRightLeftStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[5].pressed ? "#1e1e1e" : "#4f4f4f",
    width: "50px",
    height: "40px",
    transform: "translate(199px, -213px)",
    clipPath: "polygon(100% 20%, 0% 10%, 0% 84%, 100% 100%)",
    zIndex: 11,
    transition: "background-color 0.1s",
  };

  const buttonTopRightRightStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[7].pressed ? "#1e1e1e" : "#4f4f4f",
    width: "50px",
    height: "40px",
    transform: "translate(254px, -205px)",
    clipPath: "polygon(100% 30%, 0% 0%, 0% 83%, 100% 100%)",
    zIndex: 11,
    transition: "background-color 0.1s",
  };

  const buttonLeftTopStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[12].pressed ? "#b9b9b9" : "#e3e3e3",
    width: "100px",
    height: "100px",
    transform: "translate(-210px, -110px)",
    clipPath: "polygon(30% 0%, 70% 0%, 67% 30%, 50% 45%, 33% 30%)",
    zIndex: 11,
    transition: "background-color 0.1s",
  };

  const buttonLeftLeftStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[14].pressed ? "#b9b9b9" : "#e3e3e3",
    width: "100px",
    height: "100px",
    transform: "translate(-210px, -110px)",
    clipPath: "polygon(0% 30%, 30% 33%, 45% 50%, 30% 67%, 0% 70%)",
    zIndex: 11,
    transition: "background-color 0.1s",
  };

  const buttonLeftRightStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[15].pressed ? "#b9b9b9" : "#e3e3e3",
    width: "100px",
    height: "100px",
    transform: "translate(-210px, -110px)",
    clipPath: "polygon(100% 30%, 70% 33%, 55% 50%, 70% 67%, 100% 70%)",
    zIndex: 11,
    transition: "background-color 0.1s",
  };

  const buttonLeftBottomStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[13].pressed ? "#b9b9b9" : "#e3e3e3",
    width: "100px",
    height: "100px",
    transform: "translate(-210px, -110px)",
    clipPath: "polygon(30% 100%, 70% 100%, 67% 70%, 50% 55%, 33% 70%)",
    zIndex: 11,
    transition: "background-color 0.1s",
  };

  const buttonRightTopStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[3].pressed ? "#b9b9b9" : "#e3e3e3",
    width: "45px",
    height: "45px",
    transform: "translate(210px, -140px)",
    borderRadius: "50%",
    zIndex: 11,
    transition: "background-color 0.1s",
  };

  const buttonRightLeftStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[2].pressed ? "#b9b9b9" : "#e3e3e3",
    width: "45px",
    height: "45px",
    transform: "translate(170px, -105px)",
    borderRadius: "50%",
    zIndex: 11,
    transition: "background-color 0.1s",
  };

  const buttonRightRightStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[1].pressed ? "#b9b9b9" : "#e3e3e3",
    width: "45px",
    height: "45px",
    transform: "translate(250px, -105px)",
    borderRadius: "50%",
    zIndex: 11,
    transition: "background-color 0.1s",
  };

  const buttonRightBottomStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[0].pressed ? "#b9b9b9" : "#e3e3e3",
    width: "45px",
    height: "45px",
    transform: "translate(210px, -70px)",
    borderRadius: "50%",
    zIndex: 11,
    transition: "background-color 0.1s",
  };

  const buttonLeftSmallStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[8].pressed ? "#b9b9b9" : "#e3e3e3",
    width: "40px",
    height: "15px",
    transform: "translate(-140px, -150px) rotate(70deg)",
    borderRadius: "15px",
    zIndex: 11,
    transition: "background-color 0.1s",
  };

  const buttonRightSmallStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[9].pressed ? "#b9b9b9" : "#e3e3e3",
    width: "40px",
    height: "15px",
    transform: "translate(140px, -150px) rotate(110deg)",
    borderRadius: "15px",
    zIndex: 11,
    transition: "background-color 0.1s",
  };

  const buttonCenterSmallStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: buttons[16].pressed ? "#1e1e1e" : "#4f4f4f",
    width: "40px",
    height: "25px",
    transform: "translate(0px, -40px)",
    borderRadius: "15%",
    zIndex: 11,
    transition: "background-color 0.1s",
  };

  const circleLeftStyle: React.CSSProperties = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#686868",
    width: "70px",
    height: "70px",
    transform: "translate(-70px, -10px)",
    borderRadius: "50%",
    zIndex: 11,
  };

  const circleRightStyle: React.CSSProperties = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#686868",
    width: "70px",
    height: "70px",
    transform: "translate(70px, -10px)",
    borderRadius: "50%",
    zIndex: 11,
  };

  const stickStyle = (pressed: boolean): React.CSSProperties => ({
    position: "absolute",
    backgroundColor: pressed ? "#1e1e1e" : "#4f4f4f",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    zIndex: 12,
    transition: "background-color 0.1s",
  });

  const stickPositionStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: "#e3e3e3",
    width: "250px",
    height: "110px",
    zIndex: 13,
    transform: "translate(0px, 120px)",
    border: "5px solid #b5b5b5",
    borderRadius: "15px",
    padding: "15px",
    maxWidth: "300px",
    margin: "10px auto",
    textAlign: "center",
    display: "grid",
    gridTemplateColumns: "1fr 4fr 4fr",
    gridTemplateRows: "1fr 1fr 1fr",
  };

  const fieldNameLeftStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridColumn: "2 / 3",
    gridRow: "1 / 2",
    borderLeft: "2px solid black",
  };

  const fieldNameRightStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridColumn: "3 / 4",
    gridRow: "1 / 2",
  };

  const fieldNameXStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridColumn: "1 / 2",
    gridRow: "2 / 3",
    borderTop: "2px solid black",
  };

  const fieldNameYStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridColumn: "1 / 2",
    gridRow: "3 / 4",
  };

  const fieldValueLeftXStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
    borderTop: "2px solid black",
    borderLeft: "2px solid black",
  };

  const fieldValueLeftYStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridColumn: "2 / 3",
    gridRow: "3 / 4",
    borderLeft: "2px solid black",
  };

  const fieldValueRightXStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridColumn: "3 / 4",
    gridRow: "2 / 3",
    borderTop: "2px solid black",
  };

  const fieldValueRightYStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridColumn: "3 / 4",
    gridRow: "3 / 4",
  };

  const statusPanelStyle: React.CSSProperties = {
    position: "absolute",
    backgroundColor: "#e3e3e3",
    width: "190px",
    height: "490px",
    zIndex: 13,
    border: "5px solid #b5b5b5",
    borderRadius: "15px",
    padding: "15px",
    maxWidth: "300px",
    margin: "10px auto",
    textAlign: "center",
    display: "grid",
    gridTemplateColumns: "4fr 4fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  };

  const leftStatusStyle: React.CSSProperties = {
    ...statusPanelStyle,
    transform: "translate(-470px, 0px)",
  };

  const rightStatusStyle: React.CSSProperties = {
    ...statusPanelStyle,
    transform: "translate(470px, 0px)",
  };

  const statusNameLeftStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "2px solid black",
    borderRight: "2px solid black",
  };

  const statusNameRightStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "2px solid black",
  };

  const statusButtonLeftStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "2px solid black",
  };

  const statusButtonRightStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={controllerStyle}>
      <div style={bodyStyle}></div>

      {/* body base =============================================== */}
      <div style={partsTopLeftStyle}></div>
      <div style={partsTopCenterStyle}></div>
      <div style={partsTopRightStyle}></div>
      <div style={partsCenterStyle}></div>

      {/* top left/right buttons  ================================= */}
      <div style={buttonTopLeftLeftStyle}></div>
      <div style={buttonTopLeftRightStyle}></div>
      <div style={buttonTopRightLeftStyle}></div>
      <div style={buttonTopRightRightStyle}></div>

      {/* left buttons ============================================= */}
      <div style={buttonLeftTopStyle}></div>
      <div style={buttonLeftLeftStyle}></div>
      <div style={buttonLeftRightStyle}></div>
      <div style={buttonLeftBottomStyle}></div>

      {/* right buttons ============================================= */}
      <div style={buttonRightTopStyle}></div>
      <div style={buttonRightLeftStyle}></div>
      <div style={buttonRightRightStyle}></div>
      <div style={buttonRightBottomStyle}></div>

      {/* center buttons ============================================ */}
      <div style={buttonLeftSmallStyle}></div>
      <div style={buttonRightSmallStyle}></div>
      <div style={buttonCenterSmallStyle}></div>

      {/* stick buttons ============================================ */}
      <div style={circleLeftStyle}>
        <div
          style={{
            ...stickStyle(buttons[10].pressed),
            transform: `translate(${axes[0] * 10}px, ${axes[1] * 10}px)`,
          }}
        ></div>
      </div>
      <div style={circleRightStyle}>
        <div
          style={{
            ...stickStyle(buttons[11].pressed),
            transform: `translate(${axes[2] * 10}px, ${axes[3] * 10}px)`,
          }}
        ></div>
      </div>

      {/* stick position ============================================= */}
      <div style={stickPositionStyle}>
        <div style={fieldNameLeftStyle}>Left Stick</div>
        <div style={fieldNameRightStyle}>Right Stick</div>
        <div style={fieldNameXStyle}>X</div>
        <div style={fieldNameYStyle}>Y</div>
        <div style={fieldValueLeftXStyle}>{axes[0].toFixed(4)}</div>
        <div style={fieldValueLeftYStyle}>{axes[1].toFixed(4)}</div>
        <div style={fieldValueRightXStyle}>{axes[2].toFixed(4)}</div>
        <div style={fieldValueRightYStyle}>{axes[3].toFixed(4)}</div>
      </div>

      {/* left buttons status ======================================= */}
      <div style={leftStatusStyle}>
        <div style={statusNameLeftStyle}>Buttons</div>
        <div style={statusNameRightStyle}>Status</div>
        <div style={statusButtonLeftStyle}>{4}</div>
        <div style={statusButtonRightStyle}>{`${buttons[4].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{6}</div>
        <div style={statusButtonRightStyle}>{`${buttons[6].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{8}</div>
        <div style={statusButtonRightStyle}>{`${buttons[8].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{12}</div>
        <div style={statusButtonRightStyle}>{`${buttons[12].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{14}</div>
        <div style={statusButtonRightStyle}>{`${buttons[14].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{15}</div>
        <div style={statusButtonRightStyle}>{`${buttons[15].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{13}</div>
        <div style={statusButtonRightStyle}>{`${buttons[13].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{10}</div>
        <div style={statusButtonRightStyle}>{`${buttons[10].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{16}</div>
        <div style={statusButtonRightStyle}>{`${buttons[16].pressed ? "🟢" : "⚪️"}`}</div>
      </div>

      {/* right buttons status ======================================= */}
      <div style={rightStatusStyle}>
        <div style={statusNameLeftStyle}>Buttons</div>
        <div style={statusNameRightStyle}>Status</div>
        <div style={statusButtonLeftStyle}>{5}</div>
        <div style={statusButtonRightStyle}>{`${buttons[5].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{7}</div>
        <div style={statusButtonRightStyle}>{`${buttons[7].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{9}</div>
        <div style={statusButtonRightStyle}>{`${buttons[9].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{3}</div>
        <div style={statusButtonRightStyle}>{`${buttons[3].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{2}</div>
        <div style={statusButtonRightStyle}>{`${buttons[2].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{1}</div>
        <div style={statusButtonRightStyle}>{`${buttons[1].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{0}</div>
        <div style={statusButtonRightStyle}>{`${buttons[0].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{11}</div>
        <div style={statusButtonRightStyle}>{`${buttons[11].pressed ? "🟢" : "⚪️"}`}</div>
        <div style={statusButtonLeftStyle}>{17}</div>
        {buttons[17] ? (
          <div style={statusButtonRightStyle}>{`${buttons[17].pressed ? "🟢" : "⚪️"}`}</div>
        ) : null}
      </div>
    </div>
  );
};

export default DualSense;
