import React, { Component } from 'react'
import ReactDOM from 'react-dom'


//Components
import JSON from './db.json'
import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component {

    state = {
        news: JSON
    }
    render() {
        console.log(this.state.news)
        return (
            <div>
                <Header />
                <NewsList news={this.state.news}/> 
                {/* This creates and object passes the data from the props in this file 
                (ie from all of the files that have been imported)
                and then sends them to the NewsList component like magic */}
            </div>
        )
    }
}  

ReactDOM.render(<App/>, document.querySelector('#root')) 
