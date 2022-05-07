import cn from 'clsx';
import { Text } from 'components';

const QueCard = ({ question, options, answer, onClick, showCorrectAnswer, selectedChoice }) => {
  const handleOptionClick = (e, option) => {
    if (onClick) {
      onClick(e, option);
    }
  };

  return (
    <>
      <Text variant="h5" className="text-white text-xl my-8">
        {question}
      </Text>
      <div className="my-4">
        {options.map((option) => (
          <Text
            key={option}
            className={cn(
              'bg-zinc-800 py-6 px-12 text-center mb-4 rounded-xl text-white cursor-pointer',
              {
                'bg-red-600': selectedChoice && selectedChoice === option && option !== answer,
                'bg-green-500': showCorrectAnswer && answer === option,
              }
            )}
            onClick={(e) => handleOptionClick(e, option)}
          >
            {option}
          </Text>
        ))}
      </div>
    </>
  );
};

QueCard.defaultProps = {
  onClick: null,
  selectedChoice: null,
};
export default QueCard;
