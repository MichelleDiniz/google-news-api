import React from 'react';

const Card = ({title, description, image, content, url}) => {
  return (
    <div className="card">
      <h3 className="heading-sm card__title">{title}</h3>
      <h4 className="subtitle ellipsis-2 card__subtitle">{description}</h4>
      <div className="card__image">
        <img src={image} alt="" />
      </div>
      <p className="paragraph ellipsis-4 card__paragraph">{content}</p>
      <a href={url} className="button" rel="noreferrer" target="_blank">Read more</a>
    </div>
  )
};

export default Card;
