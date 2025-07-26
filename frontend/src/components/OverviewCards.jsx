import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, TrendingUp, Eye, Heart } from 'lucide-react';

const OverviewCards = ({ data }) => {
  const cards = [
    {
      title: "Total Followers",
      value: data.totalFollowers,
      icon: Users,
      gradient: "from-purple-500 to-purple-700",
      bgGradient: "from-purple-50 to-purple-100",
      change: "+12.5%"
    },
    {
      title: "Avg Engagement Rate",
      value: `${data.totalEngagement}%`,
      icon: Heart,
      gradient: "from-pink-500 to-pink-700", 
      bgGradient: "from-pink-50 to-pink-100",
      change: "+8.2%"
    },
    {
      title: "Total Reach",
      value: data.totalReach,
      icon: Eye,
      gradient: "from-yellow-500 to-yellow-700",
      bgGradient: "from-yellow-50 to-yellow-100", 
      change: "+15.8%"
    },
    {
      title: "Total Impressions",
      value: data.totalImpressions,
      icon: TrendingUp,
      gradient: "from-green-500 to-green-700",
      bgGradient: "from-green-50 to-green-100",
      change: "+22.1%"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <Card key={index} className={`border-0 shadow-xl bg-gradient-to-br ${card.bgGradient} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">
                {card.title}
              </CardTitle>
              <div className={`p-2 rounded-lg bg-gradient-to-r ${card.gradient} shadow-lg`}>
                <Icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-black text-gray-800 mb-1">
                {typeof card.value === 'number' ? card.value.toLocaleString() : card.value}
              </div>
              <div className="flex items-center text-xs">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-600 font-semibold">{card.change}</span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default OverviewCards;