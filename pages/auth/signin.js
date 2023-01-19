import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';

function SignIn({ providers }) {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img
          className="w-80"
          src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/photo-share-text.png"
          alt="PhotoShare"
        />
        <p className="font-xs italic">
          Upload your photos to share them with Everyone
        </p>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default SignIn;
