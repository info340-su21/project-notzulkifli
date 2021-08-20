export function MyPlan() {
    return (

        <main>
                <h1>Check Body Statistic:</h1>
                
                <section class="myplan-container">
                    <div>
                        <form action="">
                            <label for="height">Height(cm):</label><br></br>
                            <input type="text" id="height" name="height" value="165" /><br></br>
                            <label for="weight">Weight(lbs):</label><br></br>
                            <input type="text" id="weight" name="weight" value="140" /><br></br>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <div class="bmi-scale">
                    </div>
                </section>
                    
            </main>
        
    )
}