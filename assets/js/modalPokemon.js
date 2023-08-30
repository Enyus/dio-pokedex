const modal = document.getElementById("modalPokemon");
const botaoFecharModal = document.getElementById("botaoFecharModal");
// modal.close()

function abrirModalDoPokemon(numeroDoPokemon) {
    modal.showModal();
    console.log(`abriu a modal do pokemon ${numeroDoPokemon}`);
}

botaoFecharModal.addEventListener('click', ()=>{
    modal.close()
})