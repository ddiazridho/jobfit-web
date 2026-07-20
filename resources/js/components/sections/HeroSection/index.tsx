import AnalyzerCard  from '@/components/features/AnalyzerCard';

export default function HeroSection() {
    return (
        // NOTE - id untuk anchor
        <section id='platform' className="hero-section">
            <div className="hero-section__content">
                <h1 className="hero-section__headline">
                    ARE YOUR SKILL INDUSTRY READY?
                </h1>
                <p className="hero-section__subheadline">
                    Analyze your skills with AI and discover the gap between your current abilities and your target career.
                </p>
            </div>
            <AnalyzerCard/>
        </section>
    );
}
