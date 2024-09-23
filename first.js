// Define a function to calculate the area of a square
function calculateSquareArea(sideLength) {
    // Check if the input is a number
    if (typeof sideLength !== 'number') {
      throw new Error('Side length must be a number');
    }
  
    // Calculate the area of the square
    const area = sideLength ** 2;
  
    // Return the area
    return area;
  }
  
  // Example usage:
  const sideLength = 5;
  const area = calculateSquareArea(sideLength);
  
  console.log(`The area of the square with side length ${sideLength} is ${area}`);