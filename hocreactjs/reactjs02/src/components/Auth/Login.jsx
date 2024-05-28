import { useForm } from "react-hook-form";
import { loginRequest } from "../../request/loginRequest";
import { useState } from "react";
import { useDispatch } from "../../store/hook";
export default function Login() {
  const loginApi = `https://api.escuelajs.co/api/v1/auth/login`;
  // const profileApi = `https://api.escuelajs.co/api/v1/auth/profile`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [msg, setMsg] = useState("");
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    setLoading(true);
    const tokens = await loginRequest(loginApi, data);
    setLoading(false);
    if (!tokens) {
      setMsg("Email hoặc mật khẩu không chính xác");
      return;
    }
    //Dispatch status lên Context (Global State)
    dispatch({
      type: "auth/set_user",
    });
    //Lưu localStorage
    localStorage.setItem("login_token", JSON.stringify(tokens));
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Đăng nhập</h2>
      {msg && <div className="alert alert-danger">{msg}</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email..."
            {...register("email", {
              required: true,
              pattern: {
                message: "Email",
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              },
            })}
          />
          {errors.email?.type === "pattern" && (
            <span className="text-danger">
              {errors.email?.message} không đúng định dạng
            </span>
          )}
          {errors.email?.type === "required" && (
            <span className="text-danger">Vui lòng nhập email</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="">Mật khẩu</label>
          <input
            type="password"
            className="form-control"
            placeholder="Mật khẩu..."
            name="password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password?.type === "required" && (
            <span className="text-danger">Vui lòng nhập mật khẩu</span>
          )}
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm"></span>
                Loading...
              </>
            ) : (
              <> Đăng nhập</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
