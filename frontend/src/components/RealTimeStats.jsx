import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Activity, Users, Eye, TrendingUp } from 'lucide-react';

const RealTimeStats = ({ data }) => {
  return (
    <Card className="border-0 shadow-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-blue-500/20 to-purple-600/20 animate-pulse" />
      <CardContent className="relative z-10 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-lg font-black">Live Statistics</span>
          </div>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            <Activity className="w-3 h-3 mr-1" />
            LIVE
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-1">
              <Eye className="h-4 w-4" />
              <span className="text-sm font-medium">Live Viewers</span>
            </div>
            <div className="text-3xl font-black">
              {data.liveViewers}
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-1">
              <Activity className="h-4 w-4" />
              <span className="text-sm font-medium">Active Stories</span>
            </div>
            <div className="text-3xl font-black">
              {data.activeStories}
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-1">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">New Followers</span>
            </div>
            <div className="text-3xl font-black">
              +{data.newFollowersToday}
            </div>
            <div className="text-xs opacity-75">today</div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-1">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Engagement</span>
            </div>
            <div className="text-3xl font-black">
              {data.todayEngagement.toLocaleString()}
            </div>
            <div className="text-xs opacity-75">today</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealTimeStats;