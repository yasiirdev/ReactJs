import { IoLocationOutline } from "react-icons/io5";
export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:space-x-3 mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-3 sm:px-4 md:px-6 lg:px-0 w-full ">
      <div className="flex justify-center lg:justify-end mb-6 sm:mb-8 lg:mb-0">
        <div className="relative">
          {/* Image Container  */}
          <div className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-96 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] rounded-2xl sm:rounded-3xl overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr74Pjdj__bQPnZK-BFujbwgnP1t5PIqkig&s"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full sm:w-96 md:w-full lg:w-[40%] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none bg-white min-h-80 sm:h-auto md:h-auto lg:h-96 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] rounded-2xl sm:rounded-3xl mt-0 lg:mt-0 p-4 sm:p-5 md:p-6 lg:p-6 flex flex-col">
        
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl  sm:pt-8 md:pt-8 lg:pt-10 pb-2 sm:pb-3 text-gray-900">Professional Profile</h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed grow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis
          hic enim fuga, accusantium laborum nostrum voluptatem, eum nihil
          explicabo sequi voluptas praesentium? Qui nisi amet aliquid fugit,
          unde corporis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Cumque deleniti doloribus ullam dolore omnis? Officiis, aperiam
          totam hic sapiente,{" "}
        </p>
        <div className="pt-3 sm:pt-4 md:pt-4 w-full flex items-center gap-2 text-gray-700 text-xs sm:text-sm md:text-base font-medium border-t border-gray-200 mt-4 sm:mt-6"><IoLocationOutline className=" shrink-0 text-base sm:text-lg" /> base in pakistan , bahawalpul</div>
      </div>
    </div>
  );
}
