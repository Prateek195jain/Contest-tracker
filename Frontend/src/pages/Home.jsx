import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <motion.h1
        className="text-5xl font-extrabold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🚀 Welcome to <br />{" "}
        <span className="text-blue-400">Contest Tracker</span>
      </motion.h1>

      <motion.p
        className="text-gray-300 mt-4 text-lg text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Stay updated with upcoming coding contests across multiple platforms.
        Choose your favorite and start preparing! 💻🔥
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Link
          to="/contests/codeforces"
          className="px-8 py-3 text-lg font-semibold bg-red-500 rounded-lg shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
        >
          Codeforces
        </Link>
        <Link
          to="/contests/leetcode"
          className="px-8 py-3 text-lg font-semibold bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105"
        >
          LeetCode
        </Link>
        <Link
          to="/contests/codechef"
          className="px-8 py-3 text-lg font-semibold bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          CodeChef
        </Link>
        <Link
          to="/contests/all"
          className="px-8 py-3 text-lg font-semibold bg-gray-700 rounded-lg shadow-lg hover:bg-gray-900 transition-transform transform hover:scale-105"
        >
          All Contests
        </Link>
      </motion.div>

      <motion.p
        className="mt-10 text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Built with ❤️ by Prateek
      </motion.p>
    </div>
  );
}

export default Home;
