const Title = () => {
  return (
    <div className="title__container">
      <div className="title__content">
        <span>
          <ul className="title__ul">
            <li>
              <img
                className="title__logo"
                src="http://via.placeholder.com/25x25"
                alt="logo"
              />
            </li>
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Terminal</li>
            <li>Help</li>
          </ul>
        </span>
      </div>

      <div className="title__content">
        <span>Roberto Castelli - VS Code</span>
      </div>

      <div className="title__content">
        <span>
          <img src="http://via.placeholder.com/25" alt="icons" />
          <img src="http://via.placeholder.com/25" alt="icons" />
          <img src="http://via.placeholder.com/25" alt="icons" />
        </span>
      </div>
    </div>
  )
}

export default Title
