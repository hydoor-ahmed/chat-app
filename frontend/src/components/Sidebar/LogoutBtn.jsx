import useLogout from "../../Hooks/useLogout";

const LogoutBtn = () => {
  const { loading, logout } = useLogout();
  return (
    <div>
      {!loading ? (
        <button
          onClick={logout}
          title="Logout"
          className="mt-2 btn btn-square btn-neutral text-center pr-0.5 btn-sm"
        >
          <i className="bx bx-log-out text-base-content"></i>
        </button>
      ) : (
        <span className="loading loading-spinner text-primary loading-sm"></span>
      )}
    </div>
  );
};

export default LogoutBtn;
