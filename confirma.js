/*Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento,
target).
Este desafío puede resolverse con el método .endsWith(), que fue introducido en ES2015.
Pero para el propósito de este desafío, nos gustaría que usaras uno de los métodos de subcadena de
JavaScript en su lugar.
*/

function confirmEnding(str, target){
  if (str.slice(-1)===target){
    return true;
  }
  else if(str.slice(-2)===target){
    return true;
  }
 else if(str.slice(-3)===target){
   return true;
 }
 else if(str.slice(-4)===target){
   return true;
 }
 else if(str.slice(-5)===target){
   return true;
 }
 else if(str.slice(-6)===target){
   return true;
 }
 else{
   return false;
 }
}

confirmEnding("Open sesame", "same");
