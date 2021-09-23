
// Day2 : Javascript
// Mission : Write javascript example code for 5 functions.
export default function Day2() {

  // learning point 1 : let, var, const difference
  const func1 = () => {
    // Write the sample code below.
    console.log('clicked func1!');
    
  }
  
  // learning point 2 : arrow function
  const func2 = () => {
    // Write the sample code below.
    console.log('clicked func2!');

  }
  
  // learning point 3 : async, await
  const func3 = () => {
    // Write the sample code below.
    console.log('clicked func3!');

  }
  
  // learning point 4 : promises
  const func4 = () => {
    // Write the sample code below.
    console.log('clicked func4!');

  }
  
  // learning point 5 : Loop For, For In, While
  const func5 = () => {
    // Write the sample code below.
    console.log('clicked func5!');

  }

  return (
    <>
      <button onClick={func1}>function1</button>
      <button onClick={func2}>function2</button>
      <button onClick={func3}>function3</button>
      <button onClick={func4}>function4</button>
      <button onClick={func5}>function5</button>
    </>
  )
}
