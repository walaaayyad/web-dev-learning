"use client";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-gray-900">About</h3>
            <p className="mt-2 text-sm text-gray-600">
              Building quality educational content for learners worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2024 Educational Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
