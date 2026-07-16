const jobRoles = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Data Analyst",
    "Cloud Engineer",
];

export default function JobRoles() {
    return (
        <section className="hero-job-roles">

            {jobRoles.map((role) => (
                <span key={role} className="hero-job-role">
                    {role}
                </span>
            ))}
        </section>
    );
}