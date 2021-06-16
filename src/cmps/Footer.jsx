
export function Footer() {
    return (
        <div className="footer-container">
            <div className="logo-footer-container">
               <h1 className="logo">myTeam</h1>
            </div>
            <div className="footer-href">
                <ul className="footer-list clean-list flex">
                    <li>home</li>
                    <li>about</li>
                </ul>
            </div>
            <div className="address-content">
                <ul className="address-list clean-list flex column">
                    <li>987  Hillcrest Lane</li>
                    <li>Irvine, CA</li>
                    <li>California 92714</li>
                    <li>Call Us : 949-833-7432</li>
                </ul>
            </div>
            <div className="social-content">
                <ul className="social-list clean-list flex ">
                    <li><img src="imgs/facebook.png" alt="img" /></li>
                    <li><img src="imgs/pinterest.png" alt="img" /></li>
                    <li><img src="imgs/twitter.png" alt="img" /></li>
                </ul>
            </div>
            <div className="copyright-content">
                <h4>Copyright 2020. All Rights Reserved</h4>
            </div>
        </div>
    )
}
