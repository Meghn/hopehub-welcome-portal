
import { Card } from "@/components/ui/card";

const Points = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">My Points</h1>
          <p className="text-xl text-gray-700">Track your progress and rewards</p>
        </div>
        
        <Card className="p-6 bg-white border-2 border-gray-200 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-emerald-700">0 Points</h2>
            <p className="text-gray-600">Complete tasks to earn points!</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Points;
