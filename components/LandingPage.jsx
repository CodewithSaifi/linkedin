import LoginBtn from "./LoginBtn";
import BtnMd from "./BtnMd";
import Dot from "@/components/Dot";

const LandingPage = () => {
  return (
    <>
      {/* section 1 */}
      <section className="grid grid-cols-[53%_auto] pt-[48px] w-full h-[608px] mx-auto">
        <div className="grid justify-end h-[435.6px] pr-[48px]">
          <div>
            <h1 className="text-[#526a6e] w-[564px] font-normal text-[4.8rem] leading-[60px]">
              Welcome to your professional community
            </h1>
            <div className="mt-[24px]">
              <LoginBtn
                className="bg-[#1a73e8] hover:bg-[#64a0ef]"
                text={
                  <>
                    <div className="p-[9px] m-[1.5px] bg-white rounded-full text-center">
                      <img
                        className="w-[20px] h-[20px]"
                        src="./google.svg"
                        alt="Google Icon"
                      />
                    </div>
                    <div className="text-[16px] text-white font-medium">
                      Continue with Google
                    </div>
                  </>
                }
              />
              <LoginBtn
                className="bg-white hover:bg-[#f3f2f0] border border-[#404040] my-[18px]"
                text={
                  <>
                    <div className="p-[9px] m-[1px] rounded-full text-center">
                      <img
                        className="w-[20px] h-[20px]"
                        src="./microsoft.svg"
                        alt="Microsoft Icon"
                      />
                    </div>
                    <div className="text-[16px] text-black font-medium">
                      Continue with Microsoft
                    </div>
                  </>
                }
              />
              <LoginBtn
                className="bg-white hover:bg-[#f3f2f0] border border-[#404040]"
                text={
                  <div className="p-[9px] m-[1px] rounded-full text-center text-[16px] text-black font-medium">
                    Sign in with email
                  </div>
                }
              />
              <p className="text-[12px] text-[#666666] text-center w-[420px] mt-[24px] pb-[16px]">
                By clicking Continue to join or sign in, you agree to LinkedIn’s{" "}
                <b className="text-[#0a66c2] font-semibold cursor-pointer">
                  User Agreement, Privacy Policy
                </b>
                , and{" "}
                <b className="text-[#0a66c2] font-semibold cursor-pointer">
                  Cookie Policy
                </b>
                .
              </p>
              <p className="text-[16px] text-center w-[420px] my-[16px]">
                New to LinkedIn?{" "}
                <b className="text-[#0a66c2] font-semibold cursor-pointer">
                  Join now
                </b>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-[700px] h-[560px] ml-[8px]"
            src="./landing-page-1.svg"
            alt="Landing Page Illustration"
          />
        </div>
      </section>
      {/* section 2 */}
      <section className="bg-[#f3f2f0]">
        <div className="grid grid-cols-[44%_auto] w-[1128px] mx-auto py-[60px]">
          <div className=" mb-[24px] mr-[72px]">
            <h2 className="text-[32px]">Explore collaborative articles</h2>
            <p className="text-[20px] mt-[12px]">
              We’re unlocking community knowledge in a new way. Experts add
              insights directly into each article, started with the help of AI.
            </p>
          </div>
          <div>
            {[
              "Marketing",
              "Public Administration",
              "Healthcare",
              "Engineering",
              "IT Service",
              "Sustainability",
              "Business Administration",
              "Telecommunications",
              "HR Management",
            ].map((item, i) => (
              <BtnMd
                key={i}
                className="border-[#3d3d3c] text-[#3d3d3c] hover:bg-[#e0dfdd] mr-[8px] mb-[12px]"
                text={item}
              />
            ))}

            {/* Special "Show all" button */}
            <BtnMd
              className="border-[#0a66c2] text-[#0a66c2] hover:bg-[#3b83f61a] mr-[8px] mb-[12px]"
              text="Show all"
            />
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="bg-white">
        <div className="grid grid-cols-[44%_auto] w-[1128px] mx-auto py-[60px]">
          <div className=" mb-[24px] mr-[72px]">
            <h2 className="text-[32px] w-full leading-[40px]">
              Find the right job or internship for you
            </h2>
          </div>
          <div>
            {[
              "Engineering",
              "Business Development",
              "Finance",
              "Administrative Assistant",
              "Retail Associate",
              "Customer Service",
              "Oprations",
              "Information Technology",
              "Marketing",
              "Human Resources",
            ].map((item, i) => (
              <BtnMd
                key={i}
                className="border-[#3d3d3c] text-[#3d3d3c] hover:bg-[#f3f2f0] mr-[8px] mb-[12px]"
                text={item}
              />
            ))}

            {/* Special button */}
            <BtnMd
              className="border-[#0a66c2] text-[#0a66c2] hover:bg-[#3b83f61a] mr-[8px] mb-[12px]"
              text="Show all"
            />
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section className="bg-[#f1ece5]">
        <div className="w-[1128px] mx-auto text-center py-[64px]">
          <h2 className="text-[32px] text-[#b24020] pb-[32px]">
            Post your job for millions of people to see
          </h2>
          <BtnMd
            className={"border-[#0a66c2] text-[#0a66c2] hover:bg-[#3b83f61a]"}
            text={"Post a job"}
          />
        </div>
      </section>
      {/* section 4 */}
      <section className="bg-white">
        <div className="grid grid-cols-[44%_auto] w-[1128px] mx-auto py-[60px]">
          <div className=" mb-[24px] mr-[72px]">
            <h2 className="text-[32px] w-full leading-[40px]">
              Discover the best software tools
            </h2>
            <p className="text-[20px] mt-[12px]">
              Connect with buyers who have first-hand experience to find the
              best products for you.
            </p>
          </div>
          <div>
            {[
              "E-Commerce Platforms",
              "CRM Software",
              "Human Resources Management Systems",
              "Recruiting Software",
              "Sales Intelligence Software",
              "Project Management Software",
              "Help Desk Software",
              "Social Networking Software",
              "Desktop Publishing Software",
            ].map((item, i) => (
              <BtnMd
                key={i}
                className="border-[#3d3d3c] text-[#3d3d3c] hover:bg-[#f3f2f0] mr-[8px] mb-[12px]"
                text={item}
              />
            ))}

            {/* Special button */}
            <BtnMd
              className="border-[#0a66c2] text-[#0a66c2] hover:bg-[#3b83f61a] mr-[8px] mb-[12px]"
              text="Show all"
            />
          </div>
        </div>
      </section>
      {/* section 5 */}
      <section className="bg-white">
        <div className="grid grid-cols-[44%_auto] w-[1128px] mx-auto py-[60px]">
          <div className="mb-[24px] mr-[72px]">
            <h2 className="text-[32px] w-full leading-[40px]">
              Keep your mind sharp with games
            </h2>
            <p className="text-[20px] mt-[12px]">
              Take a break and reconnect with your network through quick daily
              games.
            </p>
          </div>
          <div>
            {[
              "Pinpoint",
              "Queens",
              "Crossclimb",
              "Tango",
              "Zip",
              "Mini Sudoku",
            ].map((item, i) => (
              <BtnMd
                key={i}
                className="border-[#3d3d3c] text-[#3d3d3c] hover:bg-[#f3f2f0] mr-[8px] mb-[12px]"
                text={item}
              />
            ))}
          </div>
        </div>
      </section>
      {/* section 6 */}
      <section>
        <Dot />
      </section>
      {/* section 7 */}
      <section className="py-[60px]">
        <div className="grid grid-cols-2 w-[1128px] py-[124px] mx-auto">
          <div>
            <img
              className="w-[256px] h-[256px] mr-[72px] mb-[16px]"
              src="./landing-page-5.svg"
              alt=""
            />
            <h2 className="text-[32px] text-[#000000e6] w-[448px] mb-[32px] leading-[40px]">
              Connect with people who can help
            </h2>
            <BtnMd
              className={"border-[#3d3d3c] text-[#3d3d3c] hover:bg-[#f3f2f0]"}
              text={"Find people you know"}
            />
          </div>
          <div>
            <img
              className="w-[256px] h-[256px] mr-[72px] mb-[16px]"
              src="./landing-page-6.svg"
              alt=""
            />
            <h2 className="text-[32px] text-[#000000e6] w-[448px] mb-[32px] leading-[40px]">
              Learn the skills you need to succeed
            </h2>
            <button className="flex justify-between items-center w-[360px] text-[20px] border border-[#ebebeb] hover:bg-[#f3f2f0] rounded-[8px] pr-[12px] pl-[16px] py-[16px] cursor-pointer transition duration-200">
              <span>Choose a topic to learn about</span>
              <img src="./down-tri.svg" alt="" />
            </button>
          </div>
        </div>
      </section>
      {/* section 8 */}
      <section>
        <div className="grid grid-cols-2 h-[840px] w-full overflow-hidden">
          <div className="grid justify-end h-[720px] my-[60px] bg-[#f3f2f0]">
            <div className=" pr-[48px] my-[185px]">
              <h2 className="text-[32px] text-[#b24020]">
                Who is LinkedIn for?
              </h2>
              <p className="text-[20px] text-[#000000e6] mt-[8px] mb-[32px]">
                Anyone looking to navigate their professional life.
              </p>
              <a
                className="flex justify-between w-[429px] text-[20px] bg-[#eae6df] hover:bg-[#e1dad0] p-[16px]"
                href=""
              >
                <span>Find coworker or classmate</span>
                <img className="w-[24px]" src="./right-arrow2.svg" alt="icon" />
              </a>

              <a
                className="flex justify-between w-[429px] text-[20px] my-[18px] bg-[#eae6df] hover:bg-[#e1dad0] p-[16px]"
                href=""
              >
                <span>Find a new job</span>
                <img className="w-[24px]" src="./right-arrow2.svg" alt="icon" />
              </a>

              <a
                className="flex justify-between w-[429px] text-[20px] bg-[#eae6df] hover:bg-[#e1dad0] p-[16px]"
                href=""
              >
                <span>Find a course or traning</span>
                <img className="w-[24px]" src="./right-arrow2.svg" alt="icon" />
              </a>
            </div>
          </div>
          <div className="ml-[96px] w-[840px] h-[840px]">
            <img className="" src="./landing-page-7.jpg" alt="image" />
          </div>
        </div>
      </section>
      {/* section 9 */}
      <section>
        <div className="grid grid-cols-[48%_auto] h-[720px] my-[60px] bg-gradient-to-l from-[#f4faff] from-65% to-white to-35%">
          <div className="grid justify-end items-center">
            <iframe
              className="w-[530px] h-[380px] rounded-[8px]"
              src="https://www.youtube.com/embed/IlYUUN8rL_Y"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col gap-[16px] justify-center ml-[48px]">
            <h2 className="text-[32px] text-[#000000e6] w-fit">
              In it to chase my dream
            </h2>
            <p className="text-[20px] text-[#000000e6] w-fit">
              Check out Gayatri’s story of finding a new job on LinkedIn
            </p>
          </div>
        </div>
      </section>
      {/* section 10 */}
      <section>
        <div className="h-[840px] w-full bg-[url('/landing-page-8.png')] bg-repeat-x bg-bottom bg-[length:auto_100%]">
        <div className="w-[1128px] mx-auto py-[60px]">
          <h2 className="text-[48px] mt-[48px] mb-[16px] leading-[60px]">
            Join your colleagues, classmates, and friends on LinkedIn.
          </h2>
          <BtnMd className={'text-[#ffffff] bg-[#0a66c2] hover:bg-[#004182]'} text={'Get Started'}/>
        </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
