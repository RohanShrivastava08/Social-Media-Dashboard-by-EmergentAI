import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, Users } from 'lucide-react';

const PlatformCards = ({ platforms }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {Object.entries(platforms).map(([key, platform]) => (
        <Card 
          key={key} 
          className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 group cursor-pointer"
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: platform.color }}
                >
                  {platform.icon}
                </div>
                <div>
                  <CardTitle className="text-sm font-bold text-gray-800">
                    {platform.name}
                  </CardTitle>
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-gradient-to-r from-gray-100 to-gray-200"
                  >
                    Active
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Users className="h-3 w-3 text-gray-500" />
                <span className="text-xs text-gray-500">Followers</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-black" style={{color: platform.color}}>
                  {(platform.followers / 1000).toFixed(0)}K
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <TrendingUp className="h-3 w-3 text-gray-500" />
                <span className="text-xs text-gray-500">Engagement</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-black" style={{color: platform.color}}>
                  {platform.engagement}%
                </div>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-1000 ease-out shadow-sm"
                style={{ 
                  backgroundColor: platform.color,
                  width: `${Math.min(platform.engagement * 7, 100)}%`
                }}
              />
            </div>

            <div className="pt-2 border-t border-gray-100">
              <div className="text-xs text-gray-600 text-center">
                <span className="font-semibold">{platform.reach.toLocaleString()}</span> reach this week
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PlatformCards;