import { Text } from 'components';
import { memo } from 'react';

const Navbar = () => {
  return (
    <div className="p-6">
      <Text variant="h2" className="text-3xl font-semibold text-center text-white">
        FlixQuiz
      </Text>
    </div>
  );
};

export default memo(Navbar);
