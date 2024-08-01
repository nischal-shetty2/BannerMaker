export function buttonStyle(number: number): string {
  const buttonClasses = [
    "py-1.5 px-5 me-2 mb-2 font-mono text-sm font-medium text-gray-900 bg-white border border-gray-200 sm:py-2 sm:px-6 sm:text-base lg:py-1.5 lg:px-4 lg:text-sm",
    "text-white bg-red-700  font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 sm:py-2 sm:px-6 sm:text-base lg:py-1.5 lg:px-4 lg:text-sm",
    "text-white bg-gray-800 font-mono font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 sm:py-2 sm:px-6 sm:text-base lg:py-1.5 lg:px-4 lg:text-sm",
    "text-black border bg-white font-medium text-sm px-6 py-1 mb-2 sm:py-2 sm:px-7 sm:text-base lg:py-1.5 lg:px-1 lg:text-md",
    "text-white bg-yellow-400 font-mono font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 sm:py-2 sm:px-6 sm:text-base lg:py-1.5 lg:px-4 lg:text-sm",
    "text-gray-900 bg-white  border border-gray-300 font-medium text-sm px-5 py-1.5 me-2 mb-2 sm:py-2 sm:px-6 sm:text-base lg:py-1.5 lg:px-4 lg:text-sm",
    "text-white bg-purple-700 font-mono font-medium rounded-lg text-sm px-5 py-1.5 mb-2 sm:py-2 sm:px-6 sm:text-base lg:py-1.5 lg:px-4 lg:text-sm",
    "text-white bg-green-700  font-medium  text-sm px-5 py-1.5 me-2 mb-2 sm:py-2 sm:px-6 sm:text-base lg:py-1.5 lg:px-4 lg:text-sm",
  ];

  return buttonClasses[number % buttonClasses.length];
}

export function textClasses(number: number): string {
  const textClasses = [
    "text-purple-700 font-sans mb-3 drop-shadow-md text-lg lg:text-xl",
    "text-green-700 font-serif mb-7 drop-shadow-md text-lg lg:text-xl",
    "text-zinc-100 font-mono mb-5 drop-shadow-md text-lg lg:text-xl",
    "text-orange-500 font-serif mb-4 drop-shadow-md text-lg lg:text-xl",
    "text-zinc-900 font-sans mb-28 drop-shadow-md text-lg lg:text-xl",
    "text-pink-800 font-sans mb-24 drop-shadow-md text-lg lg:text-xl",
    "text-zinc-100 font-mono mb-40 drop-shadow-md text-lg lg:text-xl",
    "text-cyan-600 font-serif mb-10 drop-shadow-md text-lg lg:text-xl",
  ];

  return textClasses[number % textClasses.length];
}
