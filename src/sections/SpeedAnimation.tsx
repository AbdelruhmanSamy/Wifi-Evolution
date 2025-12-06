import type { WiFiVersion } from '@data';
import { Zap } from 'lucide-react';

interface Props {
  currentWiFi: WiFiVersion;
  isAnimating: boolean;
  dataPosition: number;
  startAnimation: () => void;
}

function SpeedAnimation(props: Props) {
  const { currentWiFi, isAnimating, dataPosition, startAnimation } = props;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-400" />
          Speed Demonstration: {currentWiFi.animalName}
        </h3>
        <button
          onClick={startAnimation}
          disabled={isAnimating}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            isAnimating
              ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
              : `${currentWiFi.color} text-white hover:opacity-90 transform hover:scale-105`
          }`}
        >
          {isAnimating ? 'Running...' : 'Start Race'}
        </button>
      </div>

      <div className="relative bg-slate-700 rounded-lg h-24 overflow-hidden border-2 border-slate-600">
        <div className="absolute left-0 top-0 h-full w-1 bg-green-500"></div>
        <div className="absolute right-0 top-0 h-full w-1 bg-red-500"></div>

        <div
          className="absolute top-1/2 transform -translate-y-1/2 transition-all text-5xl"
          style={{ left: `${dataPosition}%` }}
        >
          {currentWiFi.animal}
        </div>

        {/* Speed Lines */}
        {isAnimating && (
          <div className="absolute inset-0 flex items-center justify-around opacity-30">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-1 h-full bg-white animate-pulse"></div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between text-sm text-slate-400 mt-2">
        <span>Start</span>
        <span className="text-yellow-400">
          Transfer Speed: {currentWiFi.speed}
        </span>
        <span>Finish</span>
      </div>
    </div>
  );
}

export default SpeedAnimation;
