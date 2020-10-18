import React from 'react';
import unsplash from './unsplash.js';
import SearchBar from './SearchBar.js';
import ImageList from './imageList.js';
class App extends React.Component{
    state={ images: []};
     onSearchSubmit= async (term)=>
    {
        
            const response= await unsplash.get('/search/photos',{
                params: {query: term},
                headers:{
                    Authorization:'Client-ID wDv7vtn1Iio5xi7iJmXKA_YLyO0jIMZih7B-7xTFCm0'
                }
            });
            this.setState({images: response.data.results});
    }
    render()
    {
        return(
        <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
        </div>
        );
    }

}
export default App;