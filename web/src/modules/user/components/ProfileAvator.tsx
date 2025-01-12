export function ProfileAvator() {
    
    
    
    return (
        <div className="flex items-center">
            <img
                className="h-10 w-10 rounded-full"
                src="https://randomuser.me/api/portraits"
                alt="profile"
            />
            <span className="ml-2">User</span>
        </div>
    )
}