import Link from "next/link";
import Image from "next/image";
import arrow from "../../../public/arrow.svg";

interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  archived: boolean;
}
export default function Project({project}: {project: Project}) {
  return (
    <Link href={project.href} target="_blank" className="card-project relative group overflow-hidden">
      <h3 className="card-project-title flex items-center gap-2">
        {project.title}
        {project.archived ? (
          <span className="text-xs text-gray-500 font-normal border border-gray-200 px-1 py-0.5 rounded-md">Archived</span>
        ) : (
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-1.5 rounded-full bg-green-500"></span>
          </span>
        )}
      </h3>
      <p className="card-project-description">{project.description}</p>

      <ul className="card-project-tags">
        {project.tags.map((tag) => (
          <li className="card-project-tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
      <div className="bg-gray-200 z-0 border-8 border-gray-100 rounded-full w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:transition-all group-hover:duration-300 absolute right-[-20px] top-[-20px]  overflow-hidden flex items-center justify-center">
        <Image src={arrow} alt="Arrow" width={12} height={12} className="rotate mt-1 mr-1" />
      </div>
    </Link>
  );
}
