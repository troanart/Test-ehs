import { IconWavesMove, LoginLogo, LoginForm } from "@/components";

export default function Login() {
  return (
    <div className="relative flex justify-center bg-blue-500 animate-backgroundAnimate items-center h-[100vh]">
      <div className="mr-[100px]">
        <LoginLogo />
      </div>
      <LoginForm />
      <IconWavesMove />
    </div>
  );
}
