export class LocalStorage {
  static setRefreshToken(refreshToken: string) {
    localStorage.setItem("refreshToken", refreshToken);
  }
  static setAccessToken(accessToken: string) {
    localStorage.setItem("accessToken", accessToken);
  }

  static getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }
  static getAccessToken() {
    return localStorage.getItem("accessToken");
  }
}
