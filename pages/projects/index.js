import Layout from "../../components/Layout";

const projects = [
  {
    title: "bandet",
    description:
      "A small app for friends to post recordings of jam sessions to share. I built this for me and my friends so we could ",
    liveUrl: "https://bandet.vercel.app/",
    github: "https://github.com/kamelpaj/bandet",
    tags: ["next.js", "react", "typescript", "supabase"],
  },
 
];

export default function Projects() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      <section className="sm:w-11/12 lg:w-1/2 self-center">
        {projects.map((p, i) => (
          <article key={i} className="flex gap-1 flex-col pb-6 last:pb-0">
            <h3 className="text-2xl font-medium"> {p.title} </h3>
            <p className="text-base text-zinc-400"> {p.description} </p>
            {p.liveUrl &&  <a href={p.liveUrl} className="hover:underline w-fit"> live </a> }
            <a href={p.github} className="hover:underline w-fit"> github </a>
            <div className="flex gap-2">
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
