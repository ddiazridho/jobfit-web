interface ScoreCircleProps {
  score: number;
  label: string;
}

export default function ScoreCircle({ score, label }: ScoreCircleProps) {
  return (
    <div className="analyzer-results__score">
      <p className="analyzer-results__score-caption">Based on your current skills</p>

      <div className="analyzer-results__score-circle">
        <span className="analyzer-results__score-value">{score}%</span>
      </div>

      <p className="analyzer-results__score-label">{label}</p>
    </div>
  );
}


