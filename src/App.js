import React from 'react';

let quotes = [
  {
    quote: 'Only while sleeping one makes no mistakes. Making mistakes is the privilege of the active—of those who can correct their mistakes and put them right.',
    author: 'Ingvar Kamprad',
    quoteSrc: "'The Testament of a Furniture Dealer' (1976)."
  },
  {
    quote: 'We still have a long way to go—or as I have written so many times, and said at the end of hundreds of speeches: We are just at the beginning. A glorious future!',
    author: 'Ingvar Kamprad',
    quoteSrc: '1998, quoted in The IKEA Story by Bertil Torekull.'
  },
  {
    quote: 'Nobody can guarantee a company or a concept of eternal life, but no one can accuse me of not having tried to.',
    author: 'Ingvar Kamprad',
    quoteSrc: "Quoted by Richard Milne in 'IKEA’s fiendishly complex construction,' Financial Times, November 13, 2012."
  },
  {
    quote: 'Most things still remain to be done!',
    author: 'Ingvar Kamprad',
    quoteSrc: 'Quoted by Martin Enthed, June 24, 2014.'
  },
  {
    quote: 'You can do so much in ten minutes’ time. Ten minutes, once gone, are gone for good. Divide your life into 10-minute units and sacrifice as few of them as possible in meaningless activity.',
    author: 'Ingvar Kamprad',
    quoteSrc: 'Quoted in the October 2017 issue of Men’s Health magazine, page 41.'
  },
  {
    quote: 'Our idea is to serve everybody, including people with little money',
    author: 'Ingvar Kamprad',
    quoteSrc: 'unsourced'
  },
  {
    quote: "I'm not afraid of turning 80 and I have lots of things to do. I don't have time for dying.",
    author: 'Ingvar Kamprad',
    quoteSrc: 'unsourced'
  },
  {
    quote: 'Everything we earn we need as a reserve',
    author: 'Ingvar Kamprad',
    quoteSrc: 'unsourced'
  },
  {
    quote: 'The most dangerous poison is the feeling of achievement. The antidote is to every evening think what can be done better tomorrow.',
    author: 'Ingvar Kamprad',
    quoteSrc: 'unsourced'
  },
  {
    quote: "I'm stingy and I'm proud of the reputation",
    author: 'Ingvar Kamprad',
    quoteSrc: 'unsourced'
  },
  {
    quote: 'Expensive solutions to any kind of problem are usually the work of mediocrity.',
    author: 'Ingvar Kamprad',
    quoteSrc: "'The Testament of a Furniture Dealer' (1976)."
  },
  {
    quote: 'Indecisiveness generates more statistics, more studies, more committees, more bureaucracy. Bureaucracy complicates and paralyses!',
    author: 'Ingvar Kamprad',
    quoteSrc: "'The Testament of a Furniture Dealer' (1976)."
  },
  {
    quote: 'By always asking why we are doing this or that, we can find new paths.',
    author: 'Ingvar Kamprad',
    quoteSrc: "'The Testament of a Furniture Dealer' (1976)."
  },
  {
    quote: 'The fear of making mistakes is the root of bureaucracy and the enemy of development.',
    author: 'Ingvar Kamprad',
    quoteSrc: "'The Testament of a Furniture Dealer' (1976)."
  },
  {
    quote: 'Time is your most important resource',
    author: 'Ingvar Kamprad',
    quoteSrc: "'The Testament of a Furniture Dealer' (1976)."
  },
  {
    quote: 'We can never do everything, everywhere, all at the same time.',
    author: 'Ingvar Kamprad',
    quoteSrc: 'unknown'
  }
];

let startingIndex = Math.floor(Math.random() * quotes.length);

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      quote: quotes[startingIndex].quote,
      author: quotes[startingIndex].author,
      quoteSrc: quotes[startingIndex].quoteSrc
    }
    this.newQuote = this.newQuote.bind(this);
  }
  newQuote () {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({
        quote: randomQuote.quote,
        author: randomQuote.author,
        quoteSrc: randomQuote.quoteSrc,
      });
  }
  render () {
    return (
      
<div id = "quote-box">
          <div id = "text">{this.state.quote}</div>
          <div id = "author"> — {this.state.author}, {this.state.quoteSrc}</div>
          <div id = "button-row"><button id = "new-quote" onClick = {this.newQuote}>New Quote</button></div>
        </div>
        
    );
  }
}

export default App;
