export default function ModalShell({ open, onClose, title, children }) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-40 flex justify-center bg-black/50"
      aria-modal="true"
      role="dialog"
    >
      {/* Wrapper creates space below fixed header and above bottom of screen */}
      <div className="pointer-events-none flex w-full justify-center pt-24 pb-6 sm:pt-28 sm:pb-8">
        <div className="pointer-events-auto w-full max-w-4xl max-h-[calc(100vh-6rem-2rem)] overflow-y-auto rounded-3xl bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-3 sm:px-8 sm:py-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                Branch landmark
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900 sm:text-xl">
                {title}
              </h3>
              <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                A nearby landmark to help you find the salon easily.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="ml-4 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200"
            >
              Close
            </button>
          </div>

          <div className="px-4 pb-4 pt-3 sm:px-6 sm:pb-6">{children}</div>
        </div>
      </div>
    </div>
  )
}

