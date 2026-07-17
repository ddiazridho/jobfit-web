// NOTE mendefinisikan objek props yang diterima komponen, sesuaikan dengan parents
interface TabSwitcherProps {
    activeTab: 'upload-cv' | 'enter-skill';
    onChange: (tab: 'upload-cv' | 'enter-skill') => void;
}

// NOTE parameter objek props yang harus diisi
export default function TabSwitcher({ activeTab, onChange }: TabSwitcherProps) {
    return (
        <div className="analyzer-card__tabs">
            <button
                className={`analyzer-card__tab ${activeTab === 'upload-cv' ? 'analyzer-card__tab--active' : ''}`}
                // NOTE menjalankan fungsi jika button di klik
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
