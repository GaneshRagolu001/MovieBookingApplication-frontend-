const Footer = () => {
    return (
        <footer className=" border-t border-[#8F98AA] py-6 mt-10 h-[35vh]">
            <div className="container mx-auto flex flex-col items-center text-center gap-3">
                <p className="text-lg font-semibold">Cine Seat</p>
                <p className="text-sm text-gray-400">Your ultimate movie destination</p>

                <div className="flex space-x-6 mt-4">
                    <div>
                        <div className="flex justify-center">
                            <img src="https://img.icons8.com/?size=100&id=WI60cLQ7XN0Q&format=png&color=000000" alt="ig" className="h-5 w-5 rounded-full" />
                        </div>
                        <a href="#" className="hover:text-blue-400 text-xs">Facebook</a>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <img src="https://img.icons8.com/?size=100&id=ZOFC5nSr215Y&format=png&color=000000" alt="ig" className="h-5 w-5 rounded-full" />
                        </div>
                        <a href="#" className="hover:text-blue-400 text-xs">Instagram</a>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <img src="https://img.icons8.com/?size=100&id=zWrz2bjEiP4D&format=png&color=000000" alt="ig" className="h-5 w-5 rounded-full" />
                        </div>
                        <a href="#" className="hover:text-blue-400 text-xs">Twitter</a>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <img src="https://img.icons8.com/?size=100&id=NgVx6SS0Wbjb&format=png&color=000000" alt="ig" className="h-5 w-5 rounded-full" />
                        </div>
                        <a href="#" className="hover:text-blue-400 text-xs">Youtube</a>
                    </div>
                </div>

                <div className="mt-4 text-gray-500 text-xs">
                    © {new Date().getFullYear()} CineSeat. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
