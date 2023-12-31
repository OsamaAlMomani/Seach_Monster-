import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import CardList from './components/CardList/CardList.Component';
import SearchBox from './components/SearchBox/SearchBox.Component';

class App extends Component{
  constructor ()
  {
    super();
    
    this.state = {
      monsters:[],
      _onChangeValue:'',

    }
  }


componentDidMount()
{ 
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((event)=> event.json())
    .then((req)=> this.setState(
      ()=>
      {
        return {monsters:req}
      }
      ,()=>
      {
        console.log(this.state)
      }));
}

SeachMethod = (event)=>
{
  const _onChangeValue = event.target.value.toLocaleLowerCase();
  this.setState(()=>
  {
    return{_onChangeValue};
  });
};

  render()
  {
    const filteredMonsters = this.state.monsters.filter((monster)=> 
    {
      return monster.name.toLocaleLowerCase().includes(this.state._onChangeValue);
    });

    

    return (
      <div className="App">
        <SearchBox _input= {this.SeachMethod}/>
        <CardList  _monster ={filteredMonsters}/>
      </div>
    );
  };
  
}

export default App;
