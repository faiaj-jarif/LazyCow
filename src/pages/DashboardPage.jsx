import { Plus } from 'lucide-react'

export default function DashboardPage() {
    // Dummy data representing shortcuts until we connect the backend
    const dummyShortcuts = [
        {
            id: 1,
            name: "Morning Dev Flow",
            description: "Opens VS Code, Chrome tabs, and starts Spotify",
            hotkey: "Win + Alt + D",
            isSecured: false
        },
        {
            id: 2,
            name: "University Class Links",
            description: "Opens Zoom and the student portal",
            hotkey: "Ctrl + Shift + U",
            isSecured: false
        },
        {
            id: 3,
            name: "OBS Streamer Layout",
            description: "Arranges OBS, Chat, and Game window",
            hotkey: "Alt + S",
            isSecured: true // A secured shortcut might need confirmation before running
        }
    ]

    return (
        <div className="h-full flex flex-col pt-8 px-10 relative">

            {/* Dashboard Header Container */}
            <div className="flex justify-between mb-10">

                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold">Library Overview</h2>

                    {/* View toggle buttons placeholders (seen in your mockup) */}
                    <div className="flex gap-2 bg-white/5 rounded-md p-1">

                        <button className="p-1 rounded bg-white/10 text-white">
                            <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                        </button>

                        <button className="p-1 rounded text-gray-400 hover:text-white">
                            <div className="w-4 h-4 border border-gray-400 rounded-sm"></div>
                        </button>

                    </div>
                </div>

                {/* Search and Create Actions */}
                <div className="flex gap-4">
                    <div className="relative">
                        {/* Search Icon placeholder */}
                        <span className="absolute left-4 top-2.5 text-gray-400 text-sm">🔍</span>
                        <input
                            type="text"
                            placeholder="Search shortcuts..."
                            className="bg-white/5 border border-white/10 rounded-full px-4 py-2 pl-10 text-sm focus:outline-none focus:border-accent w-64"
                        />
                    </div>

                    <button className="bg-accent text-background font-bold px-4 py-2 rounded-full flex items-center gap-2 text-sm opacity-85 hover:opacity-100 ">
                        <Plus size={16} />
                        New Shortcut
                    </button>
                </div>
            </div>


            {/* Shortcut Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {
                    dummyShortcuts
                        .map(shortcut => (
                            <div
                                key={shortcut.id}
                                className="bg-surface rounded-xl p-5 hover:bg-white/5 flex flex-col gap-4 group"
                            >

                                {/* Header Row: Title and 3-dot Menu */}
                                <div className="flex justify-between items-start">
                                    <h3 className="font-semibold text-lg text-white group-hover:text-accent ">
                                        {shortcut.name}
                                    </h3>
                                    <button className="text-gray-500 hover:text-white h-6 w-6 flex items-center justify-center rounded">
                                        ⋮
                                    </button>
                                </div>


                                {/* Description */}
                                <p className="text-sm text-gray-400 flex pr-6">
                                    {shortcut.description}
                                </p>


                                {/* Footer Row: Hotkey Badge and Run Button */}
                                <div className="flex justify-between gap-2 items-center mt-3 pt-3 border-t border-white/5">

                                    {/* Hotkey Badge styled like a keyboard key */}
                                    <span className="text-xs bg-black/40 px-2.5 py-1.5 rounded text-gray-300 font-mono ">
                                        {shortcut.hotkey}
                                    </span>


                                    {/* Secured items get a different style run button to indicate danger/confirmation */}
                                    <button
                                        className={`text-sm font-semibold px-2 py-1 rounded opacity-85
                                        ${shortcut.isSecured ?
                                                " text-gray-300 bg-red-950 hover:bg-red-900 " : "text-background bg-accent/70 hover:opacity-100 "}`}
                                    >
                                        {shortcut.isSecured ? <>Run Secured</> : <>Run Now</>}
                                    </button>
                                </div>
                            </div>
                        )
                        )
                }

            </div>

        </div>
    )
}