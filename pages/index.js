import React from 'react';
import { withRedux } from '../redux/redux.js';
import Counter from '../component/Counter';

const Index = () => {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default withRedux(Index);