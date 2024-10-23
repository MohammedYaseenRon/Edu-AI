// app/(auth)/layout.js
export default function AuthLayout({ children }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
          {children}
        </div>
      </div>
    );
  }