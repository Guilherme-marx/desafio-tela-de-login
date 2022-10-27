
function minhaFuncao(objeto) {
    objeto.marca = "Toyota";
  }

  var meucarro = {
    marca: "Honda",
    modelo: "Accord",
    ano: 1998
  };
 
  console.log(meucarro.marca);

  minhaFuncao(meucarro);
 
  console.log(meucarro.marca);
 