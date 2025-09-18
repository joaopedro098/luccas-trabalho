let valor= document.getElementById("valor")
valorconvertido=parseFloat(valor.value)
 let button= document.getElementById("button")
 
  
 

 button.addEventListener("click",_=>{
    const empresa="Nex4Tech"
    const cnpj= 345564324556
  let name= document.getElementById("name")
  let CPF= document.getElementById("CFP")
  let cpfConvertido = parseFloat(CPF.value)
  let card=(document.getElementById("payCard"))

  empresa.innerHTML=empresa
  cnpj.innerHTML=cnpj
  name.innerHTML= name
  cpfConvertido.innerHTML=cpfConvertido
  card.innerHTML
  if(divideBy=="3x"){
  valorconvertido=(valorconvertido%3)
 
  valorconvertido.innerHTML
 }
 
if(divideBy=="6x"){
  valorconvertido=(valorconvertido%6)
 
  valorconvertido.innerHTML
 }
 if(divideBy=="12"){
  valorconvertido=(valorconvertido%12)
    valorconvertido.innerHTML
 }
 if(divideBy===3){
  valorconvertido=(valorconvertido%3)
  
  valorconvertido.innerHTML
 }

 else{
   valorconvertido.innerHTML
 }
 })
 