
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
        return <Shield className="w-12 h-12 text-[#7E69AB]" />;
      case 'gift':
        return <Gift className="w-12 h-12 text-[#9b87f5]" />;
      case 'target':
        return <Target className="w-12 h-12 text-[#6E59A5]" />;
    }
  };

  return (
    <Card
      onClick={() => navigate(route)}
      className="p-6 text-center cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in bg-white border-2 border-[#E5DEFF] rounded-xl"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full p-4 bg-[#D6BCFA]/20">
          {getIcon()}
        </div>
        <h2 className="text-2xl font-semibold text-[#1A1F2C]">{title}</h2>
        <p className="text-lg text-[#8E9196] mb-4 text-center">{description}</p>
        <span className="text-base font-medium text-[#8B5CF6] hover:text-[#6E59A5]">
          Tap to select
        </span>
      </div>
    </Card>
  );
};

export default NavigationCard;
