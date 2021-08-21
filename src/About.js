import { Button } from "reactstrap";


export function AboutUs() {
    return(
        <main>
<section>
    <div className="about-us-container">
        <div className="about-us-img-border">
            <h1>John Boyle</h1>
            <img className="about-us-img-crop" src="img/JohnBoyle.png" alt="John Boyle"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab, magnam quaerat facilis sed perferendis corrupti et corporis fugit reiciendis, odit sapiente doloremque sequi recusandae aliquam maxime? Eligendi, ab reprehenderit.</p>
        </div>
        <div className="about-us-img-border">
            <h1>Shriyansh Sharma</h1>
            <img className="about-us-img-crop" src="img/ShriyanshSharma.png" alt="Shriyansh Sharma "></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam optio sequi ipsam unde laborum, eveniet fugit rerum voluptatum praesentium dolor aspernatur alias odit eum placeat officia quaerat, nulla illo corrupti.</p>
        </div>
        <div className="about-us-img-border">
            <h1>Zulkifli Sales</h1>
            <img className="about-us-img-crop" src="img/ZulkifliSales.png" alt="Zulkifli Sales"></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ea aliquid optio a libero neque sapiente dignissimos illum itaque. Quia commodi rerum dolores nemo, facilis impedit ad officiis expedita voluptatem?</p>
        </div>
        <div className="about-us-img-border">
            <h1>Samuel Taylor</h1>
            <img className="about-us-img-crop" src="img/SamuelTaylor.png" alt="Samuel Taylor"></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ea aliquid optio a libero neque sapiente dignissimos illum itaque. Quia commodi rerum dolores nemo, facilis impedit ad officiis expedita voluptatem?</p>
        </div>
    </div>
</section>
<section className="feedback">
    <form id="emailForm">
        <h2>Leave us some feedback!</h2>
            <label>Email:</label>
            <input id="email" type="text" placeholder="email@domain.com"></input>
            <br></br>
            <label>Subject:</label>
            <input id="subject" type="text" placeholder="website"></input>
            <p>Comment:</p>
            <textarea id="body" rows="10" placeholder="Please type message here"></textarea>

            <Button className="Danger" type="button" onclick="sendEmail()" value="Send an Eamil">Submit</Button>
    </form>
</section>
</main>
    );
}
