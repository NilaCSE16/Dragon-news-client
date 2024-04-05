import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    let { id } = useParams();
    const categoryNews = useLoaderData()
    if(id == 0) {id = null;}
    return (
        <div>
            {id ?
                <h2>News in this category is: {categoryNews.length}</h2>:
                <h2>Dragon News Home</h2>
            }
            {
                categoryNews.map(news => <NewsCard
                    key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;