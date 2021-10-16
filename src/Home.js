import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (
        <div className="App-header">
            <div className="card glass glass_card text-center">
                <div className="welcome">
                    <FontAwesomeIcon icon={faPhoneSquareAlt} className="fa-5x"/>
                    <h4>Welcome to <span>PhoneBook App</span></h4>
                    <p>Store your friend's phone numbers now!</p>
                    <Link to="/PhoneBook"><button>Get Started</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;