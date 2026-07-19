import { useState, FormEvent, ChangeEvent } from 'react';
import { AnalyzerErrorResponse, RoleAnalysisRaw } from '../types';

// NOTE mendefinisikan objek props yang diterima komponen, sesuaikan dengan parents
interface UploadCVFormProps {
    // NOTE - AnalyzerCard
    onSubmitSuccess: (result: RoleAnalysisRaw[]) => void;
    onSubmitError: (error: AnalyzerErrorResponse) => void;
    onSubmitStart: () => void;

    // NOTE - Dari SubmitForm
    file: File | null;
    onFileChange: (file: File | null) => void;
}

export default function UploadCVForm({ 
    onSubmitSuccess,
    onSubmitError,
    onSubmitStart,
    file,
    onFileChange
 } : UploadCVFormProps ) {

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
        onFileChange(e.target.files[0]);
        } else {
        onFileChange(null);
        }
    };

    //NOTE - Handle submittion file user    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!file) return;

        // TODO - Tindak lanjut loading state 
        onSubmitStart();

        const formData = new FormData();
        formData.append('cv_file', file, file.name); // field_name

        const response = await fetch('/api/analyze-cv', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            // TODO: handle error (misal tampilkan pesan gagal di UI)
            const error: AnalyzerErrorResponse = await response.json();
            onSubmitError(error);
            return;
        }

        const raw: RoleAnalysisRaw[] = await response.json();
        console.log(raw);

        // NOTE - Menjalankan fungsi / mengirim data ke parents
        onSubmitSuccess(raw);
    };    

    //  NOTE - UI STRUCTURE
    return (
        <form onSubmit={handleSubmit} className="analyzer-form">
            <div className="analyzer-form__upload-area">
                <label htmlFor="cv-upload" className="analyzer-form__upload-label">
                    {file ? (
                        <div className="analyzer-form__uploaded-file">
                            <div className="analyzer-form__uploaded-icon">📄</div>
                            <div className="analyzer-form__uploaded-info">
                                <div className="analyzer-form__uploaded-name">
                                    {file.name}
                                </div>
                                <div className="analyzer-form__uploaded-meta">
                                    PDF • {(file.size / 1024 / 1024).toFixed(2)} MB
                                </div>
                            </div>
                            <div className="analyzer-form__uploaded-status">
                                ✓ Uploaded
                            </div>
                        </div>
                    ) : (
                        'Click to select or drag and drop your CV here'
                    )}
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