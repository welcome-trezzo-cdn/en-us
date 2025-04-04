import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Full-Width Clickable Image */}
          <div className="w-full">
            <a href="https://trezor.io/start" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/Dw6zzKn/bannerr.jpg" 
                alt="Click to Visit Trezor.io/start Wallet Setup Guide" 
                className="w-full h-auto block"
                loading="lazy" />
            </a>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-8">Secure Your Crypto in Minutes with Trezor.io/start</h1>

          {/* Quick Tip Box */}
          <div className="bg-[#e6f9ec] border-l-4 border-[#2ecc71] p-4 mb-5">
            <strong>Quick Take:</strong><br />
            Visit <a href="https://trezor.io/start" target="_blank" className="text-trezor-green hover:underline">Trezor.io/start</a> to set up your Trezor hardware wallet, install the Trezor Suite app, and enable top-tier crypto security features.
          </div>

          <p className="mb-6">
            When it comes to storing cryptocurrency safely, <strong>Trezor.io/start</strong> is the first step toward complete financial freedom. This platform connects users with the <strong>Trezor Suite app</strong>, enabling seamless wallet setup, firmware updates, and advanced features like staking and account recovery.
          </p>

          {/* Benefits Box */}
          <div className="bg-[#f1f9ff] border-l-4 border-[#3498db] p-4 my-8">
            <strong>What You Get via Trezor.io/start:</strong>
            <ul className="list-disc ml-6 mt-2">
              <li>Install <strong>Trezor Suite App</strong></li>
              <li>Connect via <strong>Trezor Bridge</strong></li>
              <li>Update firmware instantly</li>
              <li>Enable hidden wallets and passphrase protection</li>
              <li>Set up <strong>Trezor staking</strong> (via integrations)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-8 mb-6">Trezor Suite Setup Guide</h2>

          {/* Setup Steps Box */}
          <div className="bg-[#fffbe6] border-l-4 border-[#f1c40f] p-4 mb-5">
            <strong>Step-by-Step Setup at Trezor.io/start</strong>
            <ol className="list-decimal ml-6 mt-2">
              <li>Visit <a href="https://trezor.io/start" target="_blank" className="text-trezor-green hover:underline">Trezor.io/start</a></li>
              <li>Select your device (Model One or Model T)</li>
              <li>Download the Trezor Suite app</li>
              <li>Install Trezor Bridge</li>
              <li>Follow secure wallet creation steps</li>
              <li>Write down your recovery seed (12/24 words)</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold mt-8 mb-6">What is Trezor Bridge?</h2>

          {/* Bridge Box */}
          <div className="bg-[#fdf2f8] border-l-4 border-[#e84393] p-4 mb-5">
            <strong>Bridge Box:</strong> Trezor Bridge is the tool that allows your browser to communicate securely with your Trezor hardware wallet—no extensions required.
          </div>

          <h2 className="text-3xl font-bold mt-8 mb-6">Can You Stake with Trezor?</h2>

          {/* Staking Box */}
          <div className="bg-[#f0f9ff] border-l-4 border-[#00cec9] p-4 mb-5">
            <strong>Staking Insight:</strong> Trezor supports staking of certain coins like ADA and XTZ using third-party wallets. Your private keys remain secured on the device.
          </div>

          <h2 className="text-3xl font-bold mt-8 mb-6">Supported Coins & Tokens</h2>

          {/* Coins Box */}
          <div className="bg-[#eef9f1] border-l-4 border-[#2ecc71] p-4 mb-5">
            <strong>Coin Compatibility:</strong>
            <ul className="list-disc ml-6 mt-2">
              <li>Bitcoin (BTC)</li>
              <li>Ethereum (ETH)</li>
              <li>Binance Coin (BNB)</li>
              <li>Cardano (ADA)</li>
              <li>Polkadot (DOT)</li>
              <li>ERC-20 Tokens & more</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-8 mb-6">Frequently Asked Questions</h2>

          <div className="my-5 space-y-4">
            <div>
              <strong>What is Trezor.io/start used for?</strong><br />
              It's the official onboarding page for secure setup and configuration of your Trezor wallet.
            </div>
            <div>
              <strong>Is it safe to use Trezor.io/start?</strong><br />
              Yes, it's SSL-encrypted and hosted by SatoshiLabs—the original creators of Trezor.
            </div>
            <div>
              <strong>Can I use Trezor without Trezor Suite?</strong><br />
              Technically yes, but Trezor Suite is the official and most secure interface.
            </div>
            <div>
              <strong>What is Trezor Bridge?</strong><br />
              A secure backend tool that enables your browser to interact with your Trezor device.
            </div>
            <div>
              <strong>Does Trezor support staking?</strong><br />
              Yes, indirectly through external integrations. Your private keys never leave your Trezor.
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-8 mb-6">Final Thoughts: Why Trezor.io/start Matters</h2>

          {/* Security Box */}
          <div className="bg-[#ffe6e6] border-l-4 border-[#e74c3c] p-4 mb-5">
            <strong>Security First:</strong> Using <strong>Trezor.io/start</strong> ensures your crypto assets are protected with industry-leading hardware security. Take full control today!
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;