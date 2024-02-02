import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialIcon = ({ platform, link, size }) =>{
  const getIcon = () => {
    switch (platform) {
      case 'linkedin':
        return <FaLinkedin size={size} />;
      case 'github':
        return <FaGithub size={size} />;
      default:
        return null;
    }
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {getIcon()}
    </a>
  );
};

export default SocialIcon;