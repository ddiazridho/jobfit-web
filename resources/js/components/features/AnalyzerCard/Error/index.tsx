import FilePreview from "./FilePreview";
import ErrorMessage from "./ErrorMessage";
import { AnalyzerErrorResponse } from "../types";

interface ErrorStateProps {
  error: AnalyzerErrorResponse;
  onRetry: () => void;
}

export default function ErrorState({ error, onRetry }: ErrorStateProps) {
  return (
    <div className="analyzer-card__content analyzer-error">
      <FilePreview filename={error.filename} />

      <ErrorMessage error={error} />

      <button type="button" className="analyzer-error__retry" onClick={onRetry}>
        Try another file
      </button>
    </div>
  );
}
