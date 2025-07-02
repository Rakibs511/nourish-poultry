export default function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-xl font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  )
}
