import { FadeText } from "@/components/ui/fade-text";
import Image from "next/image";
import Kiti from "./../../../public/Kiti.svg";
import Home from "./../../../public/Home.svg";
import Mobile from "./../../../public/mobilepages.png";
import BlurFade from "@/components/ui/blur-fade";

export default function Ecoride() {
  return (
    <div className="flex flex-col gap-[70px] max-450:gap-[35px]  max-lg:gap-[55px] max-800:gap-[41px] text-[#557174] px-[30px] max-sm:px-[1%]">
      <div className="flex w-full mt-[180px] max-800:mt-[130px] max-450:gap-4 justify-center max-lg:text-[90px] max-800:text-[67px] text-[120px] text-[#557174] leading-[90%] flex-col gap-10 max-lg:gap-7 max-800:gap-5">
        <div className="flex flex-col items-center max-sm:text-[50px] max-450:text-[40px] max-450:leading-[95%] gap-0 ">
          <FadeText
            direction="left"
            framerProps={{
              show: { transition: {} },
            }}
            text="EcoRide."
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
          text="Web Developer • Ecobank Headquarters • 2024"
        />
      </div>
      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden "
        delay={0.2}
        inView
      >
        <Image src={Kiti} alt="kiti" className="w-full" />
      </BlurFade>
      <div className="w-[40%] max-lg:w-[50%] mt-5 max-800:w-[70%] max-450:w-[90%] text-[23px] max-800:text-[20px] max-sm:text-[17px] max-450:text-[16px] max-sm:w-full flex flex-col gap-10 max-800:gap-6 text-gray-600 mx-auto rounded-xl overflow-hidden">
        <p className="text-[48px] font-extrabold leading-[105%] max-800:text-[37px] max-sm:text-[30px] max-450:text-[27px] w-full text-center">
          The Problem
        </p>{" "}
        <p className="font-serif  text-gray-600">
          The staff bus booking process was a daily struggle—chaotic,
          time-consuming, and inefficient. Employees had to leave their desks
          during work hours, heading to the parking lot to secure “tickets,”
          while new staff often faced confusion navigating which bus would take
          them to their destination.
        </p>{" "}
        <p className="font-serif   text-gray-600">
          Recognizing the need for a better system, we built EcoRide, a platform
          that allows staff to book buses effortlessly from the comfort of their
          desks. This streamlined approach transformed the process, saving time
          and eliminating the hassle for everyone involved.
        </p>{" "}
      </div>
      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden "
        delay={0.2}
        inView
      >
        {" "}
        <Image src={Home} alt="homepageimg" className="w-full" />
      </BlurFade>
      <div className="w-[40%] mt-5 max-lg:w-[50%] max-800:w-[70%] max-450:w-[90%] text-[23px] max-800:text-[20px] max-sm:text-[17px] max-450:text-[16px] max-sm:w-full flex flex-col gap-10 max-800:gap-6 text-gray-600 mx-auto rounded-xl overflow-hidden">
        <p className="text-[48px] font-extrabold leading-[105%] max-800:text-[37px] max-sm:text-[30px] max-450:text-[27px] w-full text-center">
          Adding Responsiveness
        </p>{" "}
        <p className="font-serif text-gray-600">
          To make EcoRide as effective as possible, we focused on ensuring the
          web app was fully responsive and user-friendly on every device. We
          understood that convenience is key, and accessibility should never be
          limited by the type of device a staff member has on hand. By
          prioritizing usability across all platforms, we created a solution
          that empowers staff to book their buses with ease, no matter where
          they are or what device they use.
        </p>{" "}
      </div>
      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden "
        delay={0.2}
        inView
      >
        {" "}
        <Image src={Mobile} alt="stars" className="w-full" />
      </BlurFade>{" "}
    </div>
  );
}
