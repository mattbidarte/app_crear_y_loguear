const persona1 = {nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};

for(const propiedad in persona1){
    console.log(propiedad)
}

console.log('----------------')

for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}
