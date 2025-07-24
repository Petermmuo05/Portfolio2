import { FadeText } from "@/components/ui/fade-text";
import Image from "next/image";
import Chowhub2 from "./../../../public/chowhub2.png";
import Chowhub1 from "./../../../public/chowhub1.png";
import Admin from "./../../../public/chowhub_admin.png";
import BlurFade from "@/components/ui/blur-fade";

export default function ChowHub() {
  return (
    <div className="flex flex-col gap-[70px] max-450:gap-[35px]  max-lg:gap-[55px] max-800:gap-[41px] text-[#557174] px-[30px] max-sm:px-[1%]">
      <div className="flex w-full mt-[180px] max-800:mt-[130px] max-450:gap-4 justify-center max-lg:text-[90px] max-800:text-[67px] text-[120px] text-[#557174] leading-[90%] flex-col gap-10 max-lg:gap-7 max-800:gap-5">
        <div className="flex flex-col items-center max-sm:text-[50px] max-450:text-[40px] max-450:leading-[95%] gap-0 ">
          <FadeText
            direction="left"
            framerProps={{
              show: { transition: {} },
            }}
            text="ChowHub."
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
          text="Web Developer, Student • Augustine University • 2023"
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
        <Image src={Chowhub2} alt="chowhub" className="w-full" />
      </BlurFade>
      <div className="w-[40%] mt-5 max-lg:w-[50%] max-800:w-[70%] max-450:w-[90%] text-[23px] max-800:text-[20px] max-sm:text-[17px] max-450:text-[15px] max-sm:w-full flex flex-col gap-10 max-800:gap-6 text-gray-600 mx-auto rounded-xl overflow-hidden">
        <p className="text-[48px] font-extrabold leading-[105%] max-800:text-[37px] max-sm:text-[30px] max-450:text-[27px] w-full text-center">
          The Problem
        </p>{" "}
        <p className="font-serif  text-gray-600">
          At my school, the cafeteria was a lifeline, but many students couldn’t
          access it when they needed it most—buried in schoolwork, drained of
          energy, or juggling dietary restrictions.
        </p>{" "}
        <p className="font-serif   text-gray-600">
          Seeing this, I envisioned and began developing ChowHub, a sleek
          solution that empowered students to order meals from on-campus
          restaurants online and have them delivered by fellow students.
        </p>{" "}
      </div>
      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden "
        delay={0.2}
        inView
      >
        {" "}
        <Image src={Admin} alt="chowhub admin" className="w-full" />
      </BlurFade>
      <div className="w-[40%] mt-5 max-800:w-[70%] max-lg:w-[50%] max-450:w-[90%] text-[23px] max-800:text-[20px] max-sm:text-[17px] max-450:text-[15px] max-sm:w-full flex flex-col gap-10 max-800:gap-6 text-gray-600 mx-auto rounded-xl overflow-hidden">
        <p className="text-[48px] font-extrabold leading-[105%] max-800:text-[37px] max-sm:text-[30px] max-450:text-[27px] w-full text-center">
          Building ChowHub
        </p>{" "}
        <p className="font-serif text-gray-600">
          Building Chow Hub required more than just writing code—it was about
          understanding people. I met with on-campus restaurant owners to
          uncover their needs, ensuring the platform was designed to integrate
          seamlessly with their operations. At the same time, I collaborated
          with fellow students, gathering insights to shape a solution that
          truly addressed their challenges. While the software is nearly
          complete, we’re still hard at work developing a reliable student
          delivery network to bring the project’s vision fully to life.
        </p>{" "}
      </div>
      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden "
        delay={0.2}
        inView
      >
        {" "}
        <Image src={Chowhub1} alt="chowhub" className="w-full" />
      </BlurFade>{" "}
    </div>
  );
}
