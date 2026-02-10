import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/auth.slice';

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: any) => state.auth);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !fullName) return;

    const result = await dispatch((registerUser as any)({ email, password, fullName }));

    if (result?.meta?.requestStatus === 'fulfilled') {
      navigate('/login');
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-white">
      {/* Registration Card */}
      <div className="w-full max-w-130 bg-white rounded-xl shadow-xl border border-[#e5dcdf] overflow-hidden">
        <div className="p-8 pb-4">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <span className="material-symbols-outlined text-primary text-3xl">person_add</span>
            </div>
          </div>
          <h1 className="text-[#181114] tracking-tight text-3xl font-bold leading-tight text-center">
            Create Your JQuiz Account
          </h1>
          <p className="text-[#886370] text-sm font-normal leading-normal pt-2 text-center">
            AI-powered personalization starts the moment you join.
          </p>
        </div>

        <form className="px-8 pb-10 space-y-5" onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-[#181114] text-sm font-medium">Full Name</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#886370] text-xl">
                person
              </span>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="flex w-full rounded-lg text-[#181114] border border-[#e5dcdf] bg-white h-12 pl-12 pr-4 placeholder:text-[#886370] text-base font-normal focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="John Doe"
                type="text"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-[#181114] text-sm font-medium">Email Address</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#886370] text-xl">
                mail
              </span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex w-full rounded-lg text-[#181114] border border-[#e5dcdf] bg-white h-12 pl-12 pr-4 placeholder:text-[#886370] text-base font-normal focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="example@email.com"
                type="email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <label className="text-[#181114] text-sm font-medium">Password</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#886370] text-xl">
                lock
              </span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex w-full rounded-lg text-[#181114] border border-[#e5dcdf] bg-white h-12 pl-12 pr-4 placeholder:text-[#886370] text-base font-normal focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="••••••••"
                type="password"
              />
            </div>
          </div>

          {/* Dropdown Goal Field */}
          <div className="flex flex-col gap-2">
            <label className="text-[#181114] text-sm font-medium"> Current JLPT Goal</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#886370] text-xl">
                flag
              </span>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="flex w-full appearance-none rounded-lg text-[#181114] border border-[#e5dcdf] bg-white h-12 pl-12 pr-10 text-base font-normal focus:ring-1 focus:ring-primary focus:border-primary outline-none"
              >
                <option disabled value="">
                  Select your goal
                </option>
                <option value="n5">JLPT N5 (Beginner)</option>
                <option value="n4">JLPT N4 (Elementary)</option>
                <option value="n3">JLPT N3 (Intermediate)</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#886370] pointer-events-none">
                expand_more
              </span>
            </div>
          </div>

          {/* AI Visual Hint */}
          <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <span className="material-symbols-outlined text-primary text-xl">psychology</span>
            <p className="text-xs text-[#886370] leading-relaxed">
              Our AI analyzes your starting level to curate a custom study plan with spaced repetition tailored to your learning speed.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-sm text-center">
              {String(error)}
            </p>
          )}

          {/* Submit Button */}
          <button
            className="w-full flex items-center justify-center gap-2 rounded-lg h-14 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-[#eb77a1] transition-all transform active:scale-[0.98]"
            type="submit"
            disabled={loading}
          >
            <span>{loading ? 'Đang xử lý...' : 'Start Learning'}</span>
            <span className="material-symbols-outlined">rocket_launch</span>
          </button>

          <div className="text-center pt-2">
            <p className="text-sm text-[#886370]">
              Already have an account?{' '}
              <Link className="text-primary font-semibold hover:underline" to="/login">
                Back to Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;