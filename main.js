const index = require('./index')
const grafo = require('./CriaGrafo')
const fs = require('fs')
var content = fs.readFileSync('./grafo1.txt','utf-8')

let rep = grafo.grafo(9,content,1)
console.log(rep)
let repre = index.lista.lista(9,rep,'lista')
let vari = index.buscaEmProfundidade.bep(0,rep)
let maior = index.verticeMaiorGrau.maiorGrau(rep)
let matriz = index.matriz.matriz(9,rep,0)
//console.log(maior)
console.log(matriz)
console.log('lista de adjacência !!! ')
console.log(repre)
console.log('busca em profundidade')
console.log(vari)