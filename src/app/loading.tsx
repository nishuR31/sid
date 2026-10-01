export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading page content"
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
    >
      <div className="h-0.5 w-full bg-primary/10 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-emerald-500 via-primary to-accent animate-top-loader w-1/2 rounded-full" />
      </div>
    </div>
  );
}
