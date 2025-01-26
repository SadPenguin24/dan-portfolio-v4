import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl flex flex-row">
      <div>
        <h1 className="text-9xl font-bold mb-6">Welcome to My Portfolio</h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-2/3">
            <h2 className="text-6xl font-semibold mb-4">About Me</h2>
            <p className="mb-4">
              Hi, I’m Dan Hendrix Villadolid, a Full-Stack Developer with 3+
              years of experience creating scalable, high-performance web
              applications. From HR systems to e-learning platforms, I’ve built
              solutions that deliver impact using React, Next.js, Node.js, and
              PHP (Laravel).
            </p>
            <p>
              I’m a problem solver and team player passionate about crafting
              user-friendly applications and exploring new technologies. Whether
              optimizing legacy systems or building projects from scratch, I
              thrive on turning ideas into reality. Let’s create something
              amazing!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
