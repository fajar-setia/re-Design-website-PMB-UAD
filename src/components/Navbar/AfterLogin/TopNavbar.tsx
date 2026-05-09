import Logo from '../../../assets/LogoUAD.png';
import ProfileMenu from './ProfileMenu';
export default function TopNavbar() {
  const storedUser = localStorage.getItem("user");

  const user = storedUser
    ? JSON.parse(storedUser)
    : null;

  return (
    <div className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 sm:h-18 flex items-center justify-between">

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white text-blue-900 flex items-center justify-center font-bold">
            <img src={Logo} alt="Logo UAD" />
          </div>

          <div>
            <h1 className="font-bold text-lg">
              Penerimaan Mahasiswa Baru
            </h1>

            <p className="text-sm text-blue-200">
              Universitas Ahmad Dahlan
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-2 text-sm text-blue-100">
          <div
            className="
              w-10 h-10
              rounded-full
              bg-white/20

              flex items-center
              justify-center

              font-bold
            "
          >
            
            <ProfileMenu/>
          </div>

          <div className="flex flex-col text-right items-center justify-center">
            <p className="font-semibold">
              {user?.name}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}