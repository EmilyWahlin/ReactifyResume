import { useSelector } from 'react-redux';
import { selectDarkMode } from '../../features/darkModeSlice';
import './Projekt.scss';
import BildKarusell from "../../components/BildKarusell/BildKarusell";
import { GithubApi } from "../../components/GitAPI/GitAPI";

function Projekt() {
  const isDarkMode = useSelector(selectDarkMode);

  const carouselImages = ['Memoryg.png', 'Parmar.png', 'Taverna.png'];

  return (
    <>
      <div className={`project__container ${isDarkMode ? 'dark-mode' : ''}`}>
        <h1>Här finns mina Github Repositories</h1>
        <BildKarusell images={carouselImages} />
        <GithubApi />
      </div>
    </>
  );
}

export default Projekt;
