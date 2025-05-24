import Image from "next/image";
import ContactSection from "./ContactSection";
import NavBar from "./NavBar";

// Navigation Bar
const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Technology", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
      <NavBar />

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center py-16 sm:py-20 text-center gap-4 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-5xl font-bold" style={{ color: "var(--heading)" }}>Hi, I'm Jash Kevadiya</h1>
        <h2 className="text-xl sm:text-3xl font-semibold mt-2" style={{ color: "var(--accent)" }}>Blockchain Developer</h2>
        <p className="max-w-xl mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
          I'm passionate about building secure, decentralized applications on Ethereum. Currently learning Solidity and Foundry, and sharing my journey as I grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center w-full sm:w-auto">
          <a href="https://github.com/Jash9603" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 font-bold text-lg cursor-pointer py-3 px-6 rounded-full shadow-md">
            <span className="icon-accent" aria-hidden="true"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg></span>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jash-kevadiya-40ab3b266/" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 font-bold text-lg cursor-pointer py-3 px-6 rounded-full shadow-md">
            <span className="icon-accent" aria-hidden="true"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z"/></svg></span>
            LinkedIn
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-12 sm:py-16 max-w-2xl mx-auto px-4 sm:px-0">
        <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--heading)" }}>About Me</h3>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
          Hi, I'm Jash Kevadiya, a passionate blockchain developer focused on smart contracts and decentralized apps. I'm currently learning Solidity and Foundry through Cyfrin's advanced courses and have already built projects like a Simple Storage DApp, a FundMe contract, and am developing a Vault App that securely stores encrypted secrets on-chain.
        </p>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mt-4">
          I enjoy turning complex blockchain ideas into practical solutions. When I'm not building, I share my learnings and dev journey through blog posts to help others explore Web3.
        </p>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mt-4">
          Let's connect and build something innovative together!
        </p>
      </section>

      {/* Technology Stack Section */}
      <section id="tech-stack" className="py-12 sm:py-16 max-w-3xl mx-auto px-4 sm:px-0">
        <h3 className="text-2xl font-bold mb-8" style={{ color: "var(--heading)" }}>Technology Stack</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Solidity */}
          <div className="card p-4">
            <h4 className="text-lg font-semibold mb-1">Solidity</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Solidity is the primary language for writing smart contracts on Ethereum. I use it to build secure, decentralized applications and experiment with blockchain logic.</p>
          </div>
          {/* Foundry */}
          <div className="card p-4">
            <h4 className="text-lg font-semibold mb-1">Foundry</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Foundry is a blazing fast, portable, and modular toolkit for Ethereum application development written in Rust. I use it for testing, deploying, and managing smart contracts.</p>
          </div>
          {/* React */}
          <div className="card p-4">
            <h4 className="text-lg font-semibold mb-1">React</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">React is a popular JavaScript library for building user interfaces. I use React (with Next.js) to create fast, interactive, and modern web apps for blockchain projects.</p>
          </div>
          {/* Ethers.js */}
          <div className="card p-4">
            <h4 className="text-lg font-semibold mb-1">Ethers.js <span className="text-xs text-gray-500">(Learning)</span></h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Ethers.js is a lightweight JavaScript library for interacting with the Ethereum blockchain and smart contracts. I'm currently learning it to connect my dApps to Ethereum networks.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-0">
        <h3 className="text-2xl font-bold mb-8" style={{ color: "var(--heading)" }}>Projects</h3>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Project 1 */}
          <div className="card p-6">
            <h4 className="text-xl font-semibold mb-2">Simple Storage</h4>
            <p className="mb-2 text-gray-700 dark:text-gray-300">My first smart contract in Solidity. Stores and retrieves a number on-chain.</p>
            <span className="text-gray-400">(Not uploaded yet)</span>
          </div>
          {/* Project 2 */}
          <div className="card p-6">
            <h4 className="text-xl font-semibold mb-2">Fund Me (Foundry)</h4>
            <p className="mb-2 text-gray-700 dark:text-gray-300">A crowdfunding smart contract built with Foundry. Accepts ETH and allows withdrawals by the owner.</p>
            <a href="https://github.com/Jash9603/Fund-Me-With-Solidity" target="_blank" rel="noopener noreferrer" className="text-[var(--link)] hover:underline block mb-1 cursor-pointer font-semibold">View on GitHub</a>
            <span className="text-xs text-gray-500">Deployed on Sepolia: <span className="font-mono">0xCb164F4ad32Dc80ed81583438e311cAAE4527851</span></span>
          </div>
          {/* Project 3 */}
          <div className="card p-6">
            <h4 className="text-xl font-semibold mb-2">Vault App (WIP)</h4>
            <p className="mb-2 text-gray-700 dark:text-gray-300">A work-in-progress dApp for storing secrets on-chain, encrypted with the user's wallet private key.</p>
            <a href="#" className="text-gray-400 cursor-not-allowed">Coming soon</a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-12 sm:py-16 max-w-3xl mx-auto px-4 sm:px-0">
        <h3 className="text-2xl font-bold mb-8" style={{ color: "var(--heading)" }}>Blog</h3>
        <div className="space-y-6">
          <div className="card p-6 transition hover:shadow-2xl">
            <h4 className="text-lg font-semibold mb-2">How I Built My First Smart Contract Fund Me</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-2">A beginner's journey with Solidity and deploying to testnet.</p>
            <span className="text-xs text-secondary block mb-2">May 2025</span>
            <a href="/blog/how-i-built-my-first-smart-contract-fund-me" className="inline-flex items-center gap-1 text-[var(--link)] hover:underline text-sm font-medium mt-2 cursor-pointer font-semibold">
              Read Full Blog
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="card p-6 transition hover:shadow-2xl">
            <h4 className="text-lg font-semibold mb-2">Learning Experience</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Exploring the Foundry framework for smart contract development.</p>
            <span className="text-xs text-secondary block mb-2">March 2025</span>
            <a href="/blog/learning-experience" className="inline-flex items-center gap-1 text-[var(--link)] hover:underline text-sm font-medium mt-2 cursor-pointer font-semibold">
              Read Full Blog
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <footer className="w-full mt-12 py-8 text-center" style={{ background: 'var(--bg-footer)', color: 'var(--text-main)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-base">&copy; {new Date().getFullYear()} Jash Kevadiya. All rights reserved.</p>
          <p className="text-sm text-secondary mt-2">Built with Next.js, Tailwind CSS, and 💡</p>
        </div>
      </footer>
    </div>
  );
}
