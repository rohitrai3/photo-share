import Image from 'next/image';

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* Left */}
        <div className="relative hidden lg:inline-grid h-24 w-24">
          <Image
            src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/photo-share-text.png"
            fill style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      {/* Middle */}

      {/* RIght */}
    </div>
  );
}

export default Header
