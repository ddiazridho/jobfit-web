import { useState, FormEvent, ChangeEvent } from 'react';

export default function UploadCVForm() {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!file) return;
        // TODO: Implement actual file upload logic
        console.log('Uploading CV:', file.name);
    };

    return (
        <form onSubmit={handleSubmit} className="analyzer-form">
            <div className="analyzer-form__upload-area">
                <label htmlFor="cv-upload" className="analyzer-form__upload-label">
                    {file ? file.name : 'Click to select or drag and drop your CV here'}
                </label>
                <input
                    type="file"
                    id="cv-upload"
                    onChange={handleFileChange}
                    className="analyzer-form__file-input"
                    accept=".pdf"
                    required
                />
            </div>

            <button type="submit" className="analyzer-form__submit" disabled={!file}>
                Analyze My CV
            </button>
        </form>
    );
}
