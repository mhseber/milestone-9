// import React from 'react';

// const NewsCard = ({ news }) => {
//     console.log(news);
//     return (
//         <div>
//             {news.title}

//         </div>
//     );
// };

// export default NewsCard;

import { FaArrowRight } from 'react-icons/fa';

const ArticleCard = ({ title, author, rating, thumbnail_url, details, total_view, others_info }) => {
    return (
        <div className="max-w-md rounded-lg shadow-lg overflow-hidden bg-white transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <img src={thumbnail_url} alt="Thumbnail" className="w-full h-48 object-cover" />
            <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 truncate">{title}</h3>

                {/* Rating */}
                <div className="flex items-center text-sm text-yellow-500 mt-2">
                    <span>{rating.number}</span>
                    <span className="ml-1">({rating.badge})</span>
                </div>

                {/* Author info */}
                <div className="flex items-center mt-4">
                    <img src={author.img} alt="Author" className="w-10 h-10 rounded-full border-2 border-gray-300" />
                    <div className="ml-2">
                        <p className="text-sm font-semibold text-gray-700">{author.name}</p>
                        <p className="text-xs text-gray-500">{new Date(author.published_date).toLocaleDateString()}</p>
                    </div>
                </div>

                {/* Details & Trending Badge */}
                <p className="text-sm text-gray-500 mt-4">{details.length > 120 ? details.slice(0, 120) + "..." : details}</p>

                <div className="flex items-center justify-between mt-4">
                    {others_info.is_trending && (
                        <span className="text-xs bg-teal-500 text-white py-1 px-2 rounded-full">Trending</span>
                    )}
                    <div className="flex items-center text-xs text-gray-500 space-x-1">
                        <span>{total_view} views</span>
                        <button className="btn btn-primary btn-sm flex items-center space-x-1">
                            <span>Read More</span>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function App() {
    const demoData = [
        {
            "_id": "0282e0e58a5c404fbd15261f11c2ab6a",
            "others_info": { "is_todays_pick": false, "is_trending": true },
            "category_id": "01",
            "rating": { "number": 4.5, "badge": "Excellent" },
            "total_view": 488,
            "title": "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
            "author": {
                "name": "Jimmy Dane",
                "published_date": "2022-08-24 17:27:34",
                "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            },
            "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
            "details": "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States...",
            "total_view": 488
        },
        // Additional articles can be added here
    ];

    return (
        <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
            {demoData.map((article) => (
                <ArticleCard key={article._id} {...article} />
            ))}
        </div>
    );
}



