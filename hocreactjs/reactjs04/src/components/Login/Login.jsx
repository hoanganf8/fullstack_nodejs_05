import Input from "./Input";

export default function Login() {
  return (
    <form>
      <Input type="text" name="email" label="Email" />
      <Input type="password" name="password" label="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
