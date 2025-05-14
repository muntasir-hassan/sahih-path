const HadithLessons = ({ hadiths }) => {
  return (
    <div className="bg-muted min-h-[70vh] p-6 text-text">
      <h1 className="text-3xl font-bold mb-6 text-primary">Hadith Lessons</h1>
      {hadiths.map((hadith, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-5 mb-6 border-l-4 border-primary"
        >
          <p className="text-right font-arabic text-xl mb-4">{hadith.arabic}</p>
          <p className="text-base mb-2">
            <span className="font-semibold">Translation:</span>{" "}
            {hadith.translation}
          </p>
          <p className="text-sm mb-2">
            <span className="font-semibold">Explanation:</span>{" "}
            {hadith.explanation}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Narrator:</span> {hadith.narrator} |
            <span className="font-semibold"> Source:</span> {hadith.source}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HadithLessons;
