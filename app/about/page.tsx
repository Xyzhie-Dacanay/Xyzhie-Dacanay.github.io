import device from "@/components/ui/device.jpg"
import Image from "next/image"
const aboutPage = () => {
  return (
    <div className="flex flex-col xl:items-start justify-center w-full max-w-2xl mx-auto mb-14 sm:mb-16 pt-32 px-10  font-serif bg-gray-100 dark:bg-slate-900 dark:text-zinc-100">
    <div className="py-6 max-w-2xl">
      <h1 className="text-2xl md:text- mb-4 ">My Tools and Technologies</h1>

      <h2 className="text-xl md:text-2xl font-semibold mt-6">Machines/Devices</h2>
      <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-zinc-400">
        <li className="mb-2"><strong>Acer Lenovo Aspire 3</strong></li>
        <li className="mb-2"><strong>Logitech G Pro</strong></li>
        <Image src={device}/>
      </ul>

      <h2 className="text-xl md:text-2xl  pt-10">Code Editor</h2>
      <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-zinc-400">
        <li className="mb-2"><strong>VSCode</strong></li>
      </ul>
      

      <h2 className="text-xl md:text-2xl  pt-10">Productivity Apps</h2>
      <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-zinc-400">
        <li className="mb-2">
          <strong>
            <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Notion</a>
          </strong>: Organizing my thoughts and projects
        </li>
        <li className="mb-2">
          <strong>
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Figma</a>
          </strong>: Designing and prototyping websites
        </li>
        <li className="mb-2">
          <strong>
            <a href="https://www.google.com/drive/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Google Drive</a>
          </strong>: Cloud file storage
        </li>
        <li className="mb-2">
          <strong>
            <a href="https://www.dropbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Dropbox</a>
          </strong>: Private file storage
        </li>
        <li className="mb-2">
          <strong>
            <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Spotify</a>
          </strong>: Music to help me focus better
        </li>
      </ul>

      <h2 className="text-xl md:text-2xl  pt-10">Social Apps</h2>
      <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-zinc-400">
        <li className="mb-2">
          <strong>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a>
          </strong>: Following tech people for valuable insights
        </li>
        <li className="mb-2">
          <strong>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Facebook</a>
          </strong>: Staying connected with family and friends, and enjoying memes
        </li>
        <li className="mb-2">
          <strong>
            <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Discord</a>
          </strong>: Engaging with tech communities
        </li>
        <li className="mb-2">
          <strong>
            <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">StackOverflow</a>
          </strong>: A go-to resource for debugging and understanding programming concepts
        </li>
      </ul>
    </div>
  </div>
  )
}

export default aboutPage