
const ContactUs = () => {
    return (
        <div className="w-full flex justify-center items-center mt-20 mb-20 bg-[#FCFCFC]">
            <div className="h-[450px] w-[350px] bg-white p-8 shadow-lg rounded-lg">
                <form className="flex flex-col space-y-4">
                    <h1 className="text-2xl font-bold text-center">Contact Us</h1>

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                    ></textarea>

                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
