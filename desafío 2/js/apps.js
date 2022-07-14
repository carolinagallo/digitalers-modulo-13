let planes=[
{
    nombre: "Plan 001",
    capital: 150000,
    plazo: 30,
    taza: 15
},
{
    nombre: "Plan 001",
    capital: 150000,
    plazo: 30,
    taza: 15
},
{
    nombre: "Plan 001",
    capital: 150000,
    plazo: 30,
    taza: 15
}
]
let planInteres=[];

for(let i=0; i<planes.length; i++){
    let actual= planes[i];
    var interes = (actual.capital * actual.plazo * actual.taza ) / 100;
    planInteres.push({
        nombre:actual.nombre,
        capital: actual.capital,
        plazo: actual.plazo+" dias",
        taza: actual.taza+"%",
        interes: interes

    });

    
}
console.log(planInteres)
