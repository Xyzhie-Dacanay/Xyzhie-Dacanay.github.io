import { profile } from "console";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const IntroPage = () => {
  return (
    <div className='font-mono text-black dark:text-zinc-50 md:flex justify-center'>
      <div className='flex-col pt-36 p-10'>
        <h1 className='text-2xl mb-3'>
          Hi, I am <br />
          <span className='text-violet-600 dark:text-violet-300 text-4xl md:text-6xl'>Xyzhie Dacanay</span>
        </h1>
        <p className='text-black dark:text-zinc-50 text-xs md:text-lg'>Information Technology Student</p>
        <ul className="flex text-violet-600 dark:text-violet-300 text-2xl gap-x-5 pt-2">
          <li>
            <a href="https://www.facebook.com/yzhiepwr24/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_xy.zh" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/xyzhie-dacanay-b12393292" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/Xyzhie-Dacanay" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default IntroPage;
