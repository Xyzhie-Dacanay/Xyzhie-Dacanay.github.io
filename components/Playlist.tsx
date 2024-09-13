"use client";
import Loading from '@/app/Loading'
import { useState, useEffect } from 'react';
export default function SpotifyPlaylist() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or initialization process
    setTimeout(() => {
      setIsLoading(false); // Set to false when content is ready
    }, 2000); // Adjust timing as needed
  }, []);


  return (
    <>

      <section className="flex flex-col xl:items-start justify-center w-full max-w-2xl mx-auto mb-14 sm:mb-16 pt-32 px-10  font-serif">
        <div className="">
          <h1 className="mb-4 text-3xl font-bold font-mono tracking-tight text-slate-800 sm:text-5xl dark:text-violet-400">Playlists</h1>
          <p className="w-full mb-4 text-violet-400 dark:text-violet-100 font-mono">
            {`When coding stress hits, I escape into music—it wraps around my thoughts, untangles the noise, and lets my focus find its 
            rhythm, turning complex code into something that just flows effortlessly.`}
          </p>
        </div>


        <div className="flex  justify-center py-10">
          <div className="flex-col">
            <h1 className="text-2xl text-gray-800 dark:text-zinc-100 font-serif py-1">Top Tracks</h1>
            {isLoading ? <Loading /> :
              <iframe
                src="https://open.spotify.com/embed/playlist/2RhfksYfbPQWhkcZDKpyiw?utm_source=generator&theme=0"
                height="352"
                className="rounded-xl shadow-md md:w-100 "
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            }

          </div>

        </div>

        
      </section>






    </>
  )
}
