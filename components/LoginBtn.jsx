const LoginBtn = ({ text, className, }) => {
  return (
    <>
      <button
        className={`flex gap-[10px] w-[400px] justify-center items-center rounded-full cursor-pointer transition duration-300 ${className}`}
      >{text}</button>
    </>
  );
};
export default LoginBtn;
