import React from "react";
import { useState, useEffect } from "react";
import Header from "../homecomponents/Header.tsx";
import BusinessCategories from "../homecomponents/Business-Categories.tsx";
import FeaturesPlanet from "../homecomponents/Features-Planet.tsx";
import HeroHome from "../homecomponents/Hero.tsx";
import LargeTestimonial from "../homecomponents/LargeTestimonial.tsx";
import * as FaceSDK from "faceplugin";
import Footer from "../homecomponents/Footer.tsx";
// import PageIllustration from "../homecomponents/PageIllustration";

export default function Home() {

  const [detectSession, setDetectSession] = useState(null);
  const [liveSession, setLiveSession] = useState(null);
  const [landmarkSession, setLandmarkSession] = useState(null);
  const [expressionSession, setExpressionSession] = useState(null);
  const [eyeSession, setEyeSession] = useState(null);


  const loadModels = async () => {
    await FaceSDK.load_opencv();
    let detectSession = await FaceSDK.loadDetectionModel();
    setDetectSession(detectSession);
    let liveSession = await FaceSDK.loadLivenessModel();
    setLiveSession(liveSession);
    let landmarkSession = await FaceSDK.loadLandmarkModel();
    setLandmarkSession(landmarkSession);
    let expressionSession = await FaceSDK.loadExpressionModel();
    setExpressionSession(expressionSession);
    let eyeSession = await FaceSDK.loadEyeModel();
    setEyeSession(eyeSession);
  };

  useEffect (() => {
    loadModels();
  }, [])

    return (
      <>
        <Header />
        <HeroHome />
        <LargeTestimonial />
  
        <BusinessCategories />
        <FeaturesPlanet />
        <Footer />
      </>
    );
  }