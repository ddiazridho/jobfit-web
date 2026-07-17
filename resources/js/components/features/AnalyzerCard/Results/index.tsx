import { useState } from "react";
import ScoreCircle from "./ScoreCircle";
import RecommendationRoles from "./RecommendationRoles";
import TopNeededSkills from "./TopNeededSkills";
import ActionButtons from "./ActionButtons";
import { RoleAnalysisRaw, RoleRecommendation, SkillNeeded } from "../types";

// NOTE mendefinisikan objek props yang diterima komponen, sesuaikan dengan parents
interface ResultsProps {
    roles: RoleAnalysisRaw[];
    onAnalyzeAnother: () => void;
}

export default function Results({ roles, onAnalyzeAnother }: ResultsProps) {
    // Default: role dengan score tertinggi
    const defaultRoleId = [...roles].sort((a, b) => b.score - a.score)[0]?.role ?? '';
    const [selectedRoleId, setSelectedRoleId] = useState<string>(defaultRoleId);

    // Role yang sedang aktif, dicari ulang tiap selectedRoleId berubah
    const selectedRole = roles.find((r) => r.role === selectedRoleId) ?? roles[0];

    const recommendationRoles: RoleRecommendation[] = roles.map((r) => ({
        id: r.role,
        name: r.role,
    }));

    const topNeededSkills: SkillNeeded[] = [...new Set(selectedRole.gap_skill)].map((skill) => ({
        id: skill,
        name: skill,
    }));

    const handleSelectRole = (roleId: string) => {
        setSelectedRoleId(roleId);
    };

    // handleGetCareerAdvice tetap sama, tinggal pakai selectedRoleId

    return (
        <div className="analyzer-results">
            <ScoreCircle score={selectedRole.score} label={selectedRole.label} />

            <RecommendationRoles
                roles={recommendationRoles}
                selectedRoleId={selectedRoleId}
                onSelectRole={handleSelectRole}
            />

            <TopNeededSkills skills={topNeededSkills} />

            <ActionButtons
                // onGetCareerAdvice={handleGetCareerAdvice}
                onAnalyzeAnother={onAnalyzeAnother}
            />
        </div>
    );
}