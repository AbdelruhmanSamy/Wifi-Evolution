import { Gauge, Radio, Layers, Zap } from 'lucide-react';
import type { WiFiVersion } from '@data';

interface Props {
  currentWiFi: WiFiVersion;
}

function StatesGrid(props: Props) {
  const { currentWiFi } = props;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div
        className={`${currentWiFi.bgLight} ${currentWiFi.borderColor} border-2 rounded-lg p-4`}
      >
        <div className="flex items-center gap-2 mb-2">
          <Gauge className={`w-5 h-5 ${currentWiFi.textColor}`} />
          <span className="font-semibold text-slate-700">Max Speed</span>
        </div>
        <div className={`text-2xl font-bold ${currentWiFi.textColor}`}>
          {currentWiFi.speed}
        </div>
      </div>

      <div
        className={`${currentWiFi.bgLight} ${currentWiFi.borderColor} border-2 rounded-lg p-4`}
      >
        <div className="flex items-center gap-2 mb-2">
          <Radio className={`w-5 h-5 ${currentWiFi.textColor}`} />
          <span className="font-semibold text-slate-700">Frequency</span>
        </div>
        <div className={`text-xl font-bold ${currentWiFi.textColor}`}>
          {currentWiFi.frequency}
        </div>
      </div>

      <div
        className={`${currentWiFi.bgLight} ${currentWiFi.borderColor} border-2 rounded-lg p-4`}
      >
        <div className="flex items-center gap-2 mb-2">
          <Layers className={`w-5 h-5 ${currentWiFi.textColor}`} />
          <span className="font-semibold text-slate-700">Channel Width</span>
        </div>
        <div className={`text-xl font-bold ${currentWiFi.textColor}`}>
          {currentWiFi.channelWidth}
        </div>
      </div>

      <div
        className={`${currentWiFi.bgLight} ${currentWiFi.borderColor} border-2 rounded-lg p-4`}
      >
        <div className="flex items-center gap-2 mb-2">
          <Zap className={`w-5 h-5 ${currentWiFi.textColor}`} />
          <span className="font-semibold text-slate-700">Latency</span>
        </div>
        <div className={`text-xl font-bold ${currentWiFi.textColor}`}>
          {currentWiFi.latency}
        </div>
      </div>
    </div>
  );
}

export default StatesGrid;
