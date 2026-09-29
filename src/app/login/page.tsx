import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";
import SocialLogin from "@/components/auth/SocialLogin";
import TextField from "@/components/auth/TextField";

export const metadata: Metadata = {
  title: "Sign In | ByteSpace",
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthForm
        eyebrow="Sign In"
        title="Welcome Back"
        submitLabel="Sign In"
        footer={{ text: "New user?", linkLabel: "Create an account", href: "/register" }}
        extra={<SocialLogin />}
      >
        <TextField label="Email" name="email" type="email" placeholder="designer@example.com" required />
        <TextField label="Password" name="password" type="password" placeholder="********" required />
      </AuthForm>
    </AuthLayout>
  );
}
