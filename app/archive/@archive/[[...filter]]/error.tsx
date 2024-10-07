"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button className="bg-black p-3" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
