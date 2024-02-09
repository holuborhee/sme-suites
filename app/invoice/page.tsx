import SupabaseLogo from "@/components/SupabaseLogo";

const Page = () => {
  return (
    <div className="pt-[100px] text-balance">
      <h1>
      <SupabaseLogo/> 
      
      </h1>
      <h1 className="font-bold text-[27px] text-center">
        Create fast and professional Invoice in few steps
      </h1>
      <p className="text-[16px] font-normal text-center py-6">
        Generate your free and customizable invoice with out invoice generator
      </p>
      <div className="container flex items-center gap-[250px] mt-8 ">
        <div className="relative">
          <div className="">
            <div className="relative">
              <div className="img rounded-[100%] p-2 object-contain flex items-center justify-center border border-blue-500">
                <span className="w-full">
                  <img
                    className="w-[30px] h-[30px] m-auto object-contain"
                    src="/SuperbaseLogo"
                    alt="h"
                  />
                </span>
              </div>
            </div>
            <p className="text-center py-6">Step 1</p>
            <h2 className="text-center">Description</h2>
          </div>
          <span className="w-[110px] flex items-center top-[12%] left-[142px] justify-center absolute border-2 bg-gray-600"></span>
        </div>

        <div className="relative ">
          <div className="">
            <div className="relative ">
              <div className="img rounded-[100%] p-2 flex items-center justify-center border border-blue-500">
                <span className="w-full">
                  <img
                    className="w-[30px] h-[30px] m-auto"
                    src="/SuperbaseLogo"
                    alt="h"
                  />
                </span>
              </div>
            </div>
            <p className="text-center py-6">Step 2</p>
            <h2 className="text-center">Customer's Details</h2>
          </div>
          <span className="w-[110px] flex items-center top-[12%] left-[142px] justify-center absolute border-2 bg-gray-600"></span>
        </div>

        <div className="relative">
          <div className="">
            <div className="relative">
              <div className="img rounded-[100%] flex p-2 items-center justify-center border border-blue-500">
                <span className="w-full">
                  <img
                    className="w-[30px] h-[30px]  m-auto"
                    src="/SuperbaseLogo"
                    alt="h"
                  />
                </span>
              </div>
            </div>
            <p className="text-center py-6">Step 3</p>
            <h2 className="text-center">Invoice Details</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
