import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  technologies?: string[];
}

const projects: Project[] = [
  {
    title: "Object-Detection by Ankit",
    description:
      "In this project, we developed an advanced object detection system using the YOLO (You Only Look Once) algorithm, a state-of-the-art deep learning model known for its speed and accuracy. Object detection is a key application of computer vision, enabling machines to recognize and locate multiple objects within an image or video in real-time. YOLO stands out by performing detection in a single neural network pass, making it highly efficient for real-time applications. Our system is capable of identifying various objects within complex environments with remarkable precision. The project involves training the YOLO model on a labeled dataset, preprocessing images, and implementing techniques to enhance detection accuracy. This solution can be applied in fields like surveillance, traffic monitoring, autonomous driving, and smart retail. By leveraging the power of AI and machine learning, our project demonstrates how YOLO can significantly contribute to intelligent visual recognition systems with practical, real-world applications.",
    image:
      "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/22606/images/1d3c12-07cf-f3a7-2a7-27fb340a20f_object-detection-illustration.png",
    github: "https://github.com/Ankitnegi002/Object-Detection.git",
  },
  {
    title: "Flood-Evacuation-System",
    description:
      "This project focuses on optimizing flood evacuation routes using advanced pathfinding algorithms and web technologies. Developed using Python, it integrates algorithms such as A* (A-Star), Dijkstra's, Depth-First Search (DFS), and Breadth-First Search (BFS) to compute the safest and shortest evacuation paths during flood scenarios. These algorithms analyze a grid-based map to avoid flood-prone zones and guide individuals toward safe locations efficiently. The backend logic processes geographical and flood data, while the frontend, built using HTML, CSS, and JavaScript, offers an interactive interface to visualize routes and affected areas in real-time. Users can input flood conditions and receive optimized evacuation guidance on the map. This project demonstrates how artificial intelligence, pathfinding techniques, and web development can be combined to address real-world problems like disaster management. It is especially useful for authorities and individuals in flood-prone regions, helping to reduce risks and improve emergency response times during critical situations.",
    image:
      "https://imgs.search.brave.com/CgpfzpOKzn6TZd2kxulO-Vkd6JDzI2bHuYdVDCdjbOE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vZ1p6VUQy/SHowWm1kM0FPQmt6/R2E5RnBKaUV4VVp4/b0N6QnNQdlc5QWVz/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG5CcC9ibWx0Wnk1/amIyMHZiM0pwL1oy/bHVZV3h6THpJMkwy/VTIvTHpRMEx6STJa/VFkwTkdNei9aR05p/TUdRMU5qWTVOV05t/L01qVTBaREk0TkdK/aVltUmovTG1wd1p3",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
    ],
  },
  {
    title: "2D Mario-Style Game",
    description:
      "I developed a 2D platformer game similar to Mario using the Godot Engine. The game features jumping, running, enemies, and collectibles across multiple levels. I used GDScript for game logic and designed custom levels and animations. This project showcases my skills in game development, design, and interactive user experiences.",
    image:
      "/images/mario.png",
    demo: "/images/2D platformer.mp4",
  },
  {
    title: "Space War",
    description:
      "I created a 2D action game where players control a jet and defend against incoming enemies. The jet can shoot lasers to destroy enemies approaching from the front. Built with engaging visuals and smooth controls, the game offers fast-paced gameplay and highlights my skills in coding game mechanics and design.",
    image:
      "/images/flight.png",
    demo: "/images/Space-War.mp4",
  },
  {
    title: "Donut by using Blender",
    description:
      "I created a realistic 3D donut model using Blender. The project involved sculpting the shape, applying textures, and using lighting and shading techniques to enhance its appearance. This helped me understand Blender’s modeling, material, and rendering tools, showcasing my foundational skills in 3D design and digital content creation.",
    image:
      "/images/donut.png",
    demo: "/images/donut-bro.png",
  },
];

function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white mb-6">My Projects</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Here are some of the personal projects I've worked on. Each project
          showcases my skills and technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black rounded-xl overflow-hidden border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4 border-b border-white/10 pb-4">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-white/5 text-white rounded-lg text-sm border border-white/10 hover:border-white/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex space-x-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View code for ${project.title}`}
                      className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Github size={20} className="mr-2" />
                      View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo for ${project.title}`}
                      className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="p-8">
                <div className="relative w-full h-0 rounded-xl overflow-hidden group" style={{ paddingBottom: "56.25%" }}>
                  <img
                    src={project.image}
                    alt={`${project.title} Image`}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
