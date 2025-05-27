"use client"
export default function SearchBar() {
  return (
    <>
      <div className="relative flex items-center w-full">
        <img
          src="/navigation/search.svg"
          alt=""
          className="absolute right-3 w-4 h-4"
        />
        <input
          type="text"
          id="floating_filled"
          className="block rounded-full px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-medium peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_filled"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Buscar
        </label>
      </div>
    </>
  );
}
