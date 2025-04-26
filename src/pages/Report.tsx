
import { Card } from "@/components/ui/card";

const Report = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Report an Issue</h1>
          <p className="text-xl text-gray-700">Help keep our community safe</p>
        </div>

        <Card className="p-6 bg-white border-2 border-gray-200 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-blue-700">Make a Report</h2>
            <p className="text-gray-600">Coming soon: Submit concerns or issues here</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Report;
