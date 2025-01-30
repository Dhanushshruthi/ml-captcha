import { useState, useRef, useEffect } from "react";
import * as FaceSDK from "faceplugin";
import React from "react";

function ActiveChecking() {
  const [mode, setMode] = useState(0);
  const [detectSession, setDetectSession] = useState(null);
  const [liveSession, setLiveSession] = useState(null);
  const [landmarkSession, setLandmarkSession] = useState(null);
  const [eyeSession, setEyeSession] = useState(null);
  const [canvasImg, setCanvasImg] = useState("gokul.jpg");
  const [showResult, setShowResult] = useState(null);
  const [showAccuracy, setShowAccuracy] = useState(null);

  let canvas = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imgSrc = URL.createObjectURL(file);
      setCanvasImg(imgSrc);
      draw(imgSrc);
    }
  };

  const draw = () => {
    const canvasElement = canvas.current;
    const context = canvasElement.getContext("2d");
    const img1 = new Image();

    img1.onload = function () {
      // Set the canvas width and height to the image's original dimensions
      canvasElement.width = img1.naturalWidth;
      canvasElement.height = img1.naturalHeight;

      // Draw the image on the canvas at its natural size
      context.drawImage(img1, 0, 0, img1.naturalWidth, img1.naturalHeight);
    };

    img1.src = canvasImg; // Set the source of the image
  };

  const changeImage = (e) => {
    setCanvasImg(e.target.value);
  };

  useEffect(() => {
    draw();
  }, [canvasImg]);

  useEffect(() => {
    window.onload = function () {
      loadModels();
      draw();
    };
  }, []);

  const loadModels = async () => {
    await FaceSDK.load_opencv();
    let detectSession = await FaceSDK.loadDetectionModel();
    setDetectSession(detectSession);
    let eyeSession = await FaceSDK.loadEyeModel();
    setEyeSession(eyeSession);
    let landmarkSession = await FaceSDK.loadLandmarkModel();
    setLandmarkSession(landmarkSession);
    let liveSession = await FaceSDK.loadLivenessModel();
    setLiveSession(liveSession);
  };

  const detectLivenessDetection = async () => {
    draw();
    setTimeout(async () => {
      setMode(2);
      const detectionResult = await FaceSDK.detectFace(
        detectSession,
        "live-canvas",
      );

      const liveResult = await FaceSDK.predictLiveness(
        liveSession,
        "live-canvas",
        detectionResult.bbox,
      );

      const canvas = document.getElementById("live-canvas");
      const canvasCtx = canvas.getContext("2d");
      canvasCtx.beginPath();

      var face_count = liveResult.length;

      for (let i = 0; i < face_count; i++) {
        var x1 = parseInt(liveResult[i][0]),
          y1 = parseInt(liveResult[i][1]),
          x2 = parseInt(liveResult[i][2]),
          y2 = parseInt(liveResult[i][3]),
          result = liveResult[i][4] < 0.08 ? "Fake" : "Live",
          score = liveResult[i][4],
          width = Math.abs(x2 - x1),
          height = Math.abs(y2 - y1);
        console.log(score);
        setShowResult(result);
        setShowAccuracy(score);
        canvasCtx.strokeStyle = "red";
        canvasCtx.fillStyle = "blue";
        canvasCtx.font = "40px Arial";
        canvasCtx.strokeRect(x1, y1, width, height);
        canvasCtx.fillText(result, x1, y1 - 10);
        canvasCtx.stroke();
      }
    }, 100);
  };

  const predictEyeCloseness = async () => {
    draw();
    setTimeout(async () => {
      setMode(5);
      const detectionResult = await FaceSDK.detectFace(
        detectSession,
        "live-canvas",
      );
      const points = await FaceSDK.predictLandmark(
        landmarkSession,
        "live-canvas",
        detectionResult.bbox,
      );
      const eyeResult = await FaceSDK.predictEye(
        eyeSession,
        "live-canvas",
        points,
      );
      const canvas = document.getElementById("live-canvas");
      const canvasCtx = canvas.getContext("2d");
      canvasCtx.beginPath();
      var bbox = detectionResult.bbox;
      var face_count = bbox.shape[0],
        bbox_size = bbox.shape[1];
      for (let i = 0; i < face_count; i++) {
        var x1 = parseInt(bbox.data[i * bbox_size]),
          y1 = parseInt(bbox.data[i * bbox_size + 1]),
          x2 = parseInt(bbox.data[i * bbox_size + 2]),
          y2 = parseInt(bbox.data[i * bbox_size + 3]),
          width = Math.abs(x2 - x1),
          height = Math.abs(y2 - y1);

        const leftEye = eyeResult[i][0] ? "Close" : "Open";
        const rightEye = eyeResult[i][1] ? "Close" : "Open";

        canvasCtx.strokeStyle = "red";
        canvasCtx.fillStyle = "blue";
        canvasCtx.strokeRect(x1, y1, width, height);
        canvasCtx.fillText(
          "Left Eye: " + leftEye + " Right Eye: " + rightEye,
          x1,
          y1 - 10,
        );
        canvasCtx.stroke();
      }
    }, 100);
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="relative">
          <select
            onChange={changeImage}
            className="px-6 py-2 font-semibold text-white bg-gray-800 rounded-md hover:opacity-95 focus:outline-none"
          >
            <option value="image.png">1.png</option>
            <option value="spoof.jpg">2.jpg</option>
            <option value="real.png">3.png</option>
            <option value="gokul.jpg">4.jpg</option>
            <option value="5.jpg">5.jpg</option>
            <option value="6.jpg">6.jpg</option>
            <option value="7.jpg">7.jpg</option>
            <option value="8.jpg">8.jpg</option>
            <option value="9.jpg">9.jpg</option>
          </select>
        </div>
        <canvas ref={canvas} id="live-canvas" className="h-[500px] w-auto" />
        {showResult && (
          <div>
            <h1>result = {showResult}</h1>
            <h1>per = {showAccuracy}</h1>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="pt-10"
        />
        <h1>{liveSession ? (detectSession ? "Check Now" : "wait") : "wait"}</h1>
      </div>

      <div className="">
        <div className="flex flex-col gap-2 ml-2">
          <button
            className="px-6 py-2 font-semibold text-white bg-gray-800 rounded-md hover:opacity-95 focus:outline-none"
            aria-expanded="false"
            onClick={detectLivenessDetection}
          >
            Liveness Check
          </button>
          <button
            className="px-6 py-2 font-semibold text-white bg-gray-800 rounded-md hover:opacity-95 focus:outline-none"
            aria-expanded="false"
            onClick={predictEyeCloseness}
          >
            Estimate Eye Closeness
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActiveChecking;
