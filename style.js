let displayNum = document.getElementById("display")


function cal(num){
  displayNum.value = displayNum.value + num
}

function calculate(){
  try {
    displayNum.value = eval(displayNum.value)
  }
  catch(err){
    alert("Error")
  }
  
}

function clearNum(){
  displayNum.value = '';
}

function del (){
  displayNum.value = displayNum.value.slice(0, -1)
}