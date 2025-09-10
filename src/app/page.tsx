import { HeroNew } from "@/components/hero";
import { VideoDialog } from "@/components/VideoDialog";

const KeyFilesSection = () => (
  <div className="px-8 py-8">
    <div className="flex gap-4 flex-wrap mt-4">
      <a
        href="https://docs.tambo.co"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-md font-medium transition-colors text-lg mt-4 border border-gray-300 hover:bg-gray-50"
      >
        View Docs
      </a>
      <a
        href="https://tambo.co/dashboard"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-md font-medium transition-colors text-lg mt-4 border border-gray-300 hover:bg-gray-50"
      >
        Dashboard
      </a>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <HeroNew />
      <VideoDialog />
      <div className="flex items-center justify-center">
        <KeyFilesSection />
      </div>
    </>
  );
}
