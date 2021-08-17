export function Footer() {
    return (
        <footer>
            <p>&copy; Group 13: John Boyle, Shriyansh Sharma, and Zulkifli Sales of className INFO 340</p>
            <p>Undergraduate students at the<a href="https://www.washington.edu/"> University of Washington (Seattle)</a></p>
            <address>Contact us at:
                <a href="mailto:zsales@uw.edu" className="contact">zsales@uw.edu</a>
                <h3>Follow our social media pages:</h3>
                <p>
                    <i className="fa fa-facebook" style={{ fontSize: '48px', color: 'white' }}></i>
                    <i className="fa fa-twitter" style={{ fontSize: '48px', color: 'white' }}></i>
                    <i className="fa fa-github" style={{ fontSize: '48px', color: 'white' }}></i>
                </p>
            </address>
        </footer>
    );
}