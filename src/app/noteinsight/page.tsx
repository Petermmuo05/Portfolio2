import { FadeText } from "@/components/ui/fade-text";
import Image from "next/image";
import NoteDashboard from "./../../../public/NoteDashboard.png";
import NoteHome from "./../../../public/NoteHome.png";
import NoteQuiz from "./../../../public/NoteQuiz.png";
import BlurFade from "@/components/ui/blur-fade";

export default function NoteInsight() {
  return (
    <div className="flex flex-col gap-[70px] max-450:gap-[35px]  max-lg:gap-[55px] max-800:gap-[41px] text-[#557174] px-[30px] max-sm:px-[1%]">
      <div className="flex w-full mt-[180px] max-800:mt-[130px] max-450:gap-4 justify-center max-lg:text-[90px] max-800:text-[67px] text-[120px] text-[#557174] leading-[90%] flex-col gap-10 max-lg:gap-7 max-800:gap-5">
        <div className="flex flex-col items-center max-sm:text-[50px] max-450:text-[40px] max-450:leading-[95%] gap-0 ">
          <FadeText
            direction="left"
            framerProps={{
              show: { transition: {} },
            }}
            text="NoteInsight."
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
          text="Software Engineer, Student • Augustine University • 2025"
        />
      </div>
      {/* <div className="flex w-full items-center gap-[70px] justify-center">
        <Info first="Organization" last="Ecobank" />
        <Info first="Organization" last="Ecobank" />
        <Info first="Organization" last="Ecobank" />
      </div> */}
      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden "
        delay={0.2}
        inView
      >
        <Image src={NoteHome} alt="HomePage" className="w-full" />
      </BlurFade>
      <div className="w-[40%] mt-5 max-lg:w-[50%] max-800:w-[70%] max-450:w-[90%] text-[23px] max-800:text-[20px] max-sm:text-[17px] max-450:text-[15px] max-sm:w-full flex flex-col gap-10 max-800:gap-6 text-gray-600 mx-auto rounded-xl overflow-hidden">
        <p className="text-[48px] font-extrabold leading-[105%] max-800:text-[37px] max-sm:text-[30px] max-450:text-[27px] w-full text-center">
          The Problem
        </p>{" "}
        <p className="font-serif  text-gray-600">
          At my school, the lecture notes should be a lifeline, but students
          can’t make sense of them when they need clarity most—buried under
          dense terminology, scattered across endless slides, and lacking any
          immediate indication of whether they’re on the right track.
        </p>{" "}
        <p className="font-serif   text-gray-600">
          Seeing this, I envisioned and began developing NoteInsight, a seamless
          AI‑driven companion that transforms sprawling lecture materials into
          interactive notes, and guides students through targeted questions to
          illuminate their knowledge gaps.
        </p>{" "}
      </div>
      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden "
        delay={0.2}
        inView
      >
        {" "}
        <Image src={NoteDashboard} alt="dashboard page" className="w-full" />
      </BlurFade>
      <div className="w-[40%] mt-5 max-800:w-[70%] max-lg:w-[50%] max-450:w-[90%] text-[23px] max-800:text-[20px] max-sm:text-[17px] max-450:text-[15px] max-sm:w-full flex flex-col gap-10 max-800:gap-6 text-gray-600 mx-auto rounded-xl overflow-hidden">
        <p className="text-[48px] font-extrabold leading-[105%] max-800:text-[37px] max-sm:text-[30px] max-450:text-[27px] w-full text-center">
          Building NoteInsight
        </p>{" "}
        <p className="font-serif text-gray-600">
          Building NoteInsight meant more than just writing code—it meant really
          getting to know how students learn. I sat down with classmates
          overwhelmed by long, complex lectures to hear where they struggled
          most. I also met with professors to pinpoint the key ideas students
          often miss. Watching study groups in action showed me how peers quiz
          each other—and where feedback was lacking. The main platform is now
          live, and we’re focused on user acceptance testing before a full
          campus rollout.
        </p>{" "}
      </div>
      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden "
        delay={0.2}
        inView
      >
        {" "}
        <Image src={NoteQuiz} alt="Quiz Page" className="w-full" />
      </BlurFade>{" "}
    </div>
  );
}
