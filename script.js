const app = document.getElementById('root');

const hero = document.createElement('header');
hero.setAttribute('class', 'hero');

const h2 = document.createElement('h2');
h2.textContent = ('WELCOME TO THE SPORT LIST');

const info = document.createElement('p');
info.textContent = ('A list of sports from The SportsDB API');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(hero);
app.appendChild(container);
hero.appendChild(h2);
hero.appendChild(info);


var request = new XMLHttpRequest()

request.open('GET', 'https://thesportsdb.com/api/v1/json/1/all_sports.php', true)
request.onload = function() {
  // JSON Parse and error in case
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.sports.forEach(sport => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = sport.strSport;

      const pic = document.createElement('img');
      pic.src = `${sport.strSportThumb}`;

      const p = document.createElement('p');
      sport.strSportDescription = sport.strSportDescription.substring(0, 300);
      p.textContent = `${sport.strSportDescription}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(pic);
      card.appendChild(p);
    
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `I don't like marquee element but I can use it here`;
    app.appendChild(errorMessage);
  }
  
}
request.send();