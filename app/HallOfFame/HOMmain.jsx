import React from 'react';

// Sample data. In a real Next.js app, you might fetch this
// using getStaticProps or getServerSideProps.
const hallOfFameData = [
    {
        id: 1,
        imgSrc: 'https://i.pinimg.com/originals/d7/22/3f/d7223fe728e09a9b64c944ee010ad6ad.jpg',
        title: 'The TALISMANS',
        description: 'Won the BGMI KICKOFFS this year',
        eventLink: '/events'
    },
    {
        id: 6,
        imgSrc: 'https://i.pinimg.com/736x/9f/e3/39/9fe3395929c45628930c44e3b6449194.jpg',
        title: 'Aniket Kumar Singh',
        description: 'Won the Clash Royale Fresher Fiesta this year',
        eventLink: '/events'
    },
    
    {
        id: 5,
        imgSrc: 'https://i.pinimg.com/736x/46/9e/f5/469ef5a2ed06420a7b915bc34ef9f340.jpg',
        title: 'God pranjall',
        description: 'Winner of Stumble Guys Fresher Fiesta ',
        eventLink: '/events'
    },
    {
        id: 2,
        imgSrc: 'https://i.pinimg.com/736x/59/0c/a7/590ca77b4d95284a9e16017234f683c5.jpg',
        title: 'Winner of Upcoming BGMI tournament',
        description: 'This space awaits the one who will rewrite the game the future is loading…',
        eventLink: '/events'
    },
    {
        id: 3,
        imgSrc: 'https://i.pinimg.com/736x/59/0c/a7/590ca77b4d95284a9e16017234f683c5.jpg',
        title: '1st Runner Up of Upcoming BGMI tournament',
        description: 'This space awaits the one who will rewrite the game the future is loading…',
        eventLink: '/events'
    },
    {
        id: 4,
        imgSrc: 'https://i.pinimg.com/736x/59/0c/a7/590ca77b4d95284a9e16017234f683c5.jpg',
        title: '2nd Runner up of Upcoming BGMI tournament',
        description: 'This space awaits the one who will rewrite the game the future is loading…',
        eventLink: '/events'
    }
    
   
];

/**
 * Main App component.
 * In a Next.js project, this would be your page component.
 * It assumes Tailwind CSS is set up globally.
 */
export default function HOMmain() {

    // Handles image loading errors, replacing broken images with a placeholder
    const handleImageError = (e) => {
        e.target.src = 'https://placehold.co/600x400/111827/f97316?text=Image+Error';
        e.target.onerror = null; // Prevent infinite error loops
    };

    return (
        // In a real Next.js app, these base styles would often be in layout.js or _app.js
        <div className="bg-black text-gray-200 min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
            
            <div className="h-16 md:h-20 w-full">
            </div>

            {/* 2. Main Content Area */}
            <main className="container mx-auto px-6 py-12">
                
                {/* Page Title */}
                <header className="text-center mb-12">
                    <h2 className="text-5xl font-sprintura text-white tracking-tight " style={{ fontFamily: "sprintura,'Inter', sans-serif" }}>
                        Hall of <span className="text-orange-500 font-sprintura">Fame</span>
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg">Celebrating the legends of our community.</p>
                </header>

                {/* Responsive Grid:
                  - 1 column on small screens (default)
                  - 2 columns on medium screens (md:grid-cols-2)
                  - 3 columns on large screens (lg:grid-cols-3)
                */}
                <div id="hall-of-fame-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* This is the React way to create a dynamic list.
                      We map over the data array and return a JSX element for each item.
                    */}
                    {hallOfFameData.map((item) => (
                        <div 
                          key={item.id} // Use a unique id for the key
                          className="bg-black rounded-lg overflow-hidden shadow-2xl shadow-orange-600/10 border border-orange-600/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-orange-600/20"
                        >
                            
                            {/* Card Image Wrapper for Squarish Aspect Ratio */}
                            <div className="relative w-full pt-[100%]"> {/* pt-[100%] makes the height equal to the width */}
                                <img 
                                    src={item.imgSrc}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover" // Image fills the aspect ratio container
                                    onError={handleImageError}
                                />
                            </div>
                            
                            {/* Card Content */}
                            <div className="p-6">
                                {/* Title */}
                                <h3 className="text-2xl font-bold text-orange-500 mb-2">{item.title}</h3>
                                
                                {/* Description */}
                                <p className="text-gray-300 text-base mb-6">{item.description}</p>
                                
                                {/* Button:
                                  In a real Next.js app, you'd use the <Link> component
                                  from 'next/link' for internal navigation:
                                  import Link from 'next/link';
                                  <Link href={item.eventLink}> ... </Link>
                                */}
                                <a 
                                   href={item.eventLink}
                                   className="inline-block bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 hover:bg-orange-500 transform hover:-translate-y-1 shadow-lg hover:shadow-orange-600/30"
                                >
                                    Go to Event
                                </a>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </main>

            {/* 3. Footer removed as requested */}
        </div>
    );
}

