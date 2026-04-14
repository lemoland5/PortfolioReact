export default function SkillPanel({ category, skills }) {
  return (
    <div className="skill-panel">
      <h3>{category}</h3>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
