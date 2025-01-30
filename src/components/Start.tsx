import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const translationDictionary = {
    en: {
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
    ta: {
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
    hi: {
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
    te: {
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
    kn: {
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
    ml: {
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
    bn: {
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
    mr: {
      instructions: "सूचना",
      aadhaarPrompt: "आधार नंबर प्रविष्ट करा",
      aadhaarPlaceholder: "आधार नंबर प्रविष्ट करा",
      submitAadhaar: "आधार सादर करा",
      otpPrompt: "OTP प्रविष्ट करा",
      otpPlaceholder: "OTP प्रविष्ट करा",
      submitOtp: "OTP सादर करा",
      enableVoice: "वॉईस प्रॉम्प्ट सक्षम करा",
      instructionDetails: [
        "सत्य OTP सह प्रमाणित झाल्यावर, तुम्हाला चेहरा प्रमाणीकरण ब्राउझरवर पुनर्निर्देशित केले जाईल.",
        "प्रथम तुमच्या वातावरणाला प्रवेश दिला जाईल.",
        "नंतर तुम्हाला जीवनता ओळखण्यासाठी काही क्रियाकलापांची सूचना केली जाईल.",
        "छाया किंवा चमक टाळण्यासाठी सुसंगत प्रकाश सुनिश्चित करा",
        "कॅमेरापासून योग्य अंतर राखा",
        "तुमचा चेहरा कॅमेरामध्ये पूर्णपणे दिसला नाही तर तुम्हाला प्रमाणित केले जाणार नाही.",
        "कॅमेरा हलण्यापासून टाका",
      ],
      language: "भाषा",
    },
  };

const Start = () => {
  const [aadhaar, setAadhaar] = useState('');
  const [otp, setOtp] = useState('');
  const [otpRequested, setOtpRequested] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [language, setLanguage] = useState('en'); // Initialize with default language
  const navigate = useNavigate();

  // Retrieve translations based on the selected language
  const t = (key) => translationDictionary[language]?.[key] || key;
  const getInstructions = () => translationDictionary[language]?.instructionDetails || [];

  const handleAadhaarSubmit = (e) => {
    e.preventDefault();
    if (aadhaar) {
      setOtpRequested(true);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (aadhaar == "112233445566"){
      localStorage.setItem("user","blind");
    }else{
        localStorage.setItem("user","normal");
    }
    if (otp === '123456') {
      navigate('/passive'); // Redirect to /eye
    } else {
      alert(t('otpInvalid')); // Use translation for alert message
    }
  };

  const handleVoiceToggle = () => {
    setVoiceEnabled(!voiceEnabled);
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
    // You might need to integrate a method to update the translation context if using i18n.
  };

  const handleAadhaar = (e) => {
    setAadhaar(e.target.value);
    
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      {/* Language Selector */}
      <div className="absolute top-4 right-4">
        <label className="mr-2 font-semibold">Language :</label>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="px-2 py-1 border rounded"
        >
          <option value="en">English</option>
          <option value="ta">Tamil</option>
          <option value="hi">Hindi</option>
          <option value="te">Telugu</option>
          <option value="kn">Kannada</option>
          <option value="ml">Malayalam</option>
          <option value="bn">Bengali</option>
          <option value="mr">Marathi</option>
          <option value="gu">Gujarati</option>
          <option value="pa">Punjabi</option>
          <option value="or">Odia</option>
          {/* Add more languages as needed */}
        </select>
      </div>

      <div className="max-w-md w-full bg-white shadow-lg rounded p-8 text-center font-oswald">
        {!otpRequested ? (
          <form onSubmit={handleAadhaarSubmit} className="space-y-4">
            <h1 className="text-2xl font-bold">{t('aadhaarPrompt')}</h1>
            <input
              type="text"
              value={aadhaar}
              onChange={(e) => handleAadhaar(e)}
              placeholder={t('aadhaarPlaceholder')}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {t('submitAadhaar')}
            </button>
          </form>
        ) : (
          <div>
            {/* OTP Input Form with Instructions */}
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <h1 className="text-2xl font-bold">{t('otpPrompt')}</h1>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder={t('otpPlaceholder')}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {t('submitOtp')}
              </button>
            </form>

            {/* Display Instructions */}
            <div className="text-left mt-8">
              <h2 className="text-xl font-semibold">{t('instructions')}</h2>
              <ol className="list-decimal pl-6">
                {getInstructions().map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
        <div className="mt-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={voiceEnabled}
              onChange={handleVoiceToggle}
              className="form-checkbox text-blue-600"
            />
            <span className="ml-2">{t('enableVoice')}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Start;
