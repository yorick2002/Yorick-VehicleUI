import "../index.css"
import "../slider.css"
export const Settings = () => {
  return (
<div className="flex h-screen items-end justify-end p-6">
  <div className="relative flex w-[22rem] h-4/6 flex-col items-start rounded-3xl bg-white px-7 py-6">
    <div className="flex w-full items-center justify-between">
      <h1 className="text-hello font-poppins -bottom-hello text-xl">Vehicle options</h1>
      <img src="cfxprofilepic.png" className="w-imagesize rounded-full" />
    </div>

    <div className="relative">
      <img
        className="p-5 mt-10"
        src="src\\public\\car.png"
        alt="Car"
      />
      
      {/* Blue Circles for the car options */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center space-x-6">
        <div className="absolute px-6 top-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
          <img src="car-icon.png" alt="" className="w-6 h-6" />
        </div>

        <div className="absolute top-1/2 left-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
          <img src="door-icon.png" alt="" className="w-6 h-6" />
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
          <img src="door-icon.png" alt="Door icon" className="w-6 h-6" />
        </div>

        <div className="absolute bottom-2 left-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
          <img src="lock-icon.png" alt="Lock icon" className="w-6 h-6" />
        </div>
        
        <div className="absolute bottom-2 right-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
          <img src="lock-icon.png" alt="Lock icon" className="w-6 h-6" />
        </div>

      </div>
    </div>

    <p>
      <br />
    </p>

    <div className="w-full h-32 bg-blue-900 rounded-3xl text-center">
      <p className="text-white font-opensans text-xl mt-2">
        Lights
        <input
          className="slider"
          type="range"
          min="0"
          max="2"
          step="1"
        />
      </p>
    </div>
  </div>
</div>

  )
}

