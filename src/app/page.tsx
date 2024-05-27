import '../../public/styles.css';

export default function Home() {
    return (
        <div className="container mx-auto px-4">
            <div id="preamble" className="mt-8 mb-2">
                <a href="https://github.com/lukebrichey">
                    <h1 className="text-4xl font-bold text-center">luke richey</h1>
                </a>
                <h2 className="text-2xl text-center mt-4">
                    contact me via 
                    <a href="mailto:lukerichey@college.harvard.edu" className="text-blue-500"> email </a>
                    or checkout my 
                    <a href="https://github.com/lukebrichey" className="text-blue-500"> github </a>
                    & <a href="https://www.linkedin.com/in/luke-richey-9a1b97218/" className="text-blue-500"> linkedin </a>
                </h2>
            </div>

            <div className="mb-8 text-center">
                <p className="mb-10">student studying CS + Econ @ Harvard</p>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <ul className="list-disc list-inside mt-4">
                    <li><a href="https://github.com/lukebrichey/SaveTheGaels" className="text-blue-500"><code>SaveTheGaels</code></a>: a full-stack MERN-based blog with RESTful API and admin authentication, allowing for CRUD operations</li>
                    <li><a href="https://github.com/lukebrichey/Flow" className="text-blue-500"><code>Flow</code></a>: an Electron app to encourage Deep Work. Tracks daily focus time, goals, and streak maintenance.</li>
                    <li><a href="https://github.com/lukebrichey/starlink-cli" className="text-blue-500"><code>Starlink CLI</code></a>: a simple CLI tool to interact with your Starlink dish using starlink-rs, written in Rust</li>
                    <li><a href="https://github.com/lukebrichey/Mini-OCaml-Interpreter" className="text-blue-500"><code>MiniOcaml</code></a>: a miniature OCaml-like language and interpreter, with support for float operations and strings w/ concatenation</li>
                    <li><a href="https://github.com/lukebrichey/SpotifyPurge" className="text-blue-500"><code>SpotifyPurge</code></a>: script to remove desired artist from playlists</li>
                    <li><a href="https://github.com/lukebrichey/Poker-CS50" className="text-blue-500"><code>Heads-Up Poker Calculator</code></a>: wrote Flask-based backend for a Texas Hold&apos;em poker odds calculator utilizing Monte Carlo simulations</li>
                    <div>
                      <h3 className="text-lg font-medium mt-4">Open Source Contributions:</h3>
                      <li><a href="https://github.com/paradigmxyz/reth" className="text-blue-500"><code>Reth</code></a>: an Ethereum full node implementation written in Rust.</li>
                    </div>
                </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold">Experience</h2>
              <ul className="list-disc list-inside mt-4">
                <li><a href="https://www.ambrus.studio/" className="text-blue-500">Ambrus Studio</a>: performed NFT market research and shadowed smart contract team</li>
                <li><a href="https://wiiqare.com/" className="text-blue-500">WiiQare</a>: funded by 
                  <a href="https://www.unicefinnovationfund.org/broadcast/updates/wiiqare-all-one-digital-platform-healthcare-savings-payments-and-remittances" className="text-blue-500"> Unicef&rsquo;s Innovation Fund</a>. 
                  Developing a blockchain-based remittance solution for healthcare in Africa
                </li>
                <li><a href="https://www.fidelity.com" className="text-blue-500">Fidelity</a>: incoming Software Engineering Intern</li>
              </ul>
            </div>

            <div className="mb-12">
                <a href="https://savethegaels.herokuapp.com/" className="text-2xl font-semibold text-blue-500">Writing</a>
            </div>

            <div id="footer" className="mt-8 text-center text-sm">
              <p className="italic">
                This website was modified from 
                <a href="https://github.com/transmissions11/transmissions11.github.io" className="text-blue-500"> t11s&apos; fork</a> of the 
                <a href="https://github.com/dapphub/dapp-tools" className="text-blue-500"> dapptools</a> website.
                Inspired by <a href="https://gakonst.com/" className="text-blue-500">gakonst</a> and <a href="http://2λ.com/" className="text-blue-500">t11s</a>.
              </p>
            </div>
        </div>
    );
}
  