const listaBrinquedo = ['Bola', 'osso', 'corda', 'sino']

listaBrinquedo.forEach(brinquedo => {
  console.log(brinquedo)
})





function entregarBrinquedos(brinquedos) {
    brinquedos.forEach((brinquedo, i) => {
        console.log(`Entregando brinquedo ${i + 1}: ${brinquedo}`);
    });
}