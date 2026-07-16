import { Facebook } from 'lucide-react';

export default function Hero() {
  return (
    <section className="h-[260px] bg-gradient-to-br from-blue-600 to-cyan-400 text-white flex flex-col justify-center items-center text-center px-16">
      <h2 className="text-[42px] font-bold mb-3.5 tracking-tighter">ক্লাসের সিরিয়াস মোড</h2>
      <p className="text-[18px] max-w-2xl opacity-90 leading-tight mb-6">
        বিরতি! 😂 <br />
        আমি একজন কম্পিউটার শিক্ষক, কিন্তু বিশ্বাস করি হাসির চেয়ে বড় কোনো সফটওয়্যার নেই। এখানে পাবেন ইন্টারনেটের দুনিয়ার সবচেয়ে মজার সব ইনবক্স ও চ্যাট স্ক্রিনশট।
      </p>
      <a href="https://www.facebook.com/share/p/1D27GThZsj/" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-7 py-3 rounded-full font-bold text-[16px] shadow-[0_4px_15px_rgba(255,152,0,0.3)]">
        <Facebook className="inline mr-2" size={16} /> ফেসবুক পেজে যোগ দিন
      </a>
    </section>
  );
}
