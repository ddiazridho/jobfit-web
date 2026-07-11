import { useState } from 'react';
import TabSwitcher from './TabSwitcher';
import EnterSkillForm from './EnterSkillForm';
import UploadCVForm from './UploadCVForm';

export default function AnalyzerCard() {
    const [activeTab, setActiveTab] = useState<'upload-cv' | 'enter-skill'>('enter-skill');

    return (
        <div className="analyzer-card">
            <TabSwitcher
                activeTab={activeTab}
                onChange={setActiveTab}
            />

            <div className="analyzer-card__content">
                {activeTab === 'enter-skill' && <EnterSkillForm />}
                {activeTab === 'upload-cv' && <UploadCVForm />}
            </div>
        </div>
    );
}
