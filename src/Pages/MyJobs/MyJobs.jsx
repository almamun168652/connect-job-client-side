import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyJobs = () => {

    const { user , loading } = useContext(AuthContext)

    const { data=[], isLoading } = useQuery({

        queryKey:  ['abcd'],
        
        queryFn: async () => {
            if (user?.email) {
                const data = await fetch(`http://localhost:5000/jobs/${user?.email}`)
                return await data.json();
            }
        } ,
        enabled: !loading && !!user?.email
    })

    console.log(data);

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/jobs/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    // } , [user?.email])


    return (
        <div>
            My Jobs
        </div>
    );
};

export default MyJobs;