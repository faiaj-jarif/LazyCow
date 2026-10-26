import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

// Import your page components
import AccessPage from './pages/AccessPage'
import DashboardPage from './pages/DashboardPage'
import ShortcutBuilderPage from './pages/ShortcutBuilderPage'
import CommunityPage from './pages/CommunityPage'
import AccountPage from './pages/AccountPage'
import SettingsPage from './pages/SettingsPage'

// Import the Sidebar
import Sidebar from './components/layout/Sidebar'

// Inner component to handle routing logic and layout
function AppContent() {
    const location = useLocation()
    
    // Check if the user is on the initial access screen
    const isAccessPage = location.pathname === '/'

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            
            {/* Conditionally render the Sidebar ONLY if we are not on the Access Page */}
            {!isAccessPage && <Sidebar />}

            {/* The main content area where pages render */}
            <main className="flex-1 bg-background overflow-y-auto">
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
    )
}

export default function App() {
    // Fetch OS accent color on mount
    useEffect(() => {
        const fetchAccentColor = async () => {
            if (window.lazyCowAPI) {
                const hex = await window.lazyCowAPI.getAccentColor()
                // Slice to 6 characters to remove the alpha channel for a solid color
                document.documentElement.style.setProperty('--os-accent-color ', `#${hex.slice(0, 6)}`)
            }
        }
        fetchAccentColor()
    }, [])

    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}