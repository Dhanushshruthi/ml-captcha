import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define translations for supported languages
const resources = {
    en: {
      translation: {
        instructions: "Instructions",
        aadhaarPrompt: "Enter Aadhaar Number",
        aadhaarPlaceholder: "Enter Aadhaar Number",
        submitAadhaar: "Submit Aadhaar",
        otpPrompt: "Enter OTP",
        otpPlaceholder: "Enter OTP",
        submitOtp: "Submit OTP",
        enableVoice: "Enable Voice Prompts",
        instructionDetails: [
          "Once you are authenticated with correct OTP, You will be redirected to the face authentication browser.",
          "First your environment will be accessed.",
          "Then you will be prompted to some activities to detect liveness.",
          "Ensure consistent lighting to avoid shadows or glare",
          "Maintain proper distance from the camera",
          "Ensure that your head is face is seen in the camera",
          "If you fail to do you won't be authenticated.",
          "Keep the camera steady to avoid shaking or blurring",
        ],
        language: "Language",
      },
    },
    ta: {
      translation: {
        instructions: "வழிமுறைகள்",
        aadhaarPrompt: "ஆதார் எண்ணை உள்ளிடவும்",
        aadhaarPlaceholder: "ஆதார் எண்ணை உள்ளிடவும்",
        submitAadhaar: "ஆதாரை சமர்ப்பிக்கவும்",
        otpPrompt: "OTP ஐ உள்ளிடவும்",
        otpPlaceholder: "OTP ஐ உள்ளிடவும்",
        submitOtp: "OTP ஐ சமர்ப்பிக்கவும்",
        enableVoice: "குரல் சைகைகளை இயக்கவும்",
        instructionDetails: [
          "சரியான OTP உடன் நீங்கள் அங்கீகரிக்கப்பட்ட பிறகு, முக அங்கீகார உலாவியில் திசைதிருப்பப்படுவீர்கள்.",
          "முதலில் உங்கள் சூழலை அணுகப்படும்.",
          "பின்னர் உயிரின செயல்திறனை கண்டறிய சில செயல்பாடுகள் கேட்கப்படும்.",
          "நிழல்கள் அல்லது பிரகாசம் தவிர்க்க ஒத்திவைக்கப்பட்ட மின்விளக்குகள் அணுகவும்",
          "கேமராவில் போதிய தூரம் பராமரிக்கவும்",
          "உங்கள் தலை கேமராவில் முழுமையாகப் படவில்லையென்றால், அங்கீகரிக்கப்படமாட்டீர்கள்.",
          "கேமராவை ஆட்டம் செய்வதைத் தவிர்க்கவும்",
        ],
        language: "மொழி",
      },
    },
    hi: {
      translation: {
        instructions: "निर्देश",
        aadhaarPrompt: "आधार नंबर दर्ज करें",
        aadhaarPlaceholder: "आधार नंबर दर्ज करें",
        submitAadhaar: "आधार सबमिट करें",
        otpPrompt: "OTP दर्ज करें",
        otpPlaceholder: "OTP दर्ज करें",
        submitOtp: "OTP सबमिट करें",
        enableVoice: "वॉइस प्रोम्प्ट सक्षम करें",
        instructionDetails: [
          "सही OTP के साथ प्रमाणित होने पर, आपको चेहरे की प्रमाणिकता ब्राउज़र पर पुनर्निर्देशित किया जाएगा।",
          "पहले आपके वातावरण का उपयोग किया जाएगा।",
          "फिर आपको जीवनता का पता लगाने के लिए कुछ गतिविधियों के लिए प्रेरित किया जाएगा।",
          "छायाओं या चकाचौंध से बचने के लिए संगत प्रकाश सुनिश्चित करें",
          "कैमरे से उचित दूरी बनाए रखें",
          "सुनिश्चित करें कि आपका सिर और चेहरा कैमरे में दिखाई दे रहा है",
          "यदि आप ऐसा नहीं करते हैं तो आपको प्रमाणित नहीं किया जाएगा।",
          "हिलने या धुंधला होने से बचने के लिए कैमरे को स्थिर रखें",
        ],
        language: "भाषा",
      },
    },
    te: {
      translation: {
        instructions: "సూచనలు",
        aadhaarPrompt: "ఆధార్ నంబర్ నమోదు చేయండి",
        aadhaarPlaceholder: "ఆధార్ నంబర్ నమోదు చేయండి",
        submitAadhaar: "ఆధార్ సమర్పించండి",
        otpPrompt: "OTP నమోదు చేయండి",
        otpPlaceholder: "OTP నమోదు చేయండి",
        submitOtp: "OTP సమర్పించండి",
        enableVoice: "వాయిస్ ప్రాంప్ట్‌లను ప్రారంభించండి",
        instructionDetails: [
          "సరైన OTPతో మీరు ధృవీకరించబడిన తర్వాత, మీ ముఖ ధృవీకరణ బ్రౌజర్‌కు మార్పు చేయబడతారు.",
          "ముందుగా మీ వాతావరణం యాక్సెస్ చేయబడుతుంది.",
          "తర్వాత జీవక్రియను గుర్తించడానికి కొన్ని కార్యకలాపాలను సూచిస్తారు.",
          "నీడలు లేదా తాపం నివారించడానికి సక్రమమైన కాంతిని ఉంచండి",
          "కెమెరా నుండి తగిన దూరం ఉంచండి",
          "మీ తల కెమెరాలో పూర్తిగా కనిపించకపోతే, మీరు ధృవీకరించబడరు.",
          "కెమెరా కదలకుండా ఉంచండి",
        ],
        language: "భాష",
      },
    },
    kn: {
      translation: {
        instructions: "ನಿರ್ದೇಶನಗಳು",
        aadhaarPrompt: "ಆಧಾರ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
        aadhaarPlaceholder: "ಆಧಾರ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
        submitAadhaar: "ಆಧಾರ್ ಸಲ್ಲಿಸಿ",
        otpPrompt: "OTP ನಮೂದಿಸಿ",
        otpPlaceholder: "OTP ನಮೂದಿಸಿ",
        submitOtp: "OTP ಸಲ್ಲಿಸಿ",
        enableVoice: "ವಾಯ್ಸ್ ಪ್ರಾಂಪ್ಟ್‌ಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ",
        instructionDetails: [
          "ನೀವು ಸರಿಯಾದ OTP ನೊಂದಿಗೆ ದೃಢೀಕರಿಸಿದ ನಂತರ, ನಿಮ್ಮನ್ನು ಮುಖದ ದೃಢೀಕರಣ ಬ್ರೌಸರ್‌ಗೆ ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತದೆ.",
          "ಮೊದಲು ನಿಮ್ಮ ಪರಿಸರವನ್ನು ಪ್ರವೇಶಿಸಲಾಗುತ್ತದೆ.",
          "ನಂತರ ಜೀವಂತಿಕೆ ಗುರುತಿಸಲು ಕೆಲವು ಚಟುವಟಿಕೆಗಳಿಗೆ ನಿಮ್ಮನ್ನು ಪ್ರೇರೇಪಿಸಲಾಗುತ್ತದೆ.",
          "ನೆರೆಹೊರೆಯ ಒತ್ತಡ ಅಥವಾ ಉಜ್ಜುವಿಕೆ ತಪ್ಪಿಸಲು ನಿರಂತರ ಬೆಳಕನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ",
          "ಕ್ಯಾಮೆರಾದಿಂದ ಸರಿಯಾದ ದೂರವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ",
          "ನಿಮ್ಮ ತಲೆಯು ಕ್ಯಾಮೆರಾದಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಿ ಕಾಣಿಸದಿದ್ದರೆ, ನೀವು ದೃಢೀಕರಿಸಲಾಗುವುದಿಲ್ಲ.",
          "ಕ್ಯಾಮೆರಾವನ್ನು ಜರುಗದಂತೆ ಇರಿಸಿ",
        ],
        language: "ಭಾಷೆ",
      },
    },
    ml: {
      translation: {
        instructions: "നിർദ്ദേശങ്ങൾ",
        aadhaarPrompt: "ആധാർ നമ്പർ നൽകുക",
        aadhaarPlaceholder: "ആധാർ നമ്പർ നൽകുക",
        submitAadhaar: "ആധാർ സമർപ്പിക്കുക",
        otpPrompt: "OTP നൽകുക",
        otpPlaceholder: "OTP നൽകുക",
        submitOtp: "OTP സമർപ്പിക്കുക",
        enableVoice: "വോയിസ് പ്രേംപ്റ്റുകൾ പ്രാപ്തമാക്കുക",
        instructionDetails: [
          "ശരിയായ OTP ഉപയോഗിച്ച് നിങ്ങൾ അവകാശപ്പെടുത്തിയതിനു ശേഷം, നിങ്ങൾ മുഖം തിരിച്ചറിയൽ ബ്രൗസറിലേക്ക് വീണ്ടും നിർദ്ദേശിക്കപ്പെടും.",
          "ആദ്യമായി നിങ്ങളുടെ പരിസ്ഥിതി പ്രവേശനം ചെയ്യും.",
          "പിന്നീട് ജീവിച്ചിരിക്കുന്നതിന്റെ അംഗീകാരം കണ്ടെത്തുന്നതിനായി ചില പ്രവർത്തനങ്ങൾ നിങ്ങൾക്ക് നിർദ്ദേശിക്കപ്പെടും.",
          "നിഴൽക്കളികൾ അല്ലെങ്കിൽ വൃത്തികെട്ട വൃത്തം ഒഴിവാക്കാൻ സ്ഥിരമായ പ്രകാശം ഉറപ്പാക്കുക",
          "ക്യാമറയിൽ നിന്നും അകലവും നിലനിർത്തുക",
          "നിങ്ങളുടെ തല ക്യാമറയിൽ പൂർണ്ണമായി കാണാത്തപക്ഷം, നിങ്ങളെ തിരിച്ചറിയുന്നതല്ല.",
          "ക്യാമറ ഘട്ടിച്ചത് ഒഴിവാക്കുക",
        ],
        language: "ഭാഷ",
      },
    },
    bn: {
        translation: {
          instructions: "নির্দেশাবলী",
          aadhaarPrompt: "আধার নম্বর লিখুন",
          aadhaarPlaceholder: "আধার নম্বর লিখুন",
          submitAadhaar: "আধার জমা দিন",
          otpPrompt: "OTP লিখুন",
          otpPlaceholder: "OTP লিখুন",
          submitOtp: "OTP জমা দিন",
          enableVoice: "ভয়েস প্রম্পট সক্রিয় করুন",
          instructionDetails: [
            "সঠিক OTP দিয়ে প্রমাণিত হওয়ার পর, আপনাকে মুখের প্রমাণীকরণ ব্রাউজারে পুনঃনির্দেশ করা হবে।",
            "প্রথমে আপনার পরিবেশটি অ্যাক্সেস করা হবে।",
            "তারপর আপনাকে জীবনতা শনাক্ত করার জন্য কিছু কার্যকলাপের জন্য অনুরোধ করা হবে।",
            "ছায়া বা ঝকঝকে এড়াতে পর্যাপ্ত আলো নিশ্চিত করুন",
            "ক্যামেরা থেকে যথাযথ দূরত্ব বজায় রাখুন",
            "আপনার মাথাটি ক্যামেরায় সম্পূর্ণরূপে দৃশ্যমান না হলে, আপনাকে প্রমাণিত করা হবে না।",
            "ক্যামেরা কাঁপানো এড়িয়ে চলুন",
          ],
          language: "ভাষা",
        },
      },
      mr: {
        translation: {
          instructions: "सूचना",
          aadhaarPrompt: "आधार नंबर प्रविष्ट करा",
          aadhaarPlaceholder: "आधार नंबर प्रविष्ट करा",
          submitAadhaar: "आधार सादर करा",
          otpPrompt: "OTP प्रविष्ट करा",
          otpPlaceholder: "OTP प्रविष्ट करा",
          submitOtp: "OTP सादर करा",
          enableVoice: "वॉईस प्रॉम्प्ट सक्रिय करा",
          instructionDetails: [
            "योग्य OTP सह प्रमाणीकरण झाल्यावर, तुम्हाला चेहरा प्रमाणीकरण ब्राऊझरकडे पुनर्निर्देशित केले जाईल.",
            "प्रथम तुमच्या वातावरणाची प्रवेश मिळवली जाईल.",
            "नंतर तुम्हाला जीवनता ओळखण्यासाठी काही क्रियाकलापांसाठी सूचित केले जाईल.",
            "सर्वसाधारण प्रकाश सुनिश्चित करा ज्यामुळे सावल्या किंवा चमक टाळता येईल",
            "कॅमेरा पासून योग्य अंतर ठेवा",
            "तुमचे डोके कॅमेऱ्यात पूर्णपणे दिसले नाही तर तुम्ही प्रमाणीकरण केले जाणार नाही.",
            "कॅमेरा हलवण्यापासून टाळा",
          ],
          language: "भाषा",
        },
      },
      gu: {
        translation: {
          instructions: "સૂચનાઓ",
          aadhaarPrompt: "આધાર નંબર દાખલ કરો",
          aadhaarPlaceholder: "આધાર નંબર દાખલ કરો",
          submitAadhaar: "આધાર સબમિટ કરો",
          otpPrompt: "OTP દાખલ કરો",
          otpPlaceholder: "OTP દાખલ કરો",
          submitOtp: "OTP સબમિટ કરો",
          enableVoice: "વોઇસ પ્રોમ્પ્ટ સક્રિય કરો",
          instructionDetails: [
            "સાચા OTP સાથે પ્રમાણિત થયા પછી, તમને મુખ પ્રમાણન બ્રાઉઝર પર પુનઃદિષ્ટ કરવામાં આવશે.",
            "પ્રથમ તમારા વાતાવરણને પ્રવેશ આપવામાં આવશે.",
            "પછી તમને જીવંતતા ઓળખવા માટે કેટલીક પ્રવૃત્તિઓ માટે સૂચિત કરવામાં આવશે.",
            "છાયાઓ અથવા ચમકને ટાળવા માટે સુસંગત પ્રકાશ ખાતરી કરો",
            "કેમેરા પરથી યોગ્ય અંતર જાળવો",
            "જો તમારું માથું કેમેરામાં પૂર્ણપણે દેખાતું નથી, તો તમે પ્રમાણિત નહીં થાઓ.",
            "કેમેરાને સ્થિર રાખવા માટે ટાળો",
          ],
          language: "ભાષા",
        },
      },
      pa: {
        translation: {
          instructions: "ਹਦਾਇਤਾਂ",
          aadhaarPrompt: "ਆਧਾਰ ਨੰਬਰ ਦਾਖਲ ਕਰੋ",
          aadhaarPlaceholder: "ਆਧਾਰ ਨੰਬਰ ਦਾਖਲ ਕਰੋ",
          submitAadhaar: "ਆਧਾਰ ਭੇਜੋ",
          otpPrompt: "OTP ਦਾਖਲ ਕਰੋ",
          otpPlaceholder: "OTP ਦਾਖਲ ਕਰੋ",
          submitOtp: "OTP ਭੇਜੋ",
          enableVoice: "ਵੌਇਸ ਪ੍ਰੌਮਪਟ ਐਨਬਲ ਕਰੋ",
          instructionDetails: [
            "ਸਹੀ OTP ਨਾਲ ਸੱਤਾਬਦੀ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਨੂੰ ਚਿਹਰੇ ਦੀ ਸੱਤਾਬਦੀ ਬਰਾਊਜ਼ਰ 'ਤੇ ਰੀਡਾਇਰੈਕਟ ਕੀਤਾ ਜਾਵੇਗਾ।",
            "ਪਹਿਲਾਂ ਤੁਹਾਡੇ ਵਾਤਾਵਰਣ ਦਾ ਪਹੁੰਚ ਕੀਤਾ ਜਾਵੇਗਾ।",
            "ਫਿਰ ਤੁਹਾਨੂੰ ਜੀਵੰਤਤਾ ਦਾ ਪਤਾ ਲਗਾਉਣ ਲਈ ਕੁਝ ਸਰਗਰਮੀਆਂ ਲਈ ਸੂਚਿਤ ਕੀਤਾ ਜਾਵੇਗਾ।",
            "ਛਾਇਆ ਜਾਂ ਚਮਕ ਤੋਂ ਬਚਣ ਲਈ ਸੰਗਤ ਰੋਸ਼ਨੀ ਨੂੰ ਯਕੀਨੀ ਬਣਾਓ",
            "ਕੈਮਰੇ ਤੋਂ ਉਚਿਤ ਦੂਰੀ ਰੱਖੋ",
            "ਜੇਕਰ ਤੁਹਾਡਾ ਸਿਰ ਕੈਮਰੇ ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਨਾ ਦਿਸੇ ਤਾਂ ਤੁਹਾਨੂੰ ਸੱਤਾਬਦੀ ਨਹੀਂ ਕੀਤਾ ਜਾਵੇਗਾ।",
            "ਕੈਮਰੇ ਨੂੰ ਹਿਲਾਉਣ ਤੋਂ ਬਚਾਓ",
          ],
          language: "ਭਾਸ਼ਾ",
        },
      },
      or: {
        translation: {
          instructions: "ଆଦେଶ",
          aadhaarPrompt: "ଆଧାର ସଂଖ୍ୟା ପ୍ରବେଶ କରନ୍ତୁ",
          aadhaarPlaceholder: "ଆଧାର ସଂଖ୍ୟା ପ୍ରବେଶ କରନ୍ତୁ",
          submitAadhaar: "ଆଧାର ଦାଖଲ କରନ୍ତୁ",
          otpPrompt: "OTP ପ୍ରବେଶ କରନ୍ତୁ",
          otpPlaceholder: "OTP ପ୍ରବେଶ କରନ୍ତୁ",
          submitOtp: "OTP ଦାଖଲ କରନ୍ତୁ",
          enableVoice: "ଭୟସ୍ ପ୍ରମ୍ପ୍ଟ ସକ୍ରିୟ କରନ୍ତୁ",
          instructionDetails: [
            "ସଠିକ OTP ସହିତ ପ୍ରମାଣିତ ହେବା ପରେ, ଆପଣଙ୍କୁ ମୁହଁ ପ୍ରମାଣୀକରଣ ବ୍ରାଉଜରକୁ ପୁନର୍ନିର୍ଦେଶିତ କରାଯିବ।",
            "ପ୍ରଥମେ ଆପଣଙ୍କର ପରିବେଶକୁ ପ୍ରବେଶ ଦିଆଯିବ।",
            "ପରେ ଆପଣକୁ ଜୀବନ୍ତତା ଚିହ୍ନଟ କରିବା ପାଇଁ କିଛି କାର୍ଯ୍ୟକଳାପ ଆବେଦନ କରାଯିବ।",
            "ଛାୟା କିମ୍ବା ଚମକ ଅପେକ୍ଷା ସହିତ ଆଲୋକ ସୁନିଶ୍ଚିତ କରନ୍ତୁ",
            "କ୍ୟାମେରାରୁ ସଠିକ ଦୂରତା ରଖନ୍ତୁ",
            "ଯଦି ଆପଣଙ୍କର ମୁହଁ କ୍ୟାମେରାରେ ସମ୍ପୂର୍ଣ୍ଣ ଭାବେ ଦେଖାଯିବା ନାହିଁ, ତେବେ ଆପଣ ପ୍ରମାଣିତ ହେବେ ନାହିଁ।",
            "କ୍ୟାମେରାକୁ ଆନାବା କରନ୍ତୁ",
          ],
          language: "ଭାଷା",
        },
      },
    };
    
    i18n
      .use(LanguageDetector) // Detects user's language
      .use(initReactI18next) // Passes i18n instance to react-i18next
      .init({
        resources,
        fallbackLng: 'en', // Default language
        interpolation: {
          escapeValue: false, // React already handles escaping
        },
      });
    
    export default i18n;
    