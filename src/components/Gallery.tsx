interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <section className="px-10 py-10 flex-grow">
      <h3 className="text-[22px] font-bold mb-6 text-gray-900 flex items-center gap-2.5">
        <span className="text-2xl">🖼️</span> সেরা কিছু নমুনা
      </h3>
      <div className="grid grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1">
            <img src={src} alt={`মজার স্ক্রিনশট ${index + 1}`} className="w-full h-[180px] object-cover" />
            <div className="p-4 text-[14px] font-bold text-gray-800 bg-white">মজার স্ক্রিনশট {index + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
