import React from 'react'

function Background() {
  return (
    <>
    <div className='h-screen w-screen bg-no-repeat bg-cover flex flex-col justify-center' style={{backgroundImage: `url(${backgroundimg})`}}>
        <div className='flex justify-center'>
            <div className='rounded-md bg-gradient-to-r from-blue-200 to-gray-300 w-1/3 p-5 flex'>
              <div className='flex flex-col w-1/2 '>
                <label htmlFor='currency'>From</label>
                <input type='number' name = 'currency'></input>
              </div>
              <div className='flex justify-end w-screen h-fit'>
                <select className=''>
                  <option>
                    usd
                  </option>
                </select>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Background
