import styles from './SkillPanel.module.css'

export default function SkillPanel({ category, skills }) {
  return (
    <div className={styles['skill-panel']}>
      <h3>{category}</h3>
      <ul className={styles['skill-list']}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
