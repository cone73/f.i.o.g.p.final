let key = '3a8b0fe574254fefa4311bab51ca40fc';
let pais = 'ar';
let url = `https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=${key}`;
let mostrar_noticias = document.getElementById('noticias');

fetch(url).then((resp) => resp.json()).then(dato =>{
    console.log(dato);
    let noticias = (dato.articles);
    noticias.map(function(numero){
        let div= document.createElement('noticias');
        div.innerHTML= `<br>
                        <img style="max-width:100px" src=${numero.urlToImage}><br>
                        <h1>${numero.title}</h1>
                        <h2>${numero.description}</h2>
                        <h3>${numero.url}</h3>`;
        mostrar_noticias.appendChild(div);
    })
});
