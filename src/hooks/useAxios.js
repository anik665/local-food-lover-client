import axios from "axios";
import { useContext, useEffect, useMemo } from "react";
import { AuthContext } from "../Provider/AuthContex";

const useAxios = () => {
  const { user } = useContext(AuthContext); // ✅ Fix 1: moved inside

  const instance = useMemo(
    () =>
      axios.create({
        // ✅ Fix 3: useMemo
        baseURL: "http://localhost:3000",
      }),
    [],
  );

  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use(
      (config) => {
        if (user?.accessToken) {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
        }
        return config; // ✅ Fix 2: always return config
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
    };
  }, [instance, user]); // ✅ added user as dependency

  return instance;
};

export default useAxios;
