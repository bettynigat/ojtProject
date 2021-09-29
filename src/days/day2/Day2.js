import './day2.css';

// Day2 : Javascript
// Mission : Write javascript example code for 5 functions.
export default function Day2() {

  // learning point 1 : let, var, const difference.
  //var is function scoped but let is block scoped 
  //calling let before definition cases error. but calling var before 
  //defination gives "undefined" and the program continues as normal 
  const func1 = () => {
    // Write the sample code below.
    console.log('clicked func1!');
    const randomNumer = Math.random();
    let goodDay = "Today is your lucky day! Buy the lottery!";
    let badDay = "Today is not your day! Don't buy the lottery!";
    const maxMoney = 1000000;
    var moneyWin = Math.floor(Math.random() * maxMoney);
    if (randomNumer >= 0.5) {
      console.log(goodDay + ` You will win $${moneyWin} today!`);
    }
    else {
      console.log(badDay);
    }
  }

  // learning point 2 : arrow function
  const func2 = () => {
    // Write the sample code below.
    console.log('clicked func2!');
    const arrowFunction = (name) => console.log(`${name}, Welcome to the Javascript tutorial`);
    arrowFunction("betty");
  }

  // learning point 3 : async, await
  const func3 = async () => {
    // Write the sample code below.
    console.log('clicked func3!');
    let isShopOpen = true;

    function prepareFood(foodChoice, isShopOpen) {
      return new Promise((resolve, reject) => {
        if (isShopOpen) {
          setTimeout(() => {
            resolve(console.log("Your food is ready now!"))
          }, 4000)
        }
        else {
          reject(console.log("Sorry shop is closed"));
        }
      })
    }

    async function orderFood(food, isShopOpen) {
      console.log(`${food} is ordered! Wait 4 seconds for its preparation`);
      await prepareFood(food, isShopOpen);
      console.log("Enjoy your delicious food!");
    }

    await orderFood("pizza", isShopOpen).catch(() => console.log("Customer is sad:("));
    console.log("done");
  }

  // learning point 4 : promises
  const func4 = async () => {
    // Write the sample code below.
    console.log('clicked func4!');
    let love = true;
    let myPromise = new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (love === true) {
          console.log("I love you");
          resolve(love);
        }
        else {
          console.log("I don't love you")
          reject(love);
        }
      }, 3000);
      return "done";
    }).catch((err) => console.log('err occured and love= ', err))
      .then((value) => console.log('successful and love=', value));
    myPromise.then(() => console.log("done"));
  }

  // start1
  const func5_1 = () => {
    console.log('clicked func5_1!');
    for (let i = 0; i < 7; i++) {
      let star = "";
      for (let j = 0; j < i + 1; j++) {
        star += "*";
      }
      console.log(star);
    }
  }

  // start2
  const func5_2 = () => {
    console.log('clicked func5_2!');
    for (let i = 6; i >= 0; i--) {
      let star = "";
      for (let j = 0; j < i + 1; j++) {
        star += "*";
      }
      console.log(star);
    }
  }

  // start3
  const func5_3 = () => {
    console.log('clicked func5_3!');
    for (let i = 6; i >= 0; i--) {
      let star = "";
      for (let j = 0; j < 7 - i; j++) {
        star += "*";
      }
      console.log(`${' '.repeat(i)}` + star);
    }
  }

  // start4
  const func5_4 = () => {
    console.log('clicked func5_4!');
    let starCounter = 1;
    for (let i = 6; i >= 0; i--) {
      let star = "";
      for (let j = 0; j < starCounter; j++) {
        star += "*";
      }
      console.log(`${' '.repeat(i)}` + star + `${' '.repeat(i)}`);
      starCounter += 2;
    }
  }

  // start5
  const func5_5 = () => {
    console.log('clicked func5_5!');
    let starCounter = 1;
    let i;
    for (let counter = 0; counter < 7; counter++) {
      let star = "";
      if (counter === 4) {
        starCounter -= 4;
      }
      for (let j = 0; j < starCounter; j++) {
        star += "*";
      }
      if (counter <= 3) {
        starCounter += 2;
        i = 3 - counter;
      }
      else {
        starCounter -= 2;
        i = counter - 3;
      }
      console.log(`${' '.repeat(i)}` + star + `${' '.repeat(i)}`);
    }
  }

  // learning point 6 : Make Calc
  const func6 = () => {
    // Write the sample code below.
    console.log('clicked Calc!');

    // Write By K
    // improve 1 : eval to replace with another
    // improve 2 : execption process
    // improve 3 : how to ini func

    const buttons = document.querySelectorAll('.buttons');
    const output = document.querySelector('.output');

    buttons.forEach(function (button) {
      button.addEventListener('click', calculate);
    });

    function calculate(event) {
      const clickedValue = event.target.value;
      if (clickedValue === '=') {
        if (output.value !== '') {// calculate and show answer
          output.value = eval(output.value); //function eval calculates 
        }
      }
      else if (clickedValue === 'C') {// clear
        output.value = '';
      }
      else { // add them to the display 
        output.value += clickedValue;
      }
    }
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
      <div className="box calculator">
        <button className="cal_header" onClick={func6}>Jungry Calculator</button>
        <textarea className="output" rows="2" cols="30" disabled></textarea>
        <div className="keys">
          <div className="rows">
            <button value="1" className="buttons">1</button>
            <button value="2" className="buttons">2</button>
            <button value="3" className="buttons">3</button>
            <button value="+" className="buttons">+</button>
          </div>
          <div className="rows">
            <button value="4" className="buttons">4</button>
            <button value="5" className="buttons">5</button>
            <button value="6" className="buttons">6</button>
            <button value="-" className="buttons">-</button>
          </div>
          <div className="rows">
            <button value="7" className="buttons">7</button>
            <button value="8" className="buttons">8</button>
            <button value="9" className="buttons">9</button>
            <button value="*" className="buttons">*</button>
          </div>
          <div className="rows">
            <button value="C" className="buttons">C</button>
            <button value="0" className="buttons">0</button>
            <button value="=" className="buttons">=</button>
            <button value="/" className="buttons">/</button>
            <button value="." className="buttons">.</button>
          </div>
        </div>
      </div>
    </div>
  )
}
