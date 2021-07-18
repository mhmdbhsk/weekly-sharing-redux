import { Flex, Box, Text, IconButton } from 'theme-ui';
import { PlusCircleSolid } from '@graywolfai/react-heroicons';

interface Props {
  handleToggle: () => void;
}

const Heading = ({ handleToggle }: Props) => {
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <Box sx={{ flex: '1 1 auto' }}>
        <Text as='h1' color='primary'>
          Redux ToDo
        </Text>
      </Box>
      <Box>
        <IconButton color='primary' onClick={handleToggle}>
          <PlusCircleSolid />
        </IconButton>
      </Box>
    </Flex>
  );
};

export default Heading;
