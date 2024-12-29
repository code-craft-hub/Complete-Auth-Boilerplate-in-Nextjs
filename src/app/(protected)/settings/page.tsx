import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/user-button";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      Settings Page: {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
};

export default SettingsPage;
