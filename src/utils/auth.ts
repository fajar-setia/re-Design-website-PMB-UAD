export const isAuthenticated = () => {
  return localStorage.getItem("isLogin") === "true";
};