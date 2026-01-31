// src/App.tsx
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/public/assets/css/particles.css";

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <main id="home" className="w-full">
        {/* Floating light elements contained within the hero section */}

        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>

        {/* #### HERO SECTION #### */}

        <section className="bg-white pt-20 dark:bg-black md:pt-0">
          <div className="relative z-10 mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-32 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1
                id="dynamicHeadline"
                className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl"
              >
                Hi, I'm Mudassir Sayed{" "}
                <span id="dynamicWords" className="font-bold text-green-500">
                  an Ethical Hacker
                </span>
              </h1>

              <p className="mb-6 max-w-2xl text-3xl font-bold text-gray-500 dark:text-gray-400 lg:mb-8">
                From web penetration testing to real-world vulnerability
                hunting, I help identify security gaps and strengthen your
                digital defenses.
              </p>
              <a
                href="#about"
                className="text:3xl bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center px-5 py-3  text-center text-base font-medium text-white focus:ring-4"
              >
                More About Me
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="text:3xl inline-flex items-center justify-center border-4 border-green-300 px-5 py-4 text-center text-base font-medium text-gray-900  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:border-green-700 dark:text-white dark:hover:bg-green-700 dark:focus:ring-gray-800"
              >
                Contact Me!
              </a>
            </div>
            <div
              id="hacker-logo"
              className="relative z-10 lg:col-span-5 lg:mt-0 lg:flex"
              style={{ opacity: 0 }} // This ensures it's initially invisible but still rendered
            >
              <img src="./assets/images/defcon2.png" alt="hacker" />
            </div>
          </div>
        </section>

        {/* #### ACCOLADES SECTION #### */}
        <section className="bg-white dark:bg-black ">
          <div className="relative z-20 mx-auto max-w-screen-xl border-4 border-solid border-green-700 bg-white px-4 py-8 text-center dark:bg-black lg:px-6 lg:py-28">
            <dl className="mx-auto grid max-w-screen-md gap-8 text-gray-900 dark:text-white sm:grid-cols-3">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl font-extrabold md:text-7xl">
                  <span data-counter-target="25">0</span>+
                </dt>
                <dd className="text-2xl font-light text-gray-500 dark:text-gray-400">
                  Months of Experience
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl font-extrabold md:text-7xl">
                  <span data-counter-target="8">0</span>+
                </dt>
                <dd className="text-2xl font-light text-gray-500 dark:text-gray-400">
                  Daily Hacking Hours
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl font-extrabold md:text-7xl">
                  <span data-counter-target="500">0</span>+
                </dt>
                <dd className="text-2xl font-light text-gray-500 dark:text-gray-400">
                  Cups of Coffee
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* #### SERVICES SECTION #### */}
        <section
          id="Skills"
          className="flex items-center justify-center bg-white pb-12 pt-8 dark:bg-black"
        >
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center sm:py-16 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-md lg:mb-12">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                My Hacking Skills
              </h2>
              <p className="text-2xl text-gray-500 dark:text-gray-400">
                —— With great power comes great responsibility
              </p>
            </div>

            <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
              <div className="group transform transition-all duration-300 hover:scale-105">
                <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                  <svg
                    className="h-[48px] w-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                  Offensive Security
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-xl text-gray-500 dark:text-gray-400">
                  <li>Web Application Penetration Testing</li>
                  <li>Reconnaissance & Information Gathering</li>
                  <li>Vulnerability Discovery & Exploitation</li>
                  <li>Manual & Tool-Based Testing</li>
                  <li>Authentication & Session Security Testing</li>
                  <li>Input Validation & Injection Attack Techniques</li>
                </ul>
              </div>

              <div className="group transform transition-all duration-300 hover:scale-105">
                <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                  <svg
                    className="h-[48px] w-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M3 15v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 11h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25M20.25 16c0-1.2426-1.0073-2.25-2.25-2.25M20.25 16H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.25V19m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25M15.75 16H15m3-2.25V13m-1.591 1.409-.5303-.5303m4.2426 4.2426-.5303-.5303m-3.182 0-.5303.5303m4.2426-4.2426-.5303.5303"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                  Web Security & Exploitation
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-xl text-gray-500 dark:text-gray-400">
                  <li>Cross-Site Scripting (XSS)</li>
                  <li>SQL Injection (SQLi)</li>
                  <li>Command Injection & Code Execution</li>
                  <li>SSRF, CSRF, and File Upload Exploits</li>
                  <li>Broken Authentication & Authorization Testing</li>
                  <li>
                    Deep Understanding of OWASP Top 10 & Real-World Attack
                    Scenarios
                  </li>
                </ul>
              </div>
              <div className="group transform transition-all duration-300 hover:scale-105">
                <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                  <svg
                    className="h-[48px] w-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                  Cybersecurity Tools & Automation
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-xl text-gray-500 dark:text-gray-400">
                  <li>Network Scanning & Enumeration with Nmap</li>
                  <li>Web Testing with Burp Suite</li>
                  <li>
                    Directory/Endpoint Discovery (FFUF, Gobuster, Dirsearch,
                    Nikto)
                  </li>
                  <li>Kali Linux for Offensive Operations</li>
                  <li>Python for Security Automation & Simple Scripts</li>
                  <li>Custom Wordlist Creation for Brute Force Testing</li>
                </ul>
              </div>
              <div className="group transform transition-all duration-300 hover:scale-105">
                <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                  <svg
                    className="h-[48px] w-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M14.7141 15h4.268c.4043 0 .732-.3838.732-.8571V3.85714c0-.47338-.3277-.85714-.732-.85714H6.71411c-.55228 0-1 .44772-1 1v4m10.99999 7v-3h3v3h-3Zm-3 6H6.71411c-.55228 0-1-.4477-1-1 0-1.6569 1.34315-3 3-3h2.99999c1.6569 0 3 1.3431 3 3 0 .5523-.4477 1-1 1Zm-1-9.5c0 1.3807-1.1193 2.5-2.5 2.5s-2.49999-1.1193-2.49999-2.5S8.8334 9 10.2141 9s2.5 1.1193 2.5 2.5Z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                  Threat Analysis & Security Research
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-xl text-gray-500 dark:text-gray-400">
                  <li>Vulnerability Research & Proof-of-Concept Development</li>
                  <li>Strong Understanding of HTTP Requests & Responses</li>
                  <li>Application Logic Analysis & Flow Testing</li>
                  <li>Login, Session, and Authorization Testing</li>
                  <li>
                    Understanding CVEs, Exploit Patterns & Real-World Attacks
                  </li>
                  <li>
                    Documenting Findings & Following Security Best Practices
                  </li>
                </ul>
              </div>
              <div className="group transform transition-all duration-300 hover:scale-105">
                <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                  <svg
                    className="h-[48px] w-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H15V8a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 12 9Zm-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2.025 0H17m-9.975 4H6a1 1 0 0 0-1 1v2m12-3h1.025a1 1 0 0 1 1 1v2M16 11h1a1 1 0 0 0 1-1V8m-9.975 3H7a1 1 0 0 1-1-1V8"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                  Bug Hunting
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-xl text-gray-500 dark:text-gray-400">
                  <li>Subdomain Enumeration & Attack Surface Mapping</li>
                  <li>
                    Path Traversal, IDOR, & Access Control Weakness Testing
                  </li>
                  <li>Logic Flaw & Misconfiguration Hunting</li>
                  <li>API Security Testing & Endpoint Analysis</li>
                  <li>Writing Clear PoCs, Reports & Reproduction Steps</li>
                  <li>Experience with Responsible Disclosure</li>
                </ul>
              </div>
              <div className="group transform transition-all duration-300 hover:scale-105">
                <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                  <svg
                    className="h-[48px] w-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                  Continuous Learning & Skill Growth
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-xl text-gray-500 dark:text-gray-400">
                  <li>Hands-on Practice (PortSwigger Labs, HTB, THM, etc.)</li>
                  <li>Building Checklists, Notes & Personal Methodologies</li>
                  <li>Learning from Public Bug Bounty Writeups</li>
                  <li>Improving English & Technical Report Writing</li>
                  <li>Staying Updated with Cybersecurity Trends</li>
                  <li>Building Cyber Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* #### LOGOS SECTION #### */}

        <section id="socials" className="lg:py-18 relative z-20 border-b-4 border-t-4 border-solid border-green-700 bg-gray-100 bg-white dark:bg-black dark:bg-black lg:px-6">
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16 ">
            <h2 className="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-16">
              Socials
            </h2>
            <div className="grid grid-cols-2 gap-8 text-gray-500 dark:text-gray-400 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
              <a
                href="https://linkedin.com/in/realmudassirsayed/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <svg
                  className="h-14 w-14 hover:text-gray-900 dark:hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.601 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433c-1.144 0-2.067-.926-2.067-2.067 0-1.144.923-2.067 2.067-2.067 1.144 0 2.067.923 2.067 2.067 0 1.141-.923 2.067-2.067 2.067zM6.777 20.452H3.894V9h2.883v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://github.com/RealErenYeager"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <svg
                  className="h-14 w-14 hover:text-gray-900 dark:hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.302 3.438 9.799 8.207 11.387.599.111.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.604-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.004-.404c1.02.005 2.047.138 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.244 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .321.19.694.801.576C20.566 22.092 24 17.594 24 12.297 24 5.67 18.627.297 12 .297z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/realmudassirsayed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <svg
                  className="h-14 w-14 hover:text-gray-900 dark:hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM17 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                </svg>
              </a>
              <a
                href="https://x.com/realmudasssir" // should updated ***
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <svg
                  className="h-14 w-14 hover:text-gray-900 dark:hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2H21.735L13.47 11.39L23 22H16.59L10.96 15.49L4.49 22H1L9.82 12.03L1 2H7.59L12.7 7.97L18.244 2Z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* #### SERVICES SECTION #### */}
        <section id="about" className="bg-white pt-8 dark:bg-black">
          <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-8">
            <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
              <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                About Me, Mudassir Sayed
              </h2>
              <p className="mb-4 text-3xl">
                I didn’t plan to become a hacker — it just happened. The more I
                explored, the more I realized how many security gaps go
                unnoticed. Today, I focus on finding those blind spots and
                turning them into opportunities for stronger security.
              </p>
              <p className="text-xl">
                I rely on both strategic thinking and methodical testing to make
                sure every potential weak point is identified and addressed.
              </p>
             <a
  href="https://drive.google.com/file/d/1ZuSupQE3aQNdKworeWGHuCXJ-jg-kTUb/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center justify-center border-4 border-green-300 px-5 py-4 text-2xl font-medium text-gray-900 hover:bg-green-100 dark:border-green-700 dark:text-white dark:hover:bg-green-700"
>
  Download Resume
</a>

            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <img
                className="w-full transition-all duration-300 hover:brightness-75 hover:hue-rotate-15 hover:saturate-150"
                src="./assets/images/hacker01_01.jpg"
                alt="office content 1"
              />
              <img
                className="mt-4 w-full transition-all duration-300 hover:brightness-75 hover:hue-rotate-15 hover:saturate-150 lg:mt-10"
                src="./assets/images/pc.jpeg"
                alt="office content 2"
              />
            </div>
            <br></br>
          </div>
          
        </section>
        <section id="Projects" className="  bg-white dark:bg-black">
          <h1 className="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight  border-t-4 border-solid border-green-700  text-gray-900 dark:text-white md:text-4xl lg:mb-16">
            <br></br>
            Projects
            <br></br>
            <br></br>
          </h1>
          <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
            <img
              className="w-full transition-opacity duration-300 hover:opacity-70"
              src="./assets/images/skull01.jpg"
              alt="dashboard image"
            />
            <div className="mt-4 md:mt-0">
              <h3 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Vuln_Scanner - A simple Python-based vulnerability scanner that
                includes
              </h3>
              <p className="mb-6 text-xl font-light text-gray-500 dark:text-gray-400 lg:text-2xl">
                <li>
                  Port Scanning, SQL Injection, XSS testing testing (basic
                  payloads)
                </li>
                <li>Multi-threaded Port Scanner (1–1024 range)</li>
                <li>Detects banners for open ports</li>
                <li>Basic SQL Injection detection using common payloads</li>
                <li>Basic XSS detection using reflected payloads</li>
                <li>Interactive menu-driven interface</li>
                <li>Saves scan results into report.txt</li>
              </p>
                <a
    href="https://github.com/RealErenYeager/Vuln_Scanner"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-lg border-2 border-green-500 px-5 py-3 text-lg font-semibold text-green-600 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-700"
  >
    View on GitHub →
  </a>
            </div>
          </div>
        </section>
         <section className="bg-white dark:bg-black">
          <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
            <img
              className="w-full transition-opacity duration-300 hover:opacity-70"
              src="./assets/images/red_smb03.jpg"
              alt="dashboard image"
            />
            <div className="mt-4 md:mt-0">
              <h3 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                RedSMB – SMB Enumeration & Secrets Extraction Tool
              </h3>
              <p className="mb-6 text-xl font-light text-gray-500 dark:text-gray-400 lg:text-2xl">
                <li>
                  A Python-based penetration testing tool for automating SMB share enumeration, suspicious file inspection, and
secrets discovery.
                </li>
                <li>Checks if SMB port 445 is open</li>
                <li>Supports authenticated SMB login, including guest access</li>
                <li>Enumerates non-hidden SMB shares</li>
                <li>Scans files with suspicious extensions such as .txt, .ps1, and .bat</li>
                <li>Detects hardcoded secrets using customizable regex patterns</li>
                <li>Exports findings in a clean, easy-to-read JSON format</li>
              </p>
                <a
    href="https://github.com/RealErenYeager/RedSMB"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-lg border-2 border-green-500 px-5 py-3 text-lg font-semibold text-green-600 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-700"
  >
    View on GitHub →
  </a>
            </div>
          </div>
        </section>
         <section className="bg-white dark:bg-black">
          <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
            <img
              className="w-full transition-opacity duration-300 hover:opacity-70"
              src="./assets/images/img04.png"
              alt="dashboard image"
            />
            <div className="mt-4 md:mt-0">
              <h3 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                House Rental Management System (RentHub):
              </h3>
              <p className="mb-6 text-xl font-light text-gray-500 dark:text-gray-400 lg:text-2xl">
                <li>
                  Developed a full-stack rental property management system with multi-user functionality (Admin, Owner, Tenant).
Used this project as a base to practice identifying and fixing common web security vulnerabilities.
                </li>
                <li>Role-based modules for Admin, Owner, and Tenant.</li>
                <li>Property listing, booking, and tenant management.</li>
                <li>Review and rating system.</li>
                <li>File/photo upload for property images.</li>
                <li>Owner–Tenant chat functionality.</li>
                <li>Admin dashboard for monitoring listings and users.</li>
              </p>
               <a
    href="https://github.com/RealErenYeager/RentHub"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-lg border-2 border-green-500 px-5 py-3 text-lg font-semibold text-green-600 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-700"
  >
    View on GitHub →
  </a>
            </div>
          </div>
        </section>
        {/* #### CONTACT SECTION #### */}
        <section id="contact" className="bg-white transition-all duration-300 hover:scale-105 dark:bg-black">
          <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
            <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Hire Me or Send me a Message
            </h2>
            <p className="mb-8 text-center text-xl font-light text-gray-500 dark:text-gray-400 lg:mb-16 lg:text-2xl">
              Protect your digital assets and maintain trust with
              proactive security testing.
            </p>
            <form
  action="https://getform.io/f/avrmknwa"
  method="POST"
  className="space-y-8"
>
  <div>
    <label
      htmlFor="name"
      className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Your name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full  border-4 border-green-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-green-600 dark:bg-black dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light"
      placeholder="John Doe"
      required
    />
  </div>

  <div>
    <label
      htmlFor="email"
      className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Your email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full  border-4 border-green-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-green-600 dark:bg-black dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light"
      placeholder="name@company.com"
      required
    />
  </div>

  <div>
    <label
      htmlFor="subject"
      className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Subject
    </label>
    <input
      type="text"
      id="subject"
      name="subject"
      className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full  border-4 border-green-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-green-600 dark:bg-black dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light"
      placeholder="Let us know how we can help you"
      required
    />
  </div>

  <div className="sm:col-span-2">
    <label
      htmlFor="message"
      className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
    >
      Your message
    </label>
    <textarea
      id="message"
      name="message"
      rows={6}
      className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full  border-4 border-green-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-green-600 dark:bg-black dark:text-white dark:placeholder-gray-400"
      placeholder="Leave a comment..."
    ></textarea>
  </div>

  <button
    type="submit"
    className="text-lx rounded-none border-2 border-green-600 bg-green-600 px-5 py-3 text-center font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 dark:border-green-600 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 sm:w-fit"
  >
    Send message
  </button>
</form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
