export const checkUserRoleAndURL = (user, navigate) => {
    if (user && user.role !== "Admin" && window.location.pathname.startsWith("/admin")) {
      navigate("/");
    }
  };