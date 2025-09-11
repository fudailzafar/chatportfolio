export function VideoDialog() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="hidden sm:block">
        <video
          src="/demo.mp4"
          autoPlay
          loop
          muted
          className="rounded-xl w-[1200px] mx-auto shadow-lg"
        />
      </div>
      <div className="block sm:hidden">
        <video
          src="/demo.mp4"
          autoPlay
          loop
          muted
          className="rounded-xl w-11/12 max-w-xl mx-auto shadow-lg"
        />
      </div>
    </div>
  );
}
