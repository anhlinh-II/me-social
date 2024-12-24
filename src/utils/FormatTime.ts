export const formatTime = (createdAt: string) => {
     const createdAtDate = new Date(createdAt);
     const now = new Date();
     const timePassed = (now.getTime() - createdAtDate.getTime()) / 1000; // time in seconds

     if (timePassed < 60) {
          return "vừa xong"; // less than a minute ago
     }
     if (timePassed >= 60 && timePassed < 3600) {
          const minutes = Math.floor(timePassed / 60); // Convert to minutes
          return `${minutes} phút`;
     }
     if (timePassed >= 3600 && timePassed < 86400) {
          const hours = Math.floor(timePassed / 3600); // Convert to hours
          return `${hours} giờ`;
     }
     const days = Math.ceil(timePassed / (1000 * 60 * 60 * 24)); // Convert to days
     return `${days} ngày`;
};