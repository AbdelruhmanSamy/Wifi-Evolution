import type { WiFiVersion } from '@data';

interface Props {
  currentWiFi: WiFiVersion;
}

function KeyFeatures(props: Props) {
  const { currentWiFi } = props;

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
      <div className="grid grid-cols-2 gap-3">
        {currentWiFi.features.map((feature, index) => (
          <div
            key={index}
            className={`${currentWiFi.bgLight} ${currentWiFi.borderColor} border-2 rounded-lg p-3 transform transition-all hover:scale-105`}
          >
            <div className={`font-semibold ${currentWiFi.textColor}`}>
              ✓ {feature}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyFeatures;
