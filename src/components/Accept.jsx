
const Accept = () => {
    return (
      <div className="flex flex-col items-center justify-center py-20">
          <h2 className="dancing text-6xl text-wedding-brown z-10 mb-4">Ott leszel?</h2>
          <p className="text-wedding-light-gray mb-10">Kérlek tudasd velünk hogy ott tudsz-e lenni velünk a nagy napunkon!</p>
          <form className="w-[550px]" action="">
  
            <div className="mb-8 w-full">
              <label htmlFor="name" className="font-bold ">Teljes név</label>
              <div className="flex gap-5 mt-3">
                <input className="bg-gray-300 py-2 px-4 rounded-md w-full" required  type="text" placeholder="Vezetéknév" />
                <input className="bg-gray-300 py-2 px-4 rounded-md w-full" required type="text" placeholder="Keresztnév" />
              </div>
            </div>
  
            <div className="mb-8">
              <label htmlFor="accept" className="font-bold">Ott tudsz lenni?</label>
              <div className="flex gap-3 mt-3">
                <input required className="cursor-pointer" type="radio" name="accept" id="yes" />
                <label className="cursor-pointer" htmlFor={"yes"}>Elfogadom a meghívást örömmel!</label>
              </div>
              <div className="flex gap-3">
                <input required className="cursor-pointer" type="radio" name="accept" id="no" />
                <label className="cursor-pointer" htmlFor={"no"}>Sajnos nem tudok ott lenni!</label>
              </div>
            </div>
            
            <div className="flex flex-col mb-8">
              <label htmlFor="" className="mb-3 font-bold">E-mail cím</label>
              <input className="bg-gray-300 py-2 px-4 rounded-md" type="email" placeholder="E-mail" />
            </div>
  
            <div className="flex flex-col mb-8 w-full">
              <label htmlFor="" className="font-bold mb-3">Felnőttek száma</label>
              <select className="bg-gray-300 w-full py-2 px-3 rounded-md " name="" id="">
                <option value="">Válasz...</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
  
            <div className="flex gap-5 mb-8 w-full">
              <div className="flex flex-col w-full">
                <label htmlFor="" className="font-bold mb-3">Gyerekek száma (5-10év között) </label>
                <select className="bg-gray-300  py-2 px-3 rounded-md w-full" name="" id="">
                  <option value="">Válasz...</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
  
              <div className="flex flex-col w-full">
                <label htmlFor="" className="font-bold mb-3">Gyerekek száma (5év alatt) </label>
                <select className="bg-gray-300  py-2 px-3 rounded-md w-full" name="" id="">
                  <option value="">Válasz...</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
            </div>
  
            <div className="flex flex-col items-center">
              <div className="mb-8">
                <label className="font-bold mb-3" htmlFor="">Üzenet a menyasszonynak és a vőlegénynek:</label>
                <textarea className="bg-gray-300  h-32 p-3 mt-3 w-[550px] resize-none rounded-md"  name="message" id=""></textarea>
              </div>
              <button className="bg-wedding-brown font-bold py-2 px-3 text-white rounded-md cursor-pointer">Beküldés</button>
            </div>
          </form>
      </div>
    )
  }
  
  export default Accept