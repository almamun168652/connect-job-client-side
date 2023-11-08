import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const Blogs = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-4 mb-14">
            <SectionTitle title="Your Ask? Our Answer."></SectionTitle>
            <div>
                <div className="collapse collapse-plus bg-sky-300">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-md md:text-xl text-[#152475] font-bold">
                        What is an access token and refresh token? How do they work and where should we
                        store them on the client-side?

                    </div>
                    <div className="collapse-content">
                        <p>An access token and refresh token are like keys to a secure digital fortress. The access token is the main key that grants temporary access to a users resources, like data or services, after successful authentication. It is like a ticket to a concert that lets you in for a limited time.
                            The refresh token, on the other hand, is like a backstage pass. It iss used to request a new access token once the current one expires. So, when your concert ticket access token expires, you can use the backstage pass refresh token to get a new ticket without waiting in line or re-entering the venue. <br />
                            Storing these tokens on the client-side is a bit like keeping your concert tickets and backstage pass in a secure wallet. The access token can be stored in a more accessible, but still secure, location on the client, like a session cookie. The refresh token, however, should be stored in a highly secure and protected location, such as an HTTP-only cookie or a secure storage mechanism, as it is a powerful key that needs extra protection.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-sky-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-md md:text-xl font-bold text-[#152475]">
                        What is express js? What is Nest JS?
                    </div>
                    <div className="collapse-content ">
                        <p>Express.js is like a nimble messenger, it is a minimalist web application framework for Node.js that simplifies building web applications and APIs. It focuses on speed and flexibility, allowing developers to quickly create web services with less complexity.
                            <br />
                            NestJS, on the other hand, is like an organized beehive. It is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. NestJS provides a structured and opinionated approach to application architecture, making it easier to manage large codebases and work with TypeScript. It is like having a well-organized hive of bees working together harmoniously to build robust applications.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-sky-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-md md:text-xl font-bold text-[#152475]">
                        Explain your code?
                    </div>
                    <div className="collapse-content">
                        <p>The name of this project is Connect-Job, the Connet-Job website is a job research site,
                            Here the user can find a job, and apply for a job.
                            I have used React JS as a javascript framework here, tailwind as a stylesheet framework,
                            And I used mongodb with express on the back end.
                            <br />
                            Google Firebase for user authentication is very popular, I have used Firebase for user authentication.
                            <br />
                            I used Tanstack-Query to fetch data from the backend,
                            And to secure API data, used JWT . Its fullmeaning Json Web Token.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;