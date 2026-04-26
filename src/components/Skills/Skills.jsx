import SkillPanel from '../SkillPanel/SkillPanel'
import styles from './Skills.module.css'

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
    skills: ['Git', 'Docker', 'Linux Server', 'Postfix'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={`${styles['skills-section']} section`}>
      <div className={styles['skills-container']}>
        <div className={styles['skills-left']}>
          <h2>Umiejętności i technologie</h2>
        </div>
        <div className={styles['skills-right']}>
          <div className={styles['skills-grid']}>
            {skillsData.map((skillGroup, index) => (
              <SkillPanel key={index} {...skillGroup} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
