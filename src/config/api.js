// =============================
// API CONFIGURATION
// =============================
const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://heartsandmind.org/backend/public/api/',

  ENDPOINTS: {
    // Admin authentication
    ADMIN_SIGNUP: 'admin/signup',
    ADMIN_SIGNIN: 'admin/login',

    // Events
    EVENTS: 'event',
    EVENT_BY_ID: (id) => `event/${id}`,

    // Blog
    BLOG: 'admin/blog',
    BLOG_BY_ID: (id) => `admin/blog/${id}`,
  },
};

// =============================
// Helper to get full API URL
// =============================
export const getApiUrl = (endpoint) => {
  // Ensure no double slashes
  return `${API_CONFIG.BASE_URL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
};

// =============================
// Main API Call Helper
// =============================
export const apiCall = async (endpoint, options = {}) => {
  const token = localStorage.getItem('adminToken');
  const url = getApiUrl(endpoint);

  // Detect if the body is FormData
  const isFormData = options.body instanceof FormData;

  // Default headers
  const headers = {
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(options.headers || {}),
  };

  // Only set JSON content type if not using FormData
  if (!isFormData && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  try {
    const response = await fetch(url, {
      method: options.method || 'GET',
      headers,
      body: options.body || null,
    });

    let data;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    if (!response.ok) {
      throw new Error(data?.message || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

export { API_CONFIG };
export default API_CONFIG;