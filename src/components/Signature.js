import React, { useRef, useState } from "react";
import "../style/Signature.css";
import DrawSignature from "./DrawSignature";
import html2canvas from "html2canvas";
import TypeSignature from "./TypeSignature";
const Signature = ({ closeModal, onDoneClick }) => {
  const signatureRef = useRef(null);
  const [mode, setMode] = useState("draw");
  const [content, setContent] = useState("");
  const [selectedFont, setSelectedFont] = useState("Caveat Brush");
  const [activeNav, setActiveNav] = useState("draw");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [drawContent, setDrawContent] = useState("");
  const [selectedBorderColor, setSelectedBorderColor] = useState("#000");


const handleDoneClick = async () => {
  let image;
  if (mode === "draw") {
    // Get the data URL of the signature canvas and call the onDoneClick callback with the image
    image = signatureRef.current.toDataURL();
    onDoneClick(image);
  } else {
    // Create a canvas from the text input using html2canvas library
    const textCanvas = await html2canvas(
      document.querySelector(".signature-box2"),
      { backgroundColor: null }
    );
    image = textCanvas.toDataURL();
    // Calculate the signature length
    const signatureLength = content.length;
    // Set the desired font size based on the signature length
    const desiredFontSize = Math.max(15, 30 - signatureLength);
    // Create a new canvas for drawing the text
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = image;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      // Clear the canvas before drawing the text
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Set the font size and draw the signature text
      ctx.font = `${desiredFontSize}px ${selectedFont}`;
      ctx.fillStyle = selectedColor;
      // Calculate text width to center it horizontally
      const textWidth = ctx.measureText(content).width;
      const xPosition = (canvas.width - textWidth) / 2;
      // Calculate text height to center it vertically
      const yPosition = canvas.height / 2;
      ctx.fillText(content, xPosition, yPosition);
      // Convert the canvas to an image
      const finalImage = canvas.toDataURL();
      // Call the onDoneClick callback with the final image
      onDoneClick(finalImage);
    };
  }
};

const handleClearSignature = () => {
  signatureRef.current.clear();
  setDrawContent("");
};
  const handleClearText = () => {
    setContent("");
  };

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setSelectedBorderColor(color);
  };
  const handleDrawColorClick = (color) => {
    // Set the selected color and border color
    setSelectedColor(color);
    setSelectedBorderColor(color);
    // Get the canvas and context
    const canvas = signatureRef.current.getCanvas();
    if (canvas) {
      const context = canvas.getContext("2d");

      // Save the context state and set the fill style and composite operation
      context.save();
      context.fillStyle = color;
      context.globalCompositeOperation = "source-in";

      // Fill the entire canvas with the selected color
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Restore the context state
      context.restore();
    }
  };

  const handleDrawClick = () => {
    setMode("draw");
    setActiveNav("draw");
  };

  const handleTypeClick = () => {
    setMode("type");
    setActiveNav("type");
  };

  return (
    <div className="modal-content">
      <div className="header">
        <p>Add Signature</p>
      </div>
      <ul className="nav">
        <li
          className={`list ${activeNav === "draw" ? "active" : ""}`}
          onClick={handleDrawClick}
        >
          Draw
        </li>
        <li
          className={`list ${activeNav === "type" ? "active" : ""}`}
          onClick={handleTypeClick}
        >
          Type
        </li>
      </ul>
      <div className="main-content">
      {mode === "draw" ? (
          <DrawSignature 
            handleClearSignature={handleClearSignature} 
            handleDrawColorClick={handleDrawColorClick} 
            selectedColor={selectedColor} 
            drawContent={drawContent} 
            setDrawContent={setDrawContent} 
            selectedBorderColor={selectedBorderColor}
            signatureRef={signatureRef}
          />
        ) : (
          <TypeSignature 
            handleClearText={handleClearText} 
            handleFontChange={handleFontChange} 
            handleColorClick={handleColorClick} 
            content={content} 
            setContent={setContent} 
            selectedFont={selectedFont} 
            selectedColor={selectedColor} 
            selectedBorderColor={selectedBorderColor}
          />
        )}
      </div>
      <div className="footer">
      <button type="button" className="btn" onClick={closeModal}>
          Cancel
        </button>
        {mode === "type" && content === "" ? (
          <button type="submit" className="btn" disabled>
            Done
          </button>
        ) : mode === "draw" && drawContent === "" ? (
          <button type="submit" className="btn" disabled>
            Done
          </button>
        ) : (
          <button type="submit" className="btn done" onClick={handleDoneClick}>
            Done
          </button>
        )}
      </div>
    </div>
  );
};
export default Signature;
