import React from 'react';
import { Box, Grid, Field as TuiField, Button } from 'theme-ui';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actionCreators';

interface Props {
  onClose: () => void;
}

const Field = ({ onClose }: Props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    id: 0,
    title: '',
    desc: '',
    isDone: false,
  });

  const handleChange = (type: string, payload: string) =>
    setValue({ ...value, [type]: payload });

  const handleAdd = useCallback(
    (task) => {
      dispatch(addTask(task));
      onClose();
    },
    [dispatch, onClose]
  );

  return (
    <Box marginY={4}>
      <Grid gap={3} columns={[1, '1fr 2fr .5fr']}>
        <Box bg='muted'>
          <TuiField
            label='Title'
            name='title'
            value={value.title}
            placeholder='Write down your task title here...'
            onChange={(e: any) => handleChange('title', e.target.value)}
            required={true}
            sx={{
              transition: 'all .2s ease',
              ':hover': {
                boxShadow: '0 4px 4px 0 rgba(0,0,0,0.02)',
              },
            }}
          />
        </Box>
        <Box bg='muted'>
          <TuiField
            label='Desc'
            name='desc'
            placeholder='Write down your task description here...'
            onChange={(e: any) => handleChange('desc', e.target.value)}
            sx={{
              transition: 'all .2s ease',
              ':hover': {
                boxShadow: '0 4px 4px 0 rgba(0,0,0,0.02)',
              },
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Button
            sx={{
              height: 36,
              width: '100%',
              cursor: value.title !== '' ? 'pointer' : 'not-allowed',
              opacity: value.title === '' && 0.5,
              background: value.title === '' && '#111',
              transition: 'all .2s ease',
              ':hover': {
                boxShadow: '0 4px 4px 0 rgba(0,0,0,0.02)',
              },
            }}
            disabled={value.title === ''}
            onClick={() => handleAdd(value)}
          >
            Add
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Field;
