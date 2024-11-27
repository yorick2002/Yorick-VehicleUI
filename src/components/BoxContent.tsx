import { useNavigate } from "react-router-dom"

export const BoxContent = () => {

    const navigate = useNavigate();

    return (
        <>
            <img
                src="src\\public\\cfxprofilepic.png"
                alt="Your Alt Text"
                className="absolute right-4 w-[3.3rem] h-12 rounded-full object-cover"
            />

            <h1 className="text-[#1B334D] font-poppins text-xl">Hello, Yorick</h1>
            <p className="font-opensans">Vehicle status</p>
            <p className="font-opensans text-green-700">Parked</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 w-full mt-3">
                <div className="min-w-0 w-full max-h-32 bg-blue-900 rounded-3xl flex items-start justify-start flex-col">
                    <img src="src\\public\\heart.svg" width="25px" className="m-4"></img>
                    <p className="ml-4 text-white font-opensans text-stattext">100%</p>
                    <p className="ml-4 text-white font-opensans text-stattitle">Vehicle health</p>
                </div>

                <div className="min-w-0 w-full h-28 bg-blue-900 rounded-3xl flex items-start justify-start flex-col">
                    <img src="src\\public\\lock.svg" width="25px" className="m-4"></img>
                    <p className="ml-4 text-white font-opensans text-stattext">Unlocked</p>
                    <p className="ml-4 text-white font-opensans text-stattitle">Doors</p>
                </div>

                <div className="min-w-0 w-full h-28 bg-blue-900 rounded-3xl flex items-start justify-start flex-col">
                    <img src="src\\public\\fuel.svg" width="25px" className="m-4"></img>
                    <p className="ml-4 text-white font-opensans text-stattext">100%</p>
                    <p className="ml-4 text-white font-opensans text-stattitle">Fuel level</p>
                </div>

                <div className="min-w-0 w-full h-28 bg-blue-900 rounded-3xl flex items-start justify-start flex-col">
                    <img src="src\\public\\passengers.svg" width="23px" className="m-4"></img>
                    <p className="ml-4 text-white font-opensans text-stattext">

                    </p>
                    <p className="ml-4 text-white font-opensans text-stattitle">
                        Passenger
                    </p>

                </div>

                <div className="min-w-0 w-full h-28 bg-blue-900 rounded-3xl flex items-start justify-start flex-col">
                    <img src="src\\public\\location.svg" width="20px" className="m-4"></img>
                    <p className="ml-3 text-white font-opensans text-stattext">LSPD</p>

                    <p className="ml-3 text-white font-opensans text-stattitle">Location</p>

                </div>

                <div className="min-w-0 w-full h-28 bg-blue-900 rounded-3xl flex items-start justify-start flex-col">
                    <img src="src\\public\\car.svg" width="25px" className="m-4"></img>
                    <p className="ml-4 text-white font-opensans text-stattext">Adder</p>
                    <p className="ml-4 text-white font-opensans text-stattitle">Vehicle</p>
                </div>
            </div>

            <p className="mt-1">
                <br></br>
            </p>
            <button
                onClick={() => navigate("/settings")}
                id="optionsButton"
                className="w-full h-optionsHeight bg-blue-900 rounded-3xl text-center">
                <span
                    className="text-white font-opensans text-optionsbuttontext">Options
                </span>
            </button>
        </>
    )
}