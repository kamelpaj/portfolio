import Layout from "../../components/Layout";

const projects = [
  {
    title: "bandet",
    description:
      "A small app for friends to post recordings of jam sessions to share. I built this for me and my friends so we could have a place to listen to our jam sessions. Am currently building a custom media player for this project. Will later add features to create your own band.",
    liveUrl: "https://bandet.vercel.app/",
    github: "https://github.com/kamelpaj/bandet",
    tags: ["next.js", "react", "typescript", "supabase"],
  },
  {
    title: "design system",
    description:
      "A codebase im using to explore ways for automizing and improving designer <--> developer workflow together with some designer collegues at Publicis Sapient.",
    github: "https://github.com/kamelpaj/design-system",
    tags: ["design system", "figma", "design tokens", "typescript", "storybook", "turborepo"],
  },
 
];

export default function Projects() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      <section className="sm:w-11/12 lg:w-1/2 self-center p-4 lg:p-0">
        {projects.map((p, i) => (
          <article key={i} className="flex gap-1 flex-col pb-6 last:pb-0">
            <h3 className="text-2xl font-medium"> {p.title} </h3>
            <p className="text-base text-zinc-400"> {p.description} </p>
            {p.liveUrl &&  <a href={p.liveUrl} className="hover:underline w-fit"> live </a> }
            <a href={p.github} className="hover:underline w-fit"> github </a>
            <div className="flex gap-2 flex-wrap">
              {p.tags.map((t, i) => (
                <p key={i} className="bg-zinc-800 text-zinc-400 rounded-lg px-1.5 py-1"> {t} </p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}
