import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";

const Word = () => {
  const data = useLoaderData();
  const [showModal, setShowModal] = useState(false);

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
    <div className="font-Montserrat">
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
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => setShowModal(true)}
                >
                  When to say?
                </button>
              </div>
            </div>
          </div>

          {/* Modal */}
          {showModal && (
            <dialog className="modal modal-open ">
              <div className="modal-box animate__animated animate__fadeInUp">
                <h3 className="font-bold text-lg mb-2">{d.word}</h3>
                <p>
                  <strong>Meaning:</strong> {d.meaning}
                </p>
                <p className="mt-2">
                  <strong>When to say:</strong> {d.when_to_say}
                </p>
                <p className="mt-2">
                  <strong>Example:</strong> {d.example}
                </p>

                <div className="modal-action">
                  <button
                    className="btn btn-sm"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </dialog>
          )}
        </>
      ))}
    </div>
  );
};

export default Word;
