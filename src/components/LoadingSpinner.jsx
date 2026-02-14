
const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-black">
            <div className="w-12 h-12 border-4 border-white/10 border-t-brand-accent rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;
