import { useSelector } from 'react-redux';
import { selectDarkMode } from '../../features/darkModeSlice';
import './Kontakt.scss';
import Kontaktformulär from '../../components/Kontaktformulär/Kontaktformulär';

function Kontakt() {
  const isDarkMode = useSelector(selectDarkMode);

  return (
    <div className={`contact__container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2>Kontakta Mig</h2>
      <p>
        Har du frågor eller vill komma i kontakt med mig? Fyll i formuläret nedan så återkommer jag så snart som
        möjligt!
      </p>
      <Kontaktformulär />
    </div>
  );
}

export default Kontakt;