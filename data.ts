export type WiFiVersion = {
  name: string;
  speed: string;
  speedValue: number;
  animal: string;
  animalName: string;
  color: string;
  borderColor: string;
  textColor: string;
  bgLight: string;
  frequency: string;
  channelWidth: string;
  latency: string;
  features: string[];
  animationSpeed: number;
};

export type WIFI_VERSIONS = 'wifi6' | 'wifi7' | 'wifi8';

export const wifiVersions: Record<WIFI_VERSIONS, WiFiVersion> = {
  wifi6: {
    name: 'WiFi 6 (802.11ax)',
    speed: '9.6 Gbps',
    speedValue: 9.6,
    animal: '🐢',
    animalName: 'Turtle',
    color: 'bg-blue-500',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-600',
    bgLight: 'bg-blue-50',
    frequency: '2.4/5 GHz',
    channelWidth: '160 MHz',
    latency: '20-30 ms',
    features: ['OFDMA', 'MU-MIMO 8x8', 'Target Wake Time', '1024-QAM'],
    animationSpeed: 3000,
  },
  wifi7: {
    name: 'WiFi 7 (802.11be)',
    speed: '46 Gbps',
    speedValue: 46,
    animal: '🐰',
    animalName: 'Rabbit',
    color: 'bg-purple-500',
    borderColor: 'border-purple-500',
    textColor: 'text-purple-600',
    bgLight: 'bg-purple-50',
    frequency: '2.4/5/6 GHz',
    channelWidth: '320 MHz',
    latency: '5-10 ms',
    features: [
      'Multi-Link Operation',
      'MU-MIMO 16x16',
      '4096-QAM',
      '320 MHz Channels',
    ],
    animationSpeed: 600,
  },
  wifi8: {
    name: 'WiFi 8 (802.11bn)',
    speed: '100+ Gbps',
    speedValue: 100,
    animal: '🐆',
    animalName: 'Cheetah',
    color: 'bg-emerald-500',
    borderColor: 'border-emerald-500',
    textColor: 'text-emerald-600',
    bgLight: 'bg-emerald-50',
    frequency: '2.4/5/6/7 GHz',
    channelWidth: '320+ MHz',
    latency: '1-2 ms',
    features: [
      'AI-Optimized Routing',
      'Coordinated Spatial Reuse',
      'Advanced MLO',
      'Ultra-Reliable Low Latency',
    ],
    animationSpeed: 200,
  },
};
