// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaJs, FaNode, FaDocker, FaGit, FaDatabase } from 'react-icons/fa';
import { SiDotnet, SiCsharp } from 'react-icons/si';

const skills = [
    { name: 'JavaScript', icon: <FaJs className="icon-large" /> },
    { name: 'Node.js', icon: <FaNode className="icon-large" /> },
    { name: 'C#', icon: <SiCsharp className="icon-large" /> },
    { name: '.NET', icon: <SiDotnet className="icon-large" /> },
    { name: 'Docker', icon: <FaDocker className="icon-large" /> },
    { name: 'Git', icon: <FaGit className="icon-large" /> },
    { name: 'SQL', icon: <FaDatabase className="icon-large" /> },
  ];

  const Skills = () => (
    <section className="skills my-8 p-4 bg-gray-100">
      <h2 className="text-3xl font-bold my-4">Habilidades</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card flex-row p-4 bg-white rounded shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="mr-4 text-blue-500">{skill.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );

export default Skills;