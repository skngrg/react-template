import { Button, Input } from 'antd';

import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { decCounter, incCounter, resetCounter, setCounter } from '~/store/slices';
import { useCustomSelector } from '~/store/store';

import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

export const Home = () => {
  const dispatch = useDispatch();
  const { counter } = useCustomSelector((state) => state.counter);

  const onIncHandler = useCallback(() => {
    dispatch(incCounter());
  }, [dispatch]);

  const onDecHandler = useCallback(() => {
    dispatch(decCounter());
  }, [dispatch]);

  const onResetHandler = useCallback(() => {
    dispatch(resetCounter());
  }, [dispatch]);

  const onSetHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setCounter(e.target.value));
    },
    [dispatch],
  );
  return (
    <>
      <div>Counter = {counter}</div>

      <div className='flex items-center'>
        <Button type='primary' className='!flex items-center mr-5' onClick={() => onIncHandler()}>
          <PlusOutlined />
          inc
        </Button>
        <Button type='primary' className='!flex items-center mr-5' onClick={() => onDecHandler()}>
          <MinusOutlined />
          dec
        </Button>
        <Button type='primary' className='!flex mr-5' onClick={() => onResetHandler()}>
          reset
        </Button>
        <Input
          className='max-w-xs'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSetHandler(e)}
          value={counter}
        />
      </div>
    </>
  );
};
