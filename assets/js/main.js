// document.getElementById('all').style.display = "none";
var option_4ta = document.getElementsByClassName('p-4ta');
var option_5ta = document.getElementsByClassName('p-5ta');
var option_6ta = document.getElementsByClassName('p-6ta');

var all = document.getElementById('all');
var opcion = document.getElementById('selectCoder');
opcion.addEventListener('change',function(e){
  console.log(option_5ta);
  e.preventDefault();
  if(opcion.value == '4ta'){
    mostrar(option_4ta,'coders p-4ta active');
    mostrar(option_5ta,'coders p-5ta unactive');
    mostrar(option_6ta,'coders p-6ta unactive');
  }
  if(opcion.value == '5ta'){
    mostrar(option_4ta,'coders p-4ta unactive');
    mostrar(option_5ta,'coders p-5ta active');
    mostrar(option_6ta,'coders p-6ta unactive');
  }
  if(opcion.value == '6ta'){
    mostrar(option_4ta,'coders p-4ta unactive');
    mostrar(option_5ta,'coders p-5ta unactive');
    mostrar(option_6ta,'coders p-6ta active');
  }
});
function mostrar(array,clase){
  for (var i = 0; i < array.length; i++) {
    array[i].setAttribute('class',clase);
  }
}
