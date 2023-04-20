// FaceExpressionDetector.tsx
import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

const FaceExpressionDetector: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
      const { expressions } = detection;
      const happyScore = expressions.happy;
      const surprisedScore = expressions.surprised;
  
      console.log(`Face #${index + 1}`);
      console.log("Happy:", happyScore);
      console.log("Surprised:", surprisedScore);
    });
  
    // Continuously call faceDetection
    requestAnimationFrame(faceDetection);
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