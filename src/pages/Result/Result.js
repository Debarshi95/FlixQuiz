import { useLocation } from 'react-router-dom';
import { useQuizDataContext } from 'providers';
import { getFilteredQuestion } from 'utils/helper-funcs';
import { QueCard, Text } from 'components';

const Result = () => {
  const { data = [] } = useQuizDataContext();
  const { state } = useLocation();
  const { userChoiceData } = state || {};
  const { score } = userChoiceData;
  const { Questions = [] } = getFilteredQuestion(userChoiceData?.name, data) || {};

  return (
    <section className="p-4 max-w-2xl py-4 mx-auto">
      <Text variant="h5" className="text-2xl font-medium text-white text-center">
        Final Score: <span>{score}/40</span>
      </Text>
      <div>
        {Questions?.map((questionData, idx) => (
          <QueCard
            key={idx}
            question={questionData.Question}
            options={questionData.Options}
            answer={questionData.Answer}
            selectedChoice={userChoiceData.data[idx].selected}
            showCorrectAnswer
          />
        ))}
      </div>
    </section>
  );
};

export default Result;
