export default function Pagination() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px text-sm">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-5 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
          >
            <img
              className="w-2.5 h-2.5"
              src="/navigation/chevron_left.svg"
              alt="Previous"
            />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex text-[10px] items-center justify-center px-3 h-5 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            5
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-5 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
          >
            <img
              className="w-2.5 h-2.5"
              src="/navigation/chevron_right.svg"
              alt="Next"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
