import { useSelector } from 'react-redux';
import { selectDarkMode } from '../../features/darkModeSlice';
import './CV.scss';
import { education, workExperience, programmingSkills } from '../../components/CvData';

const CV = () => {
  const isDarkMode = useSelector(selectDarkMode);

  return (
    <div className={`cv ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2 className="cv__heading">CV</h2>

      <section className="cv__section">
        <h3 className="cv__section-heading">Utbildning</h3>
        <div className="cv__content">
          <p className="cv__content-item">{education.degree}</p>
          <p className="cv__content-item">{education.institution}</p>
          <p className="cv__content-item">{education.date}</p>
        </div>
      </section>

      <section className="cv__section">
        <h3 className="cv__section-heading">Arbetslivserfarenhet</h3>
        <div className="cv__content">
          <p className="cv__content-item">{workExperience.title}</p>
          <p className="cv__content-item">{workExperience.company}</p>
          <p className="cv__content-item">{workExperience.date}</p>
          <p className="cv__content-item">{workExperience.description}</p>
        </div>
      </section>

      <section className="cv__section">
        <h3 className="cv__section-heading">Programmeringskunskaper</h3>
        <ul className="cv__list">
          {programmingSkills.map((skill, index) => (
            <li key={index} className="cv__list-item">{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CV;
