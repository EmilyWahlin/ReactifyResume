import { useSelector } from 'react-redux';
import { selectDarkMode } from '../../features/darkModeSlice';
import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
  const isDarkMode = useSelector(selectDarkMode);

  return (
    <main className={`main__container ${isDarkMode ? 'dark-mode' : ''}`}>
      <section className={`content__container ${isDarkMode ? 'dark-mode' : ''}`}>
        <section className='picture__container'></section>
        <section className={`about__me ${isDarkMode ? 'dark-mode' : ''}`}>
          <h1 className={`intro ${isDarkMode ? 'dark-mode' : ''}`}>Hej!</h1>
          <p className={`intro__paragraph ${isDarkMode ? 'dark-mode' : ''}`}>
            Jag heter Emily, jag är en 29-årig entusiastisk själ mitt i den spännande resan som förstaårsstudent på KYH, där jag fördjupar mig i konsten att bli en fantastisk Frontend Developer. Jag gillar både den logiska delen av utvecklande och den kreativa delen. Jag trivs att jobba i team men även självständigt. Ser fram emot att dela min passion och växa tillsammans med likasinnade själar.
          </p>
        </section>
      </section>

      <div className='button__links'>
        <Link to="/projekt" className='projekt__link'>
          <span>Projekt</span>
        </Link>

        <Link to="/cv" className='CV__link'>
          <span>CV</span>
        </Link>

        <Link to="/kontakt" className='kontakt__link'>
          <span>Kontakt</span>
        </Link>
      </div>
    </main>
  );
}


export default Home;