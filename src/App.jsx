import { useState, useRef } from "react";
import NameInput from "./components/NameInput";
import ResultDisplay from "./components/ResultDisplay";
import html2canvas from "html2canvas";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
  "/images/img10.jpg",
  "/images/img12.jpg",
  "/images/img11.jpg",
];

function App() {
  const [selectedName, setSelectedName] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const captureRef = useRef(null);

  const takeScreenshot = async () => {
    if (captureRef.current) {
      try {
        const canvas = await html2canvas(captureRef.current, { useCORS: true });
        const image = canvas.toDataURL("image/png");

        // Create a download link
        const link = document.createElement("a");
        link.href = image;
        link.download = "valentines_prediction.png";
        link.click();

        // Try Web Share API
        if (navigator.share) {
          const blob = await (await fetch(image)).blob();
          const file = new File([blob], "valentine_prediction.png", {
            type: "image/png",
          });

          try {
            await navigator.share({
              title: "My Valentine's Prediction 💖",
              text: "Check out my Valentine's prediction!",
              files: [file],
            });
          } catch (error) {
            console.error("Sharing failed:", error);
          }
        } else {
          alert(
            "Sharing is not supported on this browser. Image downloaded instead."
          );
        }
      } catch (error) {
        console.error("Screenshot error:", error);
      }
    }
  };

  const handlePrediction = (names) => {
    if (names.length === 0) return;
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setSelectedName(randomName);
    setSelectedImage(randomImage);
  };

  return (
    <div className="app">
      <h1>💖 Valentine's Day Predictor 💖</h1>
      <NameInput onSubmit={handlePrediction} />

      {selectedName && (
        <div className="capture-area" ref={captureRef}>
          <ResultDisplay
            selectedName={selectedName}
            selectedImage={selectedImage}
          />
        </div>
      )}

      {selectedName && (
        <button className="share-btn" onClick={takeScreenshot}>
          📸 Take Screenshot & Share
        </button>
      )}
    </div>
  );
}

export default App;
