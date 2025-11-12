import { Link } from 'react-router-dom';

export default function ProfileCard({ member }) {
  return (
    <div className="bg-white shadow-lg border-2 border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl hover:border-4 transition-shadow">
      <img
        src={member.image}
        alt={member.name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800">{member.name}</h2>
      <p className="text-gray-500 text-sm mb-4">{member.email}</p>
      <Link
        to={`/${member.username}`}
        className="bg-blue-600 text-white px-6 py-1 rounded-full hover:bg-blue-700 transition"
      >
        View Profile
      </Link>
    </div>
  );
}
