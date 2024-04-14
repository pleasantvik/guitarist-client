import { IUserDecoded } from "@/interfaces/auth.model";
import { jwtDecode } from "jwt-decode";

export const wavesToken = "wavesAccessToken";
export const wavesRefreshToken = "wavesRefreshToken";

export const getDecodedJwt = (token: string | null): IUserDecoded => {
  try {
    return jwtDecode(token as string);
  } catch (error) {
    return {} as IUserDecoded;
  }
};

export const removeToken = (): void => {
  localStorage.removeItem(wavesToken);
  localStorage.removeItem(wavesRefreshToken);
};

export const logOut = (cb?: VoidFunction): void => {
  removeToken();
  cb?.();
};
export class AuthHelper {
  setToken(token: string) {
    localStorage.setItem(wavesToken, token);
  }

  getToken() {
    return localStorage.getItem(wavesToken);
  }

  getDecodedJwt = (token: string | null): IUserDecoded => {
    try {
      return jwtDecode(token as string);
    } catch (error) {
      return {} as IUserDecoded;
    }
  };

  setRefreshToken = (refreshToken: string) => {
    localStorage.setItem(wavesRefreshToken, refreshToken);
  };

  getRefreshToken = (): string | null => {
    return localStorage.getItem(wavesRefreshToken);
  };

  removeToken = (): void => {
    localStorage.removeItem(wavesToken);
    localStorage.removeItem(wavesRefreshToken);
  };

  logOut(cb?: VoidFunction): void {
    this.removeToken();
    cb?.();
  }

  isAuthenticated() {
    const userToken = this.getToken();
    if (userToken) {
      try {
        const decodedToken: IUserDecoded = jwtDecode(userToken);
        if (decodedToken.exp) {
          const { exp } = decodedToken;
          const currentTime = Date.now() / 1000;
          return exp > currentTime;
        }
      } catch (e) {
        return false;
      }
    }
  }
}
