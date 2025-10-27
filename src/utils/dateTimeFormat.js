export const formatDate = (dateString) => {
        if (!dateString) return "";

        // Parse the ISO string safely
        const date = new Date(dateString);

        if (isNaN(date.getTime())) return dateString; // fallback if invalid date

        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        };


export const convertTime = (time24) => {
        const [hours, minutes] = time24.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hour12 = hour % 12 || 12;
        return `${hour12}:${minutes} ${ampm}`;
    }