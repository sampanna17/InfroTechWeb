
import Deliver from "../assets/Deliver.png";
import Execute from "../assets/Execute.png";
import Analysis from "../assets/Analysis.png";
import Idea from "../assets/Idea.png";


export default function WorkingProcess() {
  const processSteps = [
    {
      number: "01.",
      title: "Idea Generation",
      description: "The creative process of exploring and generating novel concepts or solutions to address a specific problem or meet a particular need.",
      Image: Idea
    },
    {
      number: "02.",
      title: "Analysis",
      description: "The systematic process of gathering, documenting, and evaluating the needs and criteria that a system, product, or project must meet, ensuring a clear ...",
      Image: Analysis
    },
    {
      number: "03.",
      title: "Project Execute",
      description: "Translating a conceptual idea into tangible reality by implementing, delivering, and optimizing the developed product to meet customer needs.",
      Image: Execute
    },
    {
      number: "04.",
      title: "Deliver",
      description: "Culmination of planning, execution, and control processes, resulting in successful completion and handover of a project final to stakeholder",
      Image: Deliver
    },
  ]

  return (
    <section className="bg-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Section Label */}
          <span className="text-blue-900 font-semibold text-lg sm:text-xl mb-4 block">Our Working Process</span>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
            Here is how we work to Grow
            <br />
            Your Business
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 px-15">
          {processSteps.map((step, index) => (
            <div key={index} className="border border-gray-200 shadow-lg p-6 rounded-lg relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Semi-circle with icon in top right */}
              <div
                className="absolute top-0 right-0 w-18 h-18 rounded-bl-full flex items-center justify-center"
                style={{ backgroundColor: "#e6eef5" }}
              >

                <div className="relative left-3 -top-1 w-13 h-12">
                  <img src={step.Image} alt={step.title} className="w-full h-full object-contain" />
                </div>

              </div>

              {/* Step Number */}
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-900 mb-4">{step.number}</div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}