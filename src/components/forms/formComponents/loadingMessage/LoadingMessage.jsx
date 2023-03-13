import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";
import "./loadingMessage.css";

function LoadingMessage({ message, isLoadingMessage, isLoading }) {
    return (
        <div className="loading">
            {isLoading ? isLoadingMessage : message}
            {isLoading && <UseAnimations size={12} animation={loading} />}
        </div>
    );
}

export default LoadingMessage;
