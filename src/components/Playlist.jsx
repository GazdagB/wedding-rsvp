

const Playlist = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
        <h2 className="dancing text-6xl text-wedding-brown mb-10">Zene lejátszási lista</h2>
        <p className="text-[20px] w-[600px] text-center text-pretty mb-10 text-wedding-light-gray">Ha szeretnél zenét ajánlani vagy szeretnél bulizni velünk a kedvenc zenédre, akkor ebbe a Spotify listába hozzá tudod adni a legjobb slágereidet!</p>
        <iframe className="w-[800px] h-[1000px] mb-10" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/2lb32Esivw4cGynbdgsm6d?utm_source=generator&theme=0"  frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <button className="bg-green-700 text-white font-bold p-4 rounded-md cursor-pointer">Adj hozzá a listához</button>
    </div>
  )
}

export default Playlist