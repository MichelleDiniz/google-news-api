import Card from '../components/Card';

const NewsList = ({news}) => {
  return (
    <div className="columns">
      {news.map((singleNew, index) => (
        <div className="shape column" key={singleNew.source.id + index.toString()}>
          <Card
            title={singleNew.title}
            description={singleNew.description}
            image={singleNew.urlToImage}
            content={singleNew.content}
            url={singleNew.url}
          />
        </div>
      ))}
    </div>
  )
};

export default NewsList;
