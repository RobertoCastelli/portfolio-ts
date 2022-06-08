const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__terminal">TERMINAL</div>
      <br />
      <div className="footer__http">
        <div>
          local: <span>http://localhost:</span>3000
        </div>
        <div>
          On Your Network: <span>http://127.0.0.1:</span>3000
        </div>
      </div>
      <br />
      <div className="footer__copyright">
        copyright &copy; 2022 <span>Roberto Castelli</span>
      </div>
      <br />
      <div className="footer__webpack">
        <div>
          webpack compiled <span>successfully</span>
        </div>
        <div>No issues found.</div>
      </div>
      <br />
      <div className="footer__icons">icons</div>
    </footer>
  )
}

export default Footer
