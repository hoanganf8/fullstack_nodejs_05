import Input from "./Input";

export default function Register() {
  return (
    <form>
      <Input type="text" name="name" label="Name" />
      <Input type="text" name="email" label="Email" />
      <Input type="password" name="password" label="Password" />
      <button type="submit">Register</button>
    </form>
  );
}
