import { SkillNeeded } from "../types";

interface TopNeededSkillsProps {
  skills: SkillNeeded[];
}

export default function TopNeededSkills({ skills }: TopNeededSkillsProps) {
  return (
    <div className="analyzer-results__skills">
      <h3 className="analyzer-results__skills-title">Top Needed Skill</h3>

      <div className="analyzer-results__skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="analyzer-results__skill">
            <span className="analyzer-results__skill-dot" />
            <span className="analyzer-results__skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}