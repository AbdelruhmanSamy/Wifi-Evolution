import type { WiFiVersion, WIFI_VERSIONS } from '@data';

interface Props {
  wifiVersions: Record<WIFI_VERSIONS, WiFiVersion>;
}

function ComparisonChart(props: Props) {
  const { wifiVersions } = props;

  return (
    <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Speed Comparison
      </h3>
      <div className="space-y-4">
        {Object.entries(wifiVersions).map(([key, wifi]) => (
          <div key={key} className="flex items-center gap-4">
            <div className="w-32 text-white font-semibold flex items-center gap-2">
              <span className="text-2xl">{wifi.animal}</span>
              <span className="text-sm">{wifi.name.split(' ')[0]}</span>
            </div>
            <div className="flex-1 bg-slate-700 rounded-full h-12 overflow-hidden border border-slate-600">
              <div
                className={`${wifi.color} h-full flex items-center justify-end pr-4 text-white font-bold transition-all duration-1000`}
                style={{ width: `${(wifi.speedValue / 100) * 100}%` }}
              >
                {wifi.speed}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComparisonChart;
