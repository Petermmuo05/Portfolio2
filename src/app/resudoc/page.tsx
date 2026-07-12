import { FadeText } from "@/components/ui/fade-text";
import Image from "next/image";
import Resudoc1 from "./../../../public/Resudoc1.webp";
import Resudoc2 from "./../../../public/Resudoc2.webp";
import Resudoc3 from "./../../../public/Resudoc3.webp";
import BlurFade from "@/components/ui/blur-fade";
import Link from "next/link";

export default function ResuDoc() {
  return (
    <div className="flex flex-col gap-[70px] max-450:gap-[35px] max-lg:gap-[55px] max-800:gap-[41px] text-[#557174] px-[30px] max-sm:px-[1%]">
      <div className="flex w-full mt-[180px] max-800:mt-[130px] max-450:gap-4 justify-center max-lg:text-[90px] max-800:text-[67px] text-[120px] text-[#557174] leading-[90%] flex-col gap-10 max-lg:gap-7 max-800:gap-5">
        <div className="flex flex-col items-center max-sm:text-[50px] max-450:text-[40px] max-450:leading-[95%] gap-0 ">
          <FadeText
            direction="left"
            framerProps={{
              show: { transition: {} },
            }}
            text="ResuDoc."
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
          text="AI Resume Builder • ATS Optimization"
        />
      </div>

      <div className="flex justify-center w-full">
        <Link 
          href="https://resudoc.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#557174] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all font-semibold"
        >
          Visit ResuDoc
        </Link>
      </div>

      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden flex justify-center bg-transparent"
        delay={0.2}
        inView
      >
        <Image
          src={Resudoc1}
          alt="ResuDoc Interface"
          className="w-full max-w-[800px] rounded-[20px]"
        />
      </BlurFade>

      <div className="w-[40%] mt-5 max-lg:w-[50%] max-800:w-[70%] max-450:w-[90%] text-[23px] max-800:text-[20px] max-sm:text-[17px] max-450:text-[15px] max-sm:w-full flex flex-col gap-10 max-800:gap-6 text-gray-600 mx-auto rounded-xl overflow-hidden">
        <p className="text-[48px] font-extrabold leading-[105%] max-800:text-[37px] max-sm:text-[30px] max-450:text-[27px] w-full text-center">
          The Problem
        </p>
        <p className="font-serif text-gray-600">
          Job seekers faced challenges with manual formatting and aligning their
          resumes with Applicant Tracking Systems (ATS), making application
          tailoring tedious, inconsistent, and highly error-prone.
        </p>
        <p className="font-serif text-gray-600">
          To address this, I designed and developed ResuDoc end-to-end, building
          an AI-powered resume builder and ATS optimization platform that
          simplifies resume refinement and ensures alignment through a digital
          solution.
        </p>
      </div>

      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden "
        delay={0.2}
        inView
      >
        <Image src={Resudoc2} alt="ResuDoc Builder" className="w-full" />
      </BlurFade>

      <div className="w-[40%] mt-5 max-800:w-[70%] max-lg:w-[50%] max-450:w-[90%] text-[23px] max-800:text-[20px] max-sm:text-[17px] max-450:text-[15px] max-sm:w-full flex flex-col gap-10 max-800:gap-6 text-gray-600 mx-auto rounded-xl overflow-hidden">
        <p className="text-[48px] font-extrabold leading-[105%] max-800:text-[37px] max-sm:text-[30px] max-450:text-[27px] w-full text-center">
          Building ResuDoc
        </p>
        <p className="font-serif text-gray-600">
          Building ResuDoc involved careful research and user feedback to
          understand the challenges of navigating modern hiring systems. I
          worked closely with active candidates to design and implement the
          intuitive dashboard featuring real-time ATS diagnostics, AI-powered
          bullet enhancement, and cover letter generation. Owning the end-to-end
          execution, I delivered a seamless solution that streamlines job
          applications and empowers users with data-backed resume refinement.
        </p>
      </div>

      <BlurFade
        className="w-3/4 max-800:w-full mx-auto rounded-xl overflow-hidden "
        delay={0.2}
        inView
      >
        <Image src={Resudoc3} alt="ResuDoc Export" className="w-full" />
      </BlurFade>

      <div className="w-[40%] mt-5 mb-[100px] max-800:w-[70%] max-lg:w-[50%] max-450:w-[90%] text-[23px] max-800:text-[20px] max-sm:text-[17px] max-450:text-[15px] max-sm:w-full flex flex-col gap-10 max-800:gap-6 text-gray-600 mx-auto rounded-xl overflow-hidden">
        <p className="text-[48px] font-extrabold leading-[105%] max-800:text-[37px] max-sm:text-[30px] max-450:text-[27px] w-full text-center">
          The Stack and Infrastructure
        </p>
        <p className="font-serif text-gray-600">
          The tech stack is engineered for speed, type safety, and seamless
          scalability. I chose <strong>Next.js</strong> and <strong>React 19</strong> for the core framework,
          utilizing <strong>TypeScript</strong>, <strong>Zustand</strong> for state management, and <strong>Tailwind CSS</strong>
          with <strong>Radix UI</strong> primitives for an accessible, highly responsive
          interface. For the backend infrastructure, I implemented <strong>Node.js</strong> to
          power core services. <strong>Supabase</strong> handles the database and secure user
          authentication, while <strong>OpenAI</strong> and <strong>Groq</strong> power high-speed AI tailoring
          features. For document processing, I utilized <strong>pdfjs-dist</strong> to parse
          uploaded resumes and <strong>@react-pdf/renderer</strong> alongside <strong>docx</strong> to dynamically
          export professional files.
        </p>
      </div>
    </div>
  );
}
