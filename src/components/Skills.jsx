import SkillPanel from './SkillPanel'
import './Skills.css'

const skillsData = [
  {
    category: 'Programowanie Systemów',
    skills: ['C/C++', 'Java', 'Sterowniki PLC'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Angular', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    skills: ['Node/Express', 'PHP','SQL', 'MongoDB'],
  },

  {
    category: 'Narzędzia',
    skills: ['Git', 'Docker' ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="skills-container">
        <div className="skills-left">
          <h2>Umiejętności i technologie</h2>
        </div>
        <div className="skills-right">
          <div className="skills-grid">
            {skillsData.map((skillGroup, index) => (
              <SkillPanel key={index} {...skillGroup} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
