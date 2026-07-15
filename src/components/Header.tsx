import { Facebook, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export default function Header({ toggleTheme, isDarkMode }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] z-10 h-[70px] flex items-center px-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <img src="https://res.cloudinary.com/djginu4oz/image/upload/v1784111630/Gemini_Generated_Image_3vbbl3vbbl3vbbl3_p2ssrx.png" alt="Logo" className="w-12 h-12 rounded-xl object-cover shadow-sm" />
          <div>
            <h1 className="text-[24px] font-extrabold text-gray-900 tracking-tight">ফানি স্ক্রিনশট</h1>
            <p className="text-[11px] text-blue-600 font-bold uppercase tracking-[0.2em]">হাসির ডালি</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[13px] font-semibold text-gray-600">
          <span className="text-gray-400">ডার্ক মোড</span>
          <button onClick={toggleTheme} className="w-12 h-6 bg-gray-200 rounded-full relative transition-colors duration-300">
            <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-all duration-300 ${isDarkMode ? 'left-6.5' : 'left-0.5'}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
