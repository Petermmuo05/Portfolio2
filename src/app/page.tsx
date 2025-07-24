import Image from "next/image";
import Star from "./../../public/terminal.svg";
import Chowhub1 from "./../../public/chowhub1.png";
import BookingPage from "./../../public/bookingPage.svg";
import Kiti from "./../../public/Kiti.svg";
// import Chowhub2 from "./../../public/chowhub2.png";
import NoteHome from "./../../public/NoteHome.png";
import Mobile from "./../../public/mobile.svg";
import Analytics from "./../../public/analytics.png";
import BlurFade from "@/components/ui/blur-fade";
import { FadeText } from "@/components/ui/fade-text";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-[70px] max-450:gap-[35px]  max-lg:gap-[55px] max-800:gap-[41px] text-[#557174] px-[30px] max-sm:px-[1%]">
      <div className="flex w-full mt-[180px] max-800:mt-[130px] max-450:gap-4 justify-center max-lg:text-[90px] max-800:text-[67px] text-[120px] text-[#557174] leading-[90%] flex-row gap-10 max-lg:gap-7 max-800:gap-5">
        <div className="self-start mt-[-20px]">
          <BlurFade delay={0.05} inView>
            <Image
              src={Star}
              alt="stars"
              className="w-[80px] max-lg:w-[60px] max-800:w-[45px] max-450:w-[35px]"
            />
          </BlurFade>
        </div>
        <div className="flex flex-col items-center max-sm:text-[50px] max-450:text-[40px] max-450:leading-[95%] gap-0 ">
          <FadeText
            direction="left"
            framerProps={{
              show: { transition: {} },
            }}
            text="Hi, I'm Peter."
          />
          <FadeText
            direction="right"
            framerProps={{
              show: { transition: {} },
            }}
            text="A Developer."
          />
        </div>
        <div className="mb-[-20px] self-end">
          <BlurFade inView>
            <Image
              src={Star}
              alt="stars"
              className="w-[80px] max-lg:w-[60px] max-800:w-[45px] max-450:w-[35px]"
            />
          </BlurFade>
        </div>
      </div>
      <div className="flex justify-center w-full text-[25px] max-lg:text-[20px] max-450:text-[14px] max-800:text-[16px] ">
        <div className="w-[700px] max-lg:w-[600px] max-450:w-[350px] text-gray-600 max-800:w-[450px] text-center">
          <FadeText
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.07 } },
            }}
            text="I'm committed to building platforms that are engaging,
          intuitive, and user-friendly."
          />
        </div>
      </div>
      <div className="grid grid-cols-10 relative text-[#140d0b] w-full gap-[50px] gap-y-[140px] max-lg:gap-y-[100px] max-800:gap-y-[50px] h-fit">
        <Link
          href="/ecoride"
          className="col-span-4 max-800:col-span-10 h-[70vh] max-lg:h-[55vh] min-h-[220px] max-h-[600px] max-w-[100vw] w-full max-800:h-[41vh] max-600:h-[35vh]"
        >
          <BlurFade className="w-full h-full " delay={0.3} inView>
            <div className=" w-full h-full pt-[50px] overflow-hidden flex-col card bg-[#e78fb3] text-gray-600 rounded-[70px]">
              <div className="flex mx-16 flex-col items-end">
                <span className="max-600:text-[13px]">ECOBANK</span>
                <span className="text-[30px] max-600:text-[24px] font-extrabold">
                  EcoRide
                </span>
              </div>
              <div className="w-[1000px] max-600:w-[700px] dropbox mx-16 mt-10 max-sm:mt-5 h-full rounded-tl-xl overflow-hidden">
                <Image src={Kiti} alt="stars" className="w-full" />
              </div>{" "}
            </div>
          </BlurFade>
        </Link>
        <Link
          href="/ecoride"
          className="col-span-6 h-[70vh] max-lg:h-[55vh] max-w-[100vw] max-800:h-[41vh] min-h-[220px] max-h-[600px] max-800:col-span-10 max-600:h-[35vh]"
        >
          <BlurFade className="h-full w-full" delay={0.3} inView>
            <div className=" h-full w-full overflow-hidden pt-[50px] card bg-[#ffc0ad]  rounded-[70px] ">
              <div className="flex mx-16 flex-col items-end text-gray-600">
                <span className="max-600:text-[13px]">ECOBANK</span>
                <span className="text-[30px] max-600:text-[24px] font-extrabold">
                  EcoRide
                </span>
              </div>
              <div className="w-[1000px] max-600:w-[700px] dropbox mx-16 max-sm:mt-5 mt-10 h-full rounded-tl-xl overflow-hidden">
                <Image src={BookingPage} alt="stars" className="w-full" />
              </div>{" "}
            </div>
          </BlurFade>
        </Link>
        <Link
          href="/ecoajo"
          className="col-span-6 h-[70vh] max-lg:h-[55vh] max-w-[100vw] max-800:h-[41vh] min-h-[220px] max-800:col-span-10 max-h-[600px] z-[1] max-600:h-[35vh]"
        >
          <BlurFade className="h-full w-full" delay={0.1} inView>
            <div className=" overflow-hidden pt-[50px] h-full w-full  bg-[#E0A899] card rounded-[70px] text-gray-600 ">
              <div className="flex mx-16 flex-col items-end text-gray-600">
                <span className="max-600:text-[13px]">ECOBANK</span>
                <span className="text-[30px] max-600:text-[24px] font-extrabold">
                  EcoAjo
                </span>
              </div>
              <div className="w-[1000px] max-600:w-[700px] max-sm:mt-5 dropbox mx-16 mt-10 h-full rounded-tl-xl overflow-hidden">
                <Image src={Analytics} alt="stars" className="w-full" />
              </div>{" "}
            </div>{" "}
          </BlurFade>
        </Link>
        <Link
          href="/ecoajo"
          className="col-span-4 max-800:col-span-10 h-[70vh] max-w-[100vw] max-lg:h-[55vh] min-h-[220px] max-800:h-[41vh] max-h-[600px] max-600:h-[35vh] "
        >
          <BlurFade className="h-full w-full" delay={0.1} inView>
            <div className="pt-[50px]  overflow-hidden flex-col h-full w-full bg-[#A3C4DC] text-gray-600 card rounded-[70px]">
              <div className="flex mx-16 flex-col items-end">
                <span className="max-600:text-[13px]">ECOBANK</span>
                <span className="text-[30px] max-600:text-[24px] font-extrabold">
                  EcoAjo
                </span>
              </div>
              <div className="mx-16 mt-10 max-sm:mt-5 dropbox h-full rounded-tl-xl overflow-hidden">
                <Image src={Mobile} alt="stars" className="w-full" />
              </div>{" "}
            </div>{" "}
          </BlurFade>
        </Link>
      </div>

      <div className="flex w-full mt-[50px] justify-center text-[120px] max-lg:text-[90px] max-800:text-[67px] text-[#557174] leading-[90%] flex-row gap-10 ">
        <div className="flex max-sm:text-[50px] max-450:text-[40px] flex-col items-center gap-0 ">
          <span>Creations.</span>
        </div>
      </div>
      <div className="flex justify-center w-full text-[25px] max-800:-mt-4 max-450:text-[14px] max-lg:text-[20px] max-800:text-[16px] ">
        <p className="w-[600px] max-lg:w-[450px] text-gray-600 max-800:w-[300px]  text-center">
          Work on side projects in various states of design and development
        </p>
      </div>

      <div className="grid grid-cols-10 text-[#140d0b] w-full gap-[50px] gap-y-[140px]   max-800:gap-y-[50px] h-fit">
        <Link
          href="/noteinsight"
          className="col-span-5 h-[70vh] max-800:col-span-10 max-w-[100vw] min-h-[220px] max-800:h-[41vh] max-h-[600px] card overflow-hidden pt-[50px] max-lg:h-[55vh] bg-[#C5B8D0] max-600:h-[35vh] rounded-[70px] "
        >
          <div className="flex mx-16 flex-col items-end text-gray-600">
            <span className="max-600:text-[13px]">PROJECTS</span>
            <span className="text-[30px] max-600:text-[24px] font-extrabold">
              NoteInsight
            </span>
          </div>
          <div className="w-[1000px] max-sm:w-[700px] dropbox mx-16 max-sm:mt-5 mt-10 h-full rounded-tl-xl overflow-hidden">
            <Image src={NoteHome} alt="chowhub" className="w-full" />
          </div>{" "}
        </Link>
        <Link
          href="/chowhub"
          className="col-span-5 h-[70vh] max-800:col-span-10 max-w-[100vw] min-h-[220px] max-800:h-[41vh] max-h-[600px] card overflow-hidden pt-[50px] max-lg:h-[55vh] bg-[#B7C9B2] max-600:h-[35vh] rounded-[70px] "
        >
          <div className="flex mx-16 flex-col items-end text-gray-600">
            <span className="max-600:text-[13px]">PROJECTS</span>
            <span className="text-[30px] max-600:text-[24px] font-extrabold">
              ChowHub
            </span>
          </div>
          <div className="w-[1000px] max-sm:w-[700px] dropbox mx-16 max-sm:mt-5 mt-10 h-full rounded-tl-xl overflow-hidden">
            <Image src={Chowhub1} alt="chowhub" className="w-full" />
          </div>{" "}
        </Link>
      </div>
    </div>
  );
}
