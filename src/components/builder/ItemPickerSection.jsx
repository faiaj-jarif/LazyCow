import { AppWindow, FileText, Globe, Settings2, Trash2 } from 'lucide-react';

export default function ItemPickerSection() {
    // Dummy state representing bundled items before we wire up the real functionality
    const items = [
        { id: 1, type: 'app', name: 'VS Code', path: 'C:\\Program Files\\VS Code\\Code.exe' },
        { id: 2, type: 'url', name: 'GitHub', path: 'https://github.com' }
    ];

    return (
        <div className="bg-surface p-6 rounded-xl border border-white/5 flex flex-col gap-6">

            <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-gray-400">Bundled Items</h3>
                <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
                    {items.length} items added
                </span>
            </div>

            {/* Action Buttons for FR_20 & FR_21 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

                <button
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 "
                >
                    <AppWindow size={24} className="text-accent" />
                    <span className="text-xs font-medium text-gray-300">
                        Add App
                    </span>
                </button>

                <button
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 "
                >
                    <FileText size={24} className="text-blue-400" />
                    <span className="text-xs font-medium text-gray-300">
                        Add File/Folder
                    </span>
                </button>

                <button
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 "
                >
                    <Globe size={24} className="text-green-400" />
                    <span className="text-xs font-medium text-gray-300">
                        Add URL
                    </span>
                </button>

                <button
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 "
                >
                    <Settings2 size={24} className="text-purple-400" />
                    <span className="text-xs font-medium text-gray-300">
                        Add Setting
                    </span>
                </button>
            </div>

            {/* Selected Items List */}
            <div className="flex flex-col gap-2 mt-2">
                {items.map(item => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-white/5 group hover:border-white/10 "
                    >

                        <div className="flex flex-col">
                            <span className="font-medium text-sm text-gray-200 ">{item.name}</span>
                            <span className="text-xs text-gray-500 ">{item.path}</span>
                        </div>

                        <button className="text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100  p-1">
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}