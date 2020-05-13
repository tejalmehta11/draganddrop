import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item';
import Target from './Target';
import Card from './Card';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
const update = require('immutability-helper');
const [task, setTask] = useState("");
import Editable from "./Editable";

class App extends Component {

  
  state = {
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
    ],
    cards: [
      {
        text: 'Choose the option',
      },
      {
        id: 1,
        text: 'Text input',
      },
      {
        id: 2,
        text: 'Fixed options',
      },
      {
        id: 3,
        text: 'Ratings',
      },
      {
        id: 4,
        text: 'Create some examples',
      },
      {
        id: 5,
        text:
          'Date and Time',
      },
      
    ],
    Editable: [
      text={task} 
      name: "Write a task name" ,
      type="input",
    
      <input
      type="text"
      name="task"
      placeholder="Write a task name"
      value={task}
      onChange={e => setTask(e.target.value)}
      />

    ]
  }
 deleteItem = id => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.id !== id)
      }
    })
  }

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <div className="app-container">
            <div className="item-container">
              {this.state.items.map((item, index) => (
                <Item key={item.id} item={item} handleDrop={(id) => this.deleteItem(id)} />
              ))}
            </div>

            <Target />
          </div>
          <div className="card-container">
            {this.state.cards.map((card, i) => (
              <Card
                key={card.id}
                index={i}
                id={card.id}
                text={card.text}
                moveCard={this.moveCard}
              />

            
                
                
    
    

              )


            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
