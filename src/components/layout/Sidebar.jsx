import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BookOpen, Wrench, Users, Settings, User } from 'lucide-react'

export default function Sidebar() {
    // State to track if the sidebar is collapsed or expanded
    const [isCollapsed, setIsCollapsed] = useState(false)

    const navItems = [
        { name: 'Library', path: '/dashboard', icon: BookOpen },
        { name: 'Builder', path: '/builder', icon: Wrench },
        { name: 'Community', path: '/community', icon: Users },
        { name: 'Settings', path: '/settings', icon: Settings },
        { name: 'Account', path: '/account', icon: User }
    ]

    return (
        <aside
            className={`h-screen bg-surface border-r border-white/5 flex flex-col pt-8
            ${isCollapsed ? ' w-20 ' : ' w-64 '}`}
        >
            {/* LazyCow LOGO*/}
            <div className={`px-8 pb-10 flex ${isCollapsed ? ' justify-center px-0 ' : ' '}`}>
                {isCollapsed ? (
                    // When collapsed, show "LC"
                    <h1 className="text-3xl font-black text-accent">
                        LC
                    </h1>
                ) : (
                    <h1 className="text-3xl font-black text-accent">
                        LazyCow<span className="text-white">.</span>
                    </h1>
                )}
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col gap-1 px-4">
                {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={
                                ({ isActive }) => `flex items-center gap-3 px-4 py-3 text-white rounded-lg
                                ${isActive ? ' bg-white/5 ' : ' hover:bg-white/3 '}
                                ${isCollapsed ? ' justify-center px-0 ' : ' '}`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <Icon
                                        size={20}
                                        className={isActive ? " text-accent " : " "}
                                    />
                                    {/* Only show the text label if NOT collapsed */}
                                    {!isCollapsed && <span>{item.name}</span>}
                                </>
                            )}
                        </NavLink>
                    )
                })}
            </nav>

            {/* The Collapse/Expand Toggle Button */}
            <div className="p-4 border-t border-white/5">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white font-bold"
                >
                    {isCollapsed ? '>' : '<'}
                </button>
            </div>
        </aside>
    )
}