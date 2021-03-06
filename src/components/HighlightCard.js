import React from 'react';

const HighlightCard = ({news}) => {
  return (
    <div className="shape column card card--highlight">
      <div className="card__image">
        <img src={news.urlToImage} alt="" />
      </div>
      <div className="inline-content">
        <h3 className="heading-sm card__title">{news.title}</h3>
        <h4 className="subtitle card__subtitle">{news.description}</h4>
        
        <p className="paragraph card__paragraph">{news.content}</p>
        <a href={news.url} className="button" rel="noreferrer" target="_blank">Read more</a>
      </div>
    </div>
  )
};

export default HighlightCard;
