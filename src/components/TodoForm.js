import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItem1: '',
    };
  }

  handleChanges = (e) => {
    // update state with each keystroke
    // console.log(e)
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  };

  // class property to submit form
  submitItem = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.addItem(e, this.state.todoItem1);
    this.setState({ todoItem1: '' });
  };

  render() {
    console.log('rendering form', this.state.todoItem);

    return (
      <>
        <GoogleFontLoader
          fonts={[
            {
              font: 'Anton',
              weights: [400, '400i'],
            },
            {
              font: 'Montserrat',
              weights: [400, 700],
            },
            {
              font: 'Jomhuria',
              weights: [400, 700],
            },
            {
              font: 'Ubuntu',
              weights: [400, 700],
            },
          ]}
          subsets={['cyrillic-ext', 'greek']}
        />
        <form onSubmit={this.submitItem}>
          <input
            type='text'
            value={this.state.todoItem1}
            placeholder='Add new task here'
            name='todoItem1'
            onChange={this.handleChanges}
            style={{ fontFamily: 'Ubuntu, sans-serif', outline: 'none' }}
          ></input>
          <button
            className='add-to-do-btn'
            style={{
              fontFamily: 'Jomhuria,sans-serif',
              outline: 'none',
              fontSize: '3.2rem',
            }}
          >
            <span>Add Todo</span>
          </button>
          <button
            className='clear-btn'
            onClick={this.props.clearCompleted}
            style={{
              fontFamily: 'Jomhuria,sans-serif',
              outline: 'none',
              fontSize: '3.2rem',
            }}
          >
            <span>Clear List</span>
          </button>
        </form>
      </>
    );
  }
}

export default TodoForm;
