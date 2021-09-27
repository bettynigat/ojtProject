import './day2.css';

// Day2 : Javascript
// Mission : Write javascript example code for 5 functions.
export default function Day2() {

  // learning point 1 : let, var, const difference.
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

  // start1
  const func5_1 = () => {
    console.log('clicked func5_1!');
  }

  // start2
  const func5_2 = () => {
    console.log('clicked func5_2!');
  }

  // start3
  const func5_3 = () => {
    console.log('clicked func5_3!');
  }

  // start4
  const func5_4 = () => {
    console.log('clicked func5_4!');
  }

  // start5
  const func5_5 = () => {
    console.log('clicked func5_5!');
  }

  // learning point 6 : Make Calc
  const func6 = () => {
    // Write the sample code below.
    console.log('clicked Calc!');

  }

  return (
    <div className="contaniner">
      <div className="box">
        <button onClick={func1}>let, var, const</button>
        <button onClick={func2}>arrow function</button>
        <button onClick={func3}>async, await</button>
        <button onClick={func4}>promises</button>
      </div>
      <div className="box">
        <button onClick={func5_1}>Star1</button>
        <button onClick={func5_2}>Star2</button>
        <button onClick={func5_3}>Star3</button>
        <button onClick={func5_4}>Star4</button>
        <button onClick={func5_5}>Star5</button>
      </div>
      <div className="box">
        <button onClick={func6}>Calc</button>
      </div>
    </div>
  )
}
