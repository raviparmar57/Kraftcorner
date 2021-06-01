import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full pt-12 pb-4 bg-gray-50 px-4 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between ">
                    <div className="text-white">
                        <h3 className="pb-4 font-2xl font-bold uppercase">Contact us:</h3>
                        <p>Call: +91-75882-32612</p>
                        <p>Address: Mahadevapura, Bangalore-560048</p>
                        <p>Email: kraftkorner@gmail.com</p>
                    </div>
                    <div className="flex space-x-4 mt-8 lg:mt-0">
                        <img className="w-8 h-8" src="/images/facebook.png" alt="facebook" />
                        <img className="w-8 h-8" src="/images/twitter.png" alt="facebook" />
                        <img className="w-8 h-8" src="/images/linkedin.png" alt="facebook" />
                        <img className="w-8 h-8" src="/images/google-plus.png" alt="facebook" />
                    </div>
                </div>
                <div className="text-white pt-8 text-xs font-light">Copyright kraftkorner © 2021, All Rights Reserved.</div>
            </div>
        </footer>
    )
}
