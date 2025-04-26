
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Gift, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface NavigationCardProps {
  icon: 'shield' | 'gift' | 'target';
  title: string;
  description: string;
  route: string;
}

const NavigationCard = ({ icon, title, description, route }: NavigationCardProps) => {
  const navigate = useNavigate();
  
  const getIcon = () => {
    switch (icon) {
      case 'shield':
        return <Shield className="w-12 h-12 text-blue-400" />;
      case 'gift':
        return <Gift className="w-12 h-12 text-pink-400" />;
      case 'target':
        return <Target className="w-12 h-12 text-green-400" />;
    }
  };

  return (
    <Card
      onClick={() => navigate(route)}
      className="p-8 text-center cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in bg-white/80 backdrop-blur-sm border border-gray-100"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full p-4 bg-gray-50">
          {getIcon()}
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="text-sm text-gray-500 hover:text-gray-700">Tap to select</span>
      </div>
    </Card>
  );
};

export default NavigationCard;
