import Portfolio from "./components/portfolio";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8">
        <div className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 rounded-2xl">
          <Portfolio />
        </div>
      </div>
    </div>
  );
}
