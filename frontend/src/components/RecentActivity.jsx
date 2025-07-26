import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Clock, TrendingUp, Eye, Heart } from 'lucide-react';

const RecentActivity = ({ posts }) => {
  const getPlatformColor = (platform) => {
    const colors = {
      snapchat: '#FFFC00',
      instagram: '#E4405F',
      tiktok: '#000000',
      twitter: '#1DA1F2',
      facebook: '#4267B2'
    };
    return colors[platform] || '#6B7280';
  };

  const getPlatformIcon = (platform) => {
    const icons = {
      snapchat: '👻',
      instagram: '📷',
      tiktok: '🎵',
      twitter: '🐦',
      facebook: '👥'
    };
    return icons[platform] || '📱';
  };

  const getTypeIcon = (type) => {
    const icons = {
      story: '📖',
      post: '📝',
      video: '🎥',
      tweet: '💬'
    };
    return icons[type] || '📄';
  };

  return (
    <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span className="text-xl font-black text-gray-800">Recent Activity</span>
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex-shrink-0">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  style={{ backgroundColor: getPlatformColor(post.platform) }}
                >
                  {getPlatformIcon(post.platform)}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <Badge 
                    variant="secondary" 
                    className="text-xs font-semibold"
                    style={{ 
                      backgroundColor: `${getPlatformColor(post.platform)}20`,
                      color: getPlatformColor(post.platform)
                    }}
                  >
                    {post.platform.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {getTypeIcon(post.type)} {post.type}
                  </Badge>
                </div>
                
                <p className="text-sm text-gray-800 font-medium mb-2 line-clamp-2">
                  {post.content}
                </p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.timestamp}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-3 w-3 text-pink-500" />
                    <span className="font-semibold">{post.engagement.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-3 w-3 text-blue-500" />
                    <span className="font-semibold">{post.reach.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="text-right">
                  <div className="text-xs text-gray-400 mb-1">Performance</div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-semibold text-green-600">
                      {((post.engagement / post.reach) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200">
            View All Activities →
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;