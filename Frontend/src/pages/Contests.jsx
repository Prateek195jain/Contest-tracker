import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function Contests() {
  const { platform } = useParams();
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContests() {
      try {
        setLoading(true);
        setError(null);

        const url =
          platform === "all"
            ? "http://localhost:4000/contests" // Fetch all contests
            : `http://localhost:4000/contests/${platform}`; // Fetch platform-specific contests

        const response = await fetch(url);
        const result = await response.json();

        if (result.status !== "success") {
          throw new Error("Failed to fetch contests");
        }

        setContests(result.data || []);
      } catch (err) {
        setError("Error fetching contests");
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchContests();
  }, [platform]);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Title */}
      <motion.h2
        className="text-4xl font-extrabold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {platform === "all"
          ? "All Coding Contests"
          : `${platform.toUpperCase()} Contests`}
      </motion.h2>

      {/* Loading and Error Handling */}
      {loading ? (
        <motion.p
          className="text-center text-gray-300 mt-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Loading contests...
        </motion.p>
      ) : error ? (
        <motion.p
          className="text-center text-red-400 mt-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      ) : contests.length === 0 ? (
        <motion.p
          className="text-center text-gray-300 mt-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No contests available.
        </motion.p>
      ) : (
        <motion.div
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {contests.map((contest, index) => (
            <motion.div
              key={contest.name}
              className="bg-gray-800 shadow-xl rounded-lg p-6 border border-gray-700 transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-blue-400">
                {contest.name}
              </h3>
              <p className="text-gray-300 mt-2">
                🕒{" "}
                <span className="font-medium">
                  {new Date(contest.startTime).toLocaleString()}
                </span>
              </p>
              <p className="text-gray-300">
                ⏳ Duration:{" "}
                <span className="font-medium">{contest.duration}</span>
              </p>
              <a
                href={contest.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg transition duration-300"
              >
                View Contest
              </a>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default Contests;
