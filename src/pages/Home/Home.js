import cn from 'clsx';
import { useState } from 'react';
import { Card, Modal } from 'components';
import { useQuizDataContext } from 'providers';

const Home = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { data = [] } = useQuizDataContext();

  const onModalClick = (open, name) => {
    setIsOpen(open);
    if (name) {
      setSelectedQuiz(name);
    }
  };

  return (
    <section
      id="home"
      className={cn('p-4 sm:flex gap-6', { 'max-h-screen': isOpen, 'overflow-hidden': isOpen })}
    >
      <Modal onClose={onModalClick} isOpen={isOpen} quizName={selectedQuiz} />
      {data?.map((item) => (
        <Card name={item.name} imageUrl={item.image} key={item.id} onModalClick={onModalClick} />
      ))}
    </section>
  );
};

export default Home;
