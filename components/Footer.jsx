const Footer = () => {
  return (
    <>
      <section className="bg-[#f3f2f0]">
        <div className="grid grid-cols-5 py-[24px] w-[1128px] mx-auto">
          {/* Logo */}
          <div className="flex gap-[4px] w-[102px] h-[25.5px] items-center">
            <h2 className="text-[2.4rem] font-bold text-[#0a66c2]">Linked</h2>
            <img className="h-[24px]" src="./logo.svg" alt="logo" />
          </div>

          {/* General */}
          <div>
            <h3 className="text-[16px] font-semibold mb-[8px]">General</h3>
            {[
              "Sign Up",
              "Help Center",
              "About",
              "Press",
              "Blog",
              "Careers",
              "Developers",
            ].map((item, i) => (
              <p
                key={i}
                className="text-[14px] mb-[3px] text-[#00000099] cursor-pointer font-semibold hover:text-[#0a66c2]"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Browse LinkedIn */}
          <div>
            <h3 className="text-[16px] font-semibold mb-[8px]">
              Browse LinkedIn
            </h3>
            {[
              "Learning",
              "Jobs",
              "Games",
              "Salary",
              "Mobile",
              "Services",
              "Products",
              "Top Companies Hub",
            ].map((item, i) => (
              <p
                key={i}
                className="text-[14px] mb-[3px] text-[#00000099] cursor-pointer font-semibold hover:text-[#0a66c2]"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Business Solutions */}
          <div>
            <h3 className="text-[16px] font-semibold mb-[8px]">
              Business Solutions
            </h3>
            {["Talent", "Marketing", "Sales", "Learning"].map((item, i) => (
              <p
                key={i}
                className="text-[14px] mb-[3px] text-[#00000099] cursor-pointer font-semibold hover:text-[#0a66c2]"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Directories */}
          <div>
            <h3 className="text-[16px] font-semibold mb-[8px]">Directories</h3>
            {[
              "Members",
              "Jobs",
              "Companies",
              "Featured",
              "Learning",
              "Posts",
              "Articles",
              "Schools",
              "News",
              "News Letters",
              "Services",
              "Products",
              "Advice",
              "People Search",
            ].map((item, i) => (
              <p
                key={i}
                className="text-[14px] mb-[3px] text-[#00000099] cursor-pointer font-semibold hover:text-[#0a66c2]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Footer bottom */}
      <footer>
        <div className="flex w-[1128px] h-[50px] mx-auto items-center">
          <div className="flex gap-[8px] p-[8px] justify-center items-center">
            {/* SVG logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 14"
              id="linkedin-logo-xxsmall"
              aria-hidden="true"
              role="none"
              data-supported-dps="56x14"
              fill="currentColor"
              width="56"
              height="14"
              focusable="false"
              className="lazy-loaded"
              aria-busy="false"
            >
              <g>
                <path
                  className="background-mercado"
                  d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"
                ></path>
              </g>
            </svg>
            <p className="text-[13px] text-[#666666]">&copy; 2025</p>
          </div>

          {/* Footer links */}
          {[
            "About",
            "Accessibility",
            "User Agreement",
            "Privacy Policy",
            "Cookie Policy",
            "Copyright Policy",
            "Brand Policy",
            "Guest Controls",
            "Community Guidelines",
          ].map((item, i) => (
            <a
              key={i}
              className="text-[12px] text-[#666666] font-semibold p-[8px] hover:text-[#004182]"
              href="#"
            >
              {item}
            </a>
          ))}

          {/* Language dropdown */}
          <a
            href="#"
            className="flex gap-[4px] justify-center items-center text-[12px] text-[#666666] font-semibold p-[8px] hover:text-[#004182] group"
          >
            <span>Language</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="fill-current text-[#666666] group-hover:text-[#004182]"
              viewBox="0 0 16 16"
            >
              <path d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
