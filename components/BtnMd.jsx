
const BtnMd = ({text, className}) => {
  return (
    <>
      <button className={`text-[16px] font-semibold border rounded-full py-[12px] px-[24px] cursor-pointer transition duration-200 ${className}`}>{text}</button>
    </>
  )
}

export default BtnMd
