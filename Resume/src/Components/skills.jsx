import { useContext } from "react";
import AppContext from "../store/ContextApi";


export default function Skills() {
    const {certifications , skillCategories } = useContext(AppContext);

  return (
    <section className="py-20 bg-linear-to-b bg-neutral-50  text-black" id="sk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 ">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 text-lg">
            Proficient in Technical skills
          </p>
        </div>

        {/* Skills Grid */}
        <div className=" mb-20  align-items-center ">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-8 bg-linear-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                {category.category}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-200 font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 font-semibold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-slate-600 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 group-hover/skill:shadow-lg group-hover/skill:shadow-blue-500/50"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20 ">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h3>
          <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-12"></div>
          <div className="justify-items-center align-items-center">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="group relative bg-linear-to-br from-slate-800 to-slate-700 rounded-2xl overflow-hidden border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-700">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {cert.title}
                  </h4>
                  <p className="text-purple-400 font-semibold text-sm mb-4">
                    {cert.issuer}
                  </p>

                  {/* Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🏆</span>
                      <span className="text-slate-300 text-sm">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
