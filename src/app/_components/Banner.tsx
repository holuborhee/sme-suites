import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full  flex flex-col items-center align-center justify-start gap-[68px] text-center text-[52px] text-black font-montserrat bg-white px-96 py-2 md">
      <div className="flex flex-col items-center justify-start gap-[32px]">
        <div className="w-[1176px] relative leading-[125.08%] inline-block text-center">
          <p className="m-0 text-4xl">{`Empower Your Enterprise, `}</p>
          <p className="m-0">
            <span className="text-4xl">{`Scale for Success and `}</span>
            <span className="font-semibold font-montserrat text-[#00A939] text-center text-4xl ">
              Amplify Performance
            </span>
          </p>
        </div>
        <div className="w-[1207px] relative text-5xl leading-[125.08%] text-sub-text-color inline-block text-base">
          Unlock the Potential of Your Client Value Delivery with Invoicing,
          Agreements, Payments and Essential Tools
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[24px] text-lg mr-12">
        <div className="w-[450px] h-[76px] rounded-3xs h-[76px] overflow-hidden shrink-0 flex flex-col items-end justify-center py-0 px-2.5 box-border">
          <div className="flex flex-row items-center justify-center gap-[32px]">
            <div className="flex flex-row items-start justify-start w-[198px]">
              <img
                className="w-[50px] relative rounded-[50%] h-[52px] object-cover"
                alt=""
                src="/ellipse-1.svg"
              />
              <img
                className="w-[45px] relative rounded-[50%] h-[52px] object-cover ml-[-12px]"
                alt=""
                src="/ellipse-2.svg"
              />
              <img
                className="w-[45px] relative rounded-[50%] h-[52px] object-cover ml-[-12px]"
                alt=""
                src="/ellipse-3.svg"
              />
              <img
                className="w-[45px] relative rounded-[50%] h-[52px] object-cover ml-[-12px]"
                alt=""
                src="/ellipse-4.svg"
              />
              <img
                className="w-[45px] relative rounded-[50%] h-[52px] object-cover ml-[-12px]"
                alt=""
                src="/ellipse-5.svg"
              />
              <div className="w-[30px] relative h-[52px] ml-[-12px]">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white box-border w-[52px] h-[52px] border-[1px] border-dashed border-limegreen" />
                <div className="absolute top-[14px] left-[200px] w-8 h-6 overflow-hidden" />
                <div className="absolute top-[15px] left-[10.5px] leading-[125.08%] font-medium">
                  +2k
                </div>
              </div>
            </div>
            <div className="relative w-[200px] items-end text-base leading-[125.08%] justify-end font-medium montserrat text-[#000000]">
              Business owners use this
            </div>
          </div>
        </div>
      </div>
        
      <div className="flex flex-row items-start justify-start gap-[16px] text-left text-2xl text-black font-montserrat ">
      <div className="w-[180px] h-[230px] shadow-[0px_2px_25px_rgba(0,_0,_0,_0.05)] rounded-xl bg-white h-[282px] overflow-hidden shrink-0 flex flex-col items-end justify-start py-7 px-[15px] box-border">
        <div className="flex flex-row items-end justify-start">
          <div className="w-[86px] relative leading-[125.08%] inline-block shrink-0">
            <span>{`Create your `}</span>
            <span className="font-semibold text-[#3961F1]">{`invoice `}</span>
            <span>with one click!</span>
          </div>
          <a className="[text-decoration:none] w-[60px] rounded-41xl box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[7px] border-[1px] border-dashed border-dodgerblue">
            <img
              className="w-[60px] relative h-[60px]"
              alt=""
              src="/arrow.svg"
            />
          </a>
        </div>
      </div>
      <div className="w-[430x] rounded-xl bg-[#F5F7FE] h-[282px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[23px] px-0 box-border text-3xl">
        <div className="w-[443px] h-[227px] flex flex-col items-start justify-start py-0 pr-0 pl-1.5 box-border">
          <div className="w-[201px] relative leading-[125.08%] font-montserrat font-medium justify-left bottom-5 left-1">
            Making businesses greater
          </div>
          <div className="w-[275px] rounded-xl bg-white h-auto flex flex-col items-center justify-start p-2.5 box-border ml-[145px] mt-[-36px] text-sm bottom-[50px]">
            <div className="flex flex-col items-center justify-center mr-28 gap-[16px] mb-1.5">
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
      <div className="w-[210px] rounded-xl bg-[#F5FFF6] h-[282px] overflow-hidden shrink-0 flex flex-col items-center justify-end py-6 px-0 box-border text-xs text-silver">
        <div className="flex flex-col items-center justify-start gap-[32px]">
          <div className="w-[223px] relative h-[125px]">
            <div className="absolute top-[0px] left-[0px] w-[223px] h-[204px] flex flex-col items-center justify-end">
              <img
                className="w-[205px] relative h-[180px]"
                alt=""
                src="/group-31.svg"
              />
              <div className="w-10 relative h-[95px] mt-[-181px]">
                <img
                  className="absolute top-[20px] left-[16px] w-2 h-14"
                  alt=""
                  src="/group-27.svg"
                />
                <div className="absolute top-[0px] left-[92px] w-10 h-[95px] overflow-hidden flex flex-col items-center justify-end">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="w-10 relative shadow-[0px_2px_3px_2px_rgba(0,_0,_0,_0.05)] rounded-[50%] bg-ghostwhite-100 h-10 z-[0]" />
                    <div className="w-[15px] absolute !m-[0] top-[13px] left-[12px] shadow-[4px_0px_47.2px_74px_rgba(0,_0,_0,_0.05)] rounded-[50%] bg-white h-[15px] z-[1]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[182px] flex-col items-start justify-start gap-[12px] color-[#F5FFF6]">
            <div className="relative leading-[125.08%] bottom-4 top-[100px] font-montserrat  text-[##B5B5B5]">Time to pay</div>
            <div className="flex flex-row items-center justify-center gap-[78px] text-2xl text-black">
              <div className="relative h-6 leading-[125.08%] font-medium object-contain top-[100px]">
                20 days
              </div>
              <img
                className="relative overflow-hidden justify-center align-center font-xs top-[90px]"
                alt=""
                src="/vector1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="bg-blue-500 w-[290px] h-[50px] shadow-[0px_2px_21.9px_rgba(255,_255,_255,_0.1)_inset,_2px_0px_19.6px_rgba(0,_108,_208,_0.4),_0px_2px_7.2px_rgba(112,_141,_245,_0.6)] rounded-lg bg-mediumslateblue-100 box-border h-14 flex flex-row items-center justify-center p-2.5 text-center text-2xl text-white font-montserrat border-[1px] border-solid border-mediumslateblue-200">
       <div
        className="relative leading-[125.08%] font-medium"
        
       >
        Get started
      </div>
    </div>
    </div>
    
  );
};

export default Banner;
