import { NewPasswordForm } from "@/components/auth/new-password-form";
import { Loader } from "lucide-react";
import { Suspense } from "react";

const NewPasswordPage = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex gap-4 items-center justify-center">
          <Loader className="size-6 animate-spin" />
          Loading...
        </div>
      }
    >
      <NewPasswordForm />
    </Suspense>
  );
};

export default NewPasswordPage;
