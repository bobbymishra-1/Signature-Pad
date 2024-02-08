import React from "react";
import "../style/Signature.css";
import ReactSignatureCanvas from "react-signature-canvas";
const DrawSignature = ({
  selectedColor,
  handleClearSignature,
  handleDrawColorClick,
  selectedBorderColor,
  drawContent,
  setDrawContent,
  signatureRef,
}) => {
  
  return (
    <div className="modal-content">
      <div className="main-content">
        <div>
          <div className="color-bar">
            <div>
              <label
                className="color1"
                style={{
                  border:
                    selectedBorderColor === "#000"
                      ? "4px solid #4636E3"
                      : "none",
                }}
              >
                <span
                  className="color-text"
                  onClick={() => handleDrawColorClick("#000")}
                  style={{ backgroundColor: "#000" }}
                ></span>
              </label>
              <label
                className="color2"
                style={{
                  border:
                    selectedBorderColor === "#2293FB"
                      ? "4px solid #4636E3"
                      : "none",
                }}
              >
                <span
                  className="color-text"
                  onClick={() => handleDrawColorClick("#2293FB")}
                  style={{ backgroundColor: "#2293FB" }}
                ></span>
              </label>
              <label
                className="color3"
                style={{
                  border:
                    selectedBorderColor === "#4636E3"
                      ? "4px solid #4636E3"
                      : "none",
                }}
              >
                <span
                  className="color-text"
                  onClick={() => handleDrawColorClick("#4636E3")}
                  style={{ backgroundColor: "#4636E3" }}
                ></span>
              </label>
            </div>
          </div>
          <div className="signature-wrapper">
            <ReactSignatureCanvas
              ref={signatureRef}
              canvasProps={{
                className: "signature-box",
              }}
              minWidth={2}
              maxWidth={2}
              penColor={selectedColor}
              onEnd={() => setDrawContent(signatureRef.current.toDataURL())}
              clearOnResize={false}
            />
          </div>
          <div className="clear-sign">
            {drawContent === "" ? (
              <p className="clear-text">Sign Here</p>
            ) : (
              <button className="clear-button" onClick={handleClearSignature}>
                Clear Signature
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DrawSignature;
