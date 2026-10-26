import { Keyboard } from 'lucide-react';

export default function HotkeyRecorder() {
    return (
        <div className="bg-surface p-6 rounded-xl border border-white/5 flex flex-col gap-4">

            <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-1">
                    Global Hotkey
                </h3>
                <p className="text-xs text-gray-500">
                    Assign a unique key combination to trigger this shortcut.
                </p>
            </div>

            <div className="mt-2">
                {/* Temporary button until we add the actual keydown listener logic */}
                <button
                    className="w-full flex items-center justify-center gap-3 bg-black/20 border border-white/10 hover:border-accent border-dashed rounded-lg px-4 py-8 text-gray-400 hover:text-white group"
                >
                    <Keyboard size={24} className="group-hover:text-accent " />
                    <span className="font-medium">
                        Click to record hotkey...
                    </span>
                </button>
            </div>

            <div className="bg-white/5 p-3 rounded-lg flex gap-2 items-start mt-2">
                <span className="text-accent text-sm mt-0.5">💡</span>
                <p className="text-xs text-gray-400 leading-relaxed">
                    Try combinations like <span className="bg-black/30 px-1.5 py-0.5 rounded text-gray-300 font-mono">Ctrl + Alt + D</span> System-critical shortcuts are protected.
                </p>
            </div>
        </div>
    );
}