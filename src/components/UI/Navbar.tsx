import Logo from "../svgs/logo-dark.svg";
import ChevronDown from "../svgs/icon-chevron-down.svg";
import ChevronUp from "../svgs/icon-chevron-up.svg";
import VerticalEllipsisIcon from "../svgs/icon-vertical-ellipsis.svg";
import IconAdd from "../svgs/icon-add-task-mobile.svg";

function Navbar() {
  return (
    <header className="bg-white py-5 px-4 shadow">
      <nav className="flex items-center justify-between">
        <button className="flex items-center space-x-4">
          <Logo className="h-6 w-6 md:hidden" />
          <span className="text-[18px] font-bold">Platform Launch</span>
        </button>
        <div className="flex items-center space-x-4">
          <button className="rounded-full bg-primaryPurple py-[10px] px-5 transition-all duration-200 ease-in hover:bg-primaryPurpleHover">
            <span className="block md:hidden">
              <IconAdd className="h-3 w-3" />
            </span>
            <span className="hidden text-[15px] font-bold capitalize text-white md:block">
              + add new task
            </span>
          </button>

          <VerticalEllipsisIcon className="h-5 w-2 " />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
