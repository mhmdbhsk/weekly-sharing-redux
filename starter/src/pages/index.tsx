import { Container, Text, Box } from 'theme-ui';
import Card from 'components/Card';
import Field from 'components/Field';
import Heading from 'components/Heading';
import { useState } from 'react';

interface Props {}

const Home = (props: Props) => {
  const tasks: Task[] = [
    { id: 0, title: 'Makan', desc: 'Telo', isDone: false },
  ];
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <Container sx={{ maxWidth: 768, padding: 16 }}>
      <Heading handleToggle={handleToggle} />
      {toggle && <Field onClose={handleToggle} />}
      {tasks.length > 0 ? (
        tasks.map((task) => <Card data={task} key={task.id} />)
      ) : (
        <Box
          sx={{
            minHeight: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>Horaayy!! There's nothing to do</Text>
        </Box>
      )}
    </Container>
  );
};

export default Home;
