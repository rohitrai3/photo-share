import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/solid';

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* Logo */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/photo-share-text.png"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Search */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm broder-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* RIght */}
        <div className="h-10 w-10">
          <HomeIcon />
          <Bars3Icon />
          <PaperAirplaneIcon />
          <PlusCircleIcon />
          <UserGroupIcon />
          <HeartIcon />
        </div>
      </div>
    </div>
  );
}

export default Header
