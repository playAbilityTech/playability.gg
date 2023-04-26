// FaceExpressionDetector.jsx new branch
import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
import { Point } from 'face-api.js';
import gameStore from '@/stores/gameStore';

const FaceExpressionDetector = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    startVideo();
    loadModels();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = currentStream;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const loadModels = () => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models'),
    ]).then(faceDetection);
  };
  
  const faceDetection = async () => {
    if (!videoRef.current) {
      return;
    }
  
    const detections = await faceapi
      .detectAllFaces(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      )
      .withFaceLandmarks()
      .withFaceExpressions();
  
    detections.forEach((detection, index) => {
      const { expressions, landmarks } = detection;
      const happyScore = expressions.happy;
      const surprisedScore = expressions.surprised;
  
      const { yaw, pitch, roll } = calculateYawPitchRoll(landmarks.positions);
      console.log('happyScore', happyScore);
      const shouldPressKey = happyScore > 0.95;

      if (shouldPressKey) {
        gameStore.setKeyState(37, true); // X
        console.log(`key 37 pressed`);
      
        // gameStore.setKeyState(37, false); // X
        // console.log(`key 37 released`);
    }
    
    });
  
    // Continuously call faceDetection
    requestAnimationFrame(faceDetection);
  };
  
  

  const calculateYawPitchRoll = (landmarks) => {
    const nose = landmarks[30];
    const chin = landmarks[8];
    const leftEye = landmarks[36];
    const rightEye = landmarks[45];
    const leftMouth = landmarks[48];
    const rightMouth = landmarks[54];

    const yaw = Math.atan2((rightEye.y - leftEye.y), (rightEye.x - leftEye.x));
    const pitch = Math.atan2((nose.y - (leftEye.y + rightEye.y) / 2), (nose.x - (leftEye.x + rightEye.x) / 2));
    const roll = Math.atan2((rightMouth.y - leftMouth.y), (rightMouth.x - leftMouth.x));

    return { yaw, pitch, roll };
  };

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        muted
        width="600"
        height="400"
        onPlay={faceDetection}
      ></video>
    </div>
  );
};

export default FaceExpressionDetector;
