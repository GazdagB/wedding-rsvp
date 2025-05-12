import { useMediaQuery } from 'react-responsive'

const placeholderImages = Array.from(
  { length: 20 },
  (_, i) => `https://placehold.co/300x${200 + (i % 4) * 50}?text=Image+${i + 1}`
)

const Gallery = () => {

  // Media queries for design and image count 
  const is2XL = useMediaQuery({ query: '(min-width: 1536px)' })
  const isXL = useMediaQuery({ query: '(min-width: 1280px)' })
  const isLG = useMediaQuery({ query: '(min-width: 1024px)' })
  const isMD = useMediaQuery({ query: '(min-width: 768px)' })


  // Column count based on screen size
  //2XL - > 5 Columns 
  //XL - > 4 Columns 
  //LG - > 3 Columns 
  //MD - > 2 Columns 
  //SM - > 1 Column 
  const columnCount = is2XL ? 5 : isXL ? 4 : isLG ? 3 : isMD ? 2 : 1

  // Total images to display based on column count
  // 4 images per column, so total images = columnCount * 4
  //2XL - > 20 Images
  //XL - > 16 Images
  //LG - > 12 Images
  //MD - > 8 Images
  //SM - > 4 Images
  const totalImages = columnCount * 4

  // Selects images based on the column count slices the placeholderImages array
  const selectedImages = placeholderImages.slice(0, totalImages)

  // Distributes images into columns
  const columns = Array.from({ length: columnCount }, () => [])
  selectedImages.forEach((img, index) => {
    columns[index % columnCount].push(img)
  })

  return (
    <div className='flex flex-col items-center justify-center w-full h-full py-10'>
      <h2 className="dancing text-6xl text-wedding-brown z-10 mb-4">I Spy Galéria</h2>
      <p className="text-wedding-light-gray mb-10 text-center text-pretty">
        Ez a galéria az I Spy játékhoz készült képeket tartalmazza.
      </p>

      <div className='grid gap-2 w-max' style={{ gridTemplateColumns: `repeat(${columnCount}, auto)` }}>
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
