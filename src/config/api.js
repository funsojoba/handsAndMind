// API Configuration
const API_CONFIG = {
    // Base URL for API calls
    BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
    
    // API endpoints
    ENDPOINTS: {
        // Admin authentication
        ADMIN_SIGNUP: '/api/admin/signup',
        ADMIN_SIGNIN: '/api/admin/signin',
        
        // Events
        EVENTS: '/api/admin/events',
        EVENT_BY_ID: (id) => `/api/admin/events/${id}`,
        
        // Blog
        BLOG: '/api/admin/blog',
        BLOG_BY_ID: (id) => `/api/admin/blog/${id}`,
    }
}

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
    return `${API_CONFIG.BASE_URL}${endpoint}`
}

// Helper function to make authenticated API calls
export const apiCall = async (endpoint, options = {}) => {
    const token = localStorage.getItem('adminToken')
    
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }),
            ...options.headers
        }
    }
    
    const url = getApiUrl(endpoint)
    
    try {
        const response = await fetch(url, { ...defaultOptions, ...options })
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
        }
        
        return await response.json()
    } catch (error) {
        console.error('API call failed:', error)
        throw error
    }
}

export { API_CONFIG }
export default API_CONFIG;
