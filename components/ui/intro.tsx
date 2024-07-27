import { FaFacebook,
        FaInstagram,
        FaLinkedin,
        FaGithub } 
from "react-icons/fa";

const introPage = () => {
  return (
    <div className=' font-serif text-red-500 md:flex justify-center'>
        <div className='flex-col pt-36 p-10'>
            <h1 >Hi, I'm <br />
            <span className='text-teal-600 dark:text-teal-300 text-4xl md:text-6xl'>Renz Aljon Cruz</span> </h1>
            <p className='text-slate-700 dark:text-zinc-50 text-xl  md:text-2xl'>A Frontend Software Developer.</p>
            <ul className="flex text-gray-600 dark:text-gray-500 text-2xl gap-x-5 pt-2 ">
                <a href="https://www.facebook.com/profile.php?id=100066723944685"> <FaFacebook /> </a>
                <a href="https://www.instagram.com/rarc_0524"> <FaInstagram /> </a>
                <a href="https://www.linkedin.com/in/renz-aljon-cruz-ba13bb286"> <FaLinkedin /> </a>
                <a href="https://github.com/RenzAljon24"> <FaGithub /> </a>
            </ul>
        </div>
    </div>
  )
}

export default introPage