import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-brand-dark text-white text-center p-6">
                    <div>
                        <h1 className="text-4xl font-heading font-bold mb-4">Something went wrong.</h1>
                        <p className="text-slate-400 mb-8">We're sorry, but we encountered an unexpected error.</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-brand-accent text-white font-bold rounded-sm hover:bg-white hover:text-brand-black transition-colors"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
