import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const ChartSection = ({ data }) => {
  const [activeChart, setActiveChart] = useState('followers');

  // Simple Line Chart Component
  const LineChart = ({ data, dataKey, color }) => {
    const maxValue = Math.max(...data.map(d => d[dataKey] || 0));
    const minValue = Math.min(...data.map(d => d[dataKey] || 0));
    const range = maxValue - minValue;

    return (
      <div className="h-64 flex items-end justify-between px-4 py-8 space-x-2">
        {data.map((item, index) => {
          const height = range > 0 ? ((item[dataKey] - minValue) / range) * 200 : 100;
          return (
            <div key={index} className="flex flex-col items-center space-y-2 flex-1">
              <div 
                className="w-full bg-gradient-to-t rounded-t-lg transition-all duration-1000 ease-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ 
                  height: `${height}px`,
                  backgroundImage: `linear-gradient(to top, ${color}, ${color}88)`
                }}
              />
              <div className="text-xs font-semibold text-gray-600">
                {item.month}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Simple Bar Chart Component
  const BarChart = ({ data, color }) => {
    const maxRate = Math.max(...data.map(d => d.rate));
    
    return (
      <div className="space-y-3 p-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-20 text-sm font-semibold text-gray-700 text-right">
              {item.platform}
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-1000 ease-out shadow-sm flex items-center justify-end pr-2"
                style={{ 
                  backgroundColor: color,
                  width: `${(item.rate / maxRate) * 100}%`
                }}
              >
                <span className="text-white text-xs font-bold">
                  {item.rate}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Simple Pie Chart Component (Donut style)
  const DonutChart = ({ data, title }) => {
    let cumulativePercentage = 0;
    const colors = ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'];
    
    return (
      <div className="flex items-center justify-center space-x-8 p-4">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {data.map((item, index) => {
              const strokeDasharray = `${item.percentage} ${100 - item.percentage}`;
              const strokeDashoffset = -cumulativePercentage;
              const currentCumulative = cumulativePercentage;
              cumulativePercentage += item.percentage;
              
              return (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="15.915494309"
                  fill="transparent"
                  stroke={colors[index % colors.length]}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-1000 ease-out"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                  }}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-black text-gray-800">{title}</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div 
                className="w-4 h-4 rounded-full shadow-sm"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              <div className="text-sm">
                <span className="font-semibold">{item.group || item.country}</span>
                <span className="text-gray-500 ml-2">{item.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span className="text-lg font-black text-gray-800">Follower Growth</span>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="snapchat" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-4">
              <TabsTrigger value="snapchat" className="text-xs">👻</TabsTrigger>
              <TabsTrigger value="instagram" className="text-xs">📷</TabsTrigger>
              <TabsTrigger value="tiktok" className="text-xs">🎵</TabsTrigger>
              <TabsTrigger value="twitter" className="text-xs">🐦</TabsTrigger>
              <TabsTrigger value="facebook" className="text-xs">👥</TabsTrigger>
            </TabsList>
            
            <TabsContent value="snapchat">
              <LineChart data={data.followerGrowth} dataKey="snapchat" color="#FFFC00" />
            </TabsContent>
            <TabsContent value="instagram">
              <LineChart data={data.followerGrowth} dataKey="instagram" color="#E4405F" />
            </TabsContent>
            <TabsContent value="tiktok">
              <LineChart data={data.followerGrowth} dataKey="tiktok" color="#000000" />
            </TabsContent>
            <TabsContent value="twitter">
              <LineChart data={data.followerGrowth} dataKey="twitter" color="#1DA1F2" />
            </TabsContent>
            <TabsContent value="facebook">
              <LineChart data={data.followerGrowth} dataKey="facebook" color="#4267B2" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-pink-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span className="text-lg font-black text-gray-800">Engagement Rates</span>
            <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full animate-pulse" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart data={data.engagementRates} color="#EC4899" />
        </CardContent>
      </Card>

      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span className="text-lg font-black text-gray-800">Age Demographics</span>
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full animate-pulse" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <DonutChart data={data.demographics.ageGroups} title="Ages" />
        </CardContent>
      </Card>

      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span className="text-lg font-black text-gray-800">Geographic Distribution</span>
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <DonutChart data={data.demographics.locations} title="Locations" />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartSection;