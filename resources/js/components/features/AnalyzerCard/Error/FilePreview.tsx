interface FilePreviewProps {
  filename?: string;
}

export default function FilePreview({ filename }: FilePreviewProps) {
  if (!filename) return null;

  return (
    <div className="analyzer-error__file-preview">
      <svg
        className="analyzer-error__file-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
      </svg>

      <div className="analyzer-error__file-body">
        <p className="analyzer-error__file-name">{filename}</p>
        <p className="analyzer-error__file-status">
          Uploaded successfully
        </p>
      </div>
    </div>
  );
}
