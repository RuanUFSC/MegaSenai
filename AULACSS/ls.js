aluno = 'Jose'

function insereItem(){
        const lista = ['Maria', 'Paulo', 'Marcos', 'Lucas']
       localStorage.setItem('nomes', JSON.stringify(lista))
}
function obtemItem(){
        const listaObtida = JSON.parse(localStorage.getItem('nomes'))
        alert(listaObtida[2])
}