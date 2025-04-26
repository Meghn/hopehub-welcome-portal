
import NavigationCard from '@/components/NavigationCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            HopeHub
          </h1>
          <p className="text-xl text-gray-700">
            Hi Friend! Tap any box below to get started
          </p>
        </div>

        <div className="space-y-4">
          <NavigationCard
            icon="shield"
            title="Report Something"
            description="Help keep everyone safe by letting us know if you see anything wrong."
            route="/report"
          />
          <NavigationCard
            icon="gift"
            title="Find Work"
            description="See what jobs are available near you today."
            route="/work"
          />
          <NavigationCard
            icon="target"
            title="My Points"
            description="See what you've earned and what you can get."
            route="/points"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
