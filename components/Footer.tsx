import Image from "next/image";

function Footer() {
  const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">
        @{getCurrentYear()} EpicAnimeVault
      </p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <div className="relative w-[19px] h-[19px]">
          <Image
            src="./tiktok.svg"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <div className="relative w-[19px] h-[19px]">
          <Image
            src="./twitter.svg"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
