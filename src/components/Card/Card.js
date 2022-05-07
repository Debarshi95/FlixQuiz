import { Text } from 'components';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, imageUrl }) => {
  return (
    <Link to={`/quiz/${name}`}>
      <div className="bg-zinc-800 w-full rounded-3xl mb-4">
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
    </Link>
  );
};

export default memo(Card);
