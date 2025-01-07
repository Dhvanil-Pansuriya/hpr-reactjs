import React from 'react'

const Logo = () => {
    return (
        <div>
            <a
                href="/"
                aria-label="Company"
                title="Company"
                className="inline-flex items-center"
            >
                <svg
                    className="w-8 text-secondary"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    stroke="currentColor"
                    fill="none"
                >
                    <rect x="3" y="1" width="7" height="12" />
                    <rect x="3" y="17" width="7" height="6" />
                    <rect x="14" y="1" width="7" height="6" />
                    <rect x="14" y="11" width="7" height="12" />
                </svg>
                <span className="ml-2 text-2xl font-bold tracking-wide text-secondary uppercase">
                    HPR
                </span>
            </a>
        </div>
    )
}

export default Logo
