import BtnMd from "./BtnMd";

const NavBtn = ({ link, className, svg, text }) => {
  return (
    <>
      <a href={link}>
        <div
          className={`flex flex-col justify-center items-center w-[80px] h-[52px] group cursor-pointer ${className}`}
        > {svg}
          <p className="text-[12px] text-[#666666] font-[450] transition duration-200 group-hover:text-[#303030]">
            {text}
          </p>
        </div>
      </a>
    </>
  );
};

export default NavBtn;
