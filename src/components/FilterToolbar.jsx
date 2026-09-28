const I = (p) => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p} />

export default function FilterToolbar() {
  return (
    <div className="toolbar">
      <div className="toolbar__group">
        <button className="tool-btn"><I><path d="M2 3h16l-6 7v6l-4 1v-7L2 3Z"/></I>Filter</button>
        <button className="tool-btn"><I><path d="M4 16v-4M10 16V8M16 16V3"/></I>Level</button>
        <button className="tool-btn"><I><path d="m6 2 3 5H3l3-5Z"/><rect x="3" y="12" width="5" height="5"/><circle cx="14" cy="14.5" r="2.7"/><rect x="11" y="3" width="6" height="0" /></I>Category</button>
      </div>
      <button className="tool-btn"><I><path d="M2 5h16M2 10h10M2 15h5"/></I>Most relevant</button>
    </div>
  )
}
