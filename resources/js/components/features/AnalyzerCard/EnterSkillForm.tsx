import { useState, FormEvent } from 'react';

export default function EnterSkillForm() {
    const [skill, setSkill] = useState('');
    const [targetJob, setTargetJob] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: Implement actual submission logic
        console.log('Analyzing skills:', { skill, targetJob });
    };

    return (
        <form onSubmit={handleSubmit} className="analyzer-form">
            <div className="analyzer-form__group">
                <label htmlFor="skill" className="analyzer-form__label">Enter your skill</label>
                <input
                    type="text"
                    id="skill"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    className="analyzer-form__input"
                    placeholder="e.g. React, Python, Data Analysis"
                    required
                />
            </div>

            <div className="analyzer-form__group">
                <label htmlFor="targetJob" className="analyzer-form__label">Target job</label>
                <input
                    type="text"
                    id="targetJob"
                    value={targetJob}
                    onChange={(e) => setTargetJob(e.target.value)}
                    className="analyzer-form__input"
                    placeholder="e.g. Frontend Developer"
                    required
                />
            </div>

            <button type="submit" className="analyzer-form__submit">
                Analyze My Skill
            </button>
        </form>
    );
}
