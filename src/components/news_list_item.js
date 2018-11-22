import React from 'react'
import { css } from 'glamor'
import classes from '../css/styles.css'


const NewsItem = ({item}) => {
    console.log(item)

    return (
        <div>
        <div className={classes.news_item}>
                {/* Now take the title and  from the item - which came from news - which came from app.js */}
                <h3>{item.title}</h3> 
                <div>
                    {item.feed}
                </div>
            </div>
        </div>
    )
}

export default NewsItem

  