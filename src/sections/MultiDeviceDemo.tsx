import { useState } from 'react';
import type { WiFiVersion, WIFI_VERSIONS } from '@data';
import { Users } from 'lucide-react';

interface Props {
  selectedWiFi: WIFI_VERSIONS;
  currentWiFi: WiFiVersion;
}

function MultiDeviceDemo(props: Props) {
  const { selectedWiFi, currentWiFi } = props;

  const [deviceCount, setDeviceCount] = useState(1);
  const renderDevices = () => {
    const devices = [];
    for (let i = 0; i < deviceCount; i++) {
      devices.push(
        <div key={i} className="text-2xl opacity-80">
          📱
        </div>
      );
    }
    return devices;
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <Users className="w-6 h-6 text-blue-400" />
        Multi-Device Performance
      </h3>
      <div className="flex items-center gap-4 mb-4">
        <label className="text-white font-semibold">Number of Devices:</label>
        <input
          type="range"
          min="1"
          max="32"
          value={deviceCount}
          onChange={(e) => setDeviceCount(Number(e.target.value))}
          className="flex-1 h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer"
        />
        <span className="text-white font-bold text-xl w-12">{deviceCount}</span>
      </div>
      <div className="bg-slate-700 rounded-lg p-6 border-2 border-slate-600">
        <div className="flex flex-wrap gap-3 justify-center mb-4">
          {renderDevices()}
        </div>
        <div className="text-center">
          <div className={`text-lg font-semibold ${currentWiFi.textColor}`}>
            Efficiency:{' '}
            {selectedWiFi === 'wifi6'
              ? 'Good'
              : selectedWiFi === 'wifi7'
              ? 'Excellent'
              : 'Outstanding'}
          </div>
          <div className="text-slate-400 text-sm mt-2">
            {selectedWiFi === 'wifi6' &&
              'OFDMA helps manage multiple devices efficiently'}
            {selectedWiFi === 'wifi7' &&
              'Multi-Link Operation dramatically improves multi-device performance'}
            {selectedWiFi === 'wifi8' &&
              'AI-optimized routing ensures perfect coordination across all devices'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiDeviceDemo;
