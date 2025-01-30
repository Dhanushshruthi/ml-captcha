import React, { useRef, useState, useEffect } from "react";
import * as FaceSDK from "faceplugin";
const translations = {
  en: {
    initializing: "Waiting to initialize the models",
    liveFace: "LiveFace",
    modelInitialized: "Model Initialized? ",
    yes: "Yes",
    no: "No",
    smileAlert: "Please smile to verify",
    noFaceDetected: "Please be in front of the camera",
    emotion: "Emotion",
    verifyBySmiling: "Verify by smiling",
  },
  ta: {
    initializing: "மாடல்களை துவங்க காத்திருக்கிறேன்",
    liveFace: "லைவ் பேஸ்",
    modelInitialized: "மாடல் துவங்கியது?",
    yes: "ஆமாம்",
    no: "இல்லை",
    smileAlert: "தயவுசெய்து சிரிக்கவும்",
    noFaceDetected: "கேமராவின் முன்னிலையில் இருங்கள்",
    emotion: "உணர்வு",
    verifyBySmiling: "சிரிக்கையில் சோதிக்கவும்",
  },
  hi: {
    initializing: "मॉडलों को प्रारंभ करने के लिए प्रतीक्षा कर रहे हैं",
    liveFace: "लाइव फेस",
    modelInitialized: "मॉडेल प्रारंभ हुआ?",
    yes: "हां",
    no: "नहीं",
    smileAlert: "सत्यापित करने के लिए मुस्कुराएं",
    noFaceDetected: "कृपया कैमरे के सामने रहें",
    emotion: "भावना",
    verifyBySmiling: "मुस्कुराकर सत्यापित करें",
  },
  te: {
    initializing: "మోడల్స్‌ను ప్రారంభించడానికి వేచిచూస్తున్నాము",
    liveFace: "లైవ్ ఫేస్",
    modelInitialized: "మోడల్ ప్రారంభించబడింది?",
    yes: "అవును",
    no: "కాదు",
    smileAlert: "చెలామణీకి నవ్వండి",
    noFaceDetected: "కెమెరా ముందున్నట్లుగా ఉండండి",
    emotion: "భావన",
    verifyBySmiling: "నవ్వడం ద్వారా ధృవీకరించండి",
  },
  kn: {
    initializing: "ಮೋಡಲ್ಗಳನ್ನು ಆರಂಭಿಸಲು ಕಾಯುತ್ತಿದ್ದೇವೆ",
    liveFace: "ಲೈವ್ ಫೇಸ್",
    modelInitialized: "ಮೋಡಲ್ ಆರಂಭಿತವಾಗಿದೆ?",
    yes: "ಹೌದು",
    no: "ಇಲ್ಲ",
    smileAlert: "ದಯವಿಟ್ಟು ನಗುವ ಮೂಲಕ ದೃಢೀಕರಿಸಿ",
    noFaceDetected: "ಕ್ಯಾಮರಾ ಮುಂದಿನಲ್ಲಿರಿ",
    emotion: "ಭಾವನೆ",
    verifyBySmiling: "ನಗುವ ಮೂಲಕ ದೃಢೀಕರಿಸಿ",
  },
  ml: {
    initializing: "മോഡലുകൾ ആരംഭിക്കാൻ കാത്തിരിക്കുകയാണ്",
    liveFace: "ലൈവ് ഫേസ്",
    modelInitialized: "മോഡൽ ആരംഭിച്ചു?",
    yes: "അതെ",
    no: "ഇല്ല",
    smileAlert: "സത്യാപനത്തിന് പരിഹസിക്കുക",
    noFaceDetected: "കാമറ മുന്നിലുള്ളതായി ഇരിക്കുക",
    emotion: "ഭാവന",
    verifyBySmiling: "നവിക്കുക വഴി സത്യാപിക്കുക",
  },
  bn: {
    initializing: "মডেলগুলি শুরু হতে অপেক্ষা করছে",
    liveFace: "লাইভ ফেস",
    modelInitialized: "মডেল শুরু হয়েছে?",
    yes: "হ্যাঁ",
    no: "না",
    smileAlert: "যাচাই করার জন্য হাসুন",
    noFaceDetected: "ক্যামেরার সামনে থাকুন",
    emotion: "ভাবনা",
    verifyBySmiling: "হাসি দিয়ে যাচাই করুন",
  },
  mr: {
    initializing: "मॉडेल्स प्रारंभ करण्यासाठी प्रतीक्षा करत आहे",
    liveFace: "लाइव फेस",
    modelInitialized: "मॉडेल प्रारंभित झाले आहे का?",
    yes: "होय",
    no: "नाही",
    smileAlert: "सत्यापित करण्यासाठी हसा",
    noFaceDetected: "कॅमेराच्या समोर रहा",
    emotion: "भावना",
    verifyBySmiling: "हसून सत्यापित करा",
  },
  gu: {
    initializing: "મોડલ્સ શરૂ કરવા માટે રાહ જોઈ રહ્યા છીએ",
    liveFace: "લાઇવ ફેસ",
    modelInitialized: "મોડલ શરૂ થયું છે?",
    yes: "હા",
    no: "ના",
    smileAlert: "સત્યાપિત કરવા માટે હસો",
    noFaceDetected: "કેમેરા આગળ રહો",
    emotion: "ભાવના",
    verifyBySmiling: "હસીને સત્યાપિત કરો",
  },
  pa: {
    initializing: "ਮਾਡਲਾਂ ਨੂੰ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਉਡੀਕ ਕਰ ਰਹੇ ਹਾਂ",
    liveFace: "ਲਾਈਵ ਫੇਸ",
    modelInitialized: "ਮਾਡਲ ਸ਼ੁਰੂ ਹੋਇਆ ਹੈ?",
    yes: "ਹਾਂ",
    no: "ਨਹੀਂ",
    smileAlert: "ਜਾਂਚ ਕਰਨ ਲਈ ਮੁਸਕਰਾਓ",
    noFaceDetected: "ਕੈਮਰੇ ਦੇ ਅੱਗੇ ਰਹੋ",
    emotion: "ਭਾਵਨਾ",
    verifyBySmiling: "ਮੁਸਕਰਾਹਟ ਨਾਲ ਸੱਚਾਈ ਕਰੋ",
  },
  or: {
    initializing: "ମୋଡେଲଗୁଡ଼ିକୁ ଆରମ୍ଭ କରିବାକୁ ଅପେକ୍ଷା କରୁଛି",
    liveFace: "ଲାଇଭ୍ ଫେସ୍",
    modelInitialized: "ମୋଡେଲ୍ ଆରମ୍ଭ ହୋଇଛି କି?",
    yes: "ହଁ",
    no: "ନାହିଁ",
    smileAlert: "ସତ୍ୟାପନ ପାଇଁ ହସନ୍ତୁ",
    noFaceDetected: "କ୍ୟାମେରା ସام୍ନାରେ ରହନ୍ତୁ",
    emotion: "ଭାବନା",
    verifyBySmiling: "ହସନ୍ତୁ ଦ୍ବାରା ସତ୍ୟାପନ କରନ୍ତୁ",
  }
};

const SmileChecking = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [fadeComplete, setFadeComplete] = useState(false);
  const [detectSession, setDetectSession] = useState(null);
  const [landmarkSession, setLandmarkSession] = useState(null);
  const [expressionSession, setExpressionSession] = useState(null);
  const [emotions, setEmotions] = useState({
    0: "angry",
    1: "disgust",
    2: "fear",
    3: "smile",
    4: "sad",
    5: "surprise",
    6: "neutral",
  });

  // Get language from localStorage
  const language = localStorage.getItem("language") || "en";

  useEffect(() => {
    window.onload = function () {
      loadModels();
    };
  }, []);

  const loadModels = async () => {
    await FaceSDK.load_opencv();
    let expressionSession = await FaceSDK.loadExpressionModel();
    setExpressionSession(expressionSession);
    let detectSession = await FaceSDK.loadDetectionModel();
    setDetectSession(detectSession);
    let landmarkSession = await FaceSDK.loadLandmarkModel();
    setLandmarkSession(landmarkSession);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeComplete(true);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeComplete) {
      getUserMedia();
    }
  }, [fadeComplete]);

  const getUserMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "video/webm",
      });

      mediaRecorderRef.current.ondataavailable = async (event) => {
        if (event.data.size > 0) {
          const blob = new Blob([event.data], { type: "video/webm" });
          const imgs = await sendVideoToBackend(blob);
          //   await getModelInference(imgs); // Assuming getModelInference is defined elsewhere
        }
      };
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
  };

  const sendVideoToBackend = async (videoBlob) => {
    console.log("Processing video locally...");

    const targetTimes = [3, 8]; // Target times in seconds
    const frames = {};

    const video = document.createElement("video");
    video.src = URL.createObjectURL(videoBlob);
    video.currentTime = 0;
    video.muted = true;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const captureFrame = (time) => {
      return new Promise((resolve) => {
        video.currentTime = time;
        video.onseeked = () => {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

          const base64Image = canvas.toDataURL("image/jpeg");
          resolve(base64Image);
        };
      });
    };

    for (const time of targetTimes) {
      const base64Image = await captureFrame(time);
      // Call the predictEyeCloseness function with the captured image
      // await predictEyeCloseness(base64Image);
    }
  };

  const detectFaceExpressionFromImage = async (imageFile) => {
    const canvas = document.createElement("canvas");
    const canvasCtx = canvas.getContext("2d");
    const img = new Image();
    const imageUrl = URL.createObjectURL(imageFile);

    img.onload = async () => {
      canvas.width = img.width;
      canvas.height = img.height;
      canvasCtx.drawImage(img, 0, 0);

      if (!FaceSDK || !detectSession || !expressionSession) {
        console.error("FaceSDK or sessions are not initialized.");
        return;
      }

      try {
        console.time("expression detection");
        const detectionResult = await FaceSDK.detectFace(detectSession, canvas);
        const expressionResult = await FaceSDK.predictExpression(
          expressionSession,
          canvas,
          detectionResult.bbox,
        );
        console.timeEnd("expression detection");

        canvasCtx.fillStyle = "white";
        if (expressionResult.length == 0) {
          window.alert(translations[language].noFaceDetected);
        }

        for (let i = 0; i < expressionResult.length; i++) {
          const [x1, y1, x2, y2, emotionIndex] = expressionResult[i];
          const width = Math.abs(x2 - x1);
          const height = Math.abs(y2 - y1);
          const emotion = emotions[emotionIndex];
          canvasCtx.font = "40px Arial";
          if (emotion === "smile") {
            window.location.href = "/page.html";  
          } else {
            window.alert(translations[language].smileAlert);
          }

          canvasCtx.strokeRect(x1, y1, width, height);
          canvasCtx.fillText(`${translations[language].emotion}: ${emotion}`, x1, y1 - 10);
        }

        if (canvas.parentNode) {
          console.log("Removing canvas from DOM");
          canvas.parentNode.removeChild(canvas);
        }
      } catch (error) {
        console.error("Error detecting face expressions:", error);
      }
    };

    img.src = imageUrl;
  };

  const handleSmileCheck = async () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const video = videoRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(async (blob) => {
        if (blob) {
          await detectFaceExpressionFromImage(blob);
        }
      }, "image/jpeg");
    }
  };

  return (
    <div
      id="root"
      className="max-w-[1280px] mx-auto p-8 text-center font-oswald"
    >
      {!fadeComplete && (
        <div
          id="fade-out-div"
          className="fixed top-0 left-0 w-full h-full bg-[rgba(46,46,49,0.8)] text-white flex items-center justify-center text-[3cm] font-bold animate-fade-out z-10 overflow-hidden"
        >
          {translations[language].initializing}
        </div>
      )}
      {fadeComplete && (
        <>
          <h1 className="text-[2.5rem] font-bold text-beige mb-6 text-shadow">
            {translations[language].liveFace}
          </h1>
          <div className="flex justify-center items-start gap-5 flex-wrap pt-8">
            <div className="flex-1 min-w-[300px] max-w-[600px] bg-[#f9f9f9] rounded-xl p-6 shadow-md transition-shadow hover:shadow-lg">
              <h1 className="text-[1rem] text-beige mb-6 text-shadow">
                {translations[language].modelInitialized}{" "}
                {detectSession && landmarkSession && expressionSession
                  ? translations[language].yes
                  : translations[language].no}
              </h1>
              <div className={recording ? "relative w-full h-full" : ""}>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <button
                onClick={handleSmileCheck}
                className="bg-[#28a745] text-white border-none rounded-md py-3 px-6 text-base cursor-pointer transition-all hover:bg-[#218838] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#28a745] mt-4 ml-4"
              >
                {translations[language].verifyBySmiling}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SmileChecking;
