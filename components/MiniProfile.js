import { useSession, signOut } from 'next-auth/react';

function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png"
        alt="User Profile"
      />

      <div className="flex-1 mx-4">
        <h3 className="font-bold">{session?.user?.username}</h3>
        <h3 className="text-sm text-gray-400">Welcome to PhotoShare</h3>
      </div>

      <button onClick={signOut} className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
