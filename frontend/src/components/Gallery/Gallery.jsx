import { useMediaQuery } from 'react-responsive'
import Lightbox from "yet-another-react-lightbox"
import { useState } from 'react'
import { slides } from './data'
import "yet-another-react-lightbox/styles.css";
import ImageUploading from "react-images-uploading"


const placeholderImages = Array.from(
  { length: 20 },
  (_, i) => `https://placehold.co/300x${200 + (i % 4) * 50}?text=Image+${i + 1}`
)

const mockedImages = [
 "/images/mock/mock1.jpg",
 "/images/mock/mock3.jpg",
 "/images/mock/mock2.webp",
  "/images/mock/mock4.jpg",
  "/images/mock/mock5.jpg",
  "/images/mock/mock6.jpg",
  "/images/mock/mock7.jpg",
  "/images/mock/mock8.jpg",
  "/images/mock/mock9.jpg",
  "/images/mock/mock10.webp",
  "/images/mock/mock11.jpg",
  "/images/mock/mock12.jpg",
  "/images/mock/mock13.jpg",
  "/images/mock/mock14.jpg",
  "/images/mock/mock15.jpg",
  "/images/mock/mock16.jpg",
  "/images/mock/mock17.jpg",
  "/images/mock/mock18.jpg",
  "/images/mock/mock19.jpg",
  "/images/mock/mock20.jpg",
]

const Gallery = () => {
const [index,setIndex] = useState(-1); 
  //TODO: replace with real images 
  //TODO: Images should be distributed in column orderd 

  const [images,setImages] = useState([])

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
  const selectedImages = slides.slice(0, totalImages)

  // Distributes images into columns
  const columns = Array.from({ length: columnCount }, () => [])
  selectedImages.forEach((img, index) => {
    columns[index % columnCount].push(img)
  })

  function onChange(imageList, addUpdateIndex){
    setImages(imageList)
  }

  return (
    <div className='flex flex-col items-center justify-center w-full h-full py-10'> 
      <h2 className="dancing text-6xl text-wedding-brown z-10 mb-4">I Spy Galéria</h2>
      <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={10}
      dataURLKey='data_url'
      >
{({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <div className="upload__image-wrapper">
          <button
            style={isDragging ? { color: 'red' } : undefined}
            onClick={onImageUpload}
            {...dragProps}
            className="border p-3 rounded-md"
          >
            Kép feltöltése vagy húzd ide
          </button>
          <button onClick={onImageRemoveAll} className="ml-3 text-red-500">Összes törlése</button>
          <div className="mt-4 flex gap-4 flex-wrap">
            {imageList.map((image, index) => (
              <div key={index} className="image-item relative">
                <img src={image['data_url']} alt="" className="w-[150px] h-[150px] object-cover rounded-md" />
                <div className="image-item__btn-wrapper mt-1 flex gap-2">
                  <button onClick={() => onImageUpdate(index)} className="text-blue-500">Frissítés</button>
                  <button onClick={() => onImageRemove(index)} className="text-red-500">Törlés</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      </ImageUploading>
      <p className="text-wedding-light-gray mb-10 text-center text-pretty">
        Ez a galéria az I Spy játékhoz készült képeket tartalmazza.
      </p>

      <div className='grid gap-2 w-max max-h-[100vh] overflow-hidden' style={{ gridTemplateColumns: `repeat(${columnCount}, auto)` }}>
        {columns.map((col, i) => (
          <div key={i} className='flex flex-col gap-2'>
            {col.map((image, j) => (
              <img
                onClick={() => {
                  const flatIndex = j * columnCount + i;
                  console.log(j);
                  console.log(columnCount);
                  console.log(i)
                  setIndex(flatIndex);
                }}
                key={image.id}
                src={image.src}
                alt={image.title}
                className='w-[300px] h-auto max-h-[300px] object-cover rounded-md'
              />
            ))}
          </div>
        ))}
      </div>

      <button className="py-3 mt-10 px-4 cursor-pointer rounded-md bg-wedding-brown text-white font-bold">Kép beküldése</button>

      <Lightbox 
      index={index}
      open={index >=0}
      close={()=> setIndex(-1)}
      slides={slides}></Lightbox>
    </div>
  )
}

export default Gallery
