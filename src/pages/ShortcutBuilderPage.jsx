import { ArrowLeft, Save } from 'lucide-react';
import ItemPickerSection from '../components/builder/ItemPickerSection';
import HotkeyRecorder from '../components/builder/HotkeyRecorder';

export default function ShortcutBuilderPage() {
	return (
		<div className="h-full flex flex-col pt-8 px-10 relative">

			{/* Header Container */}
			<div className="flex justify-between mb-8">

				<div className="flex items-center gap-4">
					<button className="text-gray-400 hover:text-white ">
						<ArrowLeft size={24} />
					</button>
					<h2 className="text-xl font-bold">Create New Shortcut</h2>
				</div>

				<div className="flex gap-3">
					<button className="px-4 py-2 rounded-full font-semibold text-sm bg-white/10 hover:bg-white/20 transition-colors">
						Cancel
					</button>
					<button className="px-4 py-2 rounded-full font-semibold text-sm bg-accent/85 text-background flex items-center gap-2 hover:bg-accent ">
						<Save size={16} />
						Save Shortcut
					</button>
				</div>
			</div>

			{/* Main Content: Split Layout */}
			<div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-hidden pb-8">

				{/* Left Column: Shortcut Name & Bundled Items (FR_20, FR_21) */}
				<div className="lg:col-span-2 flex flex-col gap-6 overflow-y-auto pr-2">

					{/* Shortcut Name Input */}
					<div className="bg-surface p-6 rounded-xl border border-white/5 group hover:border-white/10 ">
						<label className="block text-sm font-semibold text-gray-400 mb-2 group-hover:text-gray-300">
							Shortcut Name
						</label>
						<input
							type="text"
							placeholder="e.g. Morning Dev Flow"
							className="w-full bg-black/20 border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none "
						/>
					</div>

					{/* Item Picker Section */}
					<ItemPickerSection />

				</div>

				{/* Right Column: Trigger & Options (FR_22) */}
				<div className="flex flex-col gap-6">

					{/* Hotkey Recorder Section */}
					<HotkeyRecorder />

				</div>
			</div>

		</div>
	);
}