import React from 'react';

const QuestionBank: React.FC = () => {
  return (
    <div className="p-8 flex gap-8">
      {/* Table Section */}
      <div className="flex-1 flex flex-col gap-6">
        <div>
           <h1 className="text-3xl font-black text-[#181114] dark:text-white">Question Bank</h1>
           <p className="text-[#886373] mt-1">Curate and validate AI-generated questions.</p>
        </div>
        
        {/* Filters (Bỏ bớt cho gọn, bạn tự thêm lại từ HTML gốc nhé) */}
        <div className="flex gap-3">
           <button className="px-4 py-2 bg-white border rounded-full text-sm font-medium">JLPT Level</button>
        </div>

        {/* Table - Chứa danh sách câu hỏi */}
        <div className="bg-white dark:bg-[#2d1a22] rounded-2xl border overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-background-light/50 border-b">
              <tr>
                <th className="p-4 text-xs font-bold uppercase">Content</th>
                <th className="p-4 text-xs font-bold uppercase">Level</th>
                <th className="p-4 text-xs font-bold uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {/* Row 1 */}
              <tr className="hover:bg-primary/5 cursor-pointer">
                <td className="p-4 text-sm font-medium">明日、いっしょに映画を____ませんか。</td>
                <td className="p-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">N5</span></td>
                <td className="p-4 text-right"><span className="material-symbols-outlined">more_horiz</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Preview Sidebar */}
      <div className="w-96 sticky top-0">
        <div className="bg-white dark:bg-[#2d1a22] rounded-2xl border p-6 shadow-md flex flex-col gap-6">
          <h3 className="text-lg font-bold">Question Preview</h3>
          <div className="bg-[#f4f0f2] dark:bg-[#3d2a32] p-6 rounded-xl text-xl font-bold">
            毎朝、公園を散歩____ことにしています。
          </div>
          <div className="flex flex-col gap-3">
             <div className="p-4 rounded-xl border-2 border-primary bg-primary/5 font-medium">A. する</div>
             <div className="p-4 rounded-xl border font-medium">B. して</div>
          </div>
          <button className="w-full py-3 bg-primary text-white rounded-xl font-bold">Approve</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionBank;