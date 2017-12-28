var movies = [
  {
    id: 1,  
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://www.fishbowlinventory.com/blog/wp-content/uploads/2012/10/Harry-Potter-has-useful-tips-for-small-businesses.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'https://d2npu017ljjude.cloudfront.net/images/poster-178275/w230/222222/93607-3.jpg'
  },
  {
    id: 3,
    title: 'Obcy - ósmy pasażer nostromo',
    desc: 'film o potworze z czeluści wszechświata',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtq_E6XszpN-fLL0X8alZPQE2B6O9RMYnyaTJPKdDHdxDlyLRZ'
  },
  {
    id: 4,
    title: 'Coś',
    desc: 'film o złym przybyszu z kosmosu',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpAhxpU1_nPRv5ZqQGcqP4CPUVC_8C3S0FE4C9iOJVcQGnbpy'
  }
];

var MovieList = React.createClass({
  propTypes: {
      moviesElements: React.PropTypes.array.isRequired
  },

  render: function() {
      return (
          React.createElement('div', {},
          React.createElement('h1', {}, 'Lista filmów'),
          React.createElement('ul', {},
              this.props.moviesElements.map(function(movie) {
                  return React.createElement(Movie, {key: movie.id, movie: movie});
              })
          ))
      );
  }
});

var Movie = React.createClass({
  propTypes: {
      movie: React.PropTypes.object.isRequired
  },

  render: function() {
      return (
          React.createElement('li', {},
          React.createElement(MovieTitle, {title: this.props.movie.title}),
          React.createElement(MovieDescription, {description: this.props.movie.desc}),
          React.createElement(MovieImage, {image: this.props.movie.img, title: this.props.movie.title})
      ));
  }
});

var MovieTitle = React.createClass({
  propTypes: {
      title: React.PropTypes.string.isRequired
  },

  render: function() {
      return ( 
          React.createElement('h2', {}, this.props.title)
      );
  }
});

var MovieDescription = React.createClass({
  propTypes: {
      description: React.PropTypes.string.isRequired
  },

  render: function() {
      return ( 
          React.createElement('p', {}, this.props.description)
      );
  }
});

var MovieImage = React.createClass({
  propTypes: {
      image: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired
  },

  render: function() {
      return ( 
          React.createElement('img', {src: this.props.image, alt: this.props.title, height: 200})
      );
  }
});

var app = React.createElement(MovieList, {moviesElements: movies});
ReactDOM.render(app, document.getElementById('app'));




