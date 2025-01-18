import { RegisterForm } from "@/components/auth/register-form";
import { Loader } from "lucide-react";
import { Suspense } from "react";

export default function Register() {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex gap-4 items-center justify-center">
          <Loader className="size-6 animate-spin" />
          Loading...
        </div>
      }
    >
      <RegisterForm />
    </Suspense>
  );
}
