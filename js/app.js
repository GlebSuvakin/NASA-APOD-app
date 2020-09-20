const API_KEY = "oHIyrx47CslUYxiOap4kcqCbtDSIx13c9EjUnfCs";
const HD_KEY = "true"
const APOD_URL = `https://api.nasa.gov/planetary/apod?hd=${HD_KEY}&api_key=${API_KEY}`;

const cosmo = document.querySelector('.cosmo');
let title;
let explanation;
const promise = fetch(APOD_URL);

promise.then((responce) => {
  const proccessingPromise = responce.json();
  return proccessingPromise;
})
.then((proccessedResponce) => {
  const h = document.createElement('h2');
  h.className = 'headline';
  const img = document.createElement('img');
  img.className = 'nasa-pic';
  const p = document.createElement('p');
  p.className = 'description';
  img.src = proccessedResponce.url;
  title = proccessedResponce.title;
  explanation = proccessedResponce.explanation;
  img.alt = 'Your picture of the day';
  cosmo.appendChild(h);
  cosmo.appendChild(img);
  cosmo.appendChild(p);
  document.querySelector('h2').innerHTML = title;
  document.querySelector("p").innerHTML = explanation;
});
