function popuplateUfs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
        
        for( const state of states ){
            ufSelect.innerHTML += `<option value ="${state.id}">${state.nome}</option>`
        }

    } )
}

popuplateUfs()

function getCities(event){
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const UfValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UfValue}/municipios`
    
    citySelect.innerHTML =" `<option value>Selecione a Cidade</option>`"
    citySelect.disabled = true
    
    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        
        
        for( const city of cities ){
            citySelect.innerHTML += `<option value ="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false

    } )
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


// itens de coleta
// pegar todos os li's

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
    item.addEventListener("click", HandleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []


function HandleSelectedItem(event){
    //adicionar ou remover um classe
    const itemLi= event.target
    
    itemLi.classList.toggle("selected")
    
    const itemId = itemLi.dataset.id    
    
    console.log('ITEM ID: ', itemId)
    
    //verificar se existem itens selecionados se, sim
    //pegar os intens selecionados

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId
        return itemFound
    })
    
    //se já estiver selecionado, tirar da seleção
    if( alreadySelected >= 0){
        //tirar seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        })

        selectedItems = filteredItems
    }else {
    //se não estiver selecionado, adicionar a seleção
    // adicionar a seleção

        selectedItems.push(itemId)
    }
    
    console.log('selectedItems: ', selectedItems)
    //atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems
}
