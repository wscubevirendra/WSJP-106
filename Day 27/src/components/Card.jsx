const Card = () => {
    const cards = [
        {
            title: "Card 1",
            description: "This is the first card description",
            imageUrl: "https://via.placeholder.com/300x200",
        },
        {
            title: "Card 2",
            description: "This is the second card description",
            imageUrl: "https://via.placeholder.com/300x200",
        },
        {
            title: "Card 3",
            description: "This is the third card description",
            imageUrl: "https://via.placeholder.com/300x200",
        },
    ];

    return (
        <div className="p-8">
            <div className="flex gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="w-[300px] bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <img
                            src={card.imageUrl}
                            alt={card.title}
                            className="w-full h-[200px] object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                            <p className="text-gray-600">{card.description}</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;