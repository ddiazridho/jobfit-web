interface FilePreviewProps {
  filename?: string;
}

export default function FilePreview({ filename }: FilePreviewProps) {
  return (
    <div className="analyzer-error__file-preview">
        <svg className="analyzer-error__file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <line x1="9.5" y1="13.5" x2="14.5" y2="18.5" />
            <line x1="14.5" y1="13.5" x2="9.5" y2="18.5" />
        </svg>
        {filename && <p className="analyzer-error__file-name">{filename}</p>}
    </div>
  );
}
