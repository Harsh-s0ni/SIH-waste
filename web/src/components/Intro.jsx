import '../App.css'

const Intro = () => {
  return (
    <div className='flex flex-col h-[100vh] items-center justify-between'>
      <div className="flex items-center h-[80vh]  w-[80%] justify-between">
        <div className='w-[50%] flex flex-col'>
          <h1 className='font-josefin-sans text-[3.5rem]'>Transforming Electronics <span className='text-deep-mint-green'>Recycling </span> for a Sustainable Tomorrow.</h1>
          <hr className=' self-center h-[0.3rem] w-[60%] my-3 rounded-2xl border-none bg-deep-mint-green' />
          <div className='flex self-center justify-between w-[70%] mt-3'>
            <button className='bg-deep-mint-green text-[25px] font-open-sans font-semibold w-[40%] text-white py-4 rounded-xl'>Login</button>
            <button className='border border-deep-mint-green text-deep-mint-green text-[25px] font-open-sans font-semibold w-[40%] bg-white py-4 rounded-xl'>Sign Up</button>
          </div>
        </div>
        <div className='w-[50%]'>
          <img src="/Happy Earth-bro.png" alt="" />
        </div>
      </div>
      <button className='bg-deep-mint-green text-[25px] font-open-sans font-semibold px-28 text-white py-4 rounded-xl'>Learn More</button>
    </div>
    
  )
}

export default Intro
