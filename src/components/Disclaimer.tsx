import { useState } from 'react';
import { TriangleAlert } from 'lucide-react';

const disclaimerOptions = [
  {
    title: 'সবচেয়ে নিরাপদ ও স্ট্যান্ডার্ড (The Standard Professional)',
    text: 'এই পেজে শেয়ার করা সমস্ত কন্টেন্ট, বিশেষ করে চ্যাট স্ক্রিনশট এবং ইনবক্সের গল্পগুলো শুধুমাত্র আপনাদের মুখে হাসি ফোটানো এবং বিনোদনের উদ্দেশ্যে তৈরি বা সংগ্রহ করা হয়েছে। আমাদের উদ্দেশ্য কাউকে ব্যক্তিগতভাবে আঘাত করা, অপমান করা, সামাজিক বা মানসিকভাবে ছোট করা নয়। দয়া করে সমস্ত কন্টেন্টকে শুধুমাত্র মজার ছলে গ্রহণ করবেন। ধন্যবাদ।'
  },
  {
    title: 'একটু রসাত্মক (The Funny/Meme Tone)',
    text: 'সতর্কতা: এই পেজে প্রবেশের পর যদি আপনি অতিরিক্ত হাসির কারণে পেট ব্যথায় ভোগেন, তার জন্য কর্তৃপক্ষ দায়ী নয়। 😂 দয়া করে নোট করুন, এখানকার সমস্ত কন্টেন্ট কাল্পনিক বা শুধুমাত্র বিনোদনের জন্য। সিরিয়াস মানুষরা নিজের ঝুঁকিতে প্রবেশ করুন। আমরা কাউকে দুঃখ দেওয়ার জন্য নয়, বরং সারাদিনের ক্লান্তি দূর করতে হাসাতে এসেছি।'
  },
  {
    title: 'শিক্ষকের ডিসক্লেমার (The Tech Teacher\'s Tone)',
    text: 'দিনের বেলা আমি কম্পিউটারের \'Error\' ধরা আর কোডিং শেখাতে ব্যস্ত থাকি, আর অবসরে আপনাদের বিনোদনের জন্য এই পেজে মজার কিছু \'Funny Screenshots\' নিয়ে আসি। আমি বিশ্বাস করি মানুষের মুখের হাসি হলো পৃথিবীর সবচেয়ে দামী \'Software\'. এখানকার সমস্ত কন্টেন্টকে শুধুমাত্র বিনোদন হিসেবে নিন এবং কারো ক্ষতি না করে সবাই মিলে হাসি।'
  },
  {
    title: 'ছোট ও সংক্ষিপ্ত (The Short & Sweet)',
    text: 'নোট: এই পেজের সমস্ত কন্টেন্ট শুধুমাত্র বিনোদনের উদ্দেশ্যে। দয়া করে কেউ সিরিয়াসলি নেবেন না। আমাদের উদ্দেশ্য শুধুই হাসানো।'
  }
];

interface DisclaimerProps {
  language: 'bn' | 'en';
  t: any;
}

export default function Disclaimer({ language, t }: DisclaimerProps) {
  const [selected, setSelected] = useState(2); // Default to Teacher's Tone

  return (
    <div className="bg-[#fff3cd] dark:bg-[#4d3a00] border border-[#ffeeba] dark:border-[#7a6500] mx-10 my-5 p-4 rounded-xl transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
            <TriangleAlert className="text-[#856404] dark:text-[#f8d775]" size={24} />
            <select 
                value={selected} 
                onChange={(e) => setSelected(Number(e.target.value))}
                className="bg-transparent font-semibold text-[#856404] dark:text-[#f8d775] text-[16px] border-none focus:ring-0 cursor-pointer"
            >
                {disclaimerOptions.map((option, index) => (
                    <option key={index} value={index}>{option.title}</option>
                ))}
            </select>
        </div>
      </div>
      <p className="text-[#856404] dark:text-[#f8d775] text-[13px] opacity-80 mt-1">{disclaimerOptions[selected].text}</p>
    </div>
  );
}
