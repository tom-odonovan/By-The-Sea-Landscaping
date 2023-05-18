import styles from "../styles";
import { BsCheck2 } from "react-icons/bs";

const Guarantee = ({ title, text }) => (
  <div className={`${styles.flexCenter} flex-row flex-1 py-[20px]`}>
    <div className={`${styles.flexCenter}  sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-[#3CAB80] opacity-[0.8]`}>
      <BsCheck2 size={40} color='#fff' />
    </div>
    <div className="flex flex-col flex-1 ml-[30px]">
      <h4 className="md:text-[20px] sm:text-[18px] text-[18px] text-[#1c6758] font-roboto font-bold uppercase pb-[15px]">
        {title}
      </h4>
      <p className="font-normal md:text-[16px] sm:text-[14px] text-[12px]">
        {text}
      </p>
    </div>
  </div>
);

export default Guarantee;
