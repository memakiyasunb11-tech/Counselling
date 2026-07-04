import React from 'react';
import { FileText, Download, FileCheck } from 'lucide-react';

const CounsellorReports: React.FC = () => {
  const reports = [
    { id: 1, studentName: 'Emily Chen', type: 'Psychometric Assessment', date: 'Oct 10, 2026', status: 'Ready to Review' },
    { id: 2, studentName: 'Marcus Johnson', type: 'Career Roadmap V1', date: 'Oct 05, 2026', status: 'Published' },
    { id: 3, studentName: 'Sophia Martinez', type: 'Psychometric Assessment', date: 'Sep 28, 2026', status: 'Published' },
  ];

  return (
    <div className="max-w-6xl mx-auto w-full">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
          <FileText className="text-sky-500" size={32} />
          Student Reports
        </h1>
        <p className="text-slate-500 mt-2 font-medium">Review assessment results and generate final career plans.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div key={report.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                report.status === 'Ready to Review' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'
              }`}>
                {report.status === 'Ready to Review' ? <FileText size={24} /> : <FileCheck size={24} />}
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                report.status === 'Ready to Review' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              }`}>
                {report.status}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-1">{report.type}</h3>
            <p className="text-slate-500 font-medium mb-4">{report.studentName}</p>
            
            <div className="mt-auto pt-6 flex gap-3">
              {report.status === 'Ready to Review' ? (
                <button className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2.5 rounded-xl transition-colors">
                  Review & Publish
                </button>
              ) : (
                <>
                  <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl transition-colors">
                    View
                  </button>
                  <button className="flex-none bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold p-2.5 rounded-xl transition-colors">
                    <Download size={20} />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounsellorReports;
