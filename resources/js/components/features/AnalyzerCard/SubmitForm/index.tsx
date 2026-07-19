import EnterSkillForm from "./EnterSkillForm";
import TabSwitcher from "./TabSwitcher";
import UploadCVForm from "./UploadCVForm";
import { useState } from "react";
import { RoleAnalysisRaw, AnalyzerErrorResponse } from "../types";

// NOTE mendefinisikan objek props yang diterima komponen, sesuaikan dengan parents
interface SubmitFormProps {
    onSubmitSuccess: (result: RoleAnalysisRaw[]) => void; 
    onSubmitError: (error : AnalyzerErrorResponse)=> void; 
    onSubmitStart: () => void; 
}

export default function SubmitForm( 
    {onSubmitSuccess,
    onSubmitError,
    onSubmitStart
} : SubmitFormProps) {

    // NOTE  [state, function] = ['enter-skill', function()] untuk Tab Switcher
    const [activeTab, setActiveTab] = useState<'upload-cv' | 'enter-skill'>('upload-cv');
    // NOTE - Variabel untuk UploadCVForm
    const [file, setFile] = useState<File | null>(null);

    return (
            <div>
                {/* NOTE - Mengisi parameter props */}
                <TabSwitcher
                    activeTab={activeTab}   
                    onChange={setActiveTab}
                />
            
                <div className="analyzer-card__content">
                    {/* NOTE - Pengkondisian state */}
                    {activeTab === 'enter-skill' && <EnterSkillForm />}
                    {/* NOTE - Mengisi parameter props */}
                    {activeTab === 'upload-cv' && <UploadCVForm 
                    onSubmitSuccess={onSubmitSuccess}
                    onSubmitStart={onSubmitStart}
                    onSubmitError={onSubmitError}
                    onFileChange={setFile} 
                    file={file} />}
                </div>
            </div>

    );
}