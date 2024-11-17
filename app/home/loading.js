export default function Loading() {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75 border-solid"></div>
        <span className="ml-4 text-xl font-medium text-gray-700">Loading...</span>
      </div>
    );
  }
  