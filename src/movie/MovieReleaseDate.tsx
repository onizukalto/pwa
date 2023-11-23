import React from 'react';


const MovieReleaseDate: React.FC<{ releaseDate?: string }> = ({ releaseDate }) => {
    if (!releaseDate) {
        return <div>Date non disponible</div>;
    }

    const formatDate = (dateStr: string): string => {
        const date = new Date(dateStr);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${months[date.getMonth()]} ${date.getDate()} , ${date.getFullYear()}`;
    };

    return <div className = "italic">{formatDate(releaseDate)}</div>;
  };

  export default MovieReleaseDate;