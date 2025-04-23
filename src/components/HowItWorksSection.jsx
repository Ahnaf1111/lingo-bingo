import React from "react";
import { BookOpen, Clock, Trophy } from "lucide-react";

const steps = [
  {
    icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
    title: "Learn",
    description:
      "Explore interactive vocabulary lessons with rich visuals and examples.",
  },
  {
    icon: <Clock className="h-8 w-8 text-indigo-600" />,
    title: "Practice",
    description:
      "Take short quizzes and flashcard sessions to reinforce your memory.",
  },
  {
    icon: <Trophy className="h-8 w-8 text-indigo-600" />,
    title: "Achieve",
    description: "Track your progress and reach new milestones with ease!",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-12 my-10">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">
        🚀 How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:animate-glow"
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
