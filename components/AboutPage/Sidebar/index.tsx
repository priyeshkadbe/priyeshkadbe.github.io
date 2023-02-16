import Image from "next/image";
function Sidebar(){
  return(
    
      <div className="hidden   md:flex   flex-col gap-y-4">
       <Image src="/public/images/profile.jpeg" alt="profile" width={30} height={30} />
       <ul className="">
        <li className="py-2 text-md">Intro</li>
        <li className="py-2 text-md">Experience</li>
        <li className="py-2 text-md">Capabilities</li>
        <li className="py-2 text-md">Interests</li>
       </ul >
    
    </div>
  )
}

export default Sidebar;