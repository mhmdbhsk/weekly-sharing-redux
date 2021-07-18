import { Card as TuiCard, Text, IconButton, Flex, Box } from 'theme-ui';
import { TrashSolid } from '@graywolfai/react-heroicons';

interface CardProps {
  data: Task;
}

const Card = ({ data }: CardProps) => {
  return (
    <div>
      <TuiCard
        sx={{
          margin: '16px 0',
          padding: 16,
          minHeight: 50,
          border: '1px solid #eaeaea',
          borderRadius: 8,
          transition: 'all .2s ease',
          ':hover': {
            boxShadow: '0 4px 4px 0 rgba(0,0,0,0.02)',
          },
        }}
      >
        <Flex sx={{ alignItems: 'center' }}>
          <Box sx={{ flex: '1 1 auto' }}>
            <Text as='h3'>{data.title}</Text>
            <Text as='sub'>{data.desc}</Text>
          </Box>
          <Box>
            <IconButton color='primary'>
              <TrashSolid />
            </IconButton>
          </Box>
        </Flex>
      </TuiCard>
    </div>
  );
};

export default Card;
