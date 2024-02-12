function calculateTriangleArea(){
  // triangle base
  const triangleBase = document.getElementById('triangle-base');
  const baseValue = triangleBase.value;
  const base = parseFloat(baseValue);
  console.log(base);

  // triangle height
  const triangleHeight = document.getElementById('triangle-height');
  const heightValue = triangleHeight.value;
  const height = parseFloat(heightValue);
  console.log(height);

  // calculate area
  const area = 0.5 * base * height;
  const triangleArea = document.getElementById('triangle-area');
  triangleArea.innerText = area;
}