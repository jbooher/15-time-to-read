class Reading {
  constructor(words) {
    this.words = words;
    this.speed = 2;
  }

  render() {
    let readTime = 0;
    console.log(this.speed);
    if(this.speed === 1) {
      readTime = Math.floor(this.words.length / 100);
    }

    if(this.speed === 2) {
      readTime = Math.floor(this.words.length / 230);
    }

    if(this.speed === 3) {
      readTime = Math.floor(this.words.length / 350);
    }

    if(this.speed === 4) {
      readTime = Math.floor(this.words.length / 500);
    }

    document.querySelector(".content--article-info").innerHTML = `2 days ago &middot; ${readTime} min read`;
  }
}

export default Reading;
