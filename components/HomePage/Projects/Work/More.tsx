import Link from 'next/link'
function More(){
  return(
    <div className="flex justify-center z-10">
      <Link href="/projects">
        <h4 className="text-3xl underline">
          View More
        </h4>
      </Link>
    </div>
  )
}

export default More;