import { FaExclamationTriangle } from "react-icons/fa";

export const FormError = ({ message }: { message?: string }) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <FaExclamationTriangle className="size-4" /> <p>{message}</p>
    </div>
  );
};
