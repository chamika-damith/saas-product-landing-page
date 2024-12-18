import { HOW_IT_WORKS_CONTENT } from "../constants";

const Work = () => {
  return (
    <section id="works" className="bg-gradient-to-b from-neutral-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 border-t border-neutral-800 pt-8">
          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-transparent text-white bg-clip-text">
            {HOW_IT_WORKS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {HOW_IT_WORKS_CONTENT.sectionDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
            <div
              className="bg-neutral-800/50 backdrop-blur-md p-8 rounded-3xl shadow-lg flex flex-col justify-between transform hover:scale-105 transition duration-300 ease-in-out"
              key={index}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-gray-100 to-blue-200 bg-clip-text">
                  {step.title}
                </h3>
                <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
                  {step.description}
                </p>
                {step.imageSrc && (
                  <div className="flex justify-center mb-4">
                    <img
                      src={step.imageSrc}
                      alt={step.imageAlt || "Illustration"}
                      className="rounded-xl shadow-md border border-neutral-700"
                    />
                  </div>
                )}
              </div>
              {step.users && (
                <div className="flex justify-between items-center mt-6">
                  <div className="flex space-x-2">
                    {step.users.map((user, userIndex) => (
                      <img
                        key={userIndex}
                        src={user}
                        alt={`Person ${userIndex + 1}`}
                        className="w-10 h-10 rounded-full border-2 border-blue-500"
                      />
                    ))}
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white py-2 px-6 rounded-xl shadow-lg">
                    Connect
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
