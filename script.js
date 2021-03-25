/*var filme1 = "Star Wars";
var filme2 = "The Lord of Rings";
var filme3 = "As Crônicas de Nárnia";*/


/* filmes.push("Star Wars")
filmes.push("The Lord of Rings")
filmes.push("As Crônicas de Nárnia")

console.log(filmes[2])

console.log(filmes.length) 



var tentativas = 3;

while (tentativas > 0) {
  tentativas = tentativas -1
}; 

var filmes = ["Stars Wars", "The Lord of Rings", "As Crônicas de Nárnia", "Pearl Harbor", "O Hobbit",];


for (var i = 0; i < filmes.length; i++){
  console.log(filmes[i])
}

//console.log(filmes); */



var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY268_CR7,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"];  

for (var i = 0; i < listaFilmes.length; i++){
  document.write("<img src=" + listaFilmes[i] + ">")
}