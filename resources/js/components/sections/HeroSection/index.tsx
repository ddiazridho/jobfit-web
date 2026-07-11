import AnalyzerCard from '@/components/features/AnalyzerCard';

const SUBHEADLINE =
    'Upload your CV or enter your skill to see how you match with today job market. ' +
    'We use AI-driven analysis to identify gap and career opportunities.';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-section__content">
                <h1 className="hero-section__headline">
                    ARE YOUR SKILL INDUSTRY READY?
                </h1>
                <p className="hero-section__subheadline">
                    {SUBHEADLINE}
                </p>

                <AnalyzerCard />
            </div>
        </section>
    );
}
