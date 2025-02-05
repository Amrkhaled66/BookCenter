import { useEffect, useState } from "react";
import useAuth from "src/hooks/useAuth";
import { Outlet, useNavigate } from "react-router-dom";
import { useRefreshToken } from "src/hooks/useAuthMutations";
import pandaLaptop from "src/assets/pandaLaptop.png";

const PersistLogin = () => {
  const { mutate, isPending } = useRefreshToken();
  const { login, authState } = useAuth();
  const [successState, setSuccessState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    mutate(null, {
      onSuccess: (data) => {
        login(data);
        setSuccessState(true);
      },
      onError: (err) => {
        navigate("/");
      },
    });
  }, [mutate, navigate, login]);

  if (authState.accessToken) {
    return <Outlet />;
  }

  if (isPending) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <span className="flex w-full justify-center">
          <img
            className="w-3/5 animate-pulse md:w-[50%] lg:w-[20%]"
            src={pandaLaptop}
            alt="Loading"
          />
        </span>
        <span>يتم التحميل , استني شوية الدنيا مش هتطير 😡</span>
      </div>
    );
  }

  if (successState) return <Outlet />;

  return null;
};

export default PersistLogin;
