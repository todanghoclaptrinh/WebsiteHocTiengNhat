import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex w-full items-stretch">
      {/* Cột trái: Hình ảnh */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-center items-center text-white px-20 text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBeJt_Vz3_wUaqYa2iTgTGLQQe796qNJiZ9xOh58qKpXPF3CQCcWW7HXQHRxpkGTGGWtH9h9-S8vPFWfXQoLmOvcxcWAXYmkZcb-lMJ9BHthtmEXtp1HCjt34i-mpgX1mNvTlqL5IkGyvJeplPjzvv3jKu00edvoHJZ_CNZvXPoNgq_W7cnmNfng4yxQg3RG17QaUco3S0rN92FcL0RSDoGbfMgaMakAqZrTt0Atj5n98w-k86J0_6avwh30mgJ7p6DTK_eHRc0kDKL')" }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="relative z-20 space-y-6">
          <div className="inline-flex items-center justify-center p-3 bg-white/20 backdrop-blur-md rounded-2xl mb-4">
             <div className="size-12 text-white">
                {/* Icon JQuiz trắng trên nền ảnh */}
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"></path>
                </svg>
             </div>
          </div>
          <h1 className="text-5xl font-black tracking-tight leading-tight">Master Japanese with AI</h1>
          <p className="text-xl font-light opacity-90 max-w-md mx-auto">
            Your personalized path to JLPT N5-N3 mastery starts here. Join thousands of students learning smarter, not harder.
          </p>
          <div className="pt-8">
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="material-symbols-outlined text-primary">verified_user</span>
              <span>Trusted by 50,000+ learners worldwide</span>
            </div>
          </div>
        </div>
      </div>

        {/* RIGHT SIDE: Reset Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 bg-white">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-10">
              <h2 className="text-3xl font-bold leading-tight mb-2">Reset Password</h2>
              <p className="text-[#886370] text-base font-medium">Choose a strong password to protect your account.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* New Password */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">New Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter new password"
                    className="w-full rounded-lg border border-[#e5dcdf] bg-white h-14 p-3.75 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-[#f287ae]/50 transition-all placeholder:text-[#886370]"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#886370] hover:text-[#f287ae] transition-colors"
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Confirm New Password</label>
                <div className="relative">
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="Repeat new password"
                    className="w-full rounded-lg border border-[#e5dcdf] bg-white h-14 p-3.75 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-[#f287ae]/50 transition-all placeholder:text-[#886370]"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#886370] hover:text-[#f287ae] transition-colors"
                  >
                    <span className="material-symbols-outlined">
                      {showConfirmPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button className="w-full h-14 bg-[#f287ae] hover:bg-[#e07198] text-white rounded-lg text-base font-bold shadow-lg shadow-[#f287ae]/20 transition-all active:scale-[0.98]">
                  Update Password
                </button>
              </div>
            </form>

            <div className="mt-10 text-center">
              <p className="text-[#886370] text-sm">
                Remember your password? 
                <Link to="/login" className="text-primary font-bold hover:underline ml-1">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ForgotPassword;