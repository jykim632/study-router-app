import { Button } from "~/components/ui/button";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About me" },
    { name: "description", content: "Remember me :)" },
  ];
}

export default function About() {
  return (
    <div>
      <h1>About me</h1>
      <Button>My name is John Doe</Button>
      <Button>I am a software engineer</Button>
      <Button>I love coding</Button>
      <Button>I love learning new things</Button>
      <Button>I love teaching</Button>
      <Button>I love sharing knowledge</Button>
      <Button>I love open source</Button>
      <Button>I love React Router</Button>
      <Button>I love TypeScript</Button>
      <Button>I love JavaScript</Button>
      <Button>I love Python</Button>
      <Button>I love Java</Button>
      <Button>I love C++</Button>
      <Button>I love C#</Button>
      <Button>I love Go</Button>
      <Button>I love Rust</Button>
      <Button>I love Kotlin</Button>
      <Button>I love Swift</Button>
      <Button>I love Dart</Button>
      <Button>I love PHP</Button>
      <Button>I love Ruby</Button>
      <Button>I love HTML</Button>
      <Button>I love CSS</Button>
      <Button>I love SQL</Button>
      <Button>I love NoSQL</Button>
      <Button>I love MongoDB</Button>
      <Button>I love PostgreSQL</Button>
      <Button>I love MySQL</Button>
      <Button>I love SQLite</Button>
      <Button>I love Redis</Button>
      <Button>I love Elasticsearch</Button>
      <Button>I love RabbitMQ</Button>
      <Button>I love Kafka</Button>
      <Button>I love Docker</Button>
      <Button>I love Kubernetes</Button>
      <Button>I love AWS</Button>
      <Button>I love Azure</Button>
      <Button>I love Google Cloud</Button>
      <Button>I love Firebase</Button>
      <Button>I love Heroku</Button>
      <Button>I love Vercel</Button>
      <Button>I love Netlify</Button>
      <Button>I love Git</Button>
      <Button>I love GitHub</Button>
      <Button>I love GitLab</Button>
      <Button>I love Bitbucket</Button>
      <Button>I love CI/CD</Button>
      <Button>I love DevOps</Button>
      <Button>I love Agile</Button>
      <Button>I love Scrum</Button>
      <Button>I love Kanban</Button>
      <Button>I love Lean</Button>
      <Button>I love XP</Button>
      <Button>I love TDD</Button>
      <Button>I love BDD</Button>
      <Button>I love DDD</Button>
      <Button>I love SOLID</Button>
      <Button>I love DRY</Button>
      <Button>I love KISS</Button>
      <Button>I love YAGNI</Button>
    </div>
  );
}
