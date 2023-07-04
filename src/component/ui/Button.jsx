const Button = ({color, text, isloading, fullwidth, textcolor}) => {
  return (
        <button className={`bg-${color} ${fullwidth?'w-full':'w-fit px-[35.14px]'} ${textcolor?textcolor:"text-white"} flex items-center rounded-lg text-[14px] font-medium leading-[21.34px] py-[14px]  text-center justify-center font-DmSansRegular`}>
            {text}
        </button>
  )
}



export const DoubleButtonColumn = ({color, text1, text2, isloading, fullwidth, textcolor}) => {
  return (
        <button className={`bg-${color} ${fullwidth?'w-full':'w-fit px-[35.14px]'} ${textcolor?textcolor:"text-white"} flex items-center flex-col rounded-lg text-[14px] font-medium leading-[21.34px] py-[14px]  text-center justify-center font-DmSansRegular`}>
         <p>   {text1} </p>
            <p>
              {text2}
            </p>
        </button>
  )
}



export default Button