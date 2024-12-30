import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
    const user = await currentUser();
    return ( <div className="flex justify-center w-full items-center">
        <UserInfo label="🖥️ Server Component" user={user} />
    </div> );
}
 
export default ServerPage;