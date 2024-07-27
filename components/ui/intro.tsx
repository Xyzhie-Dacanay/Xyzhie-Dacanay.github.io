import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const IntroPage = () => {
  return (
    <div className='font-serif text-red-500 md:flex justify-center'>
      <div className='flex-col pt-36 p-10'>
        <h1>
          Hi, I am <br />
          <span className='text-teal-600 dark:text-teal-300 text-4xl md:text-6xl'>Renz Aljon Cruz</span>
        </h1>
        <p className='text-slate-700 dark:text-zinc-50 text-xl md:text-2xl'>A Frontend Software Developer.</p>
        <ul className="flex text-gray-600 dark:text-gray-500 text-2xl gap-x-5 pt-2">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100066723944685" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/rarc_0524" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/renz-aljon-cruz-ba13bb286" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/RenzAljon24" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default IntroPage;
