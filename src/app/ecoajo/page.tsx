import { FadeText } from "@/components/ui/fade-text";
import Image from "next/image";
import Analytics from "./../../../public/analytics.png";
import Contributions from "./../../../public/ContributionsPage.jpg";
import Flow from "./../../../public/Ecoajo.jpg";
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
            text="EcoAjo."
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
        <Image src={Analytics} alt="stars" className="w-full" />
      </BlurFade>
      <div className="w-[40%] mt-5 max-lg:w-[50%] max-800:w-[70%] max-450:w-[90%] text-[23px] max-800:text-[20px] max-sm:text-[17px] max-450:text-[15px] max-sm:w-full flex flex-col gap-10 max-800:gap-6 text-gray-600 mx-auto rounded-xl overflow-hidden">
        <p className="text-[48px] font-extrabold leading-[105%] max-800:text-[37px] max-sm:text-[30px] max-450:text-[27px] w-full text-center">
          The Problem
        </p>{" "}
        <p className="font-serif  text-gray-600">
          Cooperative societies in the bank faced challenges with accountability
          and manual record-keeping, making tracking contributions and expenses
          tedious and error-prone
        </p>{" "}
        <p className="font-serif   text-gray-600">
          To address this, we developed EcoAjo, a platform that simplifies
          record-keeping and ensures accountability through a digital solution.
        </p>{" "}
      </div>
      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden "
        delay={0.2}
        inView
      >
        {" "}
        <Image src={Flow} alt="flow" className="w-full" />
      </BlurFade>
      <div className="w-[40%] mt-5 max-800:w-[70%] max-lg:w-[50%] max-450:w-[90%] text-[23px] max-800:text-[20px] max-sm:text-[17px] max-450:text-[15px] max-sm:w-full flex flex-col gap-10 max-800:gap-6 text-gray-600 mx-auto rounded-xl overflow-hidden">
        <p className="text-[48px] font-extrabold leading-[105%] max-800:text-[37px] max-sm:text-[30px] max-450:text-[27px] w-full text-center">
          Building EcoAjo
        </p>{" "}
        <p className="font-serif text-gray-600">
          Building EcoAjo involved careful research and collaboration to
          understand the needs of cooperative societies within the bank. We
          worked closely with members to design an intuitive platform with
          features for tracking contributions, managing expenses, and
          maintaining secure digital records. The result is a solution that
          streamlines management and fosters trust through transparency.
        </p>{" "}
      </div>
      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden "
        delay={0.2}
        inView
      >
        <Image src={Contributions} alt="home img" className="w-full" />
      </BlurFade>{" "}
    </div>
  );
}
// function Info({ first, last }: { first: string; last: string }) {
//   return (
//     <div className="flex flex-col gap-1 text-[#ffc0ad]">
//       <p className="text-[14px] font-mono font-extrabold">{first}</p>
//       <p className="text-gray-600 ">{last}</p>
//     </div>
//   );
// }
