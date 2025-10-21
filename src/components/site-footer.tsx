export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-[#FFC796]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-end gap-2">
            <span className="rounded-xl border-2 border-ink bg-mustard px-3 py-1 text-2xl font-black shadow-[6px_6px_0_0_#0E0A08]">
              AVANT
            </span>
            <span className="text-lg font-black tracking-wide">GROCERY</span>
          </div>
          <p className="font-mono text-xs uppercase text-ink/70">
            © {new Date().getFullYear()} Avant Grocery. Melty since today.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold uppercase tracking-wide">Shop</h4>
          <ul className="mt-3 space-y-1 text-sm">
            <li>Blocks</li>
            <li>Shreds</li>
            <li>Sauces</li>
            <li>Bundles</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold uppercase tracking-wide">Company</h4>
          <ul className="mt-3 space-y-1 text-sm">
            <li>Process</li>
            <li>Press</li>
            <li>Sourcing</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold uppercase tracking-wide">Help</h4>
          <ul className="mt-3 space-y-1 text-sm">
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
