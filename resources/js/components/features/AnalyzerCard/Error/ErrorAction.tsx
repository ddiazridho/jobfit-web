interface ErrorActionsProps {
  onRetry: () => void;
}

export default function ErrorActions({
  onRetry,
}: ErrorActionsProps) {
  return (
    <div className="analyzer-error__actions">
      <button
        type="button"
        className="analyzer-error__retry"
        onClick={onRetry}
      >
        Try another file
      </button>
    </div>
  );
}