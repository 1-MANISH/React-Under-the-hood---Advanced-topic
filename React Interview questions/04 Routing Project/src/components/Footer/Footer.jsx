import { Link } from "react-router";
export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/1-MANISH"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        <a href="https://manish-next-js-portfoliofrontend.vercel.app/" className="hover:underline">
                            manishpatidar
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                           <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="2em"
                            height="2em"
                            >
                            <path
                                fill="currentColor"
                                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                            ></path>
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 21"
                            width="2em"
                            height="2em"
                            >
                            <path
                                fill="currentColor"
                                d="M13.93 11.4a1.23 1.23 0 1 1-1.225-1.331c.683.029 1.225.59 1.225 1.277l-.001.056v-.003zm-5.604-1.33a1.338 1.338 0 0 0-.005 2.664h.005a1.28 1.28 0 0 0 1.225-1.277l-.001-.056v.003l.002-.067c0-.685-.541-1.243-1.219-1.269h-.002zM21 2.472V24c-3.023-2.672-2.057-1.787-5.568-5.052l.636 2.22H2.459a2.467 2.467 0 0 1-2.46-2.466V2.466A2.466 2.466 0 0 1 2.458 0h16.081a2.467 2.467 0 0 1 2.46 2.466zm-3.42 11.376a16 16 0 0 0-1.77-7.086l.042.09a5.9 5.9 0 0 0-3.358-1.259l-.014-.001l-.168.192c1.15.312 2.15.837 3.002 1.535l-.014-.011a10.1 10.1 0 0 0-4.839-1.222c-1.493 0-2.911.321-4.189.898l.064-.026c-.444.204-.708.35-.708.35a8 8 0 0 1 3.1-1.56l.056-.012l-.12-.144A5.9 5.9 0 0 0 5.28 6.861l.012-.009c-1.052 2.036-1.686 4.437-1.728 6.982v.014a4.35 4.35 0 0 0 3.666 1.824h-.006s.444-.54.804-.996a3.75 3.75 0 0 1-2.093-1.406l-.007-.01c.176.124.468.284.49.3a8.64 8.64 0 0 0 4.188 1.067a8.7 8.7 0 0 0 3.36-.668l-.058.021c.528-.202.982-.44 1.404-.723l-.025.016a3.8 3.8 0 0 1-2.144 1.423l-.026.005c.36.456.792.972.792.972l.111.001a4.38 4.38 0 0 0 3.552-1.813l.009-.013z"
                            ></path>
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="2em"
                            height="2em"
                            >
                            <path
                                fill="currentColor"
                                d="M16 3.538a6.5 6.5 0 0 1-1.884.516a3.3 3.3 0 0 0 1.444-1.816a6.6 6.6 0 0 1-2.084.797a3.28 3.28 0 0 0-2.397-1.034a3.28 3.28 0 0 0-3.197 4.028a9.32 9.32 0 0 1-6.766-3.431a3.284 3.284 0 0 0 1.015 4.381A3.3 3.3 0 0 1 .643 6.57v.041A3.28 3.28 0 0 0 3.277 9.83a3.3 3.3 0 0 1-1.485.057a3.29 3.29 0 0 0 3.066 2.281a6.6 6.6 0 0 1-4.862 1.359a9.3 9.3 0 0 0 5.034 1.475c6.037 0 9.341-5.003 9.341-9.341q0-.215-.009-.425a6.6 6.6 0 0 0 1.637-1.697z"
                            ></path>
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                             <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                width="2em"
                                height="2em"
                                >
                                <path
                                    fill="currentColor"
                                    d="M8 .198a8 8 0 0 0-2.529 15.591c.4.074.547-.174.547-.385c0-.191-.008-.821-.011-1.489c-2.226.484-2.695-.944-2.695-.944c-.364-.925-.888-1.171-.888-1.171c-.726-.497.055-.486.055-.486c.803.056 1.226.824 1.226.824c.714 1.223 1.872.869 2.328.665c.072-.517.279-.87.508-1.07c-1.777-.202-3.645-.888-3.645-3.954c0-.873.313-1.587.824-2.147c-.083-.202-.357-1.015.077-2.117c0 0 .672-.215 2.201.82A7.7 7.7 0 0 1 8 4.066c.68.003 1.365.092 2.004.269c1.527-1.035 2.198-.82 2.198-.82c.435 1.102.162 1.916.079 2.117c.513.56.823 1.274.823 2.147c0 3.073-1.872 3.749-3.653 3.947c.287.248.543.735.543 1.481c0 1.07-.009 1.932-.009 2.195c0 .213.144.462.55.384A8 8 0 0 0 8.001.196z"
                                ></path>
                                </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 15 15"
                            width="2em"
                            height="2em"
                            >
                            <path
                                fill="currentColor"
                                d="M4.044.842A7.5 7.5 0 0 0 .092 6.32h.435c2.805-.065 5.004-.308 6.8-.858c-.78-1.383-1.732-2.74-2.874-4.12l-.001-.001zM.002 7.32L0 7.5c0 2.017.796 3.848 2.091 5.196l.161-.324l.03-.052C3.94 9.798 5.816 8.298 7.914 7.625q.213-.069.43-.126a22 22 0 0 0-.537-1.14c-1.965.633-4.327.893-7.263.96H.003"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M2.86 13.393A7.47 7.47 0 0 0 7.5 15c.893 0 1.75-.156 2.543-.442v-.72c-.244-1.935-.673-3.71-1.318-5.404q-.255.063-.506.143c-1.822.585-3.525 1.903-5.085 4.268zm8.183.719a7.51 7.51 0 0 0 3.802-5.086l-.565-.255c-1.626-.478-3.141-.674-4.553-.515c.638 1.72 1.067 3.526 1.312 5.488q.004.03.004.062zm3.941-6.12Q15 7.748 15 7.5a7.47 7.47 0 0 0-1.82-4.898l-.298.329c-1.17 1.423-2.506 2.41-4.13 3.082q.318.635.593 1.284c1.672-.24 3.43-.014 5.251.525l.065.024zm-2.508-6.104A7.47 7.47 0 0 0 7.5 0c-.878 0-1.72.15-2.503.428l.228.278c1.22 1.473 2.232 2.929 3.058 4.418c1.543-.623 2.766-1.534 3.834-2.837l.015-.018z"
                            ></path>
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
