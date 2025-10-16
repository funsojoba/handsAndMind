import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { DashboardContainer, Sidebar, MainContent, Header, ContentArea, StatsGrid, StatCard, ActionButtons, LogoutButton } from "./style"
import Events from "./Events"
import Blog from "./Blog"

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('events')
    const [adminUser, setAdminUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('adminToken')
        const user = localStorage.getItem('adminUser')
        
        if (!token || !user) {
            navigate('/admin/auth')
            return
        }

        try {
            console.log('Stored user data:', user) // Debug log
            const parsedUser = JSON.parse(user)
            console.log('Parsed user data:', parsedUser) // Debug log
            setAdminUser(parsedUser)
        } catch (error) {
            console.error('Error parsing user data:', error)
            console.error('Raw user data:', user)
            // Clear invalid data and redirect to auth
            localStorage.removeItem('adminToken')
            localStorage.removeItem('adminUser')
            navigate('/admin/auth')
        }
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('adminToken')
        localStorage.removeItem('adminUser')
        navigate('/admin/auth')
    }

    if (!adminUser) {
        return <div>Loading...</div>
    }

    return (
        <DashboardContainer>
            <Sidebar>
                <div className="logo">
                    <h2>Admin Panel</h2>
                </div>
                
                <nav className="nav-menu">
                    <button 
                        className={`nav-item ${activeTab === 'events' ? 'active' : ''}`}
                        onClick={() => setActiveTab('events')}
                    >
                        📅 Events
                    </button>
                    <button 
                        className={`nav-item ${activeTab === 'blog' ? 'active' : ''}`}
                        onClick={() => setActiveTab('blog')}
                    >
                        📝 Blog
                    </button>
                </nav>

                <div className="user-info">
                    <p>Welcome, {adminUser.fullName}</p>
                    <LogoutButton onClick={handleLogout}>
                        Logout
                    </LogoutButton>
                </div>
            </Sidebar>

            <MainContent>
                <Header>
                    <h1>
                        {activeTab === 'events' ? 'Events Management' : 'Blog Management'}
                    </h1>
                    <p>Manage your content and events</p>
                </Header>

                <ContentArea>
                    {activeTab === 'events' && <Events />}
                    {activeTab === 'blog' && <Blog />}
                </ContentArea>
            </MainContent>
        </DashboardContainer>
    )
}

export default AdminDashboard
