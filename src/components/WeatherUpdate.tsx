import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Sun, 
  Snow, 
  Wind, 
  MapPin, 
  Thermometer,
  Droplet,
  Compass,
  CloudRain,
  CloudSnow,
  CloudLightning
} from 'lucide-react';

interface WeatherData {
  date: string;
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  precipitation: number;
  icon: React.ComponentType<{ className?: string }>;
}

const WeatherUpdate: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const coordinates = {
    lat: 17.77260579661732,
    lon: 106.05051040315276
  };

  // Mock weather data (replace with actual API call)
  const mockWeatherData: WeatherData[] = [
    {
      date: '27/3/2025',
      temp: 28,
      condition: 'Sunny',
      humidity: 65,
      windSpeed: 10,
      windDirection: 'SE',
      precipitation: 0,
      icon: Sun
    },
    {
      date: '28/3/2025',
      temp: 27,
      condition: 'Partly Cloudy',
      humidity: 70,
      windSpeed: 8,
      windDirection: 'E',
      precipitation: 20,
      icon: Cloud
    },
    {
      date: '29/3/2025',
      temp: 26,
      condition: 'Cloudy',
      humidity: 75,
      windSpeed: 7,
      windDirection: 'NE',
      precipitation: 30,
      icon: Cloud
    },
    {
      date: '30/3/2025',
      temp: 25,
      condition: 'Rain',
      humidity: 80,
      windSpeed: 6,
      windDirection: 'N',
      precipitation: 70,
      icon: CloudRain
    }
  ];

  useEffect(() => {
    // Simulate API call with mock data
    setTimeout(() => {
      setWeatherData(mockWeatherData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 text-center">
        <AlertTriangle className="w-6 h-6 inline-block mr-2" />
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2">Dự Báo Thời Tiết</h3>
        <p className="text-gray-600">Vị trí: 17.772606, 106.050510</p>
        <div className="flex justify-center space-x-4 mt-2">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 text-purple-600 mr-1" />
            <span className="text-sm text-gray-500">Phong Nha - Tú Làn</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {weatherData.map((day, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">{day.date}</h4>
              <div className="flex items-center space-x-2">
                <day.icon className="w-8 h-8 text-purple-600" />
                <span className="text-2xl font-bold text-purple-600">{day.temp}°C</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Thermometer className="w-5 h-5 text-red-500" />
                  <span className="text-sm">Nhiệt độ: {day.temp}°C</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Droplet className="w-5 h-5 text-blue-500" />
                  <span className="text-sm">Độ ẩm: {day.humidity}%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wind className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm">Gió: {day.windSpeed}km/h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Compass className="w-5 h-5 text-gray-500" />
                  <span className="text-sm">Hướng: {day.windDirection}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CloudRain className="w-5 h-5 text-gray-500" />
                  <span className="text-sm">Mưa: {day.precipitation}%</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-600">
                  {day.condition === 'Sunny' && 'Trời nắng, thích hợp cho hoạt động ngoài trời'}
                  {day.condition === 'Partly Cloudy' && 'Trời nhiều mây, cần chuẩn bị đồ mưa'}
                  {day.condition === 'Cloudy' && 'Trời nhiều mây, có thể có mưa'}
                  {day.condition === 'Rain' && 'Trời mưa, cần chuẩn bị đồ mưa'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherUpdate;
