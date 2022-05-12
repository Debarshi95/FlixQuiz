import { Text } from 'components';
import { memo } from 'react';

const Card = ({ name, imageUrl, onModalClick }) => {
  return (
    <div
      role="button"
      aria-hidden
      className="bg-zinc-800 w-full rounded-3xl mb-4"
      onClick={() => onModalClick(true, name)}
    >
      {imageUrl && (
        <img src={imageUrl} alt={name || ''} className="w-full rounded-3xl h-72 object-cover" />
      )}
      <div className="text-white text-center px-4 py-8">
        <Text variant="h6" className="text-2xl">
          {name}
        </Text>
        <Text variant="p" className="text-slate-500 text-base mt-2">
          Take the {name} quiz to test your knowledge
        </Text>
      </div>
    </div>
  );
};

export default memo(Card);
