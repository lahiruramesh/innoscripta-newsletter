export function Header() {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">
                News Letter App
            </div>
            <div className="flex items-center">
                <div className="mr-4">
                    <span>Profile</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                    <span className="text-white">U</span>
                </div>
            </div>
        </header>
    );
}