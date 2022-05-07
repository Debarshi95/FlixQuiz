/* eslint-disable no-unused-vars */
import { Text } from 'components';
import { useState } from 'react';
import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const rulesData = [
  'Each Question has 4 options',
  "You'll get 30 seconds to answer",
  '10 Marks for correct answer',
  "At the end of the game, you'll see your final score",
];

ReactModal.setAppElement(document.getElementById('home'));

const Modal = ({ onClose, isOpen, quizName }) => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate(`/quiz/${quizName}`);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => onClose(false)}
      className="p-4 bg-gray-800 bg-opacity-60 fixed inset-0 z-40 flex justify-center items-center"
    >
      <div className="bg-gray-100 max-w-96 h-96 p-4 rounded-xl">
        <Text className="text-3xl text-slate-700 text-center font-semibold">Rules</Text>
        <div className="my-12">
          {rulesData.map((text, idx) => (
            <Text key={idx} className="text-slate-700 text-lg">
              {idx + 1}) {text}
            </Text>
          ))}
        </div>
        <button
          type="button"
          onClick={handleStartQuiz}
          className="bg-slate-700  w-full text-white px-4 py-1 text-lg rounded-md"
        >
          Start
        </button>
      </div>
    </ReactModal>
  );
};

export default Modal;
