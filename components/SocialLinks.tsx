import Link from 'next/link';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const SocialLinks = () => {
  return (
    <div style={{
      position: 'fixed',
      display: 'flex',
      gap: '20px',
      bottom: '20px',
      justifyContent: 'center',
      padding: '10px 20px',
      zindex: 1000,
    }}>
      <Link
        href="https://www.linkedin.com/in/dylandodds"
        target="_blank"
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        <FaLinkedin size={32} />
      </Link>
      <Link
        href="https://doddshk.github.io/portfolio/"
        target="_blank"
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        <FaGithub size={32} />
      </Link>
      <Link
        href="https://leetcode.com/your-profile"
        target="_blank"
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        <SiLeetcode size={32} />
      </Link>
    </div>
  );
};

export default SocialLinks;
