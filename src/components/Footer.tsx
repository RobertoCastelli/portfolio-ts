const Footer = () => {
  return (
    <footer className="footer__container">
      <section className="footer__terminal">
        <ul>
          <li>PROBLEMS</li>
          <li>OUTPUT</li>
          <li>
            <span className="footer__terminal--underline">TERMINAL</span>
          </li>
          <li>DEBUG CONSOLE</li>
        </ul>
      </section>
      <br />

      <section className="footer__http">
        <div className="footer__http-local">Local:</div>
        <div className="footer__http-local--host">
          http://localhost:<b>3000</b>
        </div>
        <div className="footer__http-network">On Your Network:</div>
        <div className="footer__http-network--host">
          http://127.0.0.1:<b>3000</b>
        </div>
      </section>
      <br />

      <section className="footer__copyright">
        Copyright &copy; 2022 <span>Roberto Castelli</span>.
      </section>
      <br />

      <section className="footer__webpack">
        <div>
          webpack compiled <span>successfully</span>
        </div>
        <div>No issues found.</div>
      </section>
      <br />

      <section className="footer__icons">icons</section>
    </footer>
  )
}

export default Footer
