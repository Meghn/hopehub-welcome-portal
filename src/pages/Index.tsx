
import NavigationCard from '@/components/NavigationCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] bg-fixed">
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            HopeHub
          </h1>
          <p className="text-lg text-gray-600">
            Hi Friend! Tap any box below to get started
          </p>
        </div>

        <div className="space-y-6">
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
