import Image from 'next/image';

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* Logo */}
        <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
          <Image
            src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/photo-share-text.png"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Middle */}
        <div>
          <input type="text" placeholder="Search" />
        </div>
        {/* RIght */}
      </div>
    </div>
  );
}

export default Header
