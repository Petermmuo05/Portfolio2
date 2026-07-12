import { FadeText } from "@/components/ui/fade-text";
import Image from "next/image";
import FilmPad2 from "./../../../public/filmpad2.webp";
import FilmPad3 from "./../../../public/filmpad3.webp";
import BlurFade from "@/components/ui/blur-fade";
import Link from "next/link";

export default function FilmPad() {
  return (
    <div className="flex flex-col gap-[70px] max-450:gap-[35px] max-lg:gap-[55px] max-800:gap-[41px] text-[#557174] px-[30px] max-sm:px-[1%]">
      <div className="flex w-full mt-[180px] max-800:mt-[130px] max-450:gap-4 justify-center max-lg:text-[90px] max-800:text-[67px] text-[120px] text-[#557174] leading-[90%] flex-col gap-10 max-lg:gap-7 max-800:gap-5">
        <div className="flex flex-col items-center max-sm:text-[50px] max-450:text-[40px] max-450:leading-[95%] gap-0 ">
          <FadeText
            direction="left"
            framerProps={{
              show: { transition: {} },
            }}
            text="FilmPad."
          />
        </div>
      </div>
      <div className="w-full flex justify-center max-sm:mt-[-10px]">
        <FadeText
          direction="up"
          className="text-gray-600 text-[22px] max-sm:text-[13px] "
          framerProps={{
            show: { transition: { delay: 0.07 } },
          }}
          text="Movie Discovery • Free Platform"
        />
      </div>

      <div className="flex justify-center w-full">
        <Link 
          href="https://filmpad.click" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#557174] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all font-semibold"
        >
          Visit FilmPad
        </Link>
      </div>

      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden flex justify-center bg-transparent"
        delay={0.2}
        inView
      >
        <video 
          src="/filmpad1.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full max-w-[800px] rounded-[20px]"
        />
      </BlurFade>
      
      <div className="w-[40%] mt-5 max-lg:w-[50%] max-800:w-[70%] max-450:w-[90%] text-[23px] max-800:text-[20px] max-sm:text-[17px] max-450:text-[15px] max-sm:w-full flex flex-col gap-10 max-800:gap-6 text-gray-600 mx-auto rounded-xl overflow-hidden">
        <p className="text-[48px] font-extrabold leading-[105%] max-800:text-[37px] max-sm:text-[30px] max-450:text-[27px] w-full text-center">
          The Problem
        </p>
        <p className="font-serif text-gray-600">
          Movie lovers struggle to track and save the endless stream of film recommendation videos they see on TikTok, making finding and remembering these recommended movies tedious and disorganized.
        </p>
        <p className="font-serif text-gray-600">
          To address this, I developed FilmPad, a free platform that identifies movies from TikTok recommendation videos and automatically populates them into a manageable watchlist.
        </p>
      </div>

      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden "
        delay={0.2}
        inView
      >
        <Image src={FilmPad2} alt="FilmPad Interface" className="w-full" />
      </BlurFade>

      <div className="w-[40%] mt-5 max-800:w-[70%] max-lg:w-[50%] max-450:w-[90%] text-[23px] max-800:text-[20px] max-sm:text-[17px] max-450:text-[15px] max-sm:w-full flex flex-col gap-10 max-800:gap-6 text-gray-600 mx-auto rounded-xl overflow-hidden">
        <p className="text-[48px] font-extrabold leading-[105%] max-800:text-[37px] max-sm:text-[30px] max-450:text-[27px] w-full text-center">
          Building FilmPad
        </p>
        <p className="font-serif text-gray-600">
          Building FilmPad involved creating an automated pipeline to parse TikTok recommendation videos, extract the featured titles, and deliver tailored recommendations. I worked to design a sleek, user-friendly interface that tracks trending movies on TikTok and lets users easily organize their lists. The result is a free tool that simplifies movie discovery and curation, which today helps over <strong>1200+</strong> users keep track of their next favorite films.
        </p>
      </div>

      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden "
        delay={0.2}
        inView
      >
        <Image src={FilmPad3} alt="FilmPad Watchlist" className="w-full" />
      </BlurFade>

      <div className="w-[40%] mt-5 mb-[100px] max-800:w-[70%] max-lg:w-[50%] max-450:w-[90%] text-[23px] max-800:text-[20px] max-sm:text-[17px] max-450:text-[15px] max-sm:w-full flex flex-col gap-10 max-800:gap-6 text-gray-600 mx-auto rounded-xl overflow-hidden">
        <p className="text-[48px] font-extrabold leading-[105%] max-800:text-[37px] max-sm:text-[30px] max-450:text-[27px] w-full text-center">
          The Stack and Infrastructure
        </p>
        <p className="font-serif text-gray-600">
          To ensure FilmPad operates with high performance and reliability, I engineered the tech stack for scalability and rapid data processing. The frontend is built with <strong>Next.js</strong>, delivering a highly responsive, server-side rendered user interface. On the backend, I implemented a robust <strong>Node.js</strong> architecture paired with <strong>MongoDB</strong> for flexible, scalable data storage. The core of the platform&apos;s automation is powered by a custom pipeline leveraging the <strong>Gemini API</strong> for intelligent content parsing, integrated seamlessly with the <strong>TMDB API</strong> to fetch accurate, real-time movie data.
        </p>
      </div>
    </div>
  );
}
