import React from "react";
import "../style/Signature.css";
const TypeSignature = ({
  handleClearText,
  handleFontChange,
  handleColorClick,
  content,
  setContent,
  selectedFont,
  selectedColor,
  selectedBorderColor,
}) => {
  
  return (
    <div className="modal-content">
      <div className="main-content">
        <div className="signature-container">
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
                  onClick={() => handleColorClick("#000")}
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
                  onClick={() => handleColorClick("#2293FB")}
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
                  onClick={() => handleColorClick("#4636E3")}
                  style={{ backgroundColor: "#4636E3" }}
                ></span>
              </label>
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Signature"
              className="signature-box2"
              onChange={(e) => setContent(e.target.value)}
              value={content}
              style={{ fontFamily: selectedFont, color: selectedColor }}
            />
            <div className="clear-sign">
              <button onClick={handleClearText} className="clear-button">
                Clear Signature
              </button>
            </div>
          </div>
          <div className="radio-container">
            <div className="radio-list">
              <label
                htmlFor="radio1"
                className="caveat-brush-regular"
                style={{ color: selectedColor }}
              >
                <input
                  type="radio"
                  id="radio1"
                  name="signatureType"
                  onChange={handleFontChange}
                  value="Caveat Brush"
                  checked={selectedFont === "Caveat Brush"}
                  className="signature-margin"
                />
                <span className="signature-margin">
                  {content || "Signature"}
                </span>
              </label>
              <label
                htmlFor="radio2"
                className="pacifico-regular"
                style={{ color: selectedColor }}
              >
                <input
                  type="radio"
                  id="radio2"
                  name="signatureType"
                  onChange={handleFontChange}
                  value="Pacifico"
                  className="signature-margin"
                />
                <span className="signature-margin">
                  {content || "Signature"}
                </span>
              </label>
              <label
                htmlFor="radio3"
                className="marck-script-regular"
                style={{ color: selectedColor }}
              >
                <input
                  type="radio"
                  id="radio3"
                  name="signatureType"
                  onChange={handleFontChange}
                  value="Marck Script"
                  className="signature-margin"
                />
                <span className="signature-margin">
                  {content || "Signature"}
                </span>
              </label>
              <label
                htmlFor="radio4"
                className="meddon-regular"
                style={{ color: selectedColor }}
              >
                <input
                  type="radio"
                  id="radio4"
                  name="signatureType"
                  onChange={handleFontChange}
                  className="signature-margin"
                  value="Meddon"
                />
                <span className="signature-margin">
                  {content || "Signature"}
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TypeSignature;
