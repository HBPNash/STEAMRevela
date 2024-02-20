const CategoryTag = ({ title }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
  );
};

export default CategoryTag;