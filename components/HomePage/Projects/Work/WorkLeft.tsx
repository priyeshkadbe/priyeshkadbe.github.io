import { WorkProps } from './WorkRight'

export function WorkLeft() {
  let translateY = Math.max(0, 50 - 1 * 3 * 50)

  // if (progress > 0.85) {
  //   translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)
  // }
  return (
    <div
      className="flex h-[30vh] flex-col items-center justify-center text-3xl md:h-auto md:text-3xl"
      // style={{ transform: `translateY(${translateY}px)` }}
    >
      
      <h1 className=" mx-4 max-w-sm flex-wrap font-bold text-4xl md:max-w-md text-center font-[aeonikMedium] my-6 md:text-7xl tracking-wider" >
          HERE ARE A FEW OF MY FAVORITE PROJECTS
        </h1>
    </div>
  )
}
