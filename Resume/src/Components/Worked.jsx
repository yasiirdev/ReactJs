import { useContext } from "react";
import AppContext from "../store/ContextApi";

export default function Worked() {
  const { workSvg } = useContext(AppContext);
    return (
      <section className="pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 ">
        <div className="max-w-7xl mx-auto px-4 xl:px-0">
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium capitalize text-slate-600 leading-normal lg:leading-normal lg:text-base mt-4 text-center sm:mx-auto sm:w-2/3 md:w-1/2 xl:w-2/5">
              Follow us
            </p>
          </div>
          <div className="mt-6 border-b border-b-neutral-100 sm:mx-auto sm:w-7/12 lg:mt-12"></div>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-8 sm:gap-x-12 lg:mt-12 lg:gap-x-24">
            {workSvg.map((obj , idx) => {
              return (
               <a href={obj.link} key={idx}>
                <img
                  className="h-8 sm:h-12 lg:h-16"
                  src={obj.svg}
                  alt={obj.alt}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    );
}