import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { apiCall, API_CONFIG } from "../../../config/api"
import { AdminAuthContainer, AuthForm, AuthToggle, FormGroup, SubmitButton, ErrorMessage, SuccessMessage } from "./style"

const AdminAuth = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')
        setMessage('')

        try {
            if (isSignUp) {
                if (formData.password !== formData.confirmPassword) {
                    setError('Passwords do not match')
                    return
                }
                
                // API call for signup
                const response = await apiCall(API_CONFIG.ENDPOINTS.ADMIN_SIGNUP, {
                    method: 'POST',
                    body: JSON.stringify({
                        fullName: formData.name,
                        email: formData.email,
                        password: formData.password
                    })
                })

                // Handle server response format
                if (response.success) {
                    setMessage(response.message || 'Account created successfully! Please sign in.')
                    setIsSignUp(false)
                    setFormData({ email: '', password: '', confirmPassword: '', name: '' })
                } else {
                    setError(response.message || 'Signup failed')
                }
            } else {
                // API call for signin
                const response = await apiCall(API_CONFIG.ENDPOINTS.ADMIN_SIGNIN, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password
                    })
                })

                // Handle server response format
                if (response.success && response.token) {
                    console.log('Server response:', response) // Debug log
                    console.log('User data to store:', response.data) // Debug log
                    localStorage.setItem('adminToken', response.token)
                    localStorage.setItem('adminUser', JSON.stringify(response.data))
                    console.log('Stored user data:', JSON.stringify(response.data)) // Debug log
                    navigate('/admin/dashboard')
                } else {
                    setError(response.message || 'Signin failed')
                }
            }
        } catch (err) {
            console.log(err)
            setError(err.message || 'Network error. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <AdminAuthContainer>
            <AuthForm onSubmit={handleSubmit}>
                <h1>Admin {isSignUp ? 'Sign Up' : 'Sign In'}</h1>
                
                <AuthToggle>
                    <button 
                        type="button" 
                        className={!isSignUp ? 'active' : ''}
                        onClick={() => setIsSignUp(false)}
                    >
                        Sign In
                    </button>
                    <button 
                        type="button" 
                        className={isSignUp ? 'active' : ''}
                        onClick={() => setIsSignUp(true)}
                    >
                        Sign Up
                    </button>
                </AuthToggle>

                {isSignUp && (
                    <FormGroup>
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </FormGroup>
                )}

                <FormGroup>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </FormGroup>

                {isSignUp && (
                    <FormGroup>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
                    </FormGroup>
                )}

                {error && <ErrorMessage>{error}</ErrorMessage>}
                {message && <SuccessMessage>{message}</SuccessMessage>}

                <SubmitButton type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Sign In')}
                </SubmitButton>
            </AuthForm>
        </AdminAuthContainer>
    )
}

export default AdminAuth
