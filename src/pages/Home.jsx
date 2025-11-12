import ProfileCard from '../components/Profile-Card';
import { team } from '../data/team';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {team.map((member) => (
          <ProfileCard key={member.username} member={member} />
        ))}
      </div>
    </main>
  );
}
