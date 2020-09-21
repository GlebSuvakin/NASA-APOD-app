const API_KEY = "oHIyrx47CslUYxiOap4kcqCbtDSIx13c9EjUnfCs";
const HD_KEY = "true"
const APOD_URL = `https://api.nasa.gov/planetary/apod?hd=${HD_KEY}&api_key=${API_KEY}`;

const cosmoImg = document.querySelector('.col-md-4');
const cosmoDescription = document.querySelector('.card-body');
let title;
let explanation;
const promise = fetch(APOD_URL);
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
console.log(today);

promise.then((responce) => {
  const proccessingPromise = responce.json();
  return proccessingPromise;
})
.then((proccessedResponce) => {
  const h = document.createElement('h2');
  h.className = 'card-title';
  const img = document.createElement('img');
  img.className = 'card-img';
  const p = document.createElement('p');
  p.className = 'card-text';
  const small = document.createElement('small');
  small.className = 'text-muted';
  img.src = proccessedResponce.url;
  title = proccessedResponce.title;
  explanation = proccessedResponce.explanation;
  date = today;
  img.alt = 'Your picture of the day';
  cosmoImg.appendChild(img);
  cosmoDescription.appendChild(h);
  cosmoDescription.appendChild(p);
  cosmoDescription.appendChild(small);
  document.querySelector('h2').innerHTML = title;
  document.querySelector("p").innerHTML = explanation;
  document.querySelector('small').innerHTML = date;
});
