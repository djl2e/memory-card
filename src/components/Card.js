const img = document.querySelector('img');
fetch('https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Stephen_Curry', { mode: 'cors' })
  .then((response) => response.json())
  .then((response) => {
    img.src = response.player[0].strThumb;
  });
