const template = document.createElement('template')


class TickerTape extends HTMLElement {

  constructor() {
    super();

    this._letters = this.innerHTML.toString().split(''); // ['C', 'o', 'l', 'o', ... ]

     
  }

  connectedCallback() {
    setInterval(function() { 
      this._letters.push(this._letters.shift());
      this.innerHTML = this._letters.join('');
     }.bind(this), 200);
  }


  
  
}

customElements.define('ticker-tape', TickerTape);