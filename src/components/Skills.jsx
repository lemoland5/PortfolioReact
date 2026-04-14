import SkillPanel from './SkillPanel'

const skillsData = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'CSS & Tailwind', 'Responsive Design'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Databases', 'APIs & REST'],
  },
  {
    category: 'Tools',
    skills: ['Git & GitHub', 'Vite', 'Webpack', 'DevTools'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skillsData.map((skillGroup, index) => (
          <SkillPanel key={index} {...skillGroup} />
        ))}
      </div>
    </section>
  )
}
