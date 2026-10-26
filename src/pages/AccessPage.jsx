import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, UserPlus, User } from 'lucide-react';

export default function AccessPage() {
	const [isLogin, setIsLogin] = useState(true);
	const navigate = useNavigate();

	// Handle Login / Sign-up submission
	const handleAuth = (e) => {
		e.preventDefault();
		// TODO: Connect to Supabase Auth here in the future
		console.log(isLogin ? "Authenticating user..." : "Registering new user...");
		navigate('/dashboard'); // Route to dashboard after success
	};

	// Handle Guest Mode (Skips Auth)
	const handleGuestAccess = () => {
		// TODO: Initialize local JSON storage for guest here in the future
		console.log("Entering Guest Mode...");
		navigate('/dashboard'); // Route to dashboard directly
	};

	return (
		<div className="h-full flex items-center justify-center">

			{/* Auth Card Container */}
			<div className="bg-surface border border-white/10 p-8 rounded-2xl w-full max-w-md flex flex-col gap-6 shadow-2xl relative overflow-hidden">

				{/* Subtle top border accent highlight */}
				<div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>

				{/* Header / Branding */}
				<div className="text-center mb-2">
					<h1 className="text-4xl font-black text-accent tracking-tighter cursor-default mb-2">
						LazyCow<span className="text-white">.</span>
					</h1>
					<p className="text-gray-400 text-sm">
						Automate your work-setup
					</p>
				</div>

				{/* Form Toggle (Login vs Sign-up) */}
				<div className="flex bg-black/40 p-1 rounded-lg">
					<button
						onClick={() => setIsLogin(true)}
						className={`flex-1 py-2 text-sm font-bold rounded-md ${isLogin ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
					>
						Login
					</button>
					<button
						onClick={() => setIsLogin(false)}
						className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${!isLogin ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
					>
						Sign Up
					</button>
				</div>

				{/* Input Form */}
				<form onSubmit={handleAuth} className="flex flex-col gap-4">

					{/* Email Input */}
					<div className="relative">
						<Mail className="absolute left-3 top-3 text-gray-500" size={18} />
						<input
							type="email"
							placeholder="Email Address"
							required
							className="w-full bg-black/30 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-accent "
						/>
					</div>

					{/* Password Input */}
					<div className="relative">
						<Lock className="absolute left-3 top-3 text-gray-500" size={18} />
						<input
							type="password"
							placeholder="Password"
							required
							className="w-full bg-black/30 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-accent "
						/>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="w-full bg-accent/80 hover:bg-accent text-background font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 mt-2"
					>
						{isLogin ? (
							<>
								<LogIn size={18} />
								<span>Login</span>
							</>
						) : (
							<>
								<UserPlus size={18} />
								<span>Create Account</span>
							</>
						)}
					</button>
				</form>

				{/* Divider */}
				<div className="flex items-center gap-3 my-2">
					<div className="flex-1 h-px bg-white/10"></div>
					<span className="text-xs text-gray-500 uppercase tracking-wider font-bold">OR</span>
					<div className="flex-1 h-px bg-white/10"></div>
				</div>

				{/* Guest Mode Button */}
				<button
					onClick={handleGuestAccess}
					className="w-full bg-white/5 hover:bg-white/10  text-gray-300 font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2"
				>
					<User size={18} />
					<span>Continue as Guest</span>
				</button>

			</div>
		</div>
	);
}