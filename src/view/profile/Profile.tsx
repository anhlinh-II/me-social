import ProfileInfo from "../../components/profile/ProfileInfo";
import PostGrid from "../../components/profile/PostGrid";

const Profile = () => {
    const posts = [
        {
          id: 1,
          imageUrl: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/459319351_1161528778666994_8405889229020143399_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=JQDx1TKCCdkQ7kNvgFc6oQO&_nc_gid=84af01079a8f4778ad022f59a2ba1962&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzQ1NTc0NTAxNzY1NjkxMDE0Nw%3D%3D.3-ccb7-5&oh=00_AYDpxgA_30kqK23K16I7V3TpEhPHCMzFX2cNRDl6voCXCA&oe=66F8349F&_nc_sid=7a9f4b',
          altText: 'Post 1',
          content: '1 Billion follows on social medias!',
          likes: 120,
          comments: [
            { id: 1, username: 'john_doe', text: 'Beautiful!' },
            { id: 2, username: 'jane_smith', text: 'Wish I was there!' },
          ],
        },
        {
          id: 2,
          imageUrl: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/430818351_1034560898030450_5363521448821745273_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDI3eDE0Mjcuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=wnFSNF5kazcQ7kNvgHeV44W&_nc_gid=827766f3e7db4752ac9f155d5230a6a5&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzMxNzcwOTkwMTI1NjkxNzE3OA%3D%3D.3-ccb7-5&oh=00_AYC9mFEMbanq9mRDRnzqo8M_WjK1P28jQKXm_xUsW8MwKA&oe=66F852EE&_nc_sid=22de04',
          altText: 'Post 2',
          content: 'First person to have 5 Champions Leagues',
          likes: 95,
          comments: [
            { id: 1, username: 'alex123', text: 'Looks amazing!' },
          ],
        },
        {
          id: 3,
          imageUrl: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/457270142_18572560834056421_6314159944354470177_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=uAs-ImE9NkAQ7kNvgEFD6UX&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQ0NTQ5NTYzOTkxMDE0NzUwMw%3D%3D.3-ccb7-5&oh=00_AYDIuO0yyNG4-mYtVldxwd0HbFAFu-EGw23vtLYcLgB7aQ&oe=66F828FB&_nc_sid=22de04',
          altText: 'Post 3',
          content: 'Greatest player of Champions League',
          likes: 45,
          comments: [
            { id: 1, username: 'mike_b', text: 'Agreed!' },
            { id: 2, username: 'susan_w', text: 'GOAT' },
          ],
        },
        {
            id: 4,
            imageUrl: 'https://instagram.fhan2-3.fna.fbcdn.net/v/t39.30808-6/420969841_18527744611056421_6138104271012157712_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDExMzcuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_cat=101&_nc_ohc=okwvbMi4NkoQ7kNvgEymzSD&_nc_gid=52b540caa9b24ff19d10e4b2d2b26103&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzI4NDY1MjczNTYzNzQzMDU4Mg%3D%3D.3-ccb7-5&oh=00_AYBUJ3SJR-9zsOVQ0QKr8pZFRavcvgUfezJ6DBunEjKFUA&oe=66F85952&_nc_sid=22de04',
            altText: 'Post 4',
            content: 'GOAT GOAT GOAT',
            likes: 45,
            comments: [
              { id: 1, username: 'mike_b', text: 'Agreed!' },
              { id: 2, username: 'susan_w', text: 'GOAT' },
            ],
          },
          {
            id: 5,
            imageUrl: 'https://instagram.fhan2-3.fna.fbcdn.net/v/t39.30808-6/447900670_18556903186056421_1660097774333337807_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_cat=101&_nc_ohc=xBTj8iIr8DMQ7kNvgEMSAh6&_nc_gid=f2a8a2b88a9140369a52b96a9aebf903&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzM4NjYzNTY3NDY5OTYyMDc1Ng%3D%3D.3-ccb7-5&oh=00_AYBjVZIl4hMJ326CqCQUSsMgyzRdPl4OSSngRCVc2N1PKQ&oe=66F83588&_nc_sid=22de04',
            altText: 'Post 5',
            content: 'Helping children',
            likes: 45,
            comments: [
              { id: 1, username: 'mike_b', text: 'Agreed!' },
              { id: 2, username: 'susan_w', text: 'GOAT' },
            ],
          },
          {
            id: 6,
            imageUrl: 'https://instagram.fhan2-3.fna.fbcdn.net/v/t39.30808-6/454471706_18568576603056421_4779549979449060814_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_cat=101&_nc_ohc=9zhKClfBUuIQ7kNvgECWd87&_nc_gid=6c35a162f21743ce95d4ae2817b82a30&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQzMDI0ODU4MjM4OTcxMTc3Ng%3D%3D.3-ccb7-5&oh=00_AYCMP3y97hdRF-VfDNAg47yqgBbA_KvjzzF_DF0aW3JYHA&oe=66F846AC&_nc_sid=22de04',
            altText: 'Post 6',
            content: 'Fighting for the country!',
            likes: 45,
            comments: [
              { id: 1, username: 'mike_b', text: 'Agreed!' },
              { id: 2, username: 'susan_w', text: 'GOAT' },
            ],
          },
      ];
    
    return (
        <>
            {/* <Header /> */}
            <div className="flex max-w-7xl items-center justify-between mt-[72px]">
                {/* <div><SideBar /></div> */}
                <div id="detail" className="">
                    {/* <Outlet /> */}
                    <div>
                        <ProfileInfo
                            profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s"
                            username="Cristiano Ronaldo"
                            posts={3749}
                            followers={639607594}
                            following={579}
                            bio="GOAT! No.1 in the world! SIUUUbscribe to my Youtube Channel!"
                        />
                    </div>
                    <div>
                        <PostGrid posts={posts} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;