import { SignIn, useUser } from "@clerk/nextjs";

export default function SignIn() {
  const { user } = useUser();

  if (!user) {
    return <SignIn />;
  }

  return <div>Welcome!</div>;
}