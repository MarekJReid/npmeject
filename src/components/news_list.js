import React from 'react'
import NewsItem from './news_list_item'

const NewsList = (props) => {
    
    const items = props.news.map((item) => {   //map is like foreachloop -- will go through each instance of the array then 
                                                //then passes the item (this is essentially renaming the news to item and
                                                // giving it the data that has been passed or 'given' to news in the app.js)
        return (
          <NewsItem key={item.id} item={item}/>
        )
    }) //takes the data from the news object created in index.js

    
    return (
        <div>{items}</div>
    )
}

export default NewsList
