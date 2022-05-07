import { Card } from 'components';
import { useQuizDataContext } from 'providers';

const Home = () => {
  const { data = [] } = useQuizDataContext();

  return (
    <section className="p-4 sm:flex gap-6">
      {data?.map((item) => (
        <Card name={item.name} imageUrl={item.image} key={item.id} />
      ))}
    </section>
  );
};

export default Home;
