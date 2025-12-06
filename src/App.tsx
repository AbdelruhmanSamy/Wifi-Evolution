import { useState, useEffect } from 'react';
import { Wifi } from 'lucide-react';
import './App.css';
import ComparisonChart from './sections/ComparisonChart';
import KeyFeatures from './sections/KeyFeatures';
import MultiDeviceDemo from './sections/MultiDeviceDemo';
import StatesGrid from './sections/StatesGrid';
import SpeedAnimation from './sections/SpeedAnimation';
import { wifiVersions } from '@data';
import type { WIFI_VERSIONS } from '@data';

const WiFiEvolutionDemo = () => {
  const [selectedWiFi, setSelectedWiFi] = useState<WIFI_VERSIONS>('wifi6');
  const [isAnimating, setIsAnimating] = useState(false);
  const [dataPosition, setDataPosition] = useState(0);

  const startAnimation = () => {
    setDataPosition(0);
    setIsAnimating(true);
  };

  const currentWiFi = wifiVersions[selectedWiFi];

  useEffect(() => {
    if (isAnimating) {
      const startTime = Date.now();
      const duration = currentWiFi.animationSpeed;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / duration) * 100, 100);

        setDataPosition(progress);

        if (progress < 100) {
          requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isAnimating, currentWiFi.animationSpeed]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Wifi className="w-12 h-12 text-blue-400" />
            WiFi Evolution: From 6 to 8
          </h1>
          <p className="text-xl text-slate-300">
            Interactive Speed & Feature Comparison
          </p>
        </div>

        {/* Version Selector */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {Object.entries(wifiVersions).map(([key, wifi]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedWiFi(key as 'wifi6' | 'wifi7' | 'wifi8');
                setIsAnimating(false);
                setDataPosition(0);
              }}
              className={`p-6 rounded-xl border-4 transition-all transform hover:scale-105 ${
                selectedWiFi === key
                  ? `${wifi.borderColor} ${wifi.color} text-white shadow-2xl`
                  : 'border-slate-600 bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              <div className="text-4xl mb-2">{wifi.animal}</div>
              <div className="font-bold text-lg">{wifi.name}</div>
              <div className="text-sm opacity-90">{wifi.speed}</div>
            </button>
          ))}
        </div>

        {/* Main Demo Area */}
        <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 mb-8 border border-slate-700">
          {/* Speed Animation Track */}
          <SpeedAnimation
            currentWiFi={currentWiFi}
            isAnimating={isAnimating}
            dataPosition={dataPosition}
            startAnimation={startAnimation}
          />
          {/* Stats Grid */}
          <StatesGrid currentWiFi={currentWiFi} />

          {/* Multi-Device Demo */}
          <MultiDeviceDemo
            currentWiFi={currentWiFi}
            selectedWiFi={selectedWiFi}
          />

          {/* Key Features */}
          <KeyFeatures currentWiFi={currentWiFi} />
        </div>

        {/* Comparison Chart */}
        <ComparisonChart wifiVersions={wifiVersions} />
      </div>
    </div>
  );
};

export default WiFiEvolutionDemo;
