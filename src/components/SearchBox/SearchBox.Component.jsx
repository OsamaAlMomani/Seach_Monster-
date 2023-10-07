import { Component } from "react";

class SearchBox extends Component
{
    render()
    {
        const {_input} = this.props;
        return(
            
                
        <div className='SearchBar'>
            <input className='SearchInput' placeholder='Monster Name ' onChange={_input}/>
        </div>
            
        )
    }
}
export default SearchBox;