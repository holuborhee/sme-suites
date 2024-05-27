import React from 'react';

const Banner = () => {
  return (
    <div className="max-w-[327px] max-h-[911px] md:max-w-[1207px] max-h-[796px] mx-auto">
    <div className="relative md:w-[1207px] h-[796px] flex flex-col items-center align-center text-center gap-[30px] text-black font-montserrat bg-white">
      <div className="flex flex-col w-[327px] h-[216px] items-center gap-[16px] md:gap-[32px]">
        <div className="relative leading-[35.02px] text-start w-[327px] h-[140px] md:w-[1176px] md:h-[130px] md:align-center md:text-center">
          <p className="m-0 text-[28px] md:text-4xl font-medium font-montserrat">{`Empower Your Enterprise, `}</p>
          <p className="m-0">
            <span className="text-[28px] md:text-4xl font-medium font-montserrat">{`Scale for Success and `}</span>
            <span className="font-semibold font-montserrat text-[#00A939] text-center text-[28px] md:text-4xl ">
              Amplify Performance
            </span>
          </p>
        </div>
        <div className="text-start w-[327px] h-[60px] relative text-[16px] md:w-[1207px] h-[60px] md:text-[24px] leading-[20.01px] font-normal text-sub-text-color text-[#595959] text-base md:text-center">
          Unlock the Potential of Your Client Value Delivery with Invoicing,
          Agreements, Payments and Essential Tools
        </div>
      </div>
      <div className="flex flex-col items-center justify-start text-lg mr-12 md:top-[12px] md:left-[24px] gap-[12px] ">
        <div className="w-[230px] h-[74px] md:w-[598px] md:h-[76px] rounded-md md:rounded-xl flex md:flex-col box-border">
          <div className="flex flex-row items-center justify-center gap-[32px]">
            <div className="w-[182px] h-[42px] flex flex-row items-start justify-start md:w-[252px] h-[52px] rounded-md">
              <img
                className="w-[40px] h-[40px] relative rounded-[50%] md:w-[52px] md:h-[52px] object-cover"
                alt=""
                src="/ellipse-1.svg"
              />
              <img
                className="w-[40px] h-[40px] relative rounded-[50%] md:w-[52px] md:h-[52px] object-cover ml-[-12px]"
                alt=""
                src="/ellipse-2.svg"
              />
              <img
                className="w-[40px] h-[40px] relative rounded-[50%] md:w-[52px]  md:h-[52px] object-cover ml-[-12px]"
                alt=""
                src="/ellipse-3.svg"
              />
              <img
                className="w-[40px] h-[40px] relative rounded-[50%] md:w-[52px] md:h-[52px] object-cover ml-[-12px]"
                alt=""
                src="/ellipse-4.svg"
              />
              <img
                className="w-[40px] h-[40px] relative rounded-[50%] md:w-[52px] md:h-[52px] object-cover ml-[-12px]"
                alt=""
                src="/ellipse-5.svg"
              />
              <div className="w-[40px] h-[40px] relative md:w-[52px] md:h-[52px] ml-[-12px]">
                <div className="absolute top-[0px] left-[0px] w-[40px] h-[40px] rounded-[50%] bg-white box-border md:w-[52px] md:h-[52px] border-[1px] border-dashed border-limegreen" />
                <div className="absolute top-[14px] left-[200px] w-8 h-6 overflow-hidden" />
                <div className="absolute bottom-[2px] md:bottom-[2px] top-[15px] left-[10.5px] leading-[125.08%] font-medium">
                  +2k
                </div>
              </div>
            </div>
            <div className="relative justify-start right-[200px] top-[45px] w-[190px] text-[16px] md:w-[300px] h-[20px] align-center md:top-[10px] text-[16px] md:w-[280px] md:right-[0px] md:h-[28px] md:text-[22px]  md:leading-[27.50%] font-medium montserrat text-[#000000]">
              Business owners use this
            </div>
          </div>
        </div>
      </div>
        
    <div className="flex flex-wrap w-[327px] h-[455px] gap-[16px] md:w-[1187px] md:h-[282px] md:flex md:flex-nowrap md:flex-row md:gap-[16px] text-left text-2xl text-black font-montserrat ">
       <div className="w-2/4 ml-[4px] justify-flex-row md:ml-[0px]  flex-row order-2 text-[20px] md:text-[32px] w-[158px] h-[180px] md:w-[283px] md:h-[282px] md:order-1 shadow-[0px_2px_25px_rgba(0,_0,_0,_0.05)] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-end justify-start py-7 box-border">
         <div className="flex flex-row items-end justify-start">
           <div className="w-[86px] md:right-[90px] relative leading-[125.08%] inline-block shrink-0">
             <span>{`Create your `}</span>
             <span className="font-semibold text-[#3961F1]">{`invoice `}</span>
             <span>with one click!</span>
           </div>
            <a className="[text-decoration:none] w-[60px] rounded-41xl overflow-hidden shrink-0 flex flex-row items-center justify-center p-[7px] border-dashed border-dodgerblue">
              <img
                className="w-[30px] h-[30px] md:w-[60px] relative md:h-[60px]"
                alt=""
                src="/arrow.svg"
              />
            </a>
         </div>
       </div>
       <div className="w-[320px] order-1 md:w-[589px] rounded-xl bg-[#F5F7FE] left-[4px] md:h-[279px] md:order-2 overflow-hidden shrink-0 flex flex-col items-center justify-start py-[23px] px-0 box-border text-3xl">
         <div className="w-[273px] h-[195px] top-[21px] left-[27px] md:w-[533px] md:h-[227px] flex flex-col items-start justify-start py-0 pr-0 pl-1.5 box-border md:top-[23px] md:left-[28px] rounded-xl">
           <div className="w-[97px] h-[70px] text-[14px] md:w-[201px] md:h-[130px] md:top-[2px] md:text-[24px] md:left-[5px] relative leading-[125.08%] font-montserrat font-medium">
             Making businesses greater
           </div>
           <div className="w-[273px] h-[129px] top-[90px] right-[67px] gap-[10px] md:w-[354px] md:h-[173px] rounded-xl bg-white flex flex-col box-border md:ml-[145px] md:mt-[-36px] text-sm bottom-[50px]">
             <div className="flex flex-col items-center justify-center md:w-[293px] md:h-[136px] mr-28 gap-[16px] mb-1.5">
               <div className="flex flex-col items-center justify-start">
                 <img
                   className="w-[60px] relative h-[60px] object-cover left-[51px]"
                   alt=""
                   src="/image-2@2x.png"
                 />
                 <div className="relative leading-[125.08%] text-sm font-monserrat truncate left-[50px]">
                   Invoice generated and uploaded
                 </div>
               </div>
                <a className="[text-decoration:none] w-[126px] rounded bg-ghostwhite-300 h-[33px] flex flex-row items-center justify-center p-2.5 box-border text-sm text-mediumslateblue-100">
                 <div className="relative leading-[125.08%] text-[#3961F1] left-[51px]">View invoice</div>
               </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative left-[165px] bottom-[195px] md:left-[0px] md:bottom-[0px] w-2/4 order-2 w-[159px] h-[180px] md:w-[283px] md:order-3 rounded-xl bg-[#F5FFF6] md:h-[282px] overflow-hidden shrink-0 flex flex-col items-center justify-end box-border text-xs text-silver">
        <div className="flex-row flex-col items-center justify-start gap-[12px] md:gap-[32px]">
          <div className="w-[160px] h-[160px] md:w-[223px] relative md:h-[125px]">
            <div className="absolute top-[0px] object-cover w-[223px] h-[204px] flex flex-col items-center justify-end">
              <img
                className="w-[160px] h-[112px] bottom-7 right-[32px] md:right-[0px] md:bottom-0 md:w-[223px] relative md:h-[180px]"
                alt=""
                src="/group-31.svg"
              />
              <div className="w-10 relative h-[60px] md:h-[95px] mt-[-181px]">
                <img
                  className="absolute right-[10px] top-[30px] md:top-[50px] md:top-[20px] md:left-[16px] w-2 h-14"
                  alt=""
                  src="/group-27.svg"
                />
                <div className=" top-[0px] left-[92px] w-10 h-[95px] overflow-hidden flex flex-col items-center justify-end">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="w-10 relative shadow-[0px_2px_3px_2px_rgba(0,_0,_0,_0.05)] rounded-[50%] bg-ghostwhite-100 h-10 z-[0]" />
                    <div className="w-[15px] absolute !m-[0] top-[13px] left-[12px] rounded-[50%] bg-white h-[15px] z-[1]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[182px] flex-col items-start justify-start gap-[12px] color-[#F5FFF6]">
            <div className="relative leading-[125.08%] top-[130px] bottom-4 md:top-[100px] font-montserrat text-[##B5B5B5]">Time to pay</div>
            <div className="flex flex-row items-center text-sm justify-center gap-[78px] md:text-2xl text-black">
              <div className="relative h-6 leading-[125.08%] top-[130px] font-medium object-contain md:top-[100px]">
                20 days
              </div>
              <img
                className="relative top-[100px] overflow-hidden justify-center align-center right-[10px]  font-xs md:top-[90px]"
                alt=""
                src="/vector1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>

    <div className="justify-start bg-blue-500 w-[240px] h-[46px] md:w-[290px] md:h-[50px] gap-[10px] shadow-[0px_2px_21.9px_rgba(255,_255,_255,_0.1)_inset,_2px_0px_19.6px_rgba(0,_108,_208,_0.4),_0px_2px_7.2px_rgba(112,_141,_245,_0.6)] rounded-lg bg-mediumslateblue-100 box-border flex flex-row items-center justify-center p-2.5 text-center text-2xl text-white font-montserrat border-[1px] border-solid border-mediumslateblue-200">
       <div
        className="relative leading-[125.08%] font-medium"
        
       >
        Get started
      </div>
    </div>
    </div>
  </div>
    
    
  );
};

export default Banner;

