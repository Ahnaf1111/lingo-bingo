import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Word = () => {
  const data = useLoaderData();
  const [selectedWord, setSelectedWord] = useState(null);

  const openModal = (wordData) => {
    setSelectedWord(wordData);
    document.getElementById("my_modal_1").showModal();
  };

  //   {
  //     "Id": "f56a184c-6caa-445f-882b-7c24e9543043",
  //     "word": "食べる",
  //     "pronunciation": "taberu",
  //     "meaning": "to eat",
  //     "part_of_speech": "verb",
  //     "difficulty": "medium",
  //     "Lesson_no": 1,
  //     "when_to_say": "When talking about food or meals",
  //     "example": "I want to taberu sushi."
  //   },

  return (
    <div className="font-Montserrat bg-gradient-to-br from-blue-50 to-purple-100">
      <Navbar></Navbar>
      {data.map((d) => (
        <>
          <div
            className={`card border ${d.cardColor} shadow-xl p-4 w-80 mx-auto`}
          >
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{d.word}</h2>
              <p className="text-gray-700">
                <span className="font-semibold">Meaning:</span> {d.meaning}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Pronunciation:</span>{" "}
                {d.pronunciation}
              </p>
              <p className="text-gray-700 capitalize">
                <span className="font-semibold">Part of Speech:</span>{" "}
                {d.part_of_speech}
              </p>

              <div className="mt-4">
                {/* modal */}
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => openModal(d)}>
                  When to say
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">{selectedWord?.word}</h3>
                    <p>it means = {selectedWord?.meaning}</p>
                    <p className="py-4">{selectedWord?.when_to_say}</p>
                    <p>Example = {selectedWord?.example}</p>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Word;
