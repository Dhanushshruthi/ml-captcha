import React, { useRef, useState, useEffect } from "react";
import * as FaceSDK from "faceplugin";
const instructionDetails = [
  "Ensure consistent lighting to avoid shadows or glare",
  "Maintain proper distance from the camera",
  "Keep the camera steady to avoid shaking or blurring",
  "If the model intialized is false make sure to refresh",
]

const translationDictionary = {
  en: {
    errorAccessingMedia: "Error accessing media devices.",
    processingVideoLocally: "Processing video locally...",
    faceSDKNotInitialized: "FaceSDK or sessions are not initialized.",
    pleasePresentInFront: "Please be present in front of the camera.",
    fake: "Fake",
    live: "Live",
    notLive: "Sorry, the person in front does not seem to be live.",
    waitingInitializingModels: "Waiting for initializing the models",
    liveFace: "LiveFace",
    modelInitialized: "Model Initialized?",
    true: "true",
    false: "false",
    verify: "Verify",
  },
  hi: {
    errorAccessingMedia: "मीडिया डिवाइस तक पहुँचने में त्रुटि।",
    processingVideoLocally: "वीडियो को स्थानीय रूप से प्रोसेस किया जा रहा है...",
    faceSDKNotInitialized: "FaceSDK या सत्र शुरू नहीं हुए हैं।",
    pleasePresentInFront: "कृपया कैमरे के सामने उपस्थित रहें।",
    fake: "नकली",
    live: "सजीव",
    notLive: "माफ़ कीजिए, सामने वाला व्यक्ति सजीव नहीं लग रहा है।",
    waitingInitializingModels: "मॉडल्स को शुरू करने का इंतज़ार कर रहे हैं",
    liveFace: "लाइवफेस",
    modelInitialized: "मॉडल प्रारंभ हुआ?",
    true: "सही",
    false: "गलत",
    verify: "सत्यापित करें",
  },
  te: {
    errorAccessingMedia: "మీడియా పరికరాలను యాక్సెస్ చేయడంలో పొరపాటు.",
    processingVideoLocally: "వీడియోను లోకల్‌గా ప్రాసెస్ చేయడం జరుగుతోంది...",
    faceSDKNotInitialized: "FaceSDK లేదా సెషన్లు ప్రారంభించబడలేదు.",
    pleasePresentInFront: "కెమెరా ముందు ఉంటే నిన్ను కోరుకుంటారు.",
    fake: "కపటము",
    live: "సజీవం",
    notLive: "క్షమించండి, ముందు ఉన్న వ్యక్తి సజీవంగా కనిపించడం లేదు.",
    waitingInitializingModels: "మోడల్స్ ప్రారంభించడానికి వేచిచూస్తున్నాము",
    liveFace: "లైవ్‌ఫేస్",
    modelInitialized: "మోడల్ ప్రారంభమైందా?",
    true: "సరియైన",
    false: "తప్పు",
    verify: "నిర్ధారించండి",
  },
  kn: {
    errorAccessingMedia: "ಮೀಡಿಯಾ ಸಾಧನಗಳಿಗೆ ಪ್ರವೇಶಿಸಲು ದೋಷ.",
    processingVideoLocally: "ವೀಡಿಯೋವನ್ನು ಸ್ಥಳೀಯವಾಗಿ ಸಂಸ್ಕರಿಸಲಾಗುತ್ತಿದೆ...",
    faceSDKNotInitialized: "FaceSDK ಅಥವಾ ಸೆಷನ್ಗಳು ಆರಂಭಗೊಂಡಿಲ್ಲ.",
    pleasePresentInFront: "ದಯವಿಟ್ಟು ಕ್ಯಾಮರಾ ಮುಂದೆ ಇದ್ದುಕೊಳ್ಳಿ.",
    fake: "ನಕಲಿ",
    live: "ಜೀವಂತ",
    notLive: "ಕ್ಷಮಿಸಿ, ಮುಂದೆ ಇರುವ ವ್ಯಕ್ತಿ ಜೀವಂತವಾಗಿರುವುದಾಗಿ ಕಾಣಿಸುತ್ತಿಲ್ಲ.",
    waitingInitializingModels: "ಮೋಡಲ್ಸ್ ಅನ್ನು ಪ್ರಾರಂಭಿಸಲು ಕಾಯುತ್ತಿದ್ದೇವೆ",
    liveFace: "ಲೈಫ್‌ಫೇಸ್",
    modelInitialized: "ಮೋಡಲ್ ಪ್ರಾರಂಭಗೊಂಡಿದೆಯೇ?",
    true: "ಸರಿ",
    false: "ತಪ್ಪು",
    verify: "ತೀರ್ಮಾನಿಸಿ",
  },
  ml: {
    errorAccessingMedia: "മീഡിയ ഉപകരണങ്ങൾ ആക്‌സസ് ചെയ്യുന്നതിൽ പിശക്.",
    processingVideoLocally: "വിഡിയോ പ്രാദേശികമായി പ്രോസസിംഗ് ചെയ്യുന്നു...",
    faceSDKNotInitialized: "FaceSDK അല്ലെങ്കിൽ സെഷനുകൾ ആരംഭിച്ചിട്ടില്ല.",
    pleasePresentInFront: "ക്യാമറക്ക് മുമ്പിൽ സാന്നിധ്യം ഉണ്ടാകുക.",
    fake: "മൈക്കു",
    live: "ജീവിതം",
    notLive: "ക്ഷമിക്കണം, മുന്നിലുള്ള വ്യക്തി ജീവിക്കുന്നത് പോലെ തോന്നുന്നില്ല.",
    waitingInitializingModels: "മോഡലുകൾ ആരംഭിക്കുന്നതിന് കാത്തിരിക്കുകയാണ്",
    liveFace: "ലൈഫ്‌ഫേസ്",
    modelInitialized: "മോഡൽ ആരംഭിച്ചോ?",
    true: "സത്യം",
    false: "തെറ്റായ",
    verify: "സത്യസന്ധമായ",
  },
  bn: {
    errorAccessingMedia: "মিডিয়া ডিভাইস অ্যাক্সেস করতে ত্রুটি।",
    processingVideoLocally: "ভিডিও স্থানীয়ভাবে প্রক্রিয়া করা হচ্ছে...",
    faceSDKNotInitialized: "FaceSDK বা সেশনগুলি চালু হয়নি।",
    pleasePresentInFront: "ক্যামেরার সামনে উপস্থিত থাকুন।",
    fake: "ভুয়া",
    live: "সজীব",
    notLive: "দুঃখিত, সামনে থাকা ব্যক্তি সজীব মনে হচ্ছে না।",
    waitingInitializingModels: "মডেলগুলির জন্য অপেক্ষা করা হচ্ছে",
    liveFace: "লাইভফেস",
    modelInitialized: "মডেল ইনিশিয়ালাইজড?",
    true: "সত্য",
    false: "মিথ্যা",
    verify: "যাচাই করুন",
  },
  mr: {
    errorAccessingMedia: "मीडिया उपकरणे प्रवेश करण्यात त्रुटी.",
    processingVideoLocally: "वीडियो स्थानिकरित्या प्रक्रिया करत आहे...",
    faceSDKNotInitialized: "FaceSDK किंवा सत्रे प्रारंभित केलेली नाहीत.",
    pleasePresentInFront: "कृपया कॅमेरासमोर उपस्थित रहा.",
    fake: "खोटे",
    live: "जिवंत",
    notLive: "क्षमस्व, समोर असलेली व्यक्ती जिवंत वाटत नाही.",
    waitingInitializingModels: "मॉडेल्स सुरू होण्याची वाट पाहत आहे",
    liveFace: "लाइफफेस",
    modelInitialized: "मॉडेल प्रारंभित झाले आहे का?",
    true: "खरे",
    false: "खोटे",
    verify: "सत्यापित करा",
  },
  gu: {
    errorAccessingMedia: "મિડિયા ઉપકરણોને ઍક્સેસ કરતી વખતે ભૂલ.",
    processingVideoLocally: "વિડિઓને સ્થાનિક રીતે પ્રોસેસ કરવામાં આવી રહ્યું છે...",
    faceSDKNotInitialized: "FaceSDK અથવા સત્રો શરૂ કરવામાં આવ્યાં નથી.",
    pleasePresentInFront: "કૃપા કરીને કેમેરા સામે હાજર રહો.",
    fake: "નકલી",
    live: "સજીવ",
    notLive: "માફ કરશો, આગળ આવેલા વ્યક્તિને સજીવ લાગે છે નહીં.",
    waitingInitializingModels: "મોડલ્સને આરંભ કરવા માટે રાહ જોઈ રહ્યા છીએ",
    liveFace: "લાઇફફેસ",
    modelInitialized: "મોડલ શરૂ થયો છે?",
    true: "સત્ય",
    false: "ખોટું",
    verify: "સત્યાપિત કરો",
  },
  pa: {
    errorAccessingMedia: "ਮੀਡੀਆ ਡਿਵਾਈਸਾਂ ਤੱਕ ਪਹੁੰਚ ਵਿੱਚ ਗਲਤੀ।",
    processingVideoLocally: "ਵੀਡੀਓ ਨੂੰ ਸਥਾਨਕ ਤੌਰ 'ਤੇ ਪ੍ਰੋਸੈਸ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...",
    faceSDKNotInitialized: "FaceSDK ਜਾਂ ਸੈਸ਼ਨ ਸ਼ੁਰੂ ਨਹੀਂ ਹੋਏ।",
    pleasePresentInFront: "ਕਿਰਪਾ ਕਰਕੇ ਕੈਮਰੇ ਅੱਗੇ ਮੌਜੂਦ ਰਹੋ।",
    fake: "ਜਾਲਸਾਜ਼",
    live: "ਜੀਵੰਤ",
    notLive: "ਮਾਫ਼ ਕਰਨਾ, ਸਾਹਮਣੇ ਵੱਡਾ ਵਿਅਕਤੀ ਜੀਵੰਤ ਨਹੀਂ ਲੱਗਦਾ।",
    waitingInitializingModels: "ਮਾਡਲਾਂ ਦੀ ਸ਼ੁਰੂਆਤ ਦੀ ਉਡੀਕ ਕਰ ਰਹੇ ਹਾਂ",
    liveFace: "ਲਾਈਵਫੇਸ",
    modelInitialized: "ਮਾਡਲ ਸ਼ੁਰੂ ਹੋਇਆ ਹੈ?",
    true: "ਸਹੀ",
    false: "ਗਲਤ",
    verify: "ਸत्यਾਪਿਤ ਕਰੋ",
  },
  ta: {
    errorAccessingMedia: "மீடியா சாதனங்களை அணுகுவதில் பிழை.",
    processingVideoLocally: "வீடியோவை உள்ளூர் முறையில் செயலாக்குகிறது...",
    faceSDKNotInitialized: "FaceSDK அல்லது அமர்வுகள் துவங்கப்படவில்லை.",
    pleasePresentInFront: "அருகிலுள்ள கேமரா முன்னால் இருப்பதாக உறுதிப்படுத்தவும்.",
    fake: "படகு",
    live: "செயலில்",
    notLive: "மன்னிக்கவும், முன்னால் உள்ள நபர் செயலில் இல்லை போல் தோன்றுகிறது.",
    waitingInitializingModels: "மாடல்களை துவங்குவதற்காக காத்திருக்கிறேன்",
    liveFace: "லைவ் ஃபேஸ்",
    modelInitialized: "மாடல் துவங்கப்பட்டுள்ளது",
    true: "உண்மை",
    false: "தவறான",
    verify: "உறுதிப்படுத்தவும்",
  },
  or: {
    errorAccessingMedia: "ମିଡିଆ ଉପକରଣଗୁଡ଼ିକୁ ଆକ୍ସେସ କରିବାରେ ତ୍ରୁଟି।",
    processingVideoLocally: "ଭିଡିଓକୁ ସ୍ଥାନୀୟ ଭାବରେ ପ୍ରୋସେସିଂ କରାଯାଉଛି...",
    faceSDKNotInitialized: "FaceSDK କିମ୍ବା ସେସନ୍‌ଗୁଡ଼ିକୁ ଆରମ୍ଭ କରାଯାଇନି।",
    pleasePresentInFront: "ଦୟାକରି କ୍ୟାମେରା ଆଗରେ ଉପସ୍ଥିତ ରୁହନ୍ତୁ।",
    fake: "ଜାଳସାଜୀ",
    live: "ଜୀବନ୍ତ",
    notLive: "ଦୁଃଖିତ, ସାମ୍ନାରେ ଥିବା ବ୍ୟକ୍ତିଟି ଜୀବନ୍ତ ଲାଗୁନାହିଁ।",
    waitingInitializingModels: "ମଡେଲଗୁଡ଼ିକୁ ଆରମ୍ଭ କରିବାରେ ଅପେକ୍ଷା କରୁଛୁ",
    liveFace: "ଲାଇଫଫେସ",
    modelInitialized: "ମଡେଲ୍ ଆରମ୍ଭ ହୋଇଛି କି?",
    true: "ସତ୍ୟ",
    false: "ମିଥ୍ୟା",
    verify: "ସତ୍ୟାପନ କରନ୍ତୁ",
  },
};


const PassiveCheckingBlind = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [fadeComplete, setFadeComplete] = useState(false);
  const [detectSession, setDetectSession] = useState(null);
  const [liveSession, setLiveSession] = useState(null);

  const getTranslation = (key) => {
    const language = localStorage.getItem('language') || 'en';
    return translationDictionary[language]?.[key] || translationDictionary['en'][key] || key;
  };

  useEffect(() => {
    window.onload = function () {
      loadModels();
    };
  }, []);

  const loadModels = async () => {
    await FaceSDK.load_opencv();
    let detectSession = await FaceSDK.loadDetectionModel();
    setDetectSession(detectSession);
    let liveSession = await FaceSDK.loadLivenessModel();
    setLiveSession(liveSession);
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
          //   await getModelInference(imgs);
        }
      };
    } catch (error) {
      console.error(getTranslation('errorAccessingMedia'), error);
    }
  };

  const sendVideoToBackend = async (videoBlob) => {
    console.log(getTranslation('processingVideoLocally'));

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
      // await predictEyeCloseness(base64Image);
    }
  };

  const detectLivenessDetectionFromImage = async (imageFile) => {
    const canvas = document.createElement("canvas");
    const canvasCtx = canvas.getContext("2d");
    const img = new Image();
    const imageUrl = URL.createObjectURL(imageFile);
    const reader = new FileReader();
    reader.onloadend = () => {
        const base64Image : any = reader.result;
        localStorage.setItem("finalImg", base64Image);
    };
    reader.readAsDataURL(imageFile);

    img.onload = async () => {
      canvas.width = img.width;
      canvas.height = img.height;
      canvasCtx.drawImage(img, 0, 0);

      if (!FaceSDK || !detectSession || !liveSession) {
        console.error(getTranslation('faceSDKNotInitialized'));
        return;
      }
      console.time("live detection");
      const detectionResult = await FaceSDK.detectFace(detectSession, canvas);
      const liveResult = await FaceSDK.predictLiveness(
        liveSession,
        canvas,
        detectionResult.bbox,
      );
      console.timeEnd("live detection");
      if (liveResult.length == 0) {
        window.alert(getTranslation('pleasePresentInFront'));
      }
      liveResult.forEach((result) => {
        const [x1, y1, x2, y2, score] = result;
        const resultText = score < 0.08 ? getTranslation('fake') : getTranslation('live');
        const width = Math.abs(x2 - x1);
        const height = Math.abs(y2 - y1);
        if (resultText === getTranslation('live')) {
          const dat = localStorage.getItem("user");
          
            window.location.href = "/smile";
         
        } else {
          window.alert(getTranslation('notLive'));
        }
        // canvasCtx.strokeStyle = "red";
        canvasCtx.fillStyle = "white";
        canvasCtx.font = "60px Arial";
        canvasCtx.strokeRect(x1, y1, width, height);
        canvasCtx.fillText(resultText, x1, y1 - 10);
      });

      if (canvas.parentNode) {
        console.log("Removing canvas from DOM");
        canvas.parentNode.removeChild(canvas);
      }
    };

    img.src = imageUrl;
  };

  const handleDetectLiveness = async () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const video = videoRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(async (blob) => {
        if (blob) {
          await detectLivenessDetectionFromImage(blob);
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
          {getTranslation('waitingInitializingModels')}
        </div>
      )}
      {fadeComplete && (
        <>
          <h1 className="text-[2.5rem] font-bold text-beige mb-6 text-shadow">
            {getTranslation('liveFace')}
          </h1>
          <div className="flex justify-center items-center gap-5 flex-wrap pt-8 flex-col">
            <div className="flex-1 min-w-[300px] max-w-[600px] bg-[#f9f9f9] rounded-xl p-6 shadow-md transition-shadow hover:shadow-lg">
              <h1 className="text-[1rem] text-beige mb-6 text-shadow">
                {getTranslation('modelInitialized')}{" "}
                {liveSession && detectSession ? getTranslation('true') : getTranslation('false')}
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
                onClick={handleDetectLiveness}
                className="bg-[#28a745] text-white border-none rounded-md py-3 px-6 text-base cursor-pointer transition-all hover:bg-[#218838] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#28a745] mt-4 ml-4"
              >
                {getTranslation('verify')}
              </button>
            </div>
            <div className="flex-1 min-w-[300px] max-w-[700px] bg-[#f9f9f9] rounded-xl p-6 shadow-md transition-shadow mt-10 hover:shadow-lg">
              <p className="pb-4">Instructions to follow</p>
              <div className="flex items-start flex-col">
                
                  {instructionDetails.map((instruction, index) => (
                    <li key={index}>
                      {instruction}
                    </li>
                  ))}
                
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PassiveCheckingBlind;
