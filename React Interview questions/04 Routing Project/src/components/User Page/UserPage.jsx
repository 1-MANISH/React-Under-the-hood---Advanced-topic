import { useParams } from "react-router"


function User() {

        const {userId} = useParams()

        return (
                <div className='bg-gray-600 text-white text-3xl p-4 h-240'>User: {userId}</div>
        )
}

export default User