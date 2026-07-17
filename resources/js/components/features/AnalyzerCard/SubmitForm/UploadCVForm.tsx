import { useState, FormEvent, ChangeEvent } from 'react';
import { AnalyzerResultData, RoleAnalysisRaw } from '../types';

// NOTE mendefinisikan objek props yang diterima komponen, sesuaikan dengan parents
interface UploadCVFormProps {
    onSubmitSuccess: (result: RoleAnalysisRaw[]) => void;
}

export default function UploadCVForm({ onSubmitSuccess } : UploadCVFormProps ) {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    //NOTE - Handle submittion file user    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('cv_file', file); // field_name

        const response = await fetch('/api/analyze-cv', {
            method: 'POST',
            body: formData,
        });
        console.log(response);

        if (!response.ok) {
            // TODO: handle error (misal tampilkan pesan gagal di UI)
            console.error('Upload gagal');
            return;
        }

        const raw: RoleAnalysisRaw[] = await response.json();
        console.log(raw);


        // NOTE - Menjalankan fungsi / mengirim data ke parents
        onSubmitSuccess(raw);
    };    

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




function mapToAnalyzerResult(raw: RoleAnalysisRaw[]): AnalyzerResultData {
    const sorted = [...raw].sort((a, b) => b.score - a.score);
    const selected = sorted[0]; // role dengan score tertinggi jadi default terpilih

    return {
        matchScore: selected.score,
        matchLabel: selected.label,
        recommendationRoles: raw.map((item) => ({
            id: item.role,
            name: item.role,
        })),
        topNeededSkills: [...new Set(selected.gap_skill)].map((skill) => ({
            id: skill,
            name: skill,
        })),
    };
}