import React from 'react';
import { useState } from 'react';


export function MyPlan() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calc = (value) => {
      value.preventDefault();
      const bmiValue = Math.round(100*(( weight / 2.205 )  / ((height / 100)**2)))/100;
      setBmi(bmiValue);



};

return (
 

        <main>
                <h1>Check Body Statistic:</h1>
                
                <section className="myplan-container">
                    <div>
                        <form action="" onSubmit={calc}>
                            <label for="height">Height(cm):</label><br></br>
                            <input type="text" id="height" name="height" value={height} onChange={(inputtedValue) => setHeight(inputtedValue.target.value)} /><br></br>
                            <label for="weight">Weight(lbs):</label><br></br>
                            <input type="text" id="weight" name="weight" value={weight} onChange={(inputtedValue) => setWeight(inputtedValue.target.value)}  /><br></br>
                            <button type="submit" value="Submit">Calculate</button>
                        </form>
                    </div>
                    <div className="bmi-scale">
                        <p> Your BMI is: {bmi}</p>
                    </div>
                </section>
                    
            </main>
        
    )
}