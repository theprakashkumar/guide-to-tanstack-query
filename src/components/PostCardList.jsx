const CardList = ({ cards }) => {
  return (
    <div className="flex flex-wrap gap-4 w-fit mx-auto max-w-xl mt-10">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-full rounded-lg border border-gray-300 p-4 bg-gray-50"
        >
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p className="text-sm text-gray-500">{card.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
