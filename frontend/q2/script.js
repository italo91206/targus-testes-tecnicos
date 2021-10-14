const links = [
  'https://www.google.com.br',
  'https://stackoverflow.com/',
  'https://www.python.org',
  'https://www.ja123121vascript.com/',
  'https://www.pradarerro.org',
  'https://golang.org/',
  'https://italoferreira.dev',
  'https://www.outropradarerro.org'
];

var config = { 
  method: 'GET',
  headers: {
    "Content-Type": "text/html",
  },
  mode: 'no-cors',
  cache: 'default' 
};

function printarResponse(texto, status){
  let el = document.querySelector('.logs')
  var row = document.createElement('TR')
  var data = document.createElement('TD')
  
  data.innerText = texto;
  data.classList.add(status);
  
  row.appendChild(data);
  el.appendChild(row);
}

links.forEach((link) => {
  fetch(link, config)
    .then((response) => { printarResponse(`${link} deu certo.`, 'success')})
    .catch((error) => { printarResponse(`${link} deu erro.`, 'error')})
})