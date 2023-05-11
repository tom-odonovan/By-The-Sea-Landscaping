import styles from "../styles";
import { BsCheck2 } from "react-icons/bs";

const Guarantee = ({ title, text }) => (
  <div className={`${styles.flexCenter} flex-row flex-1 py-[20px]`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-full bg-[#3CAB80] opacity-[0.8]`}>
      <BsCheck2 size={40} color='#fff' />
    </div>
    <div className="flex flex-col flex-1 ml-[30px]">
      <h4 className="text-[24px] text-[#1c6758] font-roboto font-bold uppercase pb-[15px]">
        {title}
      </h4>
      <p className="font-normal text-[18px] leading-[32px]">
        {text}
      </p>
    </div>
  </div>
);

export default Guarantee;
