import { useGoogleLogin } from "@react-oauth/google";

function Login({ onLogin }) {
  const login = useGoogleLogin({
    onSuccess: onLogin,
    onError: (error) => console.error("Login Failed:", error),
  });

  return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={login}
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
  );
}

export default Login;
