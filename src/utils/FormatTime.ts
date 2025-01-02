// export const formatCreateTime = (createdAt: string) => {
//      const createdAtDate = new Date(createdAt);
//      const now = new Date();
//      const timePassed = (now.getTime() - createdAtDate.getTime()) / 1000; // time in seconds

//      if (timePassed < 60) {
//           return "vừa xong"; // less than a minute ago
//      }
//      if (timePassed >= 60 && timePassed < 3600) {
//           const minutes = Math.floor(timePassed / 60); // Convert to minutes
//           return `${minutes} phút`;
//      }
//      if (timePassed >= 3600 && timePassed < 86400) {
//           const hours = Math.floor(timePassed / 3600); // Convert to hours
//           return `${hours} giờ`;
//      }
//      const days = Math.ceil(timePassed / (1000 * 60 * 60 * 24)); // Convert to days
//      return `${days} ngày`;
// };


export const formatCreatedTime = (createdAt: string) => {
     const createdAtDate = new Date(createdAt);
     const now = new Date();
     const timePassed = (now.getTime() - createdAtDate.getTime()) / 1000;

     if (timePassed < 60) {
          return "1 phút";
     }
     if (timePassed >= 60 && timePassed < 3600) {
          const minutes = Math.floor(timePassed / 60);
          return `${minutes} phút`;
     }
     if (timePassed >= 3600 && timePassed < 86400) {
          const hours = Math.floor(timePassed / 3600);
          return `${hours} giờ`;
     }
     if (timePassed >= 86400 && timePassed < 2592000) {
          const days = Math.floor(timePassed / 86400);
          return `${days} ngày`;
     }
     if (timePassed >= 2592000 && timePassed < 31536000) {
          const months = Math.floor(timePassed / 2592000);
          return `${months} tháng`;
     }
     const years = Math.floor(timePassed / 31536000);
     return `${years} năm`;
};