import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Welcome to the Educational Platform
          </h2>
          <p className="text-lg text-gray-600">
            This is a clean Next.js foundation ready for building an
            educational platform. The project includes a scalable folder
            structure with components, context, and utilities.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Scalable Structure
              </h3>
              <p className="mt-2 text-gray-600">
                Organized folders for components, context, and lib utilities.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                TypeScript Ready
              </h3>
              <p className="mt-2 text-gray-600">
                Full TypeScript support with strict configuration.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Tailwind CSS
              </h3>
              <p className="mt-2 text-gray-600">
                Utility-first CSS framework for rapid UI development.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
