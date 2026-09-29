import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";
import TextField from "@/components/auth/TextField";

export const metadata: Metadata = {
  title: "Create an Account | ByteSpace",
};

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthForm
        eyebrow="Create an Account"
        title={
          <>
            Welcome to <br />
            ByteSpace
          </>
        }
        submitLabel="Continue"
        className="lg:h-[672px]"
        footer={{ text: "Already have an account?", linkLabel: "Login", href: "/login", tone: "dark" }}
      >
        <TextField label="Full Name" name="name" placeholder="Jamie Davis" autoComplete="name" required />
        <TextField label="Email" name="email" type="email" placeholder="designer@example.com" required />
        <TextField label="Password" name="password" type="password" placeholder="********" minLength={8} required />
      </AuthForm>
    </AuthLayout>
  );
}
