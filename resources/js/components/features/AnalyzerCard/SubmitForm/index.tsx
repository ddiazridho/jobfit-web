import EnterSkillForm from "./EnterSkillForm";
import TabSwitcher from "./TabSwitcher";
import UploadCVForm from "./UploadCVForm";
import { useState } from "react";
import { AnalyzerResultData } from "../types";
import { RoleAnalysisRaw } from "../types";

// NOTE mendefinisikan objek props yang diterima komponen, sesuaikan dengan parents
interface SubmitFormProps {
    onSubmitSuccess: (result: RoleAnalysisRaw[]) => void; 
}

export default function SubmitForm( {onSubmitSuccess} : SubmitFormProps) {
    // NOTE  [state, function] = ['enter-skill', function()] untuk Tab Switcher
    const [activeTab, setActiveTab] = useState<'upload-cv' | 'enter-skill'>('upload-cv');

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
                    {activeTab === 'upload-cv' && <UploadCVForm onSubmitSuccess={onSubmitSuccess} />}
                </div>
            </div>

    );
}