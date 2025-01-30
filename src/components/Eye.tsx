import React, { useRef, useState, useEffect } from "react";
import * as FaceSDK from "faceplugin";

interface EyeStatus {
  left: string;
  right: string;
}

const translations = {
  en: {
    prompts: ["Close your left eye", "Close your right eye"],
    initializing: "Waiting to initialize the models",
    modelInitialized: "Model Initialized?",
    performAction: "Perform the similar action mentioned below",
    timeRemaining: "Time remaining for current prompt:",
    stopVerifying: "Stop Verifying",
    startVerifying: "Start Verifying",
    similarMovement: "Please perform a similar movement",
    leftEye: "Left Eye",
    rightEye: "Right Eye",
    directionsAlert: "Please follow the prompts carefully.",
    alert: "Please follow the given directions.",
  },
  ta: {
    prompts: ["உங்கள் இடது கண்களை மூடவும்", "உங்கள் வலது கண்களை மூடவும்"],
    initializing: "மாடல்களை துவங்குவதற்காக காத்திருக்கிறேன்",
    modelInitialized: "மாடல் துவங்கப்பட்டது?",
    performAction: "கீழே குறிப்பிடப்பட்ட அதே நடவடிக்கையைச் செய்க",
    timeRemaining: "தற்போதைய கட்டளைக்கு மதி உள்ள நேரம்:",
    stopVerifying: "சோதனையை நிறுத்தவும்",
    startVerifying: "சோதனை துவக்கவும்",
    similarMovement: "ஒரே மாதிரியான இயக்கத்தைச் செய்யவும்",
    leftEye: "இடது கண்",
    rightEye: "வலது கண்",
    directionsAlert: "தொடர்புகளை கவனமாகப் பின்பற்றவும்.",
    alert: "தரப்பட்ட வழிமுறைகளை பின்பற்றவும்.",
  },
  hi: {
    prompts: ["अपना बायाँ आंख बंद करें", "अपना दायाँ आंख बंद करें"],
    initializing: "मॉडल्स को प्रारंभ करने के लिए प्रतीक्षा कर रहे हैं",
    modelInitialized: "मॉडल प्रारंभ हुआ?",
    performAction: "नीचे बताए गए समान क्रिया को करें",
    timeRemaining: "वर्तमान संकेत के लिए समय शेष:",
    stopVerifying: "सत्यापन बंद करें",
    startVerifying: "सत्यापन प्रारंभ करें",
    similarMovement: "कृपया एक समान आंदोलन करें",
    leftEye: "बायाँ आंख",
    rightEye: "दायाँ आंख",
    directionsAlert: "कृपया निर्देशों का ध्यानपूर्वक पालन करें।",
    alert: "कृपया दिए गए दिशा-निर्देशों का पालन करें।",
  },
  te: {
    prompts: ["మీ ఎడమ కంటి మూసివేయండి", "మీ కుడి కంటి మూసివేయండి"],
    initializing: "మోడల్స్ ప్రారంభించడానికి వేచిచూస్తున్నాము",
    modelInitialized: "మోడల్ ప్రారంభమైందా?",
    performAction: "కింద ఇచ్చినట్లే సగం చర్యను చేయండి",
    timeRemaining: "ప్రస్తుత సూచన కోసం మిగిలిన సమయం:",
    stopVerifying: "నిర్ధారణ ఆపండి",
    startVerifying: "నిర్ధారణ ప్రారంభించండి",
    similarMovement: "తమ సామాన్యమైన చర్యను చేయండి",
    leftEye: "ఎడమ కంటి",
    rightEye: "కుడి కంటి",
    directionsAlert: "దయచేసి సూచనలను జాగ్రత్తగా పాటించండి.",
    alert: "ఇచ్చిన మార్గదర్శకాలను అనుసరించండి.",
  },
  kn: {
    prompts: ["ನಿಮ್ಮ ಎಡಕಣ್ಣು ಮುಚ್ಚಿ", "ನಿಮ್ಮ ಬಲಕಣ್ಣು ಮುಚ್ಚಿ"],
    initializing: "ಮೋಡಲ್ಗಳನ್ನು ಪ್ರಾರಂಭಿಸಲು ಕಾಯುತ್ತೇವೆ",
    modelInitialized: "ಮೋಡಲ್ ಆರಂಭಿತವುವಾ?",
    performAction: "ಕೆಳಗಿನಂತೆಯೇ ಕ್ರಿಯೆ ಮಾಡು",
    timeRemaining: "ಪ್ರಸ್ತುತ ಸೂಚನೆಯ ಸಮಯ ಉಳಿಯುವುದು:",
    stopVerifying: "ಪರಿಶೀಲನೆ ನಿಲ್ಲಿಸಿ",
    startVerifying: "ಪರಿಶೀಲನೆ ಪ್ರಾರಂಭಿಸಿ",
    similarMovement: "ಒಂದೇ ರೀತಿಯ ಚಲನೆ ಮಾಡಿ",
    leftEye: "ಎಡ ಕಣ್ಣು",
    rightEye: "ಬಲ ಕಣ್ಣು",
    directionsAlert: "ದಯವಿಟ್ಟು ಸೂಚನಗಳನ್ನು dikkatದಿಂದ ಅನುಸರಿಸಿ.",
    alert: "ದಯವಿಟ್ಟು ನೀಡಲಾದ ಮಾರ್ಗದರ್ಶಿಗಳನ್ನು ಅನುಸರಿಸಿ.",
  },
  ml: {
    prompts: ["നിങ്ങളുടെ ഇടതു കണ്ണ閉ച്ച്", "നിങ്ങളുടെ വലതു കണ്ണ閉ച്ച്"],
    initializing: "മോഡലുകൾ ആരംഭിക്കാൻ കാത്തിരിക്കുന്നു",
    modelInitialized: "മോഡൽ ആരംഭിച്ചോ?",
    performAction: "കீழെ കൊടുത്തിരിക്കുന്ന സമാനമായ ക്രിയ നടത്തുക",
    timeRemaining: "ഇപ്പോൾ പ്രോമ്പ് കാലാവധി:",
    stopVerifying: "സത്യാപനം നിര്‍ത്തുക",
    startVerifying: "സത്യാപനം ആരംഭിക്കുക",
    similarMovement: "സമാനമായ ചലനം നടത്തുക",
    leftEye: "ഇടതു കണ്ണ്",
    rightEye: "വലതു കണ്ണ്",
    directionsAlert: "ദയവായി നിർദ്ദേശങ്ങൾ ശ്രദ്ധपूर्वം പിന്തുടരുക.",
    alert: "ദയവായി നൽകിയ മാർഗനിർദേശങ്ങളെ പിന്തുടരുക.",
  },
  bn: {
    prompts: ["আপনার বাম চোখ বন্ধ করুন", "আপনার ডান চোখ বন্ধ করুন"],
    initializing: "মডেলগুলি শুরু হতে অপেক্ষা করছে",
    modelInitialized: "মডেল শুরু হয়েছে?",
    performAction: "নীচে উল্লেখিত অনুরূপ কার্যকলাপ করুন",
    timeRemaining: "বর্তমান প্রম্পটের জন্য বাকি সময়:",
    stopVerifying: "যাচাইকরণ বন্ধ করুন",
    startVerifying: "যাচাইকরণ শুরু করুন",
    similarMovement: "অনুরূপ আন্দোলন করুন",
    leftEye: "বাম চোখ",
    rightEye: "ডান চোখ",
    directionsAlert: "দয়া করে নির্দেশনাগুলি সাবধানে অনুসরণ করুন।",
    alert: "দয়া করে প্রদত্ত নির্দেশিকাগুলি অনুসরণ করুন।",
  },
  mr: {
    prompts: ["आपले डावे डोळे बंद करा", "आपले उजवे डोळे बंद करा"],
    initializing: "मॉडेल प्रारंभ होण्यासाठी प्रतीक्षा करत आहे",
    modelInitialized: "मॉडेल प्रारंभित झाला आहे का?",
    performAction: "खालील प्रमाणे समान क्रिया करा",
    timeRemaining: "सद्याच्या संकेतासाठी उरलेला वेळ:",
    stopVerifying: "सत्यापन थांबवा",
    startVerifying: "सत्यापन सुरू करा",
    similarMovement: "समान हालचाल करा",
    leftEye: "डावे डोळे",
    rightEye: "उजवे डोळे",
    directionsAlert: "कृपया सूचनांचे अनुसरण करा.",
    alert: "कृपया दिलेल्या दिशा-निर्देशांचे पालन करा.",
  },
  gu: {
    prompts: ["તમારું ડાબું આંખ બંધ કરો", "તમારું જમણું Augen schließen"],
    initializing: "મોડલ્સ શરૂ કરવા માટે રાહ જોઈ રહ્યા છીએ",
    modelInitialized: "મોડલ શરૂ થયું છે?",
    performAction: "નીચે આપેલા સમાન પ્રવૃત્તિ કરો",
    timeRemaining: "વર્તમાન સૂચક માટે બાકીનો સમય:",
    stopVerifying: "માન્યકરણ રોકો",
    startVerifying: "માન્યકરણ શરૂ કરો",
    similarMovement: "એક સરખી ચલન કરો",
    leftEye: "ડાબું આંખ",
    rightEye: "જમણું Augen schließen",
    directionsAlert: "કૃપા કરીને સૂચનોનું ધ્યાનપૂર્વક અનુસરો.",
    alert: "કૃપા કરીને આપેલા માર્ગદર્શિકા અનુસાર ચલાવો.",
  },
  pa: {
    prompts: ["ਆਪਣੀ ਖਬਾ ਅੱਖ ਬੰਦ ਕਰੋ", "ਆਪਣੀ ਸੱਜੀ ਅੱਖ ਬੰਦ ਕਰੋ"],
    initializing: "ਮਾਡਲਾਂ ਨੂੰ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਉਡੀਕ ਕਰ ਰਹੇ ਹਾਂ",
    modelInitialized: "ਮਾਡਲ ਸ਼ੁਰੂ ਹੋਇਆ ਹੈ?",
    performAction: "ਹੇਠਾਂ ਦਿੱਤੇ ਤਰ੍ਹਾਂ ਦੀ ਹਰਕਤ ਕਰੋ",
    timeRemaining: "ਵਰਤਮਾਨ ਪ੍ਰੰਪਟ ਲਈ ਸਮਾਂ ਬਾਕੀ:",
    stopVerifying: "ਸੱਚਾਈ ਰੋਕੋ",
    startVerifying: "ਸੱਚਾਈ ਸ਼ੁਰੂ ਕਰੋ",
    similarMovement: "ਇਕਸਾਰ ਹਿਲਚਲ ਕਰੋ",
    leftEye: "ਖਬਾ ਅੱਖ",
    rightEye: "ਸੱਜੀ ਅੱਖ",
    directionsAlert: "ਕਿਰਪਾ ਕਰਕੇ ਹੁਕਮਾਂ ਨੂੰ ਧਿਆਨ ਨਾਲ ਪਾਲਣਾ ਕਰੋ।",
    alert: "ਕਿਰਪਾ ਕਰਕੇ ਦਿੱਤੇ ਗਏ ਨਿਰਦੇਸ਼ਾਂ ਦਾ ਪਾਲਣਾ ਕਰੋ।",
  },
  or: {
    prompts: ["ଆପଣଙ୍କର ବାଁଁ କଣ୍ଠ ବନ୍ଦ କରନ୍ତୁ", "ଆପଣଙ୍କର ଡାହାଣ କଣ୍ଠ ବନ୍ଦ କରନ୍ତୁ"],
    initializing: "ମୋଡେଲଗୁଡ଼ିକୁ ଆରମ୍ଭ କରିବା ପାଇଁ ଅପେକ୍ଷା କରୁଛୁ",
    modelInitialized: "ମୋଡେଲ ଆରମ୍ଭ ହୋଇଛି କି?",
    performAction: "ନିଚେ ଦିଆଯାଇଥିବା ମାନ୍ୟ କାର୍ଯ୍ୟ କରନ୍ତୁ",
    timeRemaining: "ବର୍ତ୍ତମାନ ଇନ୍‌ପୁଟ୍‌ର ପାଇଁ ସମୟ ବାକୀ:",
    stopVerifying: "ଯାଚନା ବନ୍ଦ କରନ୍ତୁ",
    startVerifying: "ଯାଚନା ଆରମ୍ଭ କରନ୍ତୁ",
    similarMovement: "ସମାନ ଆନ୍ଦୋଳନ କରନ୍ତୁ",
    leftEye: "ବାଁଁ କଣ୍ଠ",
    rightEye: "ଡାହାଣ କଣ୍ଠ",
    directionsAlert: "ଦୟାକରି ନିର୍ଦ୍ଦେଶଗୁଡିକୁ ସତର୍କତାର ସହିତ ପାଳନ କରନ୍ତୁ।",
    alert: "ଦୟାକରି ଦିଆଯାଇଥିବା ଦିଶା-ନିର୍ଦ୍ଦେଶଗୁଡ଼ିକୁ ପାଳନ କରନ୍ତୁ।",
  },
  as: {
    prompts: ["আপোনাৰ বাঁও কণ্ঠ বন্ধ কৰক", "আপোনাৰ সোঁ কণ্ঠ বন্ধ কৰক"],
    initializing: "মডেলবোৰ আৰম্ভ কৰিবলৈ অপেক্ষা কৰিছোঁ",
    modelInitialized: "মডেল আৰম্ভ হৈছে নে?",
    performAction: "নিম্নলিখিত দৰে অনুৰূপ কাৰ্য কৰক",
    timeRemaining: "বৰ্তমান প্ৰম্পটৰ বাবে বাকী সময়:",
    stopVerifying: "যাচাইকৰণ বন্ধ কৰক",
    startVerifying: "যাচাইকৰণ আৰম্ভ কৰক",
    similarMovement: "একেই ধৰণৰ চঞ্চলতা কৰক",
    leftEye: "বাঁও কণ্ঠ",
    rightEye: "সোঁ কণ্ঠ",
    directionsAlert: "অনুগ্ৰহ কৰি নিৰ্দেশবোৰ মনযোগ সহকাৰে অনুসৰণ কৰক।",
    alert: "অনুগ্ৰহ কৰি প্ৰদান কৰা নিৰ্দেশবোৰ অনুসৰণ কৰক।",
  },
  my: {
    prompts: ["မင်းရဲ့ဘယ်ဘက်မျက်စိကိုပိတ်ပါ", "မင်းရဲ့ညာဘက်မျက်စိကိုပိတ်ပါ"],
    initializing: "မော်ဒယ်များကိုစတင်ရန်စောင့်နေရသည်",
    modelInitialized: "မော်ဒယ်စတင်ပါပြီလား?",
    performAction: "အောက်တွင်ဖေါ်ပြထားသလိုတူညီသောလှုပ်ရှားမှုလုပ်ပါ",
    timeRemaining: "ယခုအချိန်အတွက်ကျန်ရှိသောအချိန်:",
    stopVerifying: "စစ်ဆေးမှုရပ်စဲပါ",
    startVerifying: "စစ်ဆေးမှုစတင်ပါ",
    similarMovement: "တူညီသောလှုပ်ရှားမှုလုပ်ပါ",
    leftEye: "ဘယ်ဘက်မျက်စိ",
    rightEye: "ညာဘက်မျက်စိ",
    directionsAlert: "တောင်းဆိုချက်များကိုစိတ်ဝင်စားမှုနှင့်လိုက်နာပါ။",
    alert: "ပေးထားသောညွှန်ကြားချက်များကိုလိုက်နာပါ။",
  }
};


const EyeChecking = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [recording, setRecording] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [countdownInterval, setCountdownInterval] = useState(null);
  const [totalCountdown, setTotalCountdown] = useState(0);
  const [fadeComplete, setFadeComplete] = useState(false);
  const [detectSession, setDetectSession] = useState(null);
  const [landmarkSession, setLandmarkSession] = useState(null);
  const [eyeSession, setEyeSession] = useState(null);
  const [mode, setMode] = useState(null);
  const [eyeStatusHistory, setEyeStatusHistory] = useState<EyeStatus[]>([]);
  const [image, setImage] = useState("right.jpeg");

  const language = localStorage.getItem("language") || "en";

  useEffect(() => {
    window.onload = function () {
      loadModels();
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
  };

  const predictEyeCloseness = async (base64Image) => {
    const canvas = document.createElement("canvas");
    const canvasCtx = canvas.getContext("2d");

    const img = new Image();

    img.onload = async () => {
      canvas.width = img.width;
      canvas.height = img.height;
      canvasCtx.drawImage(img, 0, 0);

      setMode(5);

      try {
        console.time("eye detection");
        const detectionResult = await FaceSDK.detectFace(detectSession, canvas);
        const points = await FaceSDK.predictLandmark(
          landmarkSession,
          canvas,
          detectionResult.bbox,
        );
        const eyeResult = await FaceSDK.predictEye(eyeSession, canvas, points);
        console.timeEnd("eye detection");

        const bbox = detectionResult.bbox;
        const faceCount = bbox.shape[0];
        const bboxSize = bbox.shape[1];

        canvasCtx.fillStyle = "red";
        canvasCtx.font = "40px Arial";

        for (let i = 0; i < faceCount; i++) {
          const x1 = parseInt(bbox.data[i * bboxSize]);
          const y1 = parseInt(bbox.data[i * bboxSize + 1]);
          const x2 = parseInt(bbox.data[i * bboxSize + 2]);
          const y2 = parseInt(bbox.data[i * bboxSize + 3]);
          const width = Math.abs(x2 - x1);
          const height = Math.abs(y2 - y1);

          const leftEye = eyeResult[i][0] ? "Close" : "Open";
          const rightEye = eyeResult[i][1] ? "Close" : "Open";

          const newEyeStatus = { left: leftEye, right: rightEye };
          console.log("New eye status:", newEyeStatus);
          setEyeStatusHistory((prevHistory) => [...prevHistory, newEyeStatus]);

          canvasCtx.strokeRect(x1, y1, width, height);
          canvasCtx.fillText(
            `Left Eye: ${leftEye} Right Eye: ${rightEye}`,
            x1 - 200,
            y1 - 10,
          );
        }

        // setCanvases(prevCanvases => [...prevCanvases, canvas]);
        if (canvas.parentNode) {
          canvas.parentNode.removeChild(canvas);
        }
      } catch (error) {
        console.error("Error predicting eye closeness:", error);
      }
    };

    img.src = base64Image;
  };

  useEffect(() => {
    eyeStatusHistory.map((eyeStatus, index) => {
      console.log(index, eyeStatus);
    });
    if (eyeStatusHistory.length == 2) {
      const firstStatus = eyeStatusHistory[0];
      const secondStatus = eyeStatusHistory[1];

      if (
        firstStatus.left === "Close" &&
        firstStatus.right === "Open" &&
        secondStatus.left === "Open" &&
        secondStatus.right === "Close"
      ) {
        window.location.href = "/page.html";
      } else {
        window.alert(translations[language].alert);
      }
    }
  }, [eyeStatusHistory]);

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
          //   await getModelInference(imgs);
        }
      };
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
  };

  const getRandomPrompts = async () => {
    const prompts = translations[language]?.prompts || translations.en.prompts;
    return prompts;
  };

  const startCountdown = (seconds) => {
    setCountdown(seconds);
    if (countdownInterval) clearInterval(countdownInterval);

    const intervalId = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setCountdownInterval(intervalId);
  };

  useEffect(() => {
    if (totalCountdown > 0 && recording) {
      const intervalId = setInterval(() => {
        setTotalCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(intervalId);
            handleStopRecording();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [totalCountdown, recording]);

  useEffect(() => {
    return () => {
      if (countdownInterval) clearInterval(countdownInterval); 
    };
  }, [countdownInterval]);

  const handleStartRecording = async () => {
    console.log("Starting recording...");
    setRecording(true);

    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.start();

      try {
        const [prompt1, prompt2] = await getRandomPrompts();

        setCurrentPrompt(prompt1);
        startCountdown(5);

        setTimeout(() => {
          setImage("left.jpeg");
          setCurrentPrompt(prompt2);
          startCountdown(5);
          setTotalCountdown(5);
        }, 5000);
      } catch (error) {
        console.error("Error fetching prompts:", error);
        setRecording(false);
      }
    } else {
      console.error("MediaRecorder is not initialized.");
    }
  };

  const handleStopRecording = () => {
    console.log("Stopping recording...");
    setRecording(false);

    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    } else {
      console.error("MediaRecorder is not initialized.");
    }

    setCurrentPrompt("");
    setCountdown(0);
    setTotalCountdown(0);
  };

  const sendVideoToBackend = async (videoBlob) => {
    console.log("Processing video locally...");

    const targetTimes = [3, 8]; 
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
      await predictEyeCloseness(base64Image);
    }
  };

  const imgs = {
    "close your right eye": "left.jpeg",
    "close your left eye": "right.jpeg",
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
                {detectSession && eyeSession && landmarkSession
                  ? "true"
                  : "false"}
              </h1>
              <div className={recording ? "relative w-full h-full" : ""}>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-auto rounded-xl"
                />
              </div>
              {recording && (
                <div className="flex justify-center">
                  <div className="flex items-center justify-center w-max p-2 bg-[#c9f5da] rounded-lg shadow-md text-[#333] font-roboto">
                    <div className="flex items-start">
                      <span className="material-icons text-[#1963d2] mr-2 text-xl">
                        info
                      </span>
                      <p className="m-0 text-base leading-relaxed">
                        {translations[language].performAction}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div>
                <p className="text-base text-[#555] m-2">{currentPrompt}</p>
                {countdown > 0 && (
                  <p className="text-base text-[#555] m-2">
                    {translations[language].timeRemaining} {countdown}s
                  </p>
                )}
              </div>
              <button
                onClick={recording ? handleStopRecording : handleStartRecording}
                className="bg-[#28a745] text-white border-none rounded-md py-3 px-6 text-base cursor-pointer transition-all hover:bg-[#28a745] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007bff] mt-4"
              >
                {recording ? translations[language].stopVerifying : translations[language].startVerifying}
              </button>
            </div>
            {currentPrompt && (
              <div className="flex-none w-[300px] max-w-[300px] border-2 border-[#ddd] rounded-xl overflow-hidden shadow-md bg-white">
                <img
                  src={image}
                  className="w-full h-auto rounded-xl"
                />
                <p className="text-base text-[#666] mt-2 font-medium leading-6">
                  {translations[language].performMovement}
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default EyeChecking;