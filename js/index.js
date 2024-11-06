/**
 * objective:get base, height of a triangle.Calculate the area by using the provided formula. and then display the area.
 * step-1:get base value of the triangle
 * step -2:added an id in the base input field 
 * step-3:use getElementById to access the input field
 * step-4:get value from the input field.(value is string now)
 * step-5:convert the value to a number.use parseFloat
 * 
 */


//get triangle base value
function calculateTriangleArea(){
const triangleBaseInput = document.getElementById('triangle-base');
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText)
  console.log(base);

  //get triangle height value
  const triangleHeight = document.getElementById('triangle-height');
  const triangle = triangleHeight.value;
  const height = parseFloat(triangle);
  console.log(height);

  //calculate triangle area
const area = 0.5 * base * height;
console.log('the area of the triangle is:',area);


//display driangle area
const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText=area;

}






function rectangleArea(){
  const rectangleW = document.getElementById('rectangle-w');
  const rectangleText = rectangleW.value;
  const w = parseFloat(rectangleText);
  console.log(w);


  const rectangleL = document.getElementById('rectangle-l');
  const rectangleLText = rectangleL.value;
  const l = parseFloat(rectangleLText);
  console.log(l);

  const area = w * l ;
  console.log('the area is:',area)


  const areaText = document.getElementById('area-text');
  areaText.innerText=area;
}











// function rectangleAre(){
//   const rectangleB = document.getElementById('rectangle-b');
//   const rectangleTex = rectangleB.value;
//   const b = parseFloat(rectangleTex);
//   console.log(b);


//   const rectangleH = document.getElementById('rectangle-h');
//   const rectangleLTe = rectangleH.value;
//   const h = parseFloat(rectangleLTe);
//   console.log(h);

//   const area = b * h ;
//   console.log('the area is:',area)


//   const areaText = document.getElementById('area-tex');
//   areaText.innerText=area;
// }

function calculateParallelogramArea(){
  const base = getInputValueById('parallelogram-base');
  console.log('base value', base);

  const height = getInputValueById('parallelogram-height');
  console.log('height value',height);

  const area = base * height;
  console.log('the area value is:',area);

  setInnerTextById('parallelogram-area',area);
}
function getInputValueById(inputFieldId){
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}

function setInnerTextById(elementId, area){
  const element = document.getElementById(elementId);
  element.innerText =area;
}







function rhombusId(){
  const d = getInputValueById('rhombus-d');
  console.log('the d value is:',d);
  const dd = getInputValueById('rhombus-dd');
  console.log('the dd value is:',dd)
  const area = 0.5 * d * dd;
  console.log('the area is:',area);
  sami('rhombus-area',area);
}

function getInputValueById(rhombusIs){
  const rhombus = document.getElementById(rhombusIs);
  const rhombusText = rhombus.value;
  const rhombusValue = parseFloat(rhombusText);
  return rhombusValue;
}
function sami(sa,area){
  const samiSa = document.getElementById(sa);
  samiSa.innerText=area;
}