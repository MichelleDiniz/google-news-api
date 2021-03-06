import { Component, Fragment } from 'react';
import NewsList from '../components/NewsList';
import HighlightCard from '../components/HighlightCard';
import getCurrentDate from '../utils/getCurrentDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas, faVirus, faGamepad, faCode, faMusic, faPaw, faTv, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      first: [],
      news: [],
      date: getCurrentDate,
      theme: "google-news-br"
    };
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/everything?q=" + this.state.theme + "&apiKey=3c427b028f934ecf897b727cb35146cf")
      .then(res => res.json())
      .then((data) => {
        let articles = data.articles;

        if (articles.length) {
          this.setState({ 
            first: articles[0], 
            news: articles.slice(1),
            date: getCurrentDate,
            theme: this.state.theme
          });  
        }
      })
      .catch(console.log)
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.theme !== this.state.theme) {
      fetch("https://newsapi.org/v2/everything?q=" + this.state.theme + "&apiKey=3c427b028f934ecf897b727cb35146cf")
        .then(response => response.json())
        .then((data) => {
          let newArticles = data.articles;

          if (newArticles.length) {
            this.setState({ 
              first: newArticles[0], 
              news: newArticles.slice(1),
              date: getCurrentDate,
              theme: this.state.theme
            });  
          }
        })
        .catch(console.log)
    }
  }

  changeProps = (event) => {
    this.setState({
      ...this.state,
      theme: event.target.value
    });
  }

  render () {
    return (
      <Fragment>
        <div className="filter">
          <div className="pill">
            <input type="radio" id="filterOne" name="themeFilter" value="google-news-br" onChange={(e) => this.changeProps(e)} defaultChecked />
            <label htmlFor="filterOne"><FontAwesomeIcon icon={faGlobeAmericas} /> General</label>
          </div>

          <div className="pill">
            <input type="radio" id="filterTwo" name="themeFilter" value="covid" onChange={(e) => this.changeProps(e)} />
            <label htmlFor="filterTwo"><FontAwesomeIcon icon={faVirus} /> Covid</label>
          </div>

          <div className="pill">
            <input type="radio" id="filterThree" name="themeFilter" value="cats" onChange={(e) => this.changeProps(e)} />
            <label htmlFor="filterThree"><FontAwesomeIcon icon={faPaw} /> Cats</label>
          </div>

          <div className="pill">
            <input type="radio" id="filterFour" name="themeFilter" value="games" onChange={(e) => this.changeProps(e)} />
            <label htmlFor="filterFour"><FontAwesomeIcon icon={faGamepad} /> Games</label>
          </div>

          <div className="pill">
            <input type="radio" id="filterFive" name="themeFilter" value="music" onChange={(e) => this.changeProps(e)} />
            <label htmlFor="filterFive"><FontAwesomeIcon icon={faMusic} /> Music</label>
          </div>

          <div className="pill">
            <input type="radio" id="filterSix" name="themeFilter" value="code" onChange={(e) => this.changeProps(e)} />
            <label htmlFor="filterSix"><FontAwesomeIcon icon={faCode} /> Code</label>
          </div>

          <div className="pill">
            <input type="radio" id="filterSeven" name="themeFilter" value="netflix" onChange={(e) => this.changeProps(e)} />
            <label htmlFor="filterSeven"><FontAwesomeIcon icon={faTv} /> Netflix</label>
          </div>

          <div className="pill">
            <input type="radio" id="filterEight" name="themeFilter" value="mars-mission" onChange={(e) => this.changeProps(e)} />
            <label htmlFor="filterEight"><FontAwesomeIcon icon={faSpaceShuttle} /> Mars Mission</label>
          </div>
        </div>

        <div>
          <HighlightCard news={this.state.first} />
        </div>

        <div>
          <NewsList news={this.state.news} />
        </div>
      </Fragment>
    );
  }
}

export default Home;
