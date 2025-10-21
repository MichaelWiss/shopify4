import Link from "next/link";

const navLinks = [
  { href: "/#products", label: "Shop" },
  { href: "/#recipes", label: "Recipes" },
  { href: "/#story", label: "About" }
];

export function AvantHeader() {
  return (
    <>
      <div className="bar mono">
        FREE SHIPPING OVER $50 • <b>FUNKY • DEEPLY SAVORY • PLANT-POWERED</b> • LIMITED DROP TODAY
      </div>
      <header className="nav">
        <div className="brand">
          <span>AVANT</span>
          <span className="outline">GROCERY</span>
        </div>
        <nav className="actions" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <span className="circle" role="img" aria-label="Cart">
            🛒
          </span>
        </nav>
      </header>
    </>
  );
}
