import { QueCard, Text } from 'components';
import { useTimer } from 'hooks/useTimer';
import { useQuizDataContext } from 'providers';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getFilteredQuestion } from 'utils/helper-funcs';

const Quiz = () => {
  const [count, setCount] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [userChoiceData, setUserChoiceData] = useState({ score: 0, name: '', data: [] });

  const { data = [] } = useQuizDataContext();
  const { name } = useParams();
  const { Questions = [], id = '' } = getFilteredQuestion(name, data) || {};

  const [timer, isTimerExpired, handleExpireTimer] = useTimer(30, 1);

  useEffect(() => {
    if (isTimerExpired) {
      setCount((prev) => prev + 1);
      setShowCorrectAnswer(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimerExpired]);

  const onOptionClick = (e, option) => {
    let userScore = userChoiceData.score;

    if (Questions[count].Answer !== option) {
      e.target.style.backgroundColor = '#DC2626';
    } else {
      userScore += 10;
    }
    const userData = [...userChoiceData.data];
    userData.push({ queCount: count, selected: option });

    setTimeout(() => {
      handleExpireTimer(true);
    }, 500);
    setUserChoiceData({ score: userScore, data: userData, name, id });
    setShowCorrectAnswer(true);
  };

  if (Questions && Questions.length === count) {
    return <Navigate to="/result" replace state={{ userChoiceData }} />;
  }

  return (
    <section className="max-w-2xl py-4 mx-auto">
      <Text variant="h6" className="text-2xl font-medium text-zinc-400 text-center">
        Time Remaining: {timer} secs
      </Text>
      <header className="flex justify-between my-4">
        <Text className="text-xl text-slate-400" variant="h6">
          Question count: <span className="text-white">{count + 1}/4</span>
        </Text>
        <Text className="text-xl text-slate-400" variant="h6">
          Score: <span className="text-white">{userChoiceData.score}</span>
        </Text>
      </header>
      <QueCard
        question={Questions[count]?.Question}
        options={Questions[count]?.Options}
        answer={Questions[count].Answer}
        showCorrectAnswer={showCorrectAnswer}
        onClick={onOptionClick}
      />
    </section>
  );
};

export default Quiz;
