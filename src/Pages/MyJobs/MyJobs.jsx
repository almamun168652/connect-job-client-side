import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyJobs = () => {

    const { user , loading } = useContext(AuthContext)

    const { data=[], isLoading } = useQuery({
        queryKey:  ['myJobs'],
        queryFn: async () => {
            if (user?.email) {
                const data = await fetch(`http://localhost:5000/jobs/${user?.email}`)
                return await data.json();
            }
        } ,
        enabled: !loading && !!user?.email
    })

    if (isLoading == true) {
        return <div className="flex justify-center items-center h-[40vh]">
            <span className="loading loading-lg loading-spinner text-[#152475]"></span>
        </div>
    }

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/jobs/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    // } , [user?.email])


    return (
        <div>
           {data.length}
        </div>
    );
};

export default MyJobs;