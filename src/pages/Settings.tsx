import "../index.css"
import "../slider.css"
export const Settings = () => {
  return (
    <>
      <div className="flex h-screen items-end justify-end p-6">
        <div className="relative flex w-[22rem] h-4/6 flex-col items-start rounded-3xl bg-white px-7 py-6">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-hello font-poppins -bottom-hello text-xl">Vehicle options</h1>
            <img src="cfxprofilepic.png" className="w-imagesize rounded-full" />
          </div>

          <div className="w-full h-32 bg-blue-900 rounded-3xl text-center mt-80">
            <p className="text-white font-opensans text-xl mt-2">
              Lights
              <input
                className="slider"
                type="range"
                min="0"
                max="2"
                step="1"
              ></input>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

