import React from 'react';
import Card from './Ul/Card';

const NoName = (props) => {
  console.log('NoName Component!');
  console.log(props);
  return (
    <Card className='square'>
      <div>
        {props.children}
        Hello React
      </div>
    </Card>
  );
};

export default NoName;
