import React from 'react';

const Todo = (props) => {
  return (
    <div
      className={`item${props.item.completed ? 'completed' : ''}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p style={{ fontFamily: 'Indie Flower', fontSize: '2rem' }}>
        {props.item.name}
      </p>
    </div>
  );
};

export default Todo;
