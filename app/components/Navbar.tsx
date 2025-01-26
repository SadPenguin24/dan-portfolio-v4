import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-red shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold font-serif">
          dan.f.v
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/work" className="hover:text-gray-600">
              Work
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
