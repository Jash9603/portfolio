export default function BlogLearningExperience() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">My Learning Experience in Blockchain Development</h1>
      <p className="text-gray-500 text-sm mb-8">March 2025</p>
      <article className="prose dark:prose-invert prose-blue">
        <p>
          Getting started with blockchain development has been one of the most rewarding decisions of my developer journey. When I first encountered Solidity and smart contracts, it felt like stepping into a new world—where logic, security, and decentralization come together to create powerful applications.
        </p>
        <h2 className="mt-8 mb-2">Where I Started</h2>
        <p>
          I began with Cyfrin's Solidity and Foundry courses, which explained not just how to code, but why each concept matters. The first few lessons covered the basics:
        </p>
        <ul>
          <li>Solidity data types</li>
          <li>State variables and functions</li>
          <li>Arrays and mappings</li>
          <li>Visibility modifiers like public, private, and internal</li>
        </ul>
        <h2 className="mt-8 mb-2">Learning by Building</h2>
        <p>
          I learn best by doing, so I built a Simple Storage contract to understand data persistence, and a Fund Me contract to learn about receiving ETH, using price feeds, and restricting access with onlyOwner. These projects made concepts like gas optimization, security, and test-driven development in Foundry much clearer to me.
        </p>
        <h2 className="mt-8 mb-2">Tools That Helped Me Grow</h2>
        <ul>
          <li><strong>Foundry</strong> – A fast, developer-friendly smart contract toolkit</li>
          <li><strong>Remix IDE</strong> – Great for quick prototyping</li>
          <li><strong>Chainlink Oracles</strong> – Helped me connect real-world data to smart contracts</li>
          <li><strong>Etherscan</strong> – For analyzing and verifying smart contracts</li>
        </ul>
        <h2 className="mt-8 mb-2">Key Takeaways</h2>
        <ul>
          <li>Security matters—a small mistake can cost real money</li>
          <li>Gas efficiency isn't just an optimization, it's a necessity</li>
          <li>Understanding the EVM helps you write better, more efficient contracts</li>
          <li>Writing unit tests with Foundry made me more confident in my code and taught me to think critically about logic and edge cases</li>
        </ul>
        <h2 className="mt-8 mb-2">What's Next?</h2>
        <p>
          I'm currently working on a Vault App that lets users store secrets encrypted with their wallet key—an ambitious step that involves cryptography, secure storage patterns, and some off-chain logic. I'm also learning how to connect smart contracts to frontend frameworks like Next.js.
        </p>
        <h2 className="mt-8 mb-2">Final Thoughts</h2>
        <p>
          The blockchain space is still young, fast-moving, and full of opportunity. What excites me most is the idea that I'm not just learning a new skill—I'm preparing to contribute to a new digital economy.
        </p>
        <p>
          Thanks for following my journey. If you're also starting out, just keep building—every line of code gets you closer to mastery.
        </p>
      </article>
      <a href="/" className="inline-block mt-8 text-blue-600 hover:underline">← Back to Home</a>
    </main>
  );
} 