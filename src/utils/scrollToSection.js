// Utility function to scroll to a specific section by ID
export const scrollToSection = (sectionId, offset = 100) => {
    console.log('scrollToSection called with:', sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
        // Try scrollIntoView first as it's more reliable
        try {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            })
            console.log('Used scrollIntoView for:', sectionId)
        } catch (error) {
            console.log('scrollIntoView failed, using manual scroll for:', sectionId)
            console.log(error)
            // Fallback to manual scroll
            const navbarHeight = window.innerWidth <= 768 ? 60 : 70
            const elementPosition = element.offsetTop - navbarHeight - offset
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            })
        }
    } else {
        console.log('Element not found:', sectionId)
    }
}

// Hook to handle hash navigation on page load
export const useHashNavigation = (location) => {
    const handleHashNavigation = () => {
        const hash = location.hash
        if (hash) {
            // Remove the # from the hash
            const sectionId = hash.substring(1)
            // Try to scroll immediately, and retry if element not found
            const element = document.getElementById(sectionId)
            if (element) {
                scrollToSection(sectionId)
            } else {
                // If element not found, retry after a delay
                setTimeout(() => {
                    scrollToSection(sectionId)
                }, 100)
            }
        }
    }

    return handleHashNavigation
}
