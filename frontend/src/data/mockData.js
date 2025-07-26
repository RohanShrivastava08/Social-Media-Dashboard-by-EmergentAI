export const mockAnalytics = {
  overview: {
    totalFollowers: 1247832,
    totalEngagement: 8.7,
    totalReach: 892456,
    totalImpressions: 1534782
  },
  platforms: {
    snapchat: {
      name: "Snapchat",
      color: "#FFFC00",
      icon: "👻",
      followers: 345678,
      engagement: 9.2,
      reach: 298456,
      stories: 1234,
      views: 567890
    },
    instagram: {
      name: "Instagram", 
      color: "#E4405F",
      icon: "📷",
      followers: 456789,
      engagement: 7.8,
      reach: 389012,
      posts: 234,
      likes: 123456
    },
    tiktok: {
      name: "TikTok",
      color: "#000000",
      icon: "🎵", 
      followers: 234567,
      engagement: 12.4,
      reach: 145678,
      videos: 89,
      views: 890123
    },
    twitter: {
      name: "Twitter",
      color: "#1DA1F2",
      icon: "🐦",
      followers: 123456,
      engagement: 5.6,
      reach: 89012,
      tweets: 567,
      retweets: 12345
    },
    facebook: {
      name: "Facebook",
      color: "#4267B2", 
      icon: "👥",
      followers: 87342,
      engagement: 6.3,
      reach: 67890,
      posts: 123,
      reactions: 34567
    }
  },
  chartData: {
    followerGrowth: [
      { month: 'Jan', snapchat: 320000, instagram: 400000, tiktok: 200000, twitter: 110000, facebook: 80000 },
      { month: 'Feb', snapchat: 325000, instagram: 420000, tiktok: 210000, twitter: 115000, facebook: 82000 },
      { month: 'Mar', snapchat: 330000, instagram: 440000, tiktok: 220000, twitter: 118000, facebook: 84000 },
      { month: 'Apr', snapchat: 335000, instagram: 450000, tiktok: 225000, twitter: 120000, facebook: 85000 },
      { month: 'May', snapchat: 340000, instagram: 455000, tiktok: 230000, twitter: 122000, facebook: 86000 },
      { month: 'Jun', snapchat: 345678, instagram: 456789, tiktok: 234567, twitter: 123456, facebook: 87342 }
    ],
    engagementRates: [
      { platform: 'TikTok', rate: 12.4 },
      { platform: 'Snapchat', rate: 9.2 },
      { platform: 'Instagram', rate: 7.8 },
      { platform: 'Facebook', rate: 6.3 },
      { platform: 'Twitter', rate: 5.6 }
    ],
    demographics: {
      ageGroups: [
        { group: '13-17', percentage: 15 },
        { group: '18-24', percentage: 35 },
        { group: '25-34', percentage: 28 },
        { group: '35-44', percentage: 15 },
        { group: '45+', percentage: 7 }
      ],
      locations: [
        { country: 'United States', percentage: 40 },
        { country: 'United Kingdom', percentage: 15 },
        { country: 'Canada', percentage: 12 },
        { country: 'Australia', percentage: 10 },
        { country: 'Germany', percentage: 8 },
        { country: 'Others', percentage: 15 }
      ]
    },
    recentPosts: [
      {
        id: 1,
        platform: 'snapchat',
        content: 'Behind the scenes of our latest campaign!',
        timestamp: '2 hours ago',
        engagement: 1240,
        reach: 15420,
        type: 'story'
      },
      {
        id: 2,
        platform: 'instagram',
        content: 'New product launch announcement 🚀',
        timestamp: '4 hours ago',
        engagement: 2340,
        reach: 28900,
        type: 'post'
      },
      {
        id: 3,
        platform: 'tiktok',
        content: 'Trending dance challenge video',
        timestamp: '6 hours ago',
        engagement: 5670,
        reach: 45200,
        type: 'video'
      },
      {
        id: 4,
        platform: 'twitter',
        content: 'Industry insights and thoughts on social media trends',
        timestamp: '8 hours ago',
        engagement: 890,
        reach: 12300,
        type: 'tweet'
      }
    ],
    realTimeMetrics: {
      liveViewers: 234,
      activeStories: 12,
      newFollowersToday: 156,
      todayEngagement: 2340
    }
  }
};

export const mockNotifications = [
  {
    id: 1,
    type: 'milestone',
    platform: 'snapchat',
    message: 'Congratulations! You reached 350K followers on Snapchat!',
    timestamp: '15 minutes ago',
    read: false
  },
  {
    id: 2,
    type: 'high_engagement',
    platform: 'instagram',
    message: 'Your latest post is performing 40% above average',
    timestamp: '1 hour ago',
    read: false
  },
  {
    id: 3,
    type: 'trend',
    platform: 'tiktok',
    message: 'Your video is trending in the Entertainment category',
    timestamp: '3 hours ago',
    read: true
  }
];