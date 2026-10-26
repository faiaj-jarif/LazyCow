import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Import page components
import AccessPage from './pages/AccessPage'
import DashboardPage from './pages/DashboardPage'
import ShortcutBuilderPage from './pages/ShortcutBuilderPage'
import CommunityPage from './pages/CommunityPage'
import AccountPage from './pages/AccountPage'
import SettingsPage from './pages/SettingsPage'

// Import Sidebar
import Sidebar from './components/layout/Sidebar'

export default function App() {

    // Fetch OS accent color on mount
    useEffect(() => {
        const fetchAccentColor = async () => {
            if (window.lazyCowAPI) {
                const hex = await window.lazyCowAPI.getAccentColor()
                // Slice to 6 characters to remove the alpha channel for a solid color
                document.documentElement.style.setProperty('--os-accent-color', `#${hex.slice(0, 6)}`)
            }
        }

        fetchAccentColor()
    }, [])

    return (
        <BrowserRouter>
            {/* The main layout wrapper: Flex row so Sidebar is left, content is right */}
            <div className="flex h-screen w-screen overflow-hidden">

                {/* Render the permanent Sidebar component */}
                <Sidebar />

                {/* The main content area where pages render */}
                <main className="flex bg-background">
                    <Routes>
                        <Route path="/" element={<AccessPage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/builder" element={<ShortcutBuilderPage />} />
                        <Route path="/community" element={<CommunityPage />} />
                        <Route path="/account" element={<AccountPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Routes>
                </main>

            </div>
        </BrowserRouter>
    )
}