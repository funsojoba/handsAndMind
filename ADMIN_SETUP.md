# Admin Panel Setup Guide

## Environment Configuration

### 1. Create Environment File

Create a `.env` file in your project root with the following content:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:8000
```

### 2. For Production Deployment

When deploying to production, update the environment variable:

```env
# Production API URL
VITE_API_BASE_URL=https://your-api-domain.com
```

## Admin Panel Features

### Authentication
- **Sign Up**: Create new admin accounts
- **Sign In**: Access the admin dashboard
- **Protected Routes**: All admin routes require authentication

### Dashboard
- **Events Management**: Create, read, update, and delete events
- **Blog Management**: Create, read, update, and delete blog posts
- **Responsive Design**: Works on desktop and mobile devices

## API Endpoints

The admin panel expects the following API endpoints:

### Authentication
- `POST /api/admin/signup` - Create admin account
- `POST /api/admin/signin` - Admin login

### Events
- `GET /api/admin/events` - Get all events
- `POST /api/admin/events` - Create new event
- `PUT /api/admin/events/:id` - Update event
- `DELETE /api/admin/events/:id` - Delete event

### Blog
- `GET /api/admin/blog` - Get all blog posts
- `POST /api/admin/blog` - Create new blog post
- `PUT /api/admin/blog/:id` - Update blog post
- `DELETE /api/admin/blog/:id` - Delete blog post

## Usage

1. **Access Admin Panel**: Navigate to `/admin/auth`
2. **Sign Up**: Create your first admin account
3. **Sign In**: Use your credentials to access the dashboard
4. **Manage Content**: Use the sidebar to switch between Events and Blog management

## Security Notes

- All API calls include JWT authentication headers
- Admin tokens are stored in localStorage
- Protected routes redirect to login if not authenticated
- Environment variables are prefixed with `VITE_` for Vite compatibility

## Development vs Production

### Development
- API Base URL: `http://localhost:8000`
- Hot reloading enabled
- Debug logging available

### Production
- API Base URL: Your production API domain
- Optimized builds
- Error handling and user feedback
