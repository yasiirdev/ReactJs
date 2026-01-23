import { useContext } from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import AppContext from "../store/ContextApi";

export default function WorkExperience() {
    const { experiences } = useContext(AppContext);

  return (
    <section className="w-full bg-linear-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            {/* <FaBriefcase className="text-xl sm:text-2xl md:text-3xl text-blue-600" /> */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Work Experience
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3 ml-0 sm:ml-1">
            Proven track record of delivering impactful results
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group bg-white border-2 border-gray-200 rounded-xl p-5 sm:p-6 md:p-8 lg:p-10 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Timeline dot on left (optional visual) */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
                {/* Timeline indicator */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-100 mt-2"></div>
                  {index !== experiences.length - 1 && (
                    <div className="w-1 bg-linear-to-b from-blue-300 to-gray-200 h-32 md:h-48 mt-4"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Position and Company */}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-blue-600 mb-2">
                      {exp.company}
                    </p>

                    {/* Meta Information */}
                    <div className="flex flex-col gap-2 text-xs sm:text-sm md:text-base">
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaClock className="text-blue-500 shrink-0" />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaMapMarkerAlt className="text-red-500 shrink-0" />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-b-2 border-gray-100 my-4 sm:my-5 md:my-6"></div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed md:leading-8">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
