/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jdO4DPZFJug
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
//import div from "next/div"

export default function Component() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Nuestras Propiedades</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div   className="block" >
            <img
              src="/placeholder.svg"
              alt="Propiedad 1"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Propiedad 1</h2>
              <div className="text-gray-500">$250,000</div>
            </div>
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <div className="flex items-center space-x-1">
                <BedIcon className="w-4 h-4" />
                <span>3 Habitaciones</span>
              </div>
              <div className="flex items-center space-x-1">
                <BathIcon className="w-4 h-4" />
                <span>2 Baños</span>
              </div>
              <div className="flex items-center space-x-1">
                <RulerIcon className="w-4 h-4" />
                <span>120 m²</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div   className="block" >
            <img
              src="/placeholder.svg"
              alt="Propiedad 2"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Propiedad 2</h2>
              <div className="text-gray-500">$350,000</div>
            </div>
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <div className="flex items-center space-x-1">
                <BedIcon className="w-4 h-4" />
                <span>4 Habitaciones</span>
              </div>
              <div className="flex items-center space-x-1">
                <BathIcon className="w-4 h-4" />
                <span>3 Baños</span>
              </div>
              <div className="flex items-center space-x-1">
                <RulerIcon className="w-4 h-4" />
                <span>180 m²</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div   className="block" >
            <img
              src="/placeholder.svg"
              alt="Propiedad 3"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Propiedad 3</h2>
              <div className="text-gray-500">$450,000</div>
            </div>
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <div className="flex items-center space-x-1">
                <BedIcon className="w-4 h-4" />
                <span>5 Habitaciones</span>
              </div>
              <div className="flex items-center space-x-1">
                <BathIcon className="w-4 h-4" />
                <span>4 Baños</span>
              </div>
              <div className="flex items-center space-x-1">
                <RulerIcon className="w-4 h-4" />
                <span>250 m²</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div   className="block" >
            <img
              src="/placeholder.svg"
              alt="Propiedad 4"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Propiedad 4</h2>
              <div className="text-gray-500">$550,000</div>
            </div>
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <div className="flex items-center space-x-1">
                <BedIcon className="w-4 h-4" />
                <span>6 Habitaciones</span>
              </div>
              <div className="flex items-center space-x-1">
                <BathIcon className="w-4 h-4" />
                <span>5 Baños</span>
              </div>
              <div className="flex items-center space-x-1">
                <RulerIcon className="w-4 h-4" />
                <span>300 m²</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BathIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" x2="8" y1="5" y2="7" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="7" x2="7" y1="19" y2="21" />
      <line x1="17" x2="17" y1="19" y2="21" />
    </svg>
  )
}


function BedIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  )
}


function RulerIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  )
}