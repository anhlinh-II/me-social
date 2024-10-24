import { ProfileStoryProps } from "./profile/ProfileStory";
import { ReelGridProps } from "./profile/ReelGrid";

export const chats = [
    {
        id: 1,
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        lastChat: 'Hey, how are you?',
        lastChatSince: '2 phút',
    },
    {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        lastChat: 'Let’s meet tomorrow.',
        lastChatSince: '10 phút',
    },
    {
        id: 3,
        name: 'Alice Brown',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        lastChat: 'Thanks for your help!',
        lastChatSince: '1 giờ',
    },
    {
        id: 4,
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        lastChat: 'Hey, how are you?',
        lastChatSince: '2 phút',
    },
    {
        id: 5,
        name: 'Jane Smith',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        lastChat: 'Let’s meet tomorrow.',
        lastChatSince: '10 phút',
    },
    {
        id: 6,
        name: 'Alice Brown',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        lastChat: 'Thanks for your help!',
        lastChatSince: '1 giờ',
    },
    {
        id: 7,
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        lastChat: 'Hey, how are you?',
        lastChatSince: '2 phút',
    },
    {
        id: 8,
        name: 'Jane Smith',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        lastChat: 'Let’s meet tomorrow.',
        lastChatSince: '10 phút',
    },
    {
        id: 9,
        name: 'Alice Brown',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        lastChat: 'Thanks for your help!',
        lastChatSince: '1 giờ',
    },
]

export const notifications = [

    {
        id: 1,
        avatar: 'https://i.pravatar.cc/150?img=1',
        content: 'Người dùng A đã gửi cho bạn một tin nhắn.',
        createdAt: '2024-10-17T14:30:00Z',
    },
    {
        id: 2,
        avatar: 'https://i.pravatar.cc/150?img=2',
        content: 'Người dùng B đã thích bài viết của bạn.',
        createdAt: '2024-10-17T13:15:00Z',
    },
    {
        id: 3,
        avatar: 'https://i.pravatar.cc/150?img=3',
        content: 'Người dùng C đã mời bạn tham gia nhóm.',
        createdAt: '2024-10-17T12:45:00Z',
    },
    {
        id: 4,
        avatar: 'https://i.pravatar.cc/150?img=4',
        content: 'Người dùng D đã bình luận về bài viết của bạn.',
        createdAt: '2024-10-17T11:00:00Z',
    },
    {
        id: 5,
        avatar: 'https://i.pravatar.cc/150?img=5',
        content: 'Người dùng E đã chia sẻ một bài viết.',
        createdAt: '2024-10-17T10:20:00Z',
    },
    {
        id: 6,
        avatar: 'https://i.pravatar.cc/150?img=6',
        content: 'Người dùng F đã yêu cầu kết bạn.',
        createdAt: '2024-10-17T09:00:00Z',
    },
    {
        id: 7,
        avatar: 'https://i.pravatar.cc/150?img=7',
        content: 'Người dùng G đã theo dõi bạn.',
        createdAt: '2024-10-16T18:30:00Z',
    },
    {
        id: 8,
        avatar: 'https://i.pravatar.cc/150?img=8',
        content: 'Người dùng H đã báo cáo bài viết của bạn.',
        createdAt: '2024-10-16T16:45:00Z',
    },
    {
        id: 9,
        avatar: 'https://i.pravatar.cc/150?img=9',
        content: 'Người dùng I đã gợi ý bạn một nhóm.',
        createdAt: '2024-10-16T14:00:00Z',
    },
    {
        id: 10,
        avatar: 'https://i.pravatar.cc/150?img=10',
        content: 'Người dùng J đã tạo một bài viết mới.',
        createdAt: '2024-10-16T12:30:00Z',
    },
];

interface GroupCardProps {
    id: number;
    imageUrl: string;
    groupName: string;
    lastActivitySince: Date;
}

const fakeGroups: GroupCardProps[] = [
    {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNvbW11bml0eSUyMGdyb3VwfGVufDB8fHx8MTY5OTg0NDU5Nw&ixlib=rb-1.2.1&q=80&w=1080",
        groupName: "Outdoor Adventure Enthusiasts ",
        lastActivitySince: new Date(Date.now() - 1000 * 60 * 10), // 10 phút trước
    },
    {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNvbW11bml0eSUyMGdyb3VwfGVufDB8fHx8MTY5OTg0NDU5Nw&ixlib=rb-1.2.1&q=80&w=1080",
        groupName: "Sustainable Living Advocates",
        lastActivitySince: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 giờ trước
    },
    {
        id: 3,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s",
        groupName: "Joining groups with crazy long names instead of just updating my status",
        lastActivitySince: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1), // 1 ngày trước
    },
    {
        id: 4,
        imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGNvbW11bml0eSUyMGdyb3VwfGVufDB8fHx8MTY5OTg0NDU5Nw&ixlib=rb-1.2.1&q=80&w=1080",
        groupName: "Health and Wellness Warriors",
        lastActivitySince: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 ngày trước
    },
    {
        id: 5,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s",
        groupName: "Tech Innovators and Entrepreneurs",
        lastActivitySince: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7 * 1), // 1 tuần trước
    },
    {
        id: 6,
        imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGNvbW11bml0eSUyMGdyb3VwfGVufDB8fHx8MTY5OTg0NDU5Nw&ixlib=rb-1.2.1&q=80&w=1080",
        groupName: "Creative Writers Collective",
        lastActivitySince: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7 * 2), // 2 tuần trước
    },
    {
        id: 7,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGNvbW11bml0eSUyMGdyb3VwfGVufDB8fHx8MTY5OTg0NDU5Nw&ixlib=rb-1.2.1&q=80&w=1080",
        groupName: "Mindfulness and Meditation Seekers",
        lastActivitySince: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30 * 1), // 1 tháng trước
    },
    {
        id: 8,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s",
        groupName: "Culinary Arts and Food Lovers",
        lastActivitySince: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30 * 3), // 3 tháng trước
    },
    {
        id: 9,
        imageUrl: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fGNvbW11bml0eSUyMGdyb3VwfGVufDB8fHx8MTY5OTg0NDU5Nw&ixlib=rb-1.2.1&q=80&w=1080",
        groupName: "Fitness Fanatics and Gym Rats",
        lastActivitySince: new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 1), // 1 năm trước
    },
    {
        id: 10,
        imageUrl: "https://images.unsplash.com/photo-1484249170766-998fa6efe3c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfGNvbW11bml0eSUyMGdyb3VwfGVufDB8fHx8MTY5OTg0NDU5Nw&ixlib=rb-1.2.1&q=80&w=1080",
        groupName: "Pet Lovers and Animal Welfare",
        lastActivitySince: new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 2), // 2 năm trước
    },
    {
        id: 11,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s",
        groupName: "Art and Photography Enthusiasts",
        lastActivitySince: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 giờ trước
    },
    {
        id: 12,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s",
        groupName: "Travel and Adventure Seekers",
        lastActivitySince: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4), // 4 ngày trước
    },
    {
        id: 13,
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNvbW11bml0eSUyMGdyb3VwfGVufDB8fHx8MTY5OTg0NDU5Nw&ixlib=rb-1.2.1&q=80&w=1080",
        groupName: "Book Club and Literature Lovers",
        lastActivitySince: new Date(Date.now() - 1000 * 60 * 2), // 2 phút trước
    },
    {
        id: 14,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s",
        groupName: "Film Critics and Movie Buffs",
        lastActivitySince: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30 * 6), // 6 tháng trước
    },
];

export default fakeGroups;

// Fakedata for Reel and Comments

export const fakeReel: ReelGridProps = {
    reels: [
      {
        id: 3,
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4", // video thật
        posterUrl: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg", // poster thật
        altText: "Sintel Trailer",
        content: "The official trailer of Sintel, an open movie project by Blender Foundation.",
        views: 93919185,
        likes: 4693535,
        commentNum: 93535,
        comments: [
          {
            id: 1,
            username: "film_buff",
            text: "Sintel is visually stunning!"
          },
          {
            id: 2,
            username: "movie_critic",
            text: "Can't wait to see the full movie."
          },
          {
            id: 3,
            username: "animation_lover",
            text: "The animation quality is top-notch!"
          }
        ]
      },
      {
        id: 1,
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // video thật
        posterUrl: "https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg", // poster thật
        altText: "Big Buck Bunny Video",
        content: "A funny animated short film by Blender Foundation",
        views: 7469185,
        likes: 393535,
        commentNum: 93535,
        comments: [
          {
            id: 1,
            username: "john_doe",
            text: "This is hilarious!"
          },
          {
            id: 2,
            username: "jane_smith",
            text: "Love the animation!"
          }
        ]
      },
      {
        id: 2,
        videoUrl: "https://www.w3schools.com/html/movie.mp4", // video thật
        posterUrl: "https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg", // poster thật
        altText: "Sample HTML5 Video",
        content: "An HTML5 sample video showing different video formats.",
        views: 929185,
        likes: 793535,
        commentNum: 93535,
        comments: [
          {
            id: 1,
            username: "alice_wonderland",
            text: "Really cool technology demo."
          },
          {
            id: 2,
            username: "bob_marley",
            text: "I learned something new today!"
          }
        ]
      },
    ]
  };
  
  export const fakeStory: ProfileStoryProps = {
    stories: [
      
      {
        id: 3,
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4", // video thật
        posterUrl: "https://vov.vn/sites/default/files/styles/large/public/2024-08/ro.jpg", // poster thật
        altText: "Sintel Trailer",
        content: "Love💖",
        likes: 6537209,
        commentNum: 93535,
        comments: [
          {
            id: 1,
            username: "film_buff",
            text: "Sintel is visually stunning!"
          },
          {
            id: 2,
            username: "movie_critic",
            text: "Can't wait to see the full movie."
          },
          {
            id: 3,
            username: "animation_lover",
            text: "The animation quality is top-notch!"
          }
        ]
      },
      {
        id: 4,
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // video thật
        posterUrl: "http://localhost:5173/src/assets/jisoo.jpg", // poster thật
        altText: "Big Buck Bunny Video",
        content: "Family👪",
        likes: 723967,
        commentNum: 52135,
        comments: [
          {
            id: 1,
            username: "john_doe",
            text: "This is hilarious!"
          },
          {
            id: 2,
            username: "jane_smith",
            text: "Love the animation!"
          }
        ]
      },
      {
        id: 5,
        videoUrl: "https://www.w3schools.com/html/movie.mp4", // video thật
        posterUrl: "https://nld.mediacdn.vn/zoom/594_371/291774122806476800/2024/5/22/367665968-1043122716604056-338-6755-5396-1698222857-1716365427555912026234-126-0-595-750-crop-17163656793691494473476.jpg", // poster thật
        altText: "Sample HTML5 Video",
        content: "Love💖",
        likes: 976712,
        commentNum: 47359,
        comments: [
          {
            id: 1,
            username: "alice_wonderland",
            text: "Really cool technology demo."
          },
          {
            id: 2,
            username: "bob_marley",
            text: "I learned something new today!"
          }
        ]
      },
      {
        id: 6,
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4", // video thật
        posterUrl: "http://localhost:5173/src/assets/me1.jpg", // poster thật
        altText: "Sintel Trailer",
        content: "hehe🙃",
        likes: 845651,
        commentNum: 23535,
        comments: [
          {
            id: 1,
            username: "film_buff",
            text: "Sintel is visually stunning!"
          },
          {
            id: 2,
            username: "movie_critic",
            text: "Can't wait to see the full movie."
          },
          {
            id: 3,
            username: "animation_lover",
            text: "The animation quality is top-notch!"
          }
        ]
      }
    ]
  };