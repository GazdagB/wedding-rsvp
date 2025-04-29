import { useState } from 'react'
import ContentLoader from 'react-content-loader'



const Playlist = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="dancing text-4xl md:text-5xl text-wedding-brown mb-10">
        Zene lejátszási lista
      </h2>
      <p className="text-[18px] md:w-[600px] text-center text-pretty mb-10 text-wedding-light-gray">
        Ha szeretnél zenét ajánlani vagy szeretnél bulizni velünk a kedvenc zenédre, akkor ebbe a Spotify listához hozzá tudod adni a legjobb slágereidet!
      </p>

      {/* Skeleton */}
      {isLoading && (
        <div className='w-[300px] md:w-[500px] lg:w-[700px] h-[600px] lg:h-[1000px] mb-10'>
          <ContentLoader
          speed={2}
          width={"100%"}
          height={"100%"}
          viewBox="0 0 700 600"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          className="mb-10 rounded-xl"
                >
          <rect x="0" y="0" rx="12" ry="12" width="700" height="600" />
                </ContentLoader>
        </div>
      )}

      <iframe
        className="w-[300px] md:w-[500px] lg:w-[700px] h-[600px] lg:h-[1000px] mb-10"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/2A62hE1wlL2fQfSjt6jiRX?utm_source=generator&theme=0"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>

      <button className="bg-green-700 text-white font-bold p-4 rounded-md cursor-pointer">
        Adj hozzá a listához
      </button>
    </div>
  );
};

export default Playlist;
