interface ActionButtonsProps {
  // onGetCareerAdvice: () => void;
  onAnalyzeAnother: () => void;
}

export default function ActionButtons({
  // onGetCareerAdvice,
  onAnalyzeAnother,
}: ActionButtonsProps) {
  return (
    <div className="analyzer-results__actions">
      <button
        type="button"
        className="analyzer-results__action-primary"
        // onClick={onGetCareerAdvice}
      >
        Get career advice
      </button>

      <button
        type="button"
        className="analyzer-results__action-secondary"
        onClick={onAnalyzeAnother}
      >
        Analyze another
      </button>
    </div>
  );
}
