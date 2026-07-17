import { RoleRecommendation } from "../types";

interface RecommendationRolesProps {
  roles: RoleRecommendation[];
  selectedRoleId: string | null;
  onSelectRole: (roleId: string) => void;
}

export default function RecommendationRoles({
  roles,
  selectedRoleId,
  onSelectRole,
}: RecommendationRolesProps) {
  return (
    <div className="analyzer-results__roles">
      <h3 className="analyzer-results__roles-title">Recommendation Role</h3>

      <div className="analyzer-results__roles-list">
        {roles.map((role) => (
          <button
            key={role.id}
            type="button"
            className={
              role.id === selectedRoleId
                ? "analyzer-results__role analyzer-results__role--active"
                : "analyzer-results__role"
            }
            onClick={() => onSelectRole(role.id)}
          >
            {role.name}
          </button>
        ))}
      </div>
    </div>
  );
}

