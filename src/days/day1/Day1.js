import './day1.css';

// Day1 : CSS
export default function Day1() {
  return (
    <div className="contaniner">

      {/* Step1 : Button Style */}
      <div className="box">
        <div className="button">
          <div className="box_button">
            Button1
          </div>
          <div className="box_button">
            Button2
          </div>
          <div className="box_button">
            Button3
          </div>
        </div>
      </div>

      {/* Step2 : Input Style */}
      <div className="box">
        <div className="step2">
          ID : <input type="text" />
          PW : <input type="password" />
        </div>
      </div>

      {/* Step3 : Input Radio Style */}
      <div className="box">
        <div className="step3">
          On <input type="radio" name="step3" value="on" />
          Off <input type="radio" name="step3" value="off" />
        </div>
      </div>

      {/* Step4 : Input checkbox Style */}
      <div className="box">
        <div className="step4">
          one <input type="checkbox" name="step4" value="one" />
          two <input type="checkbox" name="step4" value="one" />
          three <input type="checkbox" name="step4" value="one" />
        </div>
      </div>

    </div>
  )
}
