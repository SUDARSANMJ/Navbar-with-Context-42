// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
    <ThemeContext.Consumer>
        {value => {
            const {isDarkTheme, toggleTheme} = value

            const onToggleTheme = () => {
                toggleTheme()
            }

            const themeImageURL = isDarkTheme
            ? ''
            : ''

            const navBarClassName = isDarkTheme
            ? ''
            : ''

            const websiteLogoImageURL = isDarkTheme
            ? ''
            : ''

            const navItemClassName = isDarkTheme
            ? ''
            : ''

            return (
                <div className={`navbar ${navbarBgClassName}`}>
                    <div className="navbar-content"
                    <img 
                    className="website-logo"
                    src={websiteLogoImageURL}
                    alt="wesite logo"
                    />
                    <ul className="nav-menu">
                        <li className="nav-menu-item">
                            <Link to="/" className={`nav-link ${navItemClassName}`}>
                                Home
                            </Link>
                        </li>.
                       
                        <li className="nav-menu-item">
                            <Link to="/about" className={`nav-link ${navItemClassName}`}>
                                About
                            </Link>
                        </li>.
                    </ul>
                    <button 
                    data-testid="theme"
                    className="theme-button"
                    type="button"
                    onClick={onToggleTheme}
                    >
                    <img className="theme-image" src={themeImageURL} alt="theme"/>

                    </button>
                </div>
                </div>
            )
        }}
    </ThemeContext.Consumer>
)
export default Navbar