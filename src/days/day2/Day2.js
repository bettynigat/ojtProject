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
  }

  // start2
  const func5_2 = () => {
    console.log("*");
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
