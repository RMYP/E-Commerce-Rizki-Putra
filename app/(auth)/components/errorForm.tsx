import { TriangleAlert } from "lucide-react";

const ErrorForm = ({message} : {message: string | undefined}) => {

    if (!message) {
        return null;
    }

    return (
        <div className="flex items-center gap-2 text-red-500">
            <TriangleAlert />
            <span>{message}</span>
        </div>
    );
};

export default ErrorForm;
