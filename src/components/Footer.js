const Footer = () => {
    return (
        <div className="footer">

            <div className="last">
                <pre className="copyright">
                    © 2024 Bundl Technologies
                    Pvt. Ltd
                </pre>
            </div>
            

            <div className="company">
                <ul>
                    <li className="title">Company</li>
                    <li className="details">About</li>
                    <li className="details">Careers</li>
                    <li className="details">Team</li>
                </ul> 
            </div>

            <div className="contact">
                <ul>
                    <li className="title">Contact us</li>
                    <li className="details">Help & Support</li>
                    <li className="details">Partner with us</li>
                    <li className="details">Ride with us</li>
                </ul> 
            </div>
            <div className="deliver">
                <ul>
                    <li className="title">We deliver to:</li>
                    <li className="details">Banglore</li>
                    <li className="details">Mambai</li>
                    <li className="details">Delhi</li>
                    <li className="details">Hyderabad</li>
                    <li className="details">Pune</li>
                </ul> 
            </div>

        </div>
    );
};

export default Footer;