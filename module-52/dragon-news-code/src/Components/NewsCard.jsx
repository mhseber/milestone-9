import React from 'react';

const NewsCard = ({ news }) => {
    console.log(news);
    return (
        <div>
            {news.title}
        </div>
    );
};

export default NewsCard;