import './day1.css';

// Day1 : CSS
export default function Day1() {
  return (
    <div className="contaniner">

      {/* Step1 : Button Style */}
      <div className="box">
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

      {/* Step2 : Input Style */}
      <div className="box">
        <div className="step2">
          ID : <input />
          PW : <input />
        </div>
      </div>

      {/* Step3 : Input Radio Style */}
      <div className="box">
        <div className="step3">
          On <input />
          Off <input />
        </div>
      </div>

      {/* Step4 : Input checkbox Style */}
      <div className="box">
        <div className="step4">
          one <input />
          two <input />
          three <input />
        </div>
      </div>

    </div>
  )
}
