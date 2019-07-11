import React from 'react';
import Filter from './filter';
import FruitList from './FruitList'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullList: [
        'Acai', 
        'Aceola',
        'Apple',
        'Apricots',
        'Avocado',
        'Banana',
        'Blackberry',
        'Blueberries',
        'Camu Camu berry',
        'Cherries',
        'Coconut',
        'Cranberry',
        'Cucumber',
        'Currents',
        'Dates',
        'Durian',
        'Fig',
        'Goji berries',
        'Gooseberry',
        'Grapefruit',
        'Grapes',
        'Jackfruit',
        'Kiwi',
        'Kumquat',
        'Lemon',
        'Lime',
        'Lucuma',
        'Lychee',
        'Mango',
        'Mangosteen',
        'Melon',
        'Mulberry',
        'Nectarine',
        'Orange',
        'Papaya',
        'Passion Fruit',
        'Peach',
        'Pear',
        'Pineapple',
        'Plum',
        'Pomegranate',
        'Pomelo',
        'Prickly Pear',
        'Prunes',
        'Raspberries',
        'Strawberries',
        'Tangerine/Clementine',
        'Watermelon'
      ],
      filterValue:''
    }

  }
  handleFilterChange=(e)=> {
    e.preventDefault();
    const filterValue = e.target.value;
    this.setState({
      filterValue
    })
  }
  render(){
    const ListCopy = Array.from(this.state.fullList);
    const filteredList = ListCopy.filter(fruit => {
      if (fruit.includes(this.state.filterValue)){
        return true;
      }else {
        return false;
      }
    })
    return(
      <>
      <Filter onChange={this.handleFilterChange} value={this.state.filterValue}/>
      <FruitList fruits = {filteredList}/>
      </>
    )
  }
}

export default App;
