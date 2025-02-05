export default function HeroComponent() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center bg-black py-32">


      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
        >
          <source src="" type="video/mp4" />

        </video>
      </div>

      <h1 className="text-5xl font-bold text[#f5f5dc] z-10">Video qui</h1>
      <div>
        <button className="mt-50 px-6 py-3 bg-[#a0522d] text-[#f5f5dc] rounded-lg shadow-lg hover:bg-opacity-80 z-10">
          scopri di più
        </button>
      </div>
    </div>
  );
}