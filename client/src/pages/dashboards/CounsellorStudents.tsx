import React from 'react';
import { Users, Search, MoreVertical } from 'lucide-react';

const CounsellorStudents: React.FC = () => {
  const students = [
    { id: 1, name: 'Emily Chen', grade: '12th Grade', status: 'Action Required', nextSession: 'Oct 15, 2026' },
    { id: 2, name: 'Marcus Johnson', grade: '11th Grade', status: 'On Track', nextSession: 'Oct 18, 2026' },
    { id: 3, name: 'Sophia Martinez', grade: '12th Grade', status: 'Reviewing Report', nextSession: 'Pending' },
  ];

  return (
    <div className="max-w-6xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <Users className="text-sky-500" size={32} />
            My Students
          </h1>
          <p className="text-slate-500 mt-2 font-medium">Manage and track your assigned students' progress.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search students..." 
            className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 w-full md:w-64"
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Student Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Grade</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Next Session</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900">{student.name}</div>
                    <div className="text-sm text-slate-500">ID: STU-{1000 + student.id}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{student.grade}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      student.status === 'On Track' ? 'bg-emerald-100 text-emerald-700' : 
                      student.status === 'Action Required' ? 'bg-rose-100 text-rose-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{student.nextSession}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sky-500 hover:text-sky-700 font-bold text-sm mr-4">View Profile</button>
                    <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={20}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CounsellorStudents;
