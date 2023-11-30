import { Component } from "react";
class CardList extends Component
{
    render()
    {
        const {_monster} = this.props;
        return (
            <div>
              {_monster.map((monster) => (
                <div key={monster.id}>
                  <h2>{monster.name}</h2>
                </div>
              ))}
            </div>
          );
    }
}

export default CardLis