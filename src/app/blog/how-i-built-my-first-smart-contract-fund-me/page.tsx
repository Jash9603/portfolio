export default function BlogHowIBuiltMyFirstSmartContractFundMe() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">How I Built My First Smart Contract: Fund Me</h1>
      <p className="text-gray-500 text-sm mb-8">May 2025</p>
      <article className="prose dark:prose-invert prose-blue">
        <p>
          Building my first real-world smart contract was a turning point in my journey as a developer. After learning the basics of Solidity through Cyfrin's courses, I wanted to challenge myself with a project that had practical value. That's how Fund Me came to life.
        </p>
        <h2 className="mt-8 mb-2">What Is Fund Me?</h2>
        <p>
          Fund Me is a smart contract that lets users send ETH to the contract, with only the contract owner able to withdraw the funds. This project helped me understand essential Solidity concepts, including:
        </p>
        <ul>
          <li>Receiving ETH from users</li>
          <li>Tracking contributors and their contributions</li>
          <li>Access control using <code>onlyOwner</code></li>
          <li>Using price feeds for dynamic minimum funding</li>
        </ul>
        <h2 className="mt-8 mb-2">Tools & Tech Stack</h2>
        <ul>
          <li><strong>Solidity</strong> for writing the smart contract</li>
          <li><strong>Foundry</strong> for compiling, testing, and deploying</li>
          <li><strong>Chainlink Price Feeds</strong> for real-time ETH price in USD</li>
          <li><strong>MetaMask</strong> for sending transactions</li>
        </ul>
        <h2 className="mt-8 mb-2">What I Learned</h2>
        <ul>
          <li>How to accept ETH into a contract using <code>receive()</code> and <code>fallback()</code></li>
          <li>How to use modifiers like <code>onlyOwner</code> to restrict functions</li>
          <li>How to store contributor addresses and map them to values</li>
          <li>How to integrate Chainlink Oracles for a minimum funding threshold</li>
          <li>How to deploy contracts using Foundry's CLI</li>
        </ul>
        <h2 className="mt-8 mb-2">Challenges</h2>
        <ul>
          <li>Optimizing for gas and understanding why unnecessary writes are costly</li>
          <li>Dealing with Solidity's strict type system</li>
          <li>Learning about secure withdrawal patterns and avoiding reentrancy</li>
        </ul>
        <h2 className="mt-8 mb-2">Final Thoughts</h2>
        <p>
          Working on Fund Me moved me from just reading code to actually building and debugging a decentralized app. It gave me confidence in using oracles, enforcing business logic, and managing user funds securely. I'm excited to keep improving this project and eventually build a front end for it using Next.js.
        </p>
        <a
          href="https://github.com/Jash9603/Fund-Me-With-Solidity"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold shadow"
        >
          View the contract on GitHub
        </a>
      </article>
      <a href="/" className="inline-block mt-8 text-blue-600 hover:underline">← Back to Home</a>
    </main>
  );
} 