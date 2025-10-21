export function AvantFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <div className="giant">AVANT</div>
        <div className="mono" role="group" aria-label="Footer actions">
          <a className="pill-ghost" href="#">
            Follow
          </a>
          <a className="pill-ghost" href="#">
            Join Newsletter
          </a>
          <a className="pill-ghost" href="#">
            Store Locator
          </a>
        </div>
      </div>
      <div className="foot mono">
        <span>© {new Date().getFullYear()} Avant Grocery</span> ·
        <a href="#">Privacy</a> ·
        <a href="#">Terms</a>
      </div>
    </footer>
  );
}
