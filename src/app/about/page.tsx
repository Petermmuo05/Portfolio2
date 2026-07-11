import BlurFade from "@/components/ui/blur-fade";
import { FadeText } from "@/components/ui/fade-text";
import Profile from "./../../../public/mainprofile2.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col gap-[70px] max-450:gap-[35px]  max-lg:gap-[55px] max-800:gap-[41px] text-[#557174] px-[30px] max-sm:px-[1%]">
      <div className="flex w-full mt-[180px] max-800:mt-[130px] max-450:gap-4 justify-center max-lg:text-[90px] max-800:text-[67px] text-[120px] text-[#557174] leading-[90%] flex-row gap-10 max-lg:gap-7 max-800:gap-5">
        <div className="flex flex-col items-center max-sm:text-[50px] max-450:text-[40px] max-450:leading-[95%] gap-0 ">
          <FadeText
            direction="left"
            framerProps={{
              show: { transition: {} },
            }}
            text="I'm Peter."
          />
        </div>
      </div>
      <div className="flex w-full max-600:flex-col max-600:items-center px-5 max-sm:px-5 max-lg:px-10 max-800:px-5 justify-center mt-10 gap-[90px] max-600:gap-[40px] max-800:gap-[25px] max-lg:gap-[50px]">
        <div className="w-[320px] h-[360px] max-800:w-[200px] max-800:h-[230px] max-lg:w-[250px] max-lg:h-[270px] max-sm:w-[170px] max-sm:h-[190px] flex-shrink-0 rounded-t-[50%] overflow-hidden ">
          <BlurFade
            className="w-full h-full overflow-hidden bg-[#9dad7f]"
            delay={0.2}
            inView
          >
            <Image src={Profile} alt="chowhub" className="" />
          </BlurFade>
        </div>
        <div className="min-sm:basis-[700px] max-sm:justify-center flex flex-col gap-[30px] max-800:gap-[20px] max-lg:gap-[25px] text-[23px] max-800:text-[16px] max-lg:text-[20px] text-gray-600 ">
          <p className="text-[48px] font-extrabold leading-[105%] max-800:text-[36px] max-lg:text-[42px] max-sm:text-center">
            I am a Software Engineer working remotely from Lagos, Nigeria.
          </p>
          <p className="font-serif  ">
            With extensive experience in software engineering, particularly web
            development, I have honed my skills by working on a variety of
            projects ranging from volunteer endeavors to professional, high
            stake collaborations.
          </p>
          <p className="font-serif ">
            Over the years, I’ve developed and delivered high-quality web
            solutions, providing innovative services to clients, including large
            organizations like Ecobank Nigeria.
          </p>

          {/* <div className="w-[700px] h-2"></div> */}
        </div>
      </div>
      <BlurFade
        className="flex-col flex mt-10 w-[90vw] max-800:gap-5 mx-auto p-8 rounded-[50px] bg-[#f0f0e1] "
        delay={0.2}
        inView
      >
        <Bar
          position="min-800:self-end"
          place="CVTOCAREER"
          title="Full-Stack Dev"
          time="25"
        />
        <Bar
          position="min-800:ml-[44vw]"
          place="Ecobank HQ"
          title="Web Dev"
          time="24"
        />
        <Bar
          position="min-800:ml-[22vw]"
          place="Augustine Uni"
          title="Volunteer Dev"
          time="23"
        />
        <Bar
          position="min-800:self-start"
          place="Solo"
          title="Web Dev"
          time="22"
        />
      </BlurFade>

      <div className="flex flex-col gap-[30px] w-[60vw] max-800:w-[75vw] max-600:w-[90%] mt-10 ml-[3vw] text-[23px] text-gray-600 max-800:gap-[20px] max-lg:gap-[25px]  max-800:text-[16px] max-lg:text-[20px]">
        <p className="text-[48px] font-extrabold leading-[105%]  max-800:text-[36px] max-lg:text-[42px]">
          Let&apos;s collaborate if you&apos;re in the market for user-friendly,
          high quality, modern applications.
        </p>
        <p className="font-serif   mr-[20vw] max-600:mr-[50px] ">
          I’ve delivered solutions that are not only functional but also
          tailored to solve real-world problems. From creating seamless
          food-ordering platforms like Chow Hub to revolutionizing staff bus
          bookings with EcoRide and transforming cooperative society management
          through EcoAjo, my work reflects a deep understanding of usability,
          scalability, and innovation.
        </p>
        <p className="font-serif  mr-[20vw] max-600:mr-[50px]">
          My portfolio spans solo projects and professional collaborations with
          organizations like Ecobank Nigeria, where I’ve tackled complex
          challenges and delivered impactful results.
        </p>

        <p className="font-serif mr-[20vw] max-600:mr-[50px]">
          If you’re ready to elevate your ideas with a partner who understands
          the art of modern application development, let’s collaborate and bring
          your vision to life.
        </p>

        {/* <div className="w-[700px] h-2"></div> */}
      </div>
    </div>
  );
}

function Bar({
  position,
  place,
  title,
  time,
}: {
  position: string;
  place: string;
  title: string;
  time: string;
}) {
  return (
    <div
      className={`w-[22vw] max-800:w-full  h-[100px] rounded-[50px] max-lg:px-[25px] max-800:px-[35px]  text-[#f7f7e8] bg-[#9dad7f] self-start flex items-center ${position} justify-between p-[35px]`}
    >
      <div className="flex flex-col w-full ">
        <p className="font-bold text-[22px] max-lg:text-[19px]  whitespace-nowrap">
          {place}
        </p>
        <p className="max-lg:text-[14px] whitespace-nowrap">{title}</p>
      </div>
      <div className="text-[25px] max-lg:text-[21px] ">{time}</div>
    </div>
  );
}
