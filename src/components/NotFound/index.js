// Write your code here
import Navbar from './Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgClassName = isDarkTheme
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'
      const notFoundHeadingTextBgClassName = isDarkTheme
        ? 'not-found-heading-text-light'
        : 'not-found-heading-text-dark'
      const notFoundHeadingTextBgClassName = isDarkTheme
        ? 'not-found-heading-text-dark'
        : 'not-found-heading-text-light'

      return (
        <div className={'not-found-app-container ${notFoundBgClassName}'}>
          <Navbar />
          <div className="not-found-responsive-container">
            <div className="not-found-container">
              <img src="" alt="not found" className="not-found-img" />
              <h1
                className={`not-found-heading ${notFoundHeadingTextClassName}`}
              >
                Lost your way?
              </h1>
              <p
                className={`not-found-content ${notFoundContentTextClassName}`}
              >
                we cannot seem to find the page are looking for
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
