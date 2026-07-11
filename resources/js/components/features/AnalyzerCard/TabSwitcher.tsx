interface TabSwitcherProps {
    activeTab: 'upload-cv' | 'enter-skill';
    onChange: (tab: 'upload-cv' | 'enter-skill') => void;
}

export default function TabSwitcher({ activeTab, onChange }: TabSwitcherProps) {
    return (
        <div className="analyzer-card__tabs">
            <button
                className={`analyzer-card__tab ${activeTab === 'upload-cv' ? 'analyzer-card__tab--active' : ''}`}
                onClick={() => onChange('upload-cv')}
                type="button"
            >
                Upload CV
            </button>
            <button
                className={`analyzer-card__tab ${activeTab === 'enter-skill' ? 'analyzer-card__tab--active' : ''}`}
                onClick={() => onChange('enter-skill')}
                type="button"
            >
                Enter skill
            </button>
        </div>
    );
}
