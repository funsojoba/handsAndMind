import { useState, useEffect } from "react"
import { apiCall, API_CONFIG } from "../../../../config/api"
import { BlogContainer, BlogList, BlogCard, BlogForm, FormGroup, ActionButtons, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "./style"

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [editingPost, setEditingPost] = useState(null)
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        excerpt: '',
        featuredImage: '',
        tags: '',
        status: 'draft'
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            const data = await apiCall(API_CONFIG.ENDPOINTS.BLOG)
            setPosts(data)
        } catch (error) {
            console.error('Error fetching posts:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const endpoint = editingPost 
                ? API_CONFIG.ENDPOINTS.BLOG_BY_ID(editingPost.id)
                : API_CONFIG.ENDPOINTS.BLOG
            const method = editingPost ? 'PUT' : 'POST'
            
            await apiCall(endpoint, {
                method,
                body: JSON.stringify({
                    ...formData,
                    tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
                })
            })

            fetchPosts()
            setShowModal(false)
            setEditingPost(null)
            setFormData({
                title: '',
                content: '',
                excerpt: '',
                featuredImage: '',
                tags: '',
                status: 'draft'
            })
        } catch (error) {
            console.error('Error saving post:', error)
        }
    }

    const handleEdit = (post) => {
        setEditingPost(post)
        setFormData({
            title: post.title,
            content: post.content,
            excerpt: post.excerpt,
            featuredImage: post.featuredImage || '',
            tags: post.tags ? post.tags.join(', ') : '',
            status: post.status
        })
        setShowModal(true)
    }

    const handleDelete = async (postId) => {
        if (window.confirm('Are you sure you want to delete this blog post?')) {
            try {
                await apiCall(API_CONFIG.ENDPOINTS.BLOG_BY_ID(postId), {
                    method: 'DELETE'
                })
                fetchPosts()
            } catch (error) {
                console.error('Error deleting post:', error)
            }
        }
    }

    const openCreateModal = () => {
        setEditingPost(null)
        setFormData({
            title: '',
            content: '',
            excerpt: '',
            featuredImage: '',
            tags: '',
            status: 'draft'
        })
        setShowModal(true)
    }

    if (isLoading) {
        return <div>Loading blog posts...</div>
    }

    return (
        <BlogContainer>
            <ActionButtons>
                <button className="primary" onClick={openCreateModal}>
                    + Create New Post
                </button>
            </ActionButtons>

            <BlogList>
                {posts.length === 0 ? (
                    <p>No blog posts found. Create your first post!</p>
                ) : (
                    posts.map(post => (
                        <BlogCard key={post.id}>
                            <div className="post-header">
                                <h3>{post.title}</h3>
                                <div className="post-meta">
                                    <span className={`status ${post.status}`}>{post.status}</span>
                                    <span className="date">{new Date(post.createdAt).toLocaleDateString()}</span>
                                </div>
                                <div className="post-actions">
                                    <button onClick={() => handleEdit(post)}>Edit</button>
                                    <button className="danger" onClick={() => handleDelete(post.id)}>Delete</button>
                                </div>
                            </div>
                            <div className="post-content">
                                <p className="excerpt">{post.excerpt}</p>
                                {post.tags && post.tags.length > 0 && (
                                    <div className="tags">
                                        {post.tags.map((tag, index) => (
                                            <span key={index} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </BlogCard>
                    ))
                )}
            </BlogList>

            {showModal && (
                <Modal>
                    <ModalContent>
                        <ModalHeader>
                            <h2>{editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}</h2>
                            <button onClick={() => setShowModal(false)}>×</button>
                        </ModalHeader>
                        <form onSubmit={handleSubmit}>
                            <ModalBody>
                                <FormGroup>
                                    <label htmlFor="title">Post Title *</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="excerpt">Excerpt *</label>
                                    <textarea
                                        id="excerpt"
                                        name="excerpt"
                                        value={formData.excerpt}
                                        onChange={handleInputChange}
                                        rows="3"
                                        placeholder="Brief description of the post..."
                                        required
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="content">Content *</label>
                                    <textarea
                                        id="content"
                                        name="content"
                                        value={formData.content}
                                        onChange={handleInputChange}
                                        rows="10"
                                        placeholder="Write your blog post content here..."
                                        required
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="featuredImage">Featured Image URL</label>
                                    <input
                                        type="url"
                                        id="featuredImage"
                                        name="featuredImage"
                                        value={formData.featuredImage}
                                        onChange={handleInputChange}
                                        placeholder="https://..."
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="tags">Tags (comma-separated)</label>
                                    <input
                                        type="text"
                                        id="tags"
                                        name="tags"
                                        value={formData.tags}
                                        onChange={handleInputChange}
                                        placeholder="foster care, parenting, support"
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="status">Status</label>
                                    <select
                                        id="status"
                                        name="status"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                    >
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                    </select>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="submit" className="primary">Save Post</button>
                            </ModalFooter>
                        </form>
                    </ModalContent>
                </Modal>
            )}
        </BlogContainer>
    )
}

export default Blog
