import React from 'react';
import GroupSuggestCard from './GroupSuggestCard';

const GroupSuggestion: React.FC = () => {
    const groups = [
        { id: 1, name: 'Group 1', imageUrl: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/457270142_18572560834056421_6314159944354470177_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=uAs-ImE9NkAQ7kNvgEFD6UX&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQ0NTQ5NTYzOTkxMDE0NzUwMw%3D%3D.3-ccb7-5&oh=00_AYDIuO0yyNG4-mYtVldxwd0HbFAFu-EGw23vtLYcLgB7aQ&oe=66F828FB&_nc_sid=22de04' },
        { id: 2, name: 'Group 2', imageUrl: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/457270142_18572560834056421_6314159944354470177_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=uAs-ImE9NkAQ7kNvgEFD6UX&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQ0NTQ5NTYzOTkxMDE0NzUwMw%3D%3D.3-ccb7-5&oh=00_AYDIuO0yyNG4-mYtVldxwd0HbFAFu-EGw23vtLYcLgB7aQ&oe=66F828FB&_nc_sid=22de04' },
        { id: 3, name: 'Group 3', imageUrl: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/457270142_18572560834056421_6314159944354470177_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=uAs-ImE9NkAQ7kNvgEFD6UX&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQ0NTQ5NTYzOTkxMDE0NzUwMw%3D%3D.3-ccb7-5&oh=00_AYDIuO0yyNG4-mYtVldxwd0HbFAFu-EGw23vtLYcLgB7aQ&oe=66F828FB&_nc_sid=22de04' },
        { id: 4, name: 'Group 4', imageUrl: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/457270142_18572560834056421_6314159944354470177_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=uAs-ImE9NkAQ7kNvgEFD6UX&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQ0NTQ5NTYzOTkxMDE0NzUwMw%3D%3D.3-ccb7-5&oh=00_AYDIuO0yyNG4-mYtVldxwd0HbFAFu-EGw23vtLYcLgB7aQ&oe=66F828FB&_nc_sid=22de04' },
        { id: 5, name: 'Group 5', imageUrl: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/457270142_18572560834056421_6314159944354470177_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=uAs-ImE9NkAQ7kNvgEFD6UX&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQ0NTQ5NTYzOTkxMDE0NzUwMw%3D%3D.3-ccb7-5&oh=00_AYDIuO0yyNG4-mYtVldxwd0HbFAFu-EGw23vtLYcLgB7aQ&oe=66F828FB&_nc_sid=22de04' },
        { id: 6, name: 'Group 6', imageUrl: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/457270142_18572560834056421_6314159944354470177_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=uAs-ImE9NkAQ7kNvgEFD6UX&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQ0NTQ5NTYzOTkxMDE0NzUwMw%3D%3D.3-ccb7-5&oh=00_AYDIuO0yyNG4-mYtVldxwd0HbFAFu-EGw23vtLYcLgB7aQ&oe=66F828FB&_nc_sid=22de04' },
        { id: 7, name: 'Group 7', imageUrl: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/457270142_18572560834056421_6314159944354470177_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=uAs-ImE9NkAQ7kNvgEFD6UX&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQ0NTQ5NTYzOTkxMDE0NzUwMw%3D%3D.3-ccb7-5&oh=00_AYDIuO0yyNG4-mYtVldxwd0HbFAFu-EGw23vtLYcLgB7aQ&oe=66F828FB&_nc_sid=22de04' },
        { id: 8, name: 'Group 8', imageUrl: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/457270142_18572560834056421_6314159944354470177_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=uAs-ImE9NkAQ7kNvgEFD6UX&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQ0NTQ5NTYzOTkxMDE0NzUwMw%3D%3D.3-ccb7-5&oh=00_AYDIuO0yyNG4-mYtVldxwd0HbFAFu-EGw23vtLYcLgB7aQ&oe=66F828FB&_nc_sid=22de04' },
        { id: 9, name: 'Group 9', imageUrl: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/457270142_18572560834056421_6314159944354470177_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=uAs-ImE9NkAQ7kNvgEFD6UX&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQ0NTQ5NTYzOTkxMDE0NzUwMw%3D%3D.3-ccb7-5&oh=00_AYDIuO0yyNG4-mYtVldxwd0HbFAFu-EGw23vtLYcLgB7aQ&oe=66F828FB&_nc_sid=22de04' },
    ];

    return (
        <div className='mt-5'>
            <h5 className="font-bold mb-6">Các nhóm gợi ý cho bạn</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {groups.map(group => (
                    <GroupSuggestCard key={group.id} imageUrl={group.imageUrl} groupName={group.name} />
                ))}
            </div>
        </div>
    );
};

export default GroupSuggestion;
