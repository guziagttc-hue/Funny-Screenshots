import { Facebook } from 'lucide-react';

interface HeroProps {
  language: 'bn' | 'en';
  t: any;
}

export default function Hero({ language, t }: HeroProps) {
  return (
    <section className="h-[260px] bg-gradient-to-br from-blue-600 to-cyan-400 dark:from-blue-900 dark:to-cyan-900 text-white flex flex-col justify-center items-center text-center px-16 transition-colors duration-300">
      <h2 className="text-[42px] font-bold mb-3.5 tracking-tighter">{t.heroTitle}</h2>
      <p className="text-[18px] max-w-2xl opacity-90 leading-tight mb-6">
        {t.heroDescription.split('\n').map((line: string, i: number) => (
            <span key={i}>{line}<br /></span>
        ))}
      </p>
      <a href="https://www.facebook.com/share/p/1D27GThZsj/" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-7 py-3 rounded-full font-bold text-[16px] shadow-[0_4px_15px_rgba(255,152,0,0.3)]">
        <Facebook className="inline mr-2" size={16} /> {t.heroButton}
      </a>
    </section>
  );
}
