export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center">
      <div className="flex items-center gap-5 my-5 mt-44 md:mt-32">
        <h1 className="text-9xl font-bold text-gray-900 sm:p-4 dark:text-gray-100">
          4
        </h1>
        <img
          className="border-solid border border-gray-300 dark:border-black h-40 w-auto rounded-full"
          src="https://cdn.abranhe.com/projects/not-found.gif"
          alt="Not found gif"
        />
        <h1 className="text-9xl font-bold text-gray-900 sm:p-4 dark:text-gray-100">
          4
        </h1>
      </div>

      <p className="text-3xl text-center font-semibold text-gray-900 sm:p-4 dark:text-gray-100">
        What are <span className="font-bold">Ü</span> doing here? 🤔
      </p>
    </div>
  );
}
