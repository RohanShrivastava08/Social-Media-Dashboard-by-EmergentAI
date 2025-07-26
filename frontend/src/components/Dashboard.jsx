import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Bell, TrendingUp, Users, Eye, Heart, Share2 } from 'lucide-react';
import { mockAnalytics, mockNotifications } from '../data/mockData';
import OverviewCards from './OverviewCards';
import ChartSection from './ChartSection';
import PlatformCards from './PlatformCards';
import RecentActivity from './RecentActivity';
import RealTimeStats from './RealTimeStats';

const Dashboard = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [notifications, setNotifications] = useState(mockNotifications);
  const [realTimeData, setRealTimeData] = useState(mockAnalytics.chartData.realTimeMetrics);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        liveViewers: prev.liveViewers + Math.floor(Math.random() * 10) - 5,
        todayEngagement: prev.todayEngagement + Math.floor(Math.random() * 20),
        newFollowersToday: prev.newFollowersToday + Math.floor(Math.random() * 3)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 bg-clip-text text-transparent">
              Social Media Analytics
            </h1>
            <p className="text-gray-600 mt-2 text-lg">Your multi-platform social media performance dashboard</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                {notifications.filter(n => !n.read).length > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center animate-pulse">
                    {notifications.filter(n => !n.read).length}
                  </div>
                )}
              </Button>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-gray-500">Last updated</p>
              <p className="text-sm font-semibold">Just now</p>
            </div>
          </div>
        </div>

        {/* Real-time Stats Bar */}
        <RealTimeStats data={realTimeData} />

        {/* Overview Cards */}
        <OverviewCards data={mockAnalytics.overview} />

        {/* Platform Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg">
            <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              All Platforms
            </TabsTrigger>
            {Object.entries(mockAnalytics.platforms).map(([key, platform]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="data-[state=active]:text-white transition-all duration-300"
                style={{
                  '--active-bg': platform.color
                }}
                onSelect={() => setSelectedPlatform(key)}
              >
                <span className="mr-2">{platform.icon}</span>
                {platform.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="space-y-6 mt-6">
            <PlatformCards platforms={mockAnalytics.platforms} />
            <ChartSection data={mockAnalytics.chartData} />
            <RecentActivity posts={mockAnalytics.chartData.recentPosts} />
          </TabsContent>

          {Object.entries(mockAnalytics.platforms).map(([key, platform]) => (
            <TabsContent key={key} value={key} className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Followers</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold" style={{color: platform.color}}>
                      {platform.followers.toLocaleString()}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                    <Heart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold" style={{color: platform.color}}>
                      {platform.engagement}%
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Reach</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold" style={{color: platform.color}}>
                      {platform.reach.toLocaleString()}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Content</CardTitle>
                    <Share2 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold" style={{color: platform.color}}>
                      {platform.posts || platform.stories || platform.videos || platform.tweets || 0}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;