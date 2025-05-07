import { useMediaQuery } from 'react-responsive'
const placeholderImages = Array.from({ length: 20 }, (_, i) => `https://placehold.co/300x${200 + (i % 4) * 50}?text=Image+${i + 1}`)

const Gallery = () => {
  const isLargeDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' })

  const columnCount = isLargeDesktop ? 5 : isDesktop ? 4 : isTablet ? 3 : 2

  // Distribute images into columns
  const columns = Array.from({ length: columnCount }, () => [])

  placeholderImages.forEach((img, index) => {
    columns[index % columnCount].push(img)
  })

  return (
    <div className='flex flex-col items-center justify-center w-full h-full py-10'>
      <h2 className="dancing text-6xl text-wedding-brown z-10 mb-4">I Spy Galéria</h2>
      <p className="text-wedding-light-gray mb-10 text-center text-pretty">
        Ez a galéria az I Spy játékhoz készült képeket tartalmazza.
      </p>

      <div className='grid gap-2 w-max'
           style={{ gridTemplateColumns: `repeat(${columnCount}, auto)` }}>
        {columns.map((col, i) => (
          <div key={i} className='flex flex-col gap-2'>
            {col.map((src, j) => (
              <img
                key={j}
                src={src}
                alt={`Image ${j + 1}`}
                className='w-[300px] h-auto object-cover rounded-md'
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
