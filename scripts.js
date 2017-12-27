var movies = [
  {
    id: 1,  
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    image: 'https://www.fishbowlinventory.com/blog/wp-content/uploads/2012/10/Harry-Potter-has-useful-tips-for-small-businesses.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: 'https://d2npu017ljjude.cloudfront.net/images/poster-178275/w230/222222/93607-3.jpg'
  },
  {
    id: 3,
    title: 'Obcy - ósmy pasażer nostromo',
    desc: 'film o potworze z czeluści wszechświata',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtq_E6XszpN-fLL0X8alZPQE2B6O9RMYnyaTJPKdDHdxDlyLRZ'
  },
  {
    id: 4,
    title: 'Coś',
    desc: 'film o złym przybyszu z kosmosu',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpAhxpU1_nPRv5ZqQGcqP4CPUVC_8C3S0FE4C9iOJVcQGnbpy'
  }
];

var Movie = React.createClass({
  propTypes: {
    items: React.PropTypes.object.isRequired,
  },

  render: function() {
      return (
        React.createElement('div', {},
          React.createElement('h1', {}, 'Lista filmów'),
          React.createElement('ul', {}, moviesElements),
        )
      )
  }

});

React.createElement('li', {key: movie.id,};

