'use client';

import { motion } from 'framer-motion';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiGit, SiHtml5, SiCss3 } from 'react-icons/si';

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" />, level: 90 },
      { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" />, level: 85 },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: 85 },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: 80 },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" />, level: 85 },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 80 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 90 },
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, level: 75 },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 70 },
    ]
  },
  {
    category: "Tools & Version Control",
    items: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" />, level: 85 },
    ]
  }
];

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 pt-32 pb-16 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          My Skills
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">{skill.icon}</div>
                      <span className="font-medium">{skill.name}</span>
                      <span className="ml-auto text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="text-4xl mb-4 text-blue-400">🎯</div>
            <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
            <p className="text-gray-300">Strong analytical and problem-solving abilities to tackle complex challenges.</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="text-4xl mb-4 text-purple-400">🤝</div>
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p className="text-gray-300">Excellent team player with strong communication skills.</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="text-4xl mb-4 text-green-400">📚</div>
            <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
            <p className="text-gray-300">Always eager to learn new technologies and improve existing skills.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
