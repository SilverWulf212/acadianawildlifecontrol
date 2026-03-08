export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-bayou/10" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-bayou" />
        </div>

        {/* Skeleton content placeholder */}
        <div className="mt-8 w-full max-w-md space-y-4 px-4">
          <div className="mx-auto h-8 w-3/4 animate-pulse rounded-lg bg-bayou/10" />
          <div className="mx-auto h-4 w-full animate-pulse rounded bg-bayou/5" />
          <div className="mx-auto h-4 w-5/6 animate-pulse rounded bg-bayou/5" />
        </div>
      </div>
    </div>
  );
}
