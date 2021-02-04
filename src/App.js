import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import GoogleFontLoader from 'react-google-font-loader';

import './App.css';

const todoItems = [
  {
    name: 'buy bread',
    id: '1',
    purchased: false,
  },
];

let todoItem = '';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoItems,
      todoItem,
    };
  }

  // logic here

  // Class methods to update state
  addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      todoItems: [...this.state.todoItems, newItem],
    });
  };

  toggleItem = (itemId) => {
    // console.log(itemId);

    this.setState({
      todoItems: this.state.todoItems.map((item) => {
        // console.log(item);
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    console.log(this.state.todoItems);
    this.setState({
      // returns the items that haven't been completed and purges
      // the ones that have been completed
      todoItems: this.state.todoItems.filter(
        (item) => item.completed === false
      ),
    });
  };

  render() {
    return (
      <div className='app-wrapper'>
        <GoogleFontLoader
          fonts={[
            {
              font: 'Indie Flower',
              weights: [800, '4000'],
            },
            {
              font: 'Indie Flower',
              weights: [800, 900],
            },
          ]}
          subsets={['cyrillic-ext', 'greek']}
        />

        <h2 style={{ fontFamily: 'Indie Flower', fontSize: '4rem' }}>
          Todo App
        </h2>
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />
        <TodoList
          todoItems={this.state.todoItems}
          toggleItem={this.toggleItem}
        />
        <footer>
          <p className='copyright'>
            Copyright {new Date().getFullYear()} - Luis Abellan
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
