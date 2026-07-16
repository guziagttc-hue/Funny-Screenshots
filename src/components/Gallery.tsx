interface GalleryProps {
  images: string[];
  language: 'bn' | 'en';
  t: any;
}

export default function Gallery({ images, language, t }: GalleryProps) {
  return (
    <section className="px-10 py-10 flex-grow">
      <h3 className="text-[22px] font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-2.5 transition-colors duration-300">
        <span className="text-2xl">🖼️</span> {t.galleryTitle}
      </h3>
      <div className="grid grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="bg-white dark:bg-[#2d2d2d] rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-300 transform hover:-translate-y-1">
            <img src={src} alt={`${t.galleryItem} ${index + 1}`} className="w-full h-[180px] object-cover" />
            <div className="p-4 text-[14px] font-bold text-gray-800 dark:text-gray-200 bg-white dark:bg-[#2d2d2d] transition-colors duration-300">
                {t.galleryItem} {index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
