import FilePreview from "./FilePreview";
import ErrorAlert from "./ErrorAlert";
import ErrorActions from "./ErrorAction";
import { AnalyzerErrorResponse } from "../types";


interface ErrorStateProps {
  error: AnalyzerErrorResponse;
  onRetry: () => void;
}

export default function ErrorState({ error, onRetry }: ErrorStateProps) {
  return (
    <div className="analyzer-card__content analyzer-error">
      <FilePreview filename={error.filename} />

      <ErrorAlert error={error} />

      <ErrorActions onRetry={onRetry} />
    </div>
  );
}
