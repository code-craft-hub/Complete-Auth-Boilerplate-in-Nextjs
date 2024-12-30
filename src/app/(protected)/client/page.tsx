"use client"
import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
    const user = useCurrentUser();
    return ( <div className="flex justify-center w-full items-center">
        <UserInfo label="🧑‍💻Client Component" user={user} />
    </div> );
}
 
export default ClientPage;