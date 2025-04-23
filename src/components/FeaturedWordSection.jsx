import React from "react";

const FeaturedWordSection = () => {
  const word = {
    term: "Ephemeral",
    pronunciation: "/ɪˈfɛm(ə)rəl/",
    meaning: "Lasting for a very short time.",
    example: "The beauty of the sunset was ephemeral but breathtaking.",
  };

  return (
    <section className="py-10 px-5 rounded-2xl my-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-800">
        📖 Featured Word of the Day
      </h2>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md text-center animate-glow">
        <h3 className="text-2xl font-semibold text-indigo-700">{word.term}</h3>
        <p className="italic text-gray-600">{word.pronunciation}</p>
        <p className="mt-4 text-lg">{word.meaning}</p>
        <p className="mt-2 text-sm text-gray-500">
          Example: <em>{word.example}</em>
        </p>
      </div>
    </section>
  );
};

export default FeaturedWordSection;
