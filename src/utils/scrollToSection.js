// Utility function to scroll to a specific section by ID
export const scrollToSection = (sectionId, offset = 100) => {
    const element = document.getElementById(sectionId)
    if (element) {
        const elementPosition = element.offsetTop - offset
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        })
    }
}

// Hook to handle hash navigation on page load
export const useHashNavigation = (location) => {
    const handleHashNavigation = () => {
        const hash = location.hash
        if (hash) {
            // Remove the # from the hash
            const sectionId = hash.substring(1)
            // Small delay to ensure the page has rendered
            setTimeout(() => {
                scrollToSection(sectionId)
            }, 100)
        }
    }

    return handleHashNavigation
}
