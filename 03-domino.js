const ladoA = 7;
const ladoB = 3;

if (ladoA > 6 || ladoB > 6 || ladoA < 0 || ladoB < 0) {
    console.log(`Insira um valor de 0 a 6.`);
} else
    if (ladoA === ladoB) {
        console.log(`Sim.`);
    } else
        console.log(`Não.`);