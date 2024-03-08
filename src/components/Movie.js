import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  const truncateSummary = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };
  return (
    <div>
      <div className="flex justify-center flex-wrap">
        <div className="max-w-md w-full p-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <Link to={`/movie/${id}`}>
              <img src={coverImg} alt={title} className="w-full h-auto" />
              <div className="px-4 py-2">
                <h2 className="max-w-lg text-2xl font-semibold leading-relaxed text-gray-900 dark:text-black">
                  {title}
                </h2>
                <p className="text-gray-600 whitespace-pre-line dark:text-gray-600 font-serif">
                  {truncateSummary(summary, 150)}
                </p>
                <hr className="mt-3" />
                <ul className="mt-3">
                  {genres.map((genre) => (
                    <li
                      key={genre}
                      className="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 px-3 py-1 mr-2 mb-2"
                    >
                      {genre}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
