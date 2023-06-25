const ExploreCard = ({ id, imgUrl, title, active, handleClick }) => (
  <div className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[1.5]'} flex items-center justify-center min-w-[130px] transition-[flex] duration-[1s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-xl"
    />
    {active !== id ? (
      <div className="absolute bottom-0 p-6 flex flex-col justify-center items-start lg:items-center w-full h-full bg-[rgba(0,0,0,0.5)] rounded-xl shadow-2xl transition-none">
        <h3 className="w-fit lg:w-full font-semibold md:text-[20px] sm:text-[18px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      </div>
    ) : (
      <div className="absolute bottom-0 p-6 lg:p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-xl shadow-2xl">
        <h2 className="font-semibold w-[200px] md:text-[22px] sm:text-[20px] text-[24px] text-white">
          {title}
        </h2>
        {/* <a href="#" className="font-normal text-[14px] leading-[20px] text-white hover:underline">
          See more
        </a> */}
      </div>
    )}
  </div>
);

export default ExploreCard;
